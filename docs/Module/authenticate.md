---
id: authenticate
title: Authenticate
sidebar_position: 1
---

EVE Wormhole Mapper authenticates using your EVE Online account via CCP's Single Sign-On (SSO). Your password is never stored — only a secure CCP-issued token is used.

## Login Flow

1. **Open Account Settings** — click the **ACCOUNT** button on the main interface.

   ![Main interface showing the ACCOUNT button](../assets/img/authenticate/account_btn.png)

2. **Initiate Login** — click **Login** to be redirected to the CCP SSO page.

   ![Login button to initiate SSO authentication](../assets/img/authenticate/login_btn.png)

3. **Enter CCP Credentials** — input your CCP username and password.

   ![CCP SSO credential entry page](../assets/img/authenticate/ccp_sso.png)

4. **Select a Character** — choose which character to use.

   ![CCP character selection list](../assets/img/authenticate/ccp_characters.png)

5. **Authorize Scopes** — review and approve the required access rights.

   ![CCP scope authorization screen](../assets/img/authenticate/ccp_authorization.png)

## After Login

Once CCP authentication succeeds, WHMapper checks your instance membership:

- **You belong to an instance** — the first accessible map loads automatically.

  ![Default map displayed after successful authorized login](../assets/img/default_map.png)

- **You don't belong to any instance** — the *No Instance Access* screen is shown. You can create your own instance or ask an administrator to grant you access.

  Refer to the **[Instance](./admin.md)** page for the full walkthrough.

## Multiple Characters

You can link several EVE characters to the same session using the **Add Account** button.

![Add Account button to link an additional character](../assets/img/authenticate/add_account_btn.png)

All characters appear in the same tab interface. The active character — used for all mapper actions — is highlighted with a white circle.

![Multi-character account tab view](../assets/img/authenticate/multi_account.png)
