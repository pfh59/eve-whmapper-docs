
# Deploy with Docker & Compose

Deploying the Eve Wormhole Mapper using Docker and Compose is straightforward, especially if you follow these steps for your server and Docker setup.

## Server

We recommend using a Linux server with the [Debian](https://www.debian.org/index.en.html) OS for optimal performance and support. If you prefer to use a different operating system, you will need to write your own init script or manually configure the necessary files (see the list below).

## Docker

Before proceeding, ensure Docker is installed on your system. Follow the appropriate instructions for your operating system:

- [Linux](https://docs.docker.com/desktop/install/linux-install/)
- [Windows](https://docs.docker.com/desktop/install/windows-install/)
- [OS X](https://docs.docker.com/desktop/install/mac-install/)

### Get Docker-Compose Template

1. Navigate to your desired installation location.
2. Clone the Eve-Whmapper repository. It is recommended to install in `/opt/`.

```shell
sudo git clone https://github.com/pfh59/eve-whmapper.git
cd eve-whmapper/deploy/docker
```

### Configuration

Configuring Eve-Whmapper is simplified through the initialization script. Run the following script as a sudo or root user and follow the on-screen instructions:

```shell
sudo ./init.sh
```

This script automatically :
- Updates all the configurations (docker-compose.yml, haproxy.cfg, nginx.conf) from your response,
- Initialize all docker container.
- Create,add and use a strong certifcate to use HTTPS with your domain
  
## Start and stop

To manage the Docker containers, use the provided scripts:

- **To Start all container** : Use the start.sh script as a sudo or root user.

```shell
sudo ./start.sh
```

- **To Stop all container** :  use the script start.sh as a sudo user or root user

```shell
sudo ./stop.sh
```