# QR Generator
A containerized browser application that can generate qr codes.

## Usage

You can use docker image directly from dockerhub, or you can create the image from the dockerfile.

### Get Image from Dockerhub

For simple use, just run this command. This will run a container with the image from dockerhub.

```sh
docker run -d -p 8080:80 enesbaytekin/qr-generator:latest
```

Checkout all the versions of the image from [here](https://hub.docker.com/r/enesbaytekin/qr-generator/tags).

---

### Create Image from Dockerfile (optional)

If you want to create the image by yourself, clone the repo and run this command.

```sh
docker build -t qr-generator .
```

Then, run a container using this image.

```sh
docker run -d -p 8080:80 qr-generator
```

---

**Notes:**
Some parameters and their meanings in docker run:

`-d`: Runs the container in background.

`-p 8080:80`: Directs the host port 8080 to container port 80. You can use any host port of your choice.
