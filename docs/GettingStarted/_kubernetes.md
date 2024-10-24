# Deploy on kubernate

This section details the deployment process of the application on a Kubernetes cluster. The configuration described here was tested on a Raspberry Pi cluster.

## Kubernetes Setup

### Install k3s

To install k3s, run the following commands:

```
apt update
curl -sfL https://get.k3s.io | sh -
```

### Retrieve Node Token

To get the node token, execute:

```shell
cat /var/lib/rancher/k3s/server/node-token` 
```

### Install Ingress

Apply the Ingress controller:

```shell
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.9.5/deploy/static/provider/cloud/deploy.yaml
```

### Install Cert Manager

Deploy the Cert Manager:

```shell
kubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/v1.13.3/cert-manager.yaml
```

- Troubleshooting Certificates:
  - List all certificates:
  
  ```shell
  sudo kubectl get ClusterIssuers,Certificates,CertificateRequests,Orders,Challenges --all-namespaces
  ```

  - Check details of a specific certificate request (e.g., eve-mapper):

  ```shell
  sudo kubectl describe certificaterequest tls-evemapper-1 -n evemapper
  ```

### Install Portainer (optional)

To install Portainer, execute:

```shell
kubectl apply -n portainer -f https://raw.githubusercontent.com/portainer/k8s/master/deploy/manifests/portainer/portainer.yaml
kubectl apply -f https://downloads.portainer.io/ce2-19/portainer-agent-k8s-lb.yaml
```

## Configuration

The configuration is divided across multiple files.

### Configure Environment Variables

All service use a same ConfigMap with in **deploys/envs.yaml [ConfigMap]**:
- `DOMAIN`:  your domain (ex: map.mycorp.com)
- `POSTGRES_DB`: your db name
- `POSTGRESQL_USERNAME`: your db user
- `POSTGRESQL_PASSWORD`: your db password
- `POSTGRESQL_DATABASE`: same as POSTGRES_DB
- `EveSSO__ClientId`: your client ID given from CCP
- `EveSSO__Secret`: your secret key given from CCP
- `ConnectionStrings__DatabaseConnection`: `server=<cluster-local-ip>;port=31252;database=<same as POSTGRES_DB>;User Id=<same as POSTGRESQL_USERNAME>;Password=<same as POSTGRESQL_PASSWORD>`
- `ConnectionStrings__RedisConnection`: `<cluster-local-ip>:31253`

Remarks:
- cluster-local-ip refers to the local IP of the master node in your network. Typically, this is not an internet-facing IP. For instance, it could be 192.168.1.50 (master node).
- Sensitive values are stored as Secrets and must be base64 encoded.

### Configure Certificates

Environment values aren't directly usable in deployment files. Modify these manually in relevant configuration files.

In **deploys/base.yaml [Certificate-issuer]**:
- `email`: Provide a valid email to receive notifications regarding certificate expiry.

In **deploys/base.yaml [Certificate]**:
- `commonName`:  Set it to your subdomain (should match DOMAIN in environment variables).
```
    ex:
        commonName: map.mycorp.com
```

- `dnsNames`: List all DNS names you'll use, including commonName.
  
```
  ex:
    - map.mycorp.com
    - mappper.mycorp.com
```

### Configure Ingress

In **deploys/ingress.yaml [evemapper-ingress]**:  replace [your SUB/DOMAIN] with your actual subdomain.


### Deployment

Deploy all configurations located in the deploys directory simultaneously:
```shell
kubectl apply -f deploys
```

Note: You might need to run the deployment twice, as some services require the namespace to be created before initialization.

- First run result:
```
namespace/evemapper created
issuer.cert-manager.io/letsencrypt-evemapper created
certificate.cert-manager.io/tls-evemapper created
configmap/evemapper-config-map created
secret/evemapper-secrets created
deployment.apps/evemapper-app created
service/evemapper-app-service created
ingress.networking.k8s.io/evemapper-ingress created
Error from server (NotFound): namespaces "evemapper" not found
```

- Second run result:
```
deployment.apps/postgres created
service/postgres-cluster-ip-service created
deployment.apps/redis created
service/redis-cluster-ip-service created
namespace/evemapper unchanged
issuer.cert-manager.io/letsencrypt-evemapper unchanged
certificate.cert-manager.io/tls-evemapper unchanged
configmap/evemapper-config-map unchanged
secret/evemapper-secrets unchanged
deployment.apps/evemapper-app unchanged
service/evemapper-app-service unchanged
ingress.networking.k8s.io/evemapper-ingress unchanged
```

### Update Application & Restart

To redeploy the application, use:

```shell
kubectl rollout restart deployment evemapper-app -n evemapper`
```

This document is structured to provide clear, sequential instructions for deploying your application on a Kubernetes cluster, especially tailored to the Raspberry Pi setup. Let me know if there are other adjustments or additions you'd like!
  