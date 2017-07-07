NGINX_IMAGE=nginx:1.13-alpine

.PHONY: preview
preview:
	docker run -it \
		--rm \
		--volume $(shell pwd)/html:/usr/share/nginx/html \
		--publish 9000:80 \
		$(NGINX_IMAGE)

.PHONY: image
image:
	docker build -t middy:latest .
