---
id: authenticate
title: Authenticate
sidebar_position: 1
---

EVE Wormhole Mapper uses your EVE Online credentials via CCP's Single Sign-On (SSO). This page explains how to authenticate and manage characters within the mapper.

## Logging into EVE Wormhole Mapper

1. **Access the Account Settings**

   Select the **ACCOUNT** button on the main interface to initiate the authentication flow.

   ![Main interface showing the ACCOUNT button](../assets/img/authenticate/account_btn.png)

2. **Initiate Login**

   Click the **Login** button. You are redirected to the EVE Online SSO login page.

   ![Login button to initiate SSO authentication](../assets/img/authenticate/login_btn.png)

3. **Enter CCP Credentials**

   Input your CCP credentials. Your password is never stored by the application — authentication uses CCP's secure token-based system.

   ![CCP SSO credential entry page](../assets/img/authenticate/ccp_sso.png)

4. **Select Your Character**

   Choose the character you want to use and verify that the required CCP access rights are granted.

   ![CCP character selection list](../assets/img/authenticate/ccp_characters.png)

5. **Authorize the Application**

   Review and approve the required scopes to allow the mapper to access data associated with your character.

   ![CCP scope authorization screen](../assets/img/authenticate/ccp_authorization.png)

## Entering EVE Wormhole Mapper

### Authorized Access

If your character is authorized, the first accessible map displays automatically after login.

![Default map displayed after successful authorized login](../assets/img/default_map.png)

### Unauthorized Access

If the character lacks permissions, a notification appears indicating unauthorized access. Contact your administrator to request access.

![Notification message indicating unauthorized access](../assets/img/authenticate/unauthorized.png)

## Adding Multiple Characters

You can add multiple EVE characters under the same map — even if their access is unauthorized. Use the **Add Account** button to link each character individually.

![Add Account button to link an additional character](../assets/img/authenticate/add_account_btn.png)

All characters appear in the same tab interface. The currently active character — used for all actions in WHMapper — is highlighted with a white circle.

![Multi-character account tab view](../assets/img/authenticate/multi_account.png)
