# middy

Client web-interface for a simple LMS.

### Development

Preview the application at http://localhost:9000/.

```
make preview
```

### Build

Build the image for the application.

```
docker build -t middy:latest .
```

### Deploy

Run the application container.

```
docker run --name middy -dp 8000:80 middy:latest
```
