---
id: settings
title: Settings
sidebar_position: 8
description: Customize keyboard shortcuts, mouse/zoom behavior, and map layout in WHMapper.
---

**Settings** lets you adapt WHMapper to the way you play. You can configure keyboard shortcuts, mouse and zoom options, and map layout parameters.

Once saved, these settings are **automatically applied every time your primary character connects** — you never need to reconfigure them between sessions.

---

## Open Settings

Open the user menu (`⋮` at the top-right of the screen) and click **Settings**.

![Settings entry in the user menu](../assets/img/settings/settings_menu.png)

The Settings dialog opens with three tabs: **KEYBOARD**, **MOUSE / ZOOM**, and **MAP**.

---

## Keyboard tab

The **KEYBOARD** tab lets you rebind the default keyboard shortcuts used on the map.

![Keyboard settings tab](../assets/img/settings/settings_keyboard.png)

:::tip
Click a field, then press the key you want to use.
:::

### Default bindings

| Action | Default Key | Description |
|---|---|---|
| **Link Systems** | `L` | Manually create a connection between two selected systems |
| **Delete** | `Delete` | Delete the selected system or connection |
| **Increment Extension** | `NumpadAdd` | Increase the tag extension counter |
| **Decrement Extension** | `NumpadSubtract` | Decrease the tag extension counter |
| **Increment Extension (Alt)** | `ArrowUp` | Alternative key to increase the tag extension counter |
| **Decrement Extension (Alt)** | `ArrowDown` | Alternative key to decrease the tag extension counter |

---

## Mouse / Zoom tab

The **MOUSE / ZOOM** tab controls mouse interaction and zoom behavior on the map.

![Mouse / Zoom settings tab](../assets/img/settings/settings_mouse.png)

### Options

| Option | Default | Description |
|---|---|---|
| **Zoom Enabled** | ON | Enables mouse-wheel zoom on the map canvas |
| **Inverse Zoom Direction** | OFF | Reverses the zoom scroll direction |
| **Allow Multi-Selection (Ctrl+Click)** | ON | Allows selecting multiple nodes by holding `Ctrl` and clicking |
| **Link Snapping** | OFF | Snaps connections to the nearest node when dragging |

---

## Map tab

The **MAP** tab controls layout and interaction thresholds for the map canvas.

![Map settings tab](../assets/img/settings/settings_map.png)

### Options

| Option | Default | Unit | Description |
|---|---|---|---|
| **Node Spacing** | `30` | px | Minimum spacing between system nodes on auto-layout |
| **Drag Threshold** | `5` | px | Minimum drag distance before a node move is registered |

---

## Save and reset

| Action | Effect |
|---|---|
| **SAVE** | Persists your settings. They are automatically applied every time your primary character connects. |
| **RESET** | Restores all settings to their factory defaults. |
| **CANCEL** | Closes the dialog without saving any changes. |

:::tip
Use **RESET** at any time to return to the default configuration without having to adjust each option manually.
:::
