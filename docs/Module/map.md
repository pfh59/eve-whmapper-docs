---
id: map
title: Map
sidebar_position: 3
description: Navigate, track pilots, manage systems and connections with the WHMapper interactive map.
---

The map shows your wormhole chain: the systems you have found and the connections between them, through wormholes or stargates. Every change is synchronized live, so all pilots on the same map see the same chain at the same time.

From the map you can:

- track where your characters are and let WHMapper add the systems they enter;
- add, move, lock, tag and delete systems;
- set the status, size and end of life of each connection;
- open the System, Notes, Signatures, Routes and Connection windows for the selected item.

Who can open a map is set per instance and per map (see [Instance](./instance.md)).

## Connected users

The top bar shows how many pilots are currently on the **active map tab**. The count updates live as pilots join, leave or switch tabs.

:::tip
The count only covers the active tab. Make sure your fleet uses the same map tab to get an accurate number.
:::

## Pilot tracking

When tracking is on, WHMapper follows each of your characters through ESI:

- the system a character enters is added to the active map;
- the connection between the previous and the new system is created automatically;
- the character's name appears on the system it is in.

After you log in, tracking is on for every character. A green dot on a character badge means tracking is on:

![Two character badges with a green tracking dot](../assets/img/map/all_tracking_enable.png)

### Turn tracking on or off

Right-click a character badge in the top bar:

- **UnTrack** turns tracking off for that character (red dot):

  ![Badge menu with UnTrack](../assets/img/map/disable_tracking.png)

- **Track** turns it back on (green dot):

  ![Badge menu with Track](../assets/img/map/enable_tracking.png)

Tracking only works on maps the character can open. When a character has no access to the active map, its badge shows a red dot and the menu shows **No Map Access**:

![Badge menu showing No Map Access](../assets/img/map/tracking_no_map_access.png)

### Automatic tags

When several systems of the same class are connected to the same origin, WHMapper gives them sequential letters (A, B, C…). Use these letters to name your in-game bookmarks.

![Two low-security exits tagged A and B from the same wormhole](../assets/img/map/autotag.png)

To change a tag, select the system and press (default bindings, see [Settings → Keyboard](./settings.md#keyboard-tab)):

- `Numpad +` or `Arrow Up`: next letter (A → B);
- `Numpad -` or `Arrow Down`: previous letter (B → A).

Bookmark examples:

| Bookmark | Meaning |
|---|---|
| `>> LS - EJC` | Low-security exit |
| `>> LSB - KWE` | Second low-security exit from the same origin |
| `>> HS - MCE` | High-security exit |

## Selection

A selected system or connection is highlighted, and the windows for it open over the map (see [Map panels](#map-panels)).

### Select a system

Left-click a system.

![Selected system](../assets/img/map/selected_system.png)

These windows open:

- **System** and **Notes** — see [System Information](./system_infos.md);
- **Signatures** — see [Signature](./signature.md);
- **Routes** — see [Route Planner](./route_planner.md).

![System, Notes, Signatures and Routes windows over the map](../assets/img/map/info_signature_routeplanner.png)

### Select a connection

Left-click a connection.

![Selected connection between two systems](../assets/img/map/selected_link.png)

The **Connection** window replaces the system windows. It shows the connection's size, status and jump log (see [Jump](./jump.md)).

![Connection window](../assets/img/map/jump_module.png)

### Selecting multiple systems

- `Ctrl` + left-click adds a system to the selection, or removes it if it is already selected. This can be turned off in [Settings → Mouse / Zoom](./settings.md#mouse--zoom-tab).
- `Shift` + left-click and drag draws a selection area. Every system inside it is selected:

  ![Selection area drawn with Shift + drag](../assets/img/map/multi_select.png)

  ![Four systems selected](../assets/img/map/selected_systems.png)

## Map panels

The **System**, **Notes**, **Signatures**, **Routes** and **Connection** windows float over the map. The map stays usable around them: clicks, right-clicks and zoom outside a window reach the map.

- **System**, **Notes**, **Signatures** and **Routes** follow the selected system. By default, System and Notes are top-right, Signatures bottom-left and Routes bottom-right.
- **Connection** follows the selected connection and replaces the system windows while a connection is selected.

### Move a window

Drag a window by its **title bar**. The window comes to the front when you press or move it, and always stays inside the map.

### Collapse and close

Each title bar has two buttons:

- the **collapse arrow** reduces the window to its title bar, or expands it again;
- **Close** (`×`) hides the window.

![System window collapsed to its title bar](../assets/img/map/panel_collapsed.png)

### Panel dock

The dock at the top-left of the map shows or hides each window. A highlighted icon means the window is shown.

![Panel dock](../assets/img/map/panel_dock.png)

A window that does not apply to the current selection has a disabled button. Hover it to see why:

![Disabled Connection button with its hint](../assets/img/map/panel_dock_hint.png)

The last button, **Reset panel layout**, puts every window back in its default place, visible and expanded.

![Reset panel layout button](../assets/img/map/panel_dock_reset.png)

### Resize the Signatures window

Drag the grip in the bottom-right corner of the **Signatures** window to resize it. It keeps a minimum size and stays inside the map. Long lists scroll inside their window.

![Resize grip of the Signatures window](../assets/img/map/panel_resize_grip.png)

### Last selection

When you clear the selection, for example by clicking an empty area of the map, the windows keep showing the last selected system or connection, dimmed. The title bar shows the system name, so you always know what is displayed.

![Windows dimmed after the selection is cleared](../assets/img/map/panel_masked.png)

### Saved layout

Position, size, visibility and collapsed state are saved **per map, in your browser**, and restored when you reload the page. Each pilot can arrange the windows to fit their screen; the layout is not shared with other users or devices.

## Moving systems

- **One system**: drag it to its new position.
- **Several systems**: select them (see [Selecting multiple systems](#selecting-multiple-systems)), then drag any of them to move the whole group.

Locked systems cannot be moved (see [Lock a system](#lock-a-system)).

## Adding systems

Systems are added automatically by [pilot tracking](#pilot-tracking). To add one manually:

1. Right-click an empty area of the map and choose **Add System**.

   ![Map context menu with Add System](../assets/img/map/add_system_popupmenu.png)

2. Type at least three characters of the system name.

   ![System search showing systems starting with "ama"](../assets/img/map/add_system_search.png)

3. Choose the system in the list (here, Amamake), then click **ADD SYSTEM**.

   ![Amamake selected in the search dialog](../assets/img/map/add_system_amamake.png)

A notification confirms that the system was added.

![Notification: Amamake solar system successfully added](../assets/img/map/add_system_notification.png)

## Editing a system

Right-click a system to open its menu.

![System menu with Set Destination, Lock and System Status](../assets/img/map/edit_system_context_menu.png)

### Set destination

**Set Destination** sets the system as your autopilot destination in the game.

![Set Destination item in the system menu](../assets/img/map/menu_item_system_set_destination.png)

![Destination set in the game](../assets/img/map/set_destination_in_game_view.png)

### Lock a system

**Lock** protects a system: it can no longer be moved or deleted. A padlock appears on the system.

![Lock item in the system menu](../assets/img/map/menu_item_system_lock.png)

![Locked system with a padlock](../assets/img/map/lock_system.png)

To remove the protection, choose **UnLock** in the same menu.

![UnLock item in the system menu](../assets/img/map/menu_item_system_unlock.png)

### System status

**System Status** marks what you know about a system. The status is shown by the border colour of the system.

![System Status submenu](../assets/img/map/menu_item_system_status.png)

| Status | Meaning | Appearance |
|---|---|---|
| **Unknown** | No information about this system | ![Unknown system](../assets/img/map/normal_system.png) |
| **Occupied** | Occupied by potential enemies | ![Occupied system](../assets/img/map/occupied_system.png) |
| **Hostile** | Enemies present | ![Hostile system](../assets/img/map/hostile_system.png) |
| **Friendly** | Allies present | ![Friendly system](../assets/img/map/friendly_system.png) |
| **Empty** | Nobody in the system | ![Empty system](../assets/img/map/empty_system.png) |

## Editing a connection

Right-click a connection to open its menu.

![Connection menu with EOL Status, Status and Size](../assets/img/map/edit_link_context_menu.png)

### End of life

**EOL Status** sets how long the wormhole has left before it collapses.

![EOL Status submenu](../assets/img/map/menu_item_link_eol_status.png)

| EOL status | Meaning | Appearance |
|---|---|---|
| **Normal** | Not at end of life | ![Normal connection](../assets/img/map/normal_link.png) |
| **EOL -4h** | About 4 hours left (dashed purple) | ![EOL -4h connection](../assets/img/map/eol_4h_link.png) |
| **EOL -1h** | About 1 hour left (solid purple) | ![EOL -1h connection](../assets/img/map/eol_1h_link.png) |

### Mass status

**Status** sets how much mass the wormhole has left.

![Status submenu](../assets/img/map/menu_item_link_status.png)

| Status | Meaning | Appearance |
|---|---|---|
| **Normal** | Mass not reduced | ![Normal connection](../assets/img/map/normal_link.png) |
| **Reduced** | Mass reduced | ![Reduced connection](../assets/img/map/critical_link.png) |
| **Verge** | About to collapse | ![Verge connection](../assets/img/map/verge_link.png) |

### Size

**Size** sets the largest ship class that can jump through the wormhole.

![Size submenu](../assets/img/map/menu_item_link_size.png)

| Size | Appearance |
|---|---|
| **Small** | ![Small connection](../assets/img/map/small_link.png) |
| **Medium** | ![Medium connection](../assets/img/map/medium_link.png) |
| **Large** (default) | ![Large connection](../assets/img/map/normal_link.png) |
| **XLarge** | ![XLarge connection](../assets/img/map/extra_large_link.png) |

## Deleting systems

1. Select the system, or several systems (see [Selecting multiple systems](#selecting-multiple-systems)).
2. Press `Delete`.

:::warning
- There is **no confirmation**: check your selection before pressing `Delete`.
- A locked system cannot be deleted. WHMapper shows a warning instead:

  ![Warning: the system is locked and cannot be removed](../assets/img/map/del_lock_system_notification.png)
:::
