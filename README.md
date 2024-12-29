# QR Generator
A containerized application that can generate qr codes.

## Usage

### Create Docker Image

```sh
docker build -t qr-code-generator .
```

### Run in a Container

```sh
docker run -d -p 8080:80 qr-code-generator
```
