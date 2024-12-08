"use strict";(self.webpackChunkeve_whmapper_docs=self.webpackChunkeve_whmapper_docs||[]).push([[959],{362:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>R,contentTitle:()=>P,default:()=>L,frontMatter:()=>D,metadata:()=>s,toc:()=>_});const s=JSON.parse('{"id":"GettingStarted/installation","title":"Installation","description":"Technologies","source":"@site/docs/GettingStarted/installation.md","sourceDirName":"GettingStarted","slug":"/GettingStarted/installation","permalink":"/eve-whmapper-docs/GettingStarted/installation","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"installation","title":"Installation","sidebar_position":1},"sidebar":"docs","previous":{"title":"Home","permalink":"/eve-whmapper-docs/home"},"next":{"title":"First Start","permalink":"/eve-whmapper-docs/GettingStarted/start"}}');var t=r(4848),i=r(8453),l=r(6540),a=r(4164),o=r(3104),c=r(6347),d=r(205),u=r(7485),h=r(1682),p=r(679);function m(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function x(e){const{values:n,children:r}=e;return(0,l.useMemo)((()=>{const e=n??function(e){return m(e).map((e=>{let{props:{value:n,label:r,attributes:s,default:t}}=e;return{value:n,label:r,attributes:s,default:t}}))}(r);return function(e){const n=(0,h.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function j(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:r}=e;const s=(0,c.W6)(),t=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,u.aZ)(t),(0,l.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(s.location.search);n.set(t,e),s.replace({...s.location,search:n.toString()})}),[t,s])]}function v(e){const{defaultValue:n,queryString:r=!1,groupId:s}=e,t=x(e),[i,a]=(0,l.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!j({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:t}))),[o,c]=g({queryString:r,groupId:s}),[u,h]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,t]=(0,p.Dv)(r);return[s,(0,l.useCallback)((e=>{r&&t.set(e)}),[r,t])]}({groupId:s}),m=(()=>{const e=o??u;return j({value:e,tabValues:t})?e:null})();(0,d.A)((()=>{m&&a(m)}),[m]);return{selectedValue:i,selectValue:(0,l.useCallback)((e=>{if(!j({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);a(e),c(e),h(e)}),[c,h,t]),tabValues:t}}var f=r(2303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:n,block:r,selectedValue:s,selectValue:i,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.a_)(),u=e=>{const n=e.currentTarget,r=c.indexOf(n),t=l[r].value;t!==s&&(d(n),i(t))},h=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;n=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;n=c[r]??c[c.length-1];break}}n?.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},n),children:l.map((e=>{let{value:n,label:r,attributes:i}=e;return(0,t.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>c.push(e),onKeyDown:h,onClick:u,...i,className:(0,a.A)("tabs__item",y.tabItem,i?.className,{"tabs__item--active":s===n}),children:r??n},n)}))})}function k(e){let{lazy:n,children:r,selectedValue:s}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,l.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function S(e){const n=v(e);return(0,t.jsxs)("div",{className:(0,a.A)("tabs-container",y.tabList),children:[(0,t.jsx)(b,{...n,...e}),(0,t.jsx)(k,{...n,...e})]})}function C(e){const n=(0,f.A)();return(0,t.jsx)(S,{...e,children:m(e.children)},String(n))}const w={tabItem:"tabItem_Ymn6"};function I(e){let{children:n,hidden:r,className:s}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,a.A)(w.tabItem,s),hidden:r,children:n})}function T(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"deploy-with-docker--compose",children:"Deploy with Docker & Compose"})}),"\n",(0,t.jsx)(n.p,{children:"Deploying the Eve Wormhole Mapper using Docker and Compose is straightforward, especially if you follow these steps for your server and Docker setup."}),"\n",(0,t.jsx)(n.h2,{id:"server",children:"Server"}),"\n",(0,t.jsxs)(n.p,{children:["We recommend using a Linux server with the ",(0,t.jsx)(n.a,{href:"https://www.debian.org/index.en.html",children:"Debian"})," OS for optimal performance and support. If you prefer to use a different operating system, you will need to write your own init script or manually configure the necessary files (see the list below)."]}),"\n",(0,t.jsx)(n.h2,{id:"docker",children:"Docker"}),"\n",(0,t.jsx)(n.p,{children:"Before proceeding, ensure Docker is installed on your system. Follow the appropriate instructions for your operating system:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.docker.com/desktop/install/linux-install/",children:"Linux"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.docker.com/desktop/install/windows-install/",children:"Windows"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.docker.com/desktop/install/mac-install/",children:"OS X"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"get-docker-compose-template",children:"Get Docker-Compose Template"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Navigate to your desired installation location."}),"\n",(0,t.jsxs)(n.li,{children:["Clone the Eve-Whmapper repository. It is recommended to install in ",(0,t.jsx)(n.code,{children:"/opt/"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"sudo git clone https://github.com/pfh59/eve-whmapper.git\ncd eve-whmapper/deploy/docker\n"})}),"\n",(0,t.jsx)(n.h3,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsx)(n.p,{children:"Configuring Eve-Whmapper is simplified through the initialization script. Run the following script as a sudo or root user and follow the on-screen instructions:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"sudo ./init.sh\n"})}),"\n",(0,t.jsx)(n.p,{children:"This script automatically :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Updates all the configurations (docker-compose.yml, haproxy.cfg, nginx.conf) from your response,"}),"\n",(0,t.jsx)(n.li,{children:"Initialize all docker container."}),"\n",(0,t.jsx)(n.li,{children:"Create,add and use a strong certifcate to use HTTPS with your domain"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"start-and-stop",children:"Start and stop"}),"\n",(0,t.jsx)(n.p,{children:"To manage the Docker containers, use the provided scripts:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"To Start all container"})," : Use the start.sh script as a sudo or root user."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"sudo ./start.sh\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"To Stop all container"})," :  use the script start.sh as a sudo user or root user"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"sudo ./stop.sh\n"})})]})}function E(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(T,{...e})}):T(e)}function N(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"deploy-on-kubernate",children:"Deploy on kubernate"})}),"\n",(0,t.jsx)(n.p,{children:"This section details the deployment process of the application on a Kubernetes cluster. The configuration described here was tested on a Raspberry Pi cluster."}),"\n",(0,t.jsx)(n.h2,{id:"kubernetes-setup",children:"Kubernetes Setup"}),"\n",(0,t.jsx)(n.h3,{id:"install-k3s",children:"Install k3s"}),"\n",(0,t.jsx)(n.p,{children:"To install k3s, run the following commands:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"apt update\ncurl -sfL https://get.k3s.io | sh -\n"})}),"\n",(0,t.jsx)(n.h3,{id:"retrieve-node-token",children:"Retrieve Node Token"}),"\n",(0,t.jsx)(n.p,{children:"To get the node token, execute:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"cat /var/lib/rancher/k3s/server/node-token` \n"})}),"\n",(0,t.jsx)(n.h3,{id:"install-ingress",children:"Install Ingress"}),"\n",(0,t.jsx)(n.p,{children:"Apply the Ingress controller:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.9.5/deploy/static/provider/cloud/deploy.yaml\n"})}),"\n",(0,t.jsx)(n.h3,{id:"install-cert-manager",children:"Install Cert Manager"}),"\n",(0,t.jsx)(n.p,{children:"Deploy the Cert Manager:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"kubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/v1.13.3/cert-manager.yaml\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Troubleshooting Certificates:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"List all certificates:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"sudo kubectl get ClusterIssuers,Certificates,CertificateRequests,Orders,Challenges --all-namespaces\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Check details of a specific certificate request (e.g., eve-mapper):"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"sudo kubectl describe certificaterequest tls-evemapper-1 -n evemapper\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"install-portainer-optional",children:"Install Portainer (optional)"}),"\n",(0,t.jsx)(n.p,{children:"To install Portainer, execute:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"kubectl apply -n portainer -f https://raw.githubusercontent.com/portainer/k8s/master/deploy/manifests/portainer/portainer.yaml\nkubectl apply -f https://downloads.portainer.io/ce2-19/portainer-agent-k8s-lb.yaml\n"})}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsx)(n.p,{children:"The configuration is divided across multiple files."}),"\n",(0,t.jsx)(n.h3,{id:"configure-environment-variables",children:"Configure Environment Variables"}),"\n",(0,t.jsxs)(n.p,{children:["All service use a same ConfigMap with in ",(0,t.jsx)(n.strong,{children:"deploys/envs.yaml [ConfigMap]"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"DOMAIN"}),":  your domain (ex: map.mycorp.com)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"POSTGRES_DB"}),": your db name"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"POSTGRESQL_USERNAME"}),": your db user"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"POSTGRESQL_PASSWORD"}),": your db password"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"POSTGRESQL_DATABASE"}),": same as POSTGRES_DB"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"EveSSO__ClientId"}),": your client ID given from CCP"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"EveSSO__Secret"}),": your secret key given from CCP"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ConnectionStrings__DatabaseConnection"}),": ",(0,t.jsx)(n.code,{children:"server=<cluster-local-ip>;port=31252;database=<same as POSTGRES_DB>;User Id=<same as POSTGRESQL_USERNAME>;Password=<same as POSTGRESQL_PASSWORD>"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ConnectionStrings__RedisConnection"}),": ",(0,t.jsx)(n.code,{children:"<cluster-local-ip>:31253"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Remarks:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"cluster-local-ip refers to the local IP of the master node in your network. Typically, this is not an internet-facing IP. For instance, it could be 192.168.1.50 (master node)."}),"\n",(0,t.jsx)(n.li,{children:"Sensitive values are stored as Secrets and must be base64 encoded."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"configure-certificates",children:"Configure Certificates"}),"\n",(0,t.jsx)(n.p,{children:"Environment values aren't directly usable in deployment files. Modify these manually in relevant configuration files."}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.strong,{children:"deploys/base.yaml [Certificate-issuer]"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"email"}),": Provide a valid email to receive notifications regarding certificate expiry."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.strong,{children:"deploys/base.yaml [Certificate]"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"commonName"}),":  Set it to your subdomain (should match DOMAIN in environment variables)."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    ex:\n        commonName: map.mycorp.com\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"dnsNames"}),": List all DNS names you'll use, including commonName."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"  ex:\n    - map.mycorp.com\n    - mappper.mycorp.com\n"})}),"\n",(0,t.jsx)(n.h3,{id:"configure-ingress",children:"Configure Ingress"}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.strong,{children:"deploys/ingress.yaml [evemapper-ingress]"}),":  replace [your SUB/DOMAIN] with your actual subdomain."]}),"\n",(0,t.jsx)(n.h3,{id:"deployment",children:"Deployment"}),"\n",(0,t.jsx)(n.p,{children:"Deploy all configurations located in the deploys directory simultaneously:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"kubectl apply -f deploys\n"})}),"\n",(0,t.jsx)(n.p,{children:"Note: You might need to run the deployment twice, as some services require the namespace to be created before initialization."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"First run result:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'namespace/evemapper created\nissuer.cert-manager.io/letsencrypt-evemapper created\ncertificate.cert-manager.io/tls-evemapper created\nconfigmap/evemapper-config-map created\nsecret/evemapper-secrets created\ndeployment.apps/evemapper-app created\nservice/evemapper-app-service created\ningress.networking.k8s.io/evemapper-ingress created\nError from server (NotFound): namespaces "evemapper" not found\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Second run result:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"deployment.apps/postgres created\nservice/postgres-cluster-ip-service created\ndeployment.apps/redis created\nservice/redis-cluster-ip-service created\nnamespace/evemapper unchanged\nissuer.cert-manager.io/letsencrypt-evemapper unchanged\ncertificate.cert-manager.io/tls-evemapper unchanged\nconfigmap/evemapper-config-map unchanged\nsecret/evemapper-secrets unchanged\ndeployment.apps/evemapper-app unchanged\nservice/evemapper-app-service unchanged\ningress.networking.k8s.io/evemapper-ingress unchanged\n"})}),"\n",(0,t.jsx)(n.h3,{id:"update-application--restart",children:"Update Application & Restart"}),"\n",(0,t.jsx)(n.p,{children:"To redeploy the application, use:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"kubectl rollout restart deployment evemapper-app -n evemapper`\n"})}),"\n",(0,t.jsx)(n.p,{children:"This document is structured to provide clear, sequential instructions for deploying your application on a Kubernetes cluster, especially tailored to the Raspberry Pi setup. Let me know if there are other adjustments or additions you'd like!"})]})}function A(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(N,{...e})}):N(e)}const D={id:"installation",title:"Installation",sidebar_position:1},P=void 0,R={},_=[{value:"Technologies",id:"technologies",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Domain",id:"domain",level:3},{value:"Register your app with CCP",id:"register-your-app-with-ccp",level:3},{value:"Installation",id:"installation",level:2},{value:"Server",id:"server",level:2},{value:"Docker",id:"docker",level:2},{value:"Get Docker-Compose Template",id:"get-docker-compose-template",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Start and stop",id:"start-and-stop",level:2},{value:"Kubernetes Setup",id:"kubernetes-setup",level:2},{value:"Install k3s",id:"install-k3s",level:3},{value:"Retrieve Node Token",id:"retrieve-node-token",level:3},{value:"Install Ingress",id:"install-ingress",level:3},{value:"Install Cert Manager",id:"install-cert-manager",level:3},{value:"Install Portainer (optional)",id:"install-portainer-optional",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Configure Environment Variables",id:"configure-environment-variables",level:3},{value:"Configure Certificates",id:"configure-certificates",level:3},{value:"Configure Ingress",id:"configure-ingress",level:3},{value:"Deployment",id:"deployment",level:3},{value:"Update Application &amp; Restart",id:"update-application--restart",level:3},{value:"Problems?",id:"problems",level:2}];function O(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"technologies",children:"Technologies"}),"\n",(0,t.jsx)(n.p,{children:"Eve Wormhole Mapper is written in C# using ASP.NET Core Blazor Server, EF Core, SignalR, and utilizes several third-party components, particularly:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://blazor-diagrams.zhaytam.com",children:"Blazor.DIAGRAMS"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://mudblazor.com",children:"MudBlazor"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,t.jsx)(n.h3,{id:"domain",children:"Domain"}),"\n",(0,t.jsx)(n.p,{children:"We recommend using a domain name (your.domain.com) with public DNS for easy and consistent access."}),"\n",(0,t.jsx)(n.h3,{id:"register-your-app-with-ccp",children:"Register your app with CCP"}),"\n",(0,t.jsxs)(n.p,{children:["Eve-whmapper requires CCP's SSO authentication API to use the ",(0,t.jsx)(n.a,{href:"https://esi.evetech.net/ui/",children:"ESI API"}),". Register your app at ",(0,t.jsx)(n.a,{href:"https://developers.eveonline.com",children:"developers.eveonline.com"}),":"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Click the ",(0,t.jsx)(n.strong,{children:'"MANAGE APPLICATIONS"'})," button."]}),"\n",(0,t.jsxs)(n.li,{children:["Click the ",(0,t.jsx)(n.strong,{children:'"CREATE NEW APPLICATION"'})," button."]}),"\n",(0,t.jsx)(n.li,{children:"Choose a name for your installation (e.g., prod eve-whmapper)."}),"\n",(0,t.jsx)(n.li,{children:"Enter a description for this installation (e.g., Eve Wormhole Mapper on production)."}),"\n",(0,t.jsxs)(n.li,{children:["Change ",(0,t.jsx)(n.strong,{children:'"CONNECTION TYPE"'})," to ",(0,t.jsx)(n.strong,{children:'"Authentication & API Access"'}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Add the minimum required ",(0,t.jsx)(n.strong,{children:'"PERMISSIONS"'})," (scopes):","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"esi-location.read_location.v1"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"esi-location.read_ship_type.v1"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"esi-ui.open_window.v1"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"esi-ui.write_waypoint.v1"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"esi-search.search_structures.v1"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Set your ",(0,t.jsx)(n.strong,{children:'"CALLBACK URL"'})," (e.g., ",(0,t.jsx)(n.a,{href:"https://your.domain.com/sso/callback",children:"https://your.domain.com/sso/callback"}),")."]}),"\n",(0,t.jsxs)(n.li,{children:["Click the ",(0,t.jsx)(n.strong,{children:'"CREATE APPLICATION"'})," button."]}),"\n",(0,t.jsx)(n.li,{children:"Copy the Client ID, Secret Key, and Callback URL for use in the next configuration step."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(n.p,{children:"EVE WHMapper can be installed using Docker or Kubernetes. Choose the installation method that best suits your environment."}),"\n",(0,t.jsxs)(C,{children:[(0,t.jsx)(I,{value:"docker",label:"Docker",default:!0,children:(0,t.jsx)(E,{})}),(0,t.jsx)(I,{value:"kubernetes",label:"Kubernetes",children:(0,t.jsx)(A,{})})]}),"\n",(0,t.jsx)(n.h2,{id:"problems",children:"Problems?"}),"\n",(0,t.jsxs)(n.p,{children:["If you encounter any issues or need assistance, please ask for help on our ",(0,t.jsx)(n.a,{href:"https://github.com/pfh59/eve-whmapper",children:"GitHub repository"}),"."]})]})}function L(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(O,{...e})}):O(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>a});var s=r(6540);const t={},i=s.createContext(t);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);