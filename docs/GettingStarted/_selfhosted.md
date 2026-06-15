import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Self-Hosted Installation (Binary)

This guide covers installing Eve Wormhole Mapper directly on Linux Debian or Windows without Docker, using the pre-built binaries published on GitHub Releases.

## Requirements

| Component | Minimum version |
|---|---|
| .NET ASP.NET Core Runtime | **10.0** |
| PostgreSQL | **17** |
| Redis | **8** |

:::info Architecture
The published binaries are **framework-dependent** (not self-contained). The .NET 10 **ASP.NET Core Runtime** must be installed on the host — the .NET SDK is not required.
:::

## Installation

<Tabs>
<TabItem value="linux" label="Linux (x64 / ARM)">

### 1. Install .NET 10 ASP.NET Core Runtime

Follow the official Microsoft instructions for your distribution: [https://learn.microsoft.com/dotnet/core/install/linux](https://learn.microsoft.com/dotnet/core/install/linux)

**Debian example:**

```shell
# Add Microsoft package repository
wget https://packages.microsoft.com/config/debian/12/packages-microsoft-prod.deb -O packages-microsoft-prod.deb
sudo dpkg -i packages-microsoft-prod.deb
rm packages-microsoft-prod.deb

# Install the runtime (not the full SDK)
sudo apt-get update
sudo apt-get install -y aspnetcore-runtime-10.0
```

Verify:

```shell
dotnet --info
```

### 2. Install PostgreSQL 17

```shell
sudo apt-get install -y postgresql-17
sudo systemctl enable --now postgresql
```

### 3. Install Redis 8

```shell
sudo apt-get install -y redis-server
sudo systemctl enable --now redis-server
```

### 4. Create a system user

```shell
sudo useradd --system --no-create-home --shell /usr/sbin/nologin whmapper
```

### 5. Download and extract the binary

Download the latest release from [GitHub Releases](https://github.com/pfh59/eve-whmapper/releases/latest).

```shell
# Create installation directory
sudo mkdir -p /opt/whmapper
sudo mkdir -p /opt/whmapper/Logs

# Download the binary (replace vX.Y.Z with the actual version)
wget https://github.com/pfh59/eve-whmapper/releases/download/vX.Y.Z/WHMapper.linux-x64.zip -O /tmp/WHMapper.linux-x64.zip

# For ARM systems, use:
# wget https://github.com/pfh59/eve-whmapper/releases/download/vX.Y.Z/WHMapper.linux-arm.zip -O /tmp/WHMapper.linux-arm.zip

sudo unzip /tmp/WHMapper.linux-x64.zip -d /opt/whmapper
sudo chown -R whmapper:whmapper /opt/whmapper
sudo chmod +x /opt/whmapper/WHMapper
```

### 6. Configure PostgreSQL

```shell
sudo -u postgres psql <<EOF
CREATE USER whmapper WITH PASSWORD 'your_strong_password';
CREATE DATABASE whmapper OWNER whmapper;
GRANT ALL PRIVILEGES ON DATABASE whmapper TO whmapper;
EOF
```

### 7. Configure the application

Create an environment file with your settings:

```shell
sudo nano /etc/whmapper.env
```

```ini title="/etc/whmapper.env"
EveSSO__ClientId=your_ccp_client_id
EveSSO__Secret=your_ccp_secret
ConnectionStrings__DatabaseConnection=server=localhost;port=5432;database=whmapper;User Id=whmapper;Password=your_strong_password
ConnectionStrings__RedisConnection=localhost:6379
Serilog__MinimumLevel__Default=Warning
```

```shell
sudo chmod 600 /etc/whmapper.env
sudo chown whmapper:whmapper /etc/whmapper.env
```

### 8. Create a systemd service

```shell
sudo nano /etc/systemd/system/whmapper.service
```

```ini title="/etc/systemd/system/whmapper.service"
[Unit]
Description=EVE Wormhole Mapper
After=network.target postgresql.service redis-server.service
Requires=postgresql.service redis-server.service

[Service]
Type=simple
User=whmapper
WorkingDirectory=/opt/whmapper
ExecStart=/opt/whmapper/WHMapper
EnvironmentFile=/etc/whmapper.env
Restart=on-failure
RestartSec=10

[Install]
WantedBy=multi-user.target
```

```shell
sudo systemctl daemon-reload
sudo systemctl enable --now whmapper
sudo systemctl status whmapper
```

The application will start on port **5000** (HTTP) by default when run without a reverse proxy.

### 9. (Optional) Configure nginx as a reverse proxy with HTTPS

```shell
sudo apt-get install -y nginx certbot python3-certbot-nginx
```

```nginx title="/etc/nginx/sites-available/whmapper"
server {
    listen 80;
    server_name your.domain.com;

    location / {
        proxy_pass http://127.0.0.1:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```shell
sudo ln -s /etc/nginx/sites-available/whmapper /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx

# Obtain a Let's Encrypt certificate
sudo certbot --nginx -d your.domain.com
```

Add these variables to `/etc/whmapper.env` to enforce HTTPS:

```ini
ASPNETCORE_URLS=http://127.0.0.1:5000
```

Restart the service:

```shell
sudo systemctl restart whmapper
```

</TabItem>
<TabItem value="windows" label="Windows (x64)">

### 1. Install .NET 10 ASP.NET Core Runtime

Download and install the **ASP.NET Core Runtime 10.0** from the official page:
[https://dotnet.microsoft.com/download/dotnet/10.0](https://dotnet.microsoft.com/download/dotnet/10.0)

Select **"ASP.NET Core Runtime"** (not the SDK).

Verify in PowerShell:

```powershell
dotnet --info
```

### 2. Install PostgreSQL 17

Download the Windows installer from [www.enterprisedb.com/downloads/postgres-postgresql-downloads](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads).

During setup:
- Note the port (default: **5432**)
- Set a strong password for the `postgres` superuser

Alternatively, with Chocolatey:

```powershell
choco install postgresql17 --params '/Password:your_strong_password'
```

### 3. Install Redis

Redis does not have an official Windows binary. Use **[Memurai](https://www.memurai.com/)** (Redis-compatible for Windows):

Download and install from [www.memurai.com](https://www.memurai.com/get-memurai). It runs as a Windows service on port **6379** by default.

Alternatively, use [Redis on Windows via WSL2](https://redis.io/docs/getting-started/installation/install-redis-on-windows/).

### 4. Download and extract the binary

Download the latest release from [GitHub Releases](https://github.com/pfh59/eve-whmapper/releases/latest).

```powershell
# Create installation directory
New-Item -ItemType Directory -Path "C:\whmapper" -Force
New-Item -ItemType Directory -Path "C:\whmapper\Logs" -Force

# Download (replace vX.Y.Z with the actual version)
Invoke-WebRequest -Uri "https://github.com/pfh59/eve-whmapper/releases/download/vX.Y.Z/WHMapper.win-x64.zip" `
    -OutFile "$env:TEMP\WHMapper.win-x64.zip"

Expand-Archive -Path "$env:TEMP\WHMapper.win-x64.zip" -DestinationPath "C:\whmapper" -Force
```

### 5. Configure PostgreSQL

Open **pgAdmin** or **psql** and run:

```sql
CREATE USER whmapper WITH PASSWORD 'your_strong_password';
CREATE DATABASE whmapper OWNER whmapper;
GRANT ALL PRIVILEGES ON DATABASE whmapper TO whmapper;
```

Or via psql in PowerShell:

```powershell
& "C:\Program Files\PostgreSQL\17\bin\psql.exe" -U postgres -c "CREATE USER whmapper WITH PASSWORD 'your_strong_password';"
& "C:\Program Files\PostgreSQL\17\bin\psql.exe" -U postgres -c "CREATE DATABASE whmapper OWNER whmapper;"
```

### 6. Configure the application

Create a configuration file next to the binary:

```powershell
New-Item -Path "C:\whmapper\appsettings.Production.json" -ItemType File
```

Edit `C:\whmapper\appsettings.Production.json`:

```json title="C:\whmapper\appsettings.Production.json"
{
  "EveSSO": {
    "ClientId": "your_ccp_client_id",
    "Secret": "your_ccp_secret"
  },
  "ConnectionStrings": {
    "DatabaseConnection": "server=localhost;port=5432;database=whmapper;User Id=whmapper;Password=your_strong_password",
    "RedisConnection": "localhost:6379"
  },
  "Serilog": {
    "MinimumLevel": {
      "Default": "Warning"
    }
  }
}
```

:::tip Environment variables as alternative
You can also configure the application using system environment variables instead of a file. Environment variable names use `__` as separator (e.g., `EveSSO__ClientId`).
:::

### 7. Register as a Windows Service

Open PowerShell **as Administrator**:

```powershell
# Set the ASPNETCORE_ENVIRONMENT so the Production config is loaded
[System.Environment]::SetEnvironmentVariable("ASPNETCORE_ENVIRONMENT", "Production", "Machine")

# Register the service
sc.exe create "WHMapper" `
    binPath= "C:\whmapper\WHMapper.exe" `
    start= auto `
    DisplayName= "EVE Wormhole Mapper"

sc.exe description "WHMapper" "EVE Wormhole Mapper - self-hosted binary"

# Start the service
sc.exe start "WHMapper"
```

Check the service status:

```powershell
sc.exe query "WHMapper"
```

Logs are written to `C:\whmapper\Logs\`.

### 8. (Optional) Configure nginx as a reverse proxy with HTTPS

Download nginx for Windows from [nginx.org/en/download.html](https://nginx.org/en/download.html) and extract it to `C:\nginx`.

Edit `C:\nginx\conf\nginx.conf`:

```nginx title="C:\nginx\conf\nginx.conf"
worker_processes 1;

events { worker_connections 1024; }

http {
    server {
        listen 80;
        server_name your.domain.com;

        location / {
            proxy_pass http://127.0.0.1:5000;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection "upgrade";
            proxy_set_header Host $host;
            proxy_set_header X-Forwarded-Proto $scheme;
        }
    }

    server {
        listen 443 ssl;
        server_name your.domain.com;

        ssl_certificate     C:/nginx/certs/fullchain.pem;
        ssl_certificate_key C:/nginx/certs/privkey.pem;

        location / {
            proxy_pass http://127.0.0.1:5000;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection "upgrade";
            proxy_set_header Host $host;
            proxy_set_header X-Forwarded-Proto https;
        }
    }
}
```

Register nginx as a Windows service using [NSSM](https://nssm.cc/):

```powershell
nssm install nginx "C:\nginx\nginx.exe"
nssm start nginx
```

Place your SSL certificates in `C:\nginx\certs\`.

Add to `appsettings.Production.json` to bind only on localhost:

```json
{
  "http_port": 5000,
  "https_port": null
}
```

Restart the WHMapper service:

```powershell
sc.exe stop "WHMapper"
sc.exe start "WHMapper"
```

</TabItem>
</Tabs>

---

## Configuration Reference

| Key | Environment variable | Default | Description |
|---|---|---|---|
| `EveSSO.ClientId` | `EveSSO__ClientId` | *(none)* | CCP SSO Client ID |
| `EveSSO.Secret` | `EveSSO__Secret` | *(none)* | CCP SSO Secret |
| `ConnectionStrings.DatabaseConnection` | `ConnectionStrings__DatabaseConnection` | *(none)* | PostgreSQL connection string |
| `ConnectionStrings.RedisConnection` | `ConnectionStrings__RedisConnection` | *(none)* | Redis connection string |
| `http_port` | `http_port` | `80` | HTTP listening port |
| `https_port` | `https_port` | `443` | HTTPS listening port |
| `Instances.SingleTenantMode` | `Instances__SingleTenantMode` | `false` | Restrict to a single EVE corporation |
| `DisableSignalRCertificateValidation` | `DisableSignalRCertificateValidation` | `false` | Disable TLS validation for SignalR (local/dev only) |
| `Serilog.MinimumLevel.Default` | `Serilog__MinimumLevel__Default` | `Warning` | Log level |

## Updating

To update to a newer version:

1. Download the new binary from [GitHub Releases](https://github.com/pfh59/eve-whmapper/releases/latest).
2. Stop the service.
3. Replace the files in the installation directory (keep your `appsettings.Production.json` or environment file).
4. Start the service. Database migrations are applied automatically on startup.
