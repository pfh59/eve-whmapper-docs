---
id: route_planner
title: Route Planner
sidebar_position: 5
description: Learn how to use the Route Planner panel to calculate optimal routes in WHMapper.
---

## Overview

The **Route Planner** panel helps you calculate optimal travel paths between systems—either through jump gates or mapped wormholes. It includes:

- A **route type selector** (Custom, Thera, Turnur).
- A **path preference selector** (Safer / Shorter).
- Action buttons for managing your route list.
- A dynamic list of destination systems with jump counts.
- Automatic pathfinding based on wormhole and gate connections.

If a system is selected and has a valid route (gate or mapped wormhole), the planner automatically calculates the best path based on your preferences.  
By default, the planner uses the **Custom** route type and the **Shorter** path preference.

![Route Planner Module](../assets/img/route/route_planner_module.png)

---

## Route Type

The route type determines which connections are factored into the pathfinding algorithm.

| Type | Description |
|---|---|
| **Custom** | WHMapper's own algorithm using K-space stargates and mapped wormhole connections. |
| **Thera** | Extends the Custom algorithm by incorporating **Thera**'s daily public K-space wormhole connections, potentially offering shorter routes through known space. |
| **Turnur** | Extends the Custom algorithm by incorporating **Turnur** triglavian connections. |

**Example — Thera, Shorter mode (from J165153):**  
![Route Thera Shorter](../assets/img/route/route_thera_shorter.png)

**Example — Thera, Safer mode (from J165153):**  
![Route Thera Safer](../assets/img/route/route_thera_safer.png)

:::info
Thera and Turnur connections are sourced dynamically. Jump counts may vary as those connections change throughout the day.
:::

---

## Action Buttons

The action buttons vary depending on your user role.

### Admin View

As an **administrator**, you can define a global list of key systems (e.g., Jita, Amarr). These will be visible to **all characters** with access to the map.

![Admin Action Buttons](../assets/img/route/admin_action_buttons.png)

### User View

As a **primary character**, you can still create your own custom system list, in addition to those defined by admins.

![User Action Buttons](../assets/img/route/user_action_buttons.png)

:::info Multi-character attribution
If you have linked several EVE characters to your session (see [Authenticate → Multiple Characters](./authenticate.md#multiple-characters)), any route entry you add — regardless of which character is currently active — is recorded under your **primary character**. The same rule applies to signature imports and notes.
:::

---

## Add a System

To add a system to your route list:

1. **Click the Add button**:
   - Admin: ![Admin Route Add Button](../assets/img/route/admin_route_add_button.png)
   - User: ![User Route Add Button](../assets/img/route/user_route_add_button.png)

2. **The system search dialog appears**:  
   ![Search System Dialog](../assets/img/route/search_system_dialog.png)

3. **Start typing** the name of the system (e.g., `Jita`):  
   ![Search System Dialog - Jita](../assets/img/route/search_system_dialog_jita.png)

   :::tip
   Enter at least 3 characters — the list will update in real time.
   :::

4. **Click Add System** to confirm. Systems are added to your list with a jump count of **0** until a map system is selected.

   ![Systems Added (Jita & Amarr)](../assets/img/route/route_planner_systems_empty.png)

   Click **Cancel** to close without adding.

---

## Edit a System

To modify your route list:

- Click the **Edit button**: ![Edit Action Button](../assets/img/route/edit_action_button.png)

Once enabled, a **delete icon** will appear next to each entry.

:::caution Admin Permissions
- **Admins** can remove both global and personal systems.
- **Primary characters** can only delete systems they personally added (i.e. systems recorded under their primary character).
:::

**Admin View**  
![Admin Edit Mode Enabled](../assets/img/route/admin_edit_action_enable.png)

**User View**  
![User Edit Mode Enabled](../assets/img/route/user_edit_action_enable.png)

---

## Delete a System

To remove a system from your list:

1. Click the **delete icon** beside the system: ![Delete Action Button](../assets/img/route/delete_route_button.png)

2. Confirm the action in the dialog:  
   ![Delete Route Message](../assets/img/route/delete_route_msg.png)

---

## Automatic Path Calculation

### How It Works

1. **Select a system** on the map.
2. The planner calculates jump distances between the selected system and each listed destination, according to the **Route Type** and **path preference** (Shorter / Safer).

---

### When a Route Exists

If a route is found, the number of jumps appears next to each destination, accompanied by a green indicator icon.

Routes can be:
- Fully mapped wormhole connections.
- Standard stargate paths.
- Thera or Turnur connections (when the corresponding route type is selected).

**Examples:**

- Via wormhole (from J165153):  
  ![Route Is Up From WH](../assets/img/route/route_up_from_wh.png)

- Via K-space gates (from Floseswin):  
  ![Route Is Up From Kspace](../assets/img/route/route_up_from_kspace.png)

---

### When No Route Exists

If no path is found, the jump count will show **`0`** with a red indicator icon.

This can happen if:
- The selected system is a wormhole with no mapped connections to reach the destination.
- A listed system is isolated from the current network.

**Example:**  
![Route is Down From WH](../assets/img/route/route_down_from_wh.png)

---

## Display a Route Path on the Map

You can visually display the route path (highlighted in yellow) between the selected system and any destination in your list.

:::info Note
Only **mapped systems** are shown in the path on the map.  
Unmapped K-space hops are not visualized even if the route technically passes through them.
:::

![Path Display Enabled](../assets/img/route/path_enable.png)

### Toggle Path Display

- To **show** a path:  
  Click this icon beside the system: ![Show Path Button](../assets/img/route/path_show_button.png)

- To **hide** the path:  
  Click the same icon again: ![Hide Path Button](../assets/img/route/path_hide_button.png)

---

### Route Path Tooltip

When hovering over the destination system icon, a **tooltip displays the complete route path** — listing every system you need to travel through to reach your destination.

Each system in the tooltip is represented by a **color-coded dot** matching the security status.

![Route Path Tooltip](../assets/img/route/route_path_tooltip.png)