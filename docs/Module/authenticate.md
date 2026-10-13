---
id: authenticate
title: Authenticate
sidebar_position: 1
description: How to log in to EVE Wormhole Mapper using CCP's Single Sign-On (SSO).
---

WHMapper uses your EVE Online account through CCP's Single Sign-On (SSO). Your password is never sent to WHMapper — only a token issued by CCP is stored.

## Login flow

1. **Open the account menu** — click **Account** at the top-right of the home page.

   ![Main interface showing the ACCOUNT button](../assets/img/authenticate/account_btn.png)

2. **Initiate Login** — click **Login** to be redirected to the CCP SSO page.

   ![Login button to initiate SSO authentication](../assets/img/authenticate/login_btn.png)

3. **Enter CCP Credentials** — input your CCP username and password.

   ![CCP SSO credential entry page](../assets/img/authenticate/ccp_sso.png)

4. **Select a Character** — choose which character to use.

   ![CCP character selection list](../assets/img/authenticate/ccp_characters.png)

5. **Authorize Scopes** — review and approve the required access rights.

   ![CCP scope authorization screen](../assets/img/authenticate/ccp_authorization.png)

## After login

Once CCP has authenticated you, WHMapper checks which instances you can access:

- **You belong to an instance** — the first accessible map loads automatically.

  ![Default map displayed after successful authorized login](../assets/img/default_map.png)

- **You don't belong to any instance** — the *No Instance Access* screen is shown. You can create your own instance or ask an administrator to grant you access.

  Refer to the **[Instance](./instance.md)** page for the full walkthrough.

## Multiple characters

You can link several EVE characters to the same session using the **Add Account** button.

![Add Account button to link an additional character](../assets/img/authenticate/add_account_btn.png)

Each linked character appears as a badge in the top bar. The **primary character** — used for all mapper actions and access checks — is highlighted with a white circle.

![Character badges in the top bar, primary character circled in white](../assets/img/authenticate/multi_account.png)

To change the primary character, right-click another character's badge and choose **Set as Primary**. The maps you can open follow the access rights of the primary character.

![Badge context menu with Set as Primary](../assets/img/set_primary_account.png)

The same menu enables or disables location tracking for each character (see [Map → Pilot Tracking](./map.md#pilot-tracking)).

---

**Next step →** [Instance Setup](./instance.md)
