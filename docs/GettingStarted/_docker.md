
# Deploy with Docker & Compose

The Docker install runs WHMapper, PostgreSQL, Redis and an HTTPS reverse proxy with Docker Compose. An init script asks for your settings and prepares everything.

## Server

We recommend using a Linux server with the [Debian](https://www.debian.org/index.en.html) OS for optimal performance and support. If you prefer to use a different operating system, you will need to write your own init script or manually configure the necessary files (see the list below).

## Docker

Install Docker with Compose first:

- [Linux (Docker Engine)](https://docs.docker.com/engine/install/debian/)
- [Windows](https://docs.docker.com/desktop/install/windows-install/)
- [OS X](https://docs.docker.com/desktop/install/mac-install/)

### Get the Compose files

1. Navigate to your desired installation location.
2. Clone the WHMapper repository (we recommend `/opt/` on Linux).

<details>
<summary>Linux</summary>

```shell
sudo git clone https://github.com/pfh59/eve-whmapper.git
cd eve-whmapper/deploy/docker
```
</details>

<details>
<summary>Windows</summary>

```powershell
git clone https://github.com/pfh59/eve-whmapper.git
cd eve-whmapper/deploy/docker
```
</details>

### Configuration

Run the init script (as root on Linux, as Administrator on Windows) and answer its questions:

<details>
<summary>Linux</summary>

```shell
sudo ./init.sh
```
</details>

<details>
<summary>Windows</summary>

```powershell
./init.ps1
```
</details>

The script:
- writes your answers into `docker-compose.yml`, `haproxy.cfg` and `nginx.conf`;
- creates the Docker containers;
- gets a certificate for your domain, so WHMapper is served over HTTPS.

## Start and stop

To manage the Docker containers, use the provided scripts:

<details>
<summary>Linux</summary>

- **To Start all containers**: Use the start.sh script as a sudo or root user.

```shell
sudo ./start.sh
```

- **To Stop all containers**: Use the stop.sh script as a sudo or root user.

```shell
sudo ./stop.sh
```
</details>

<details>
<summary>Windows</summary>

- **To Start all containers**: Use the start.ps1 script as an Administrator.

```powershell
./start.ps1
```

- **To Stop all containers**: Use the stop.ps1 script as an Administrator.

```powershell
./stop.ps1
```
</details>