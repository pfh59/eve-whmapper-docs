---
id: installation
title: Installation
sidebar_position: 1
description: Step-by-step installation guide for EVE Wormhole Mapper using Docker or the pre-built binaries.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Docker from "./_docker.md";
import SelfHosted from "./_selfhosted.md";

## Built with

WHMapper is written in C# with ASP.NET Core Blazor Server, EF Core and SignalR, and uses these components:

- [Blazor.DIAGRAMS](https://blazor-diagrams.zhaytam.com)
- [MudBlazor](https://mudblazor.com)

## Requirements

### Domain

We recommend using a domain name (your.domain.com) with public DNS for easy and consistent access.

### Register your app with CCP

WHMapper logs pilots in with CCP's SSO and reads their location through the [ESI API](https://esi.evetech.net/ui/). Register an application at [developers.eveonline.com](https://developers.eveonline.com):

1. Click the **"MANAGE APPLICATIONS"** button.
2. Click the **"CREATE NEW APPLICATION"** button.
3. Choose a name for your installation (e.g., prod eve-whmapper).
4. Enter a description for this installation (e.g., WHMapper production).
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

Install WHMapper with Docker (recommended), or directly on Linux or Windows with the pre-built binaries.

<Tabs>
<TabItem value="docker" label="Docker" default>
<Docker/>
</TabItem>
<TabItem value="selfhosted" label="Self-Hosted (Binary) ⚠️ Beta">
<SelfHosted/>
</TabItem>
</Tabs>

## Need help?

Ask on the [GitHub repository](https://github.com/pfh59/eve-whmapper/issues) or on the [EVE Online forum thread](https://forums.eveonline.com/t/whmapper/421061).

---

**Next step →** [First Start](./first_start.md)