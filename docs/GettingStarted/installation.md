---
id: installation
title: Installation
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Docker from "./_docker.md";
import Kubernetes from "./_kubernetes.md";

## Technologies

Eve Wormhole Mapper is written in C# using ASP.NET Core Blazor Server, EF Core, SignalR, and utilizes several third-party components, particularly:

- [Blazor.DIAGRAMS](https://blazor-diagrams.zhaytam.com)
- [MudBlazor](https://mudblazor.com)

## Requirements

### Domain

We recommend using a domain name (your.domain.com) with public DNS for easy and consistent access.

### Register your app with CCP

Eve-whmapper requires CCP's SSO authentication API to use the [ESI API](https://esi.evetech.net/ui/). Register your app at [developers.eveonline.com](https://developers.eveonline.com):

1. Click the **"MANAGE APPLICATIONS"** button.
2. Click the **"CREATE NEW APPLICATION"** button.
3. Choose a name for your installation (e.g., prod eve-whmapper).
4. Enter a description for this installation (e.g., Eve Wormhole Mapper on production).
5. Change **"CONNECTION TYPE"** to **"Authentication & API Access"**.
6. Add the minimum required **"PERMISSIONS"** (scopes):
   - `esi-location.read_location.v1`
   - `esi-location.read_ship_type.v1`
   - `esi-ui.open_window.v1`
   - `esi-ui.write_waypoint.v1`
   - `esi-search.search_structures.v1`
7. Set your **"CALLBACK URL"** (e.g., https://your.domain.com/sso/callback).
8. Click the **"CREATE APPLICATION"** button.
9. Copy the Client ID, Secret Key, and Callback URL for use in the next configuration step.

## Installation

EVE WHMapper can be installed using Docker or Kubernetes. Choose the installation method that best suits your environment.

<Tabs>
<TabItem value="docker" label="Docker" default>
<Docker/>
</TabItem>
<TabItem value="kubernetes" label="Kubernetes">
<Kubernetes/>
</TabItem>
</Tabs>

## Problems?

If you encounter any issues or need assistance, please ask for help on our [GitHub repository](https://github.com/pfh59/eve-whmapper).