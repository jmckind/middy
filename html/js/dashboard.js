function DashboardController($scope, $sce, $http) {
  var ctrl = this;

  ctrl.API_URL = 'http://localhost:4778/v1/resources';
  ctrl.resources = [];
  ctrl.resource = {};

  ctrl.renderSafeContent = function(resource) {
    var result = resource.content;
    if (resource.type.toLowerCase() === 'markdown') {
      result = markdown.toHTML(resource.content);
    } else if (resource.type.toLowerCase() === 'link') {
      result = '<a href="' + resource.content + '" target="_blank">' + resource.content + '</a>';
    } else if (resource.type.toLowerCase() === 'plain text') {
      result = '<pre><code>' + resource.content + '</code></pre>';
    }
    return $sce.trustAsHtml(result);
  };

  ctrl.updateResources = function() {
    $http.get(ctrl.API_URL + '?active=true')
      .then(function (response) {
        ctrl.resources = response.data.resources;
      }, function (error) {
        console.log('Unable to retrieve resources: ' + error.message);
      });
  };

  ctrl.preview = function(id) {
    $http.get(ctrl.API_URL + '/' + id)
      .then(function (response) {
        ctrl.detail = response.data.resource;
        ctrl.detail.content = ctrl.renderSafeContent(ctrl.detail);
        $('#detailModal').modal({});
      }, function (error) {
        console.log('Unable to retrieve resource: ' + error.message);
      });
  };
}

angular.module('middyApp').component('dashboardController', {
  templateUrl: '../dashboard.html',
  controller: DashboardController
});
