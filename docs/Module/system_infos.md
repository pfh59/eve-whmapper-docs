---
id: system_infos
title: System Information
sidebar_position: 4
description: View system details, wormhole effects and statics, and share notes with the System and Notes windows.
---

When you select a system on the map, two windows open over the map (see [Map panels](./map.md#map-panels)):

- **System** shows what you need to know about the system: location, security, class and, for wormholes, the effect and statics;
- **Notes** holds a free-text note about the system, shared with everyone on the map.

![System window](../assets/img/info/system_info_module.png)

## Third-party links

The top of the System window links to the selected system on three websites:

![Dotlan, zKillboard and Anoik links](../assets/img/info/system_info_extra_shortcuts.png)

| Link | Use it for |
|---|---|
| [Dotlan](https://evemaps.dotlan.net/) | Maps of the region and constellation, jumps and activity |
| [zKillboard](https://zkillboard.com/) | Recent kills and losses in the system |
| [Anoik.is](http://anoik.is/) | Wormhole details: effect, statics, celestials |

## System details

The System window shows the region, constellation, name, security status and class of the system.

### Security status

The security status is colour-coded:

| Colour | Security status | Example |
|---|---|---|
| **Red** | Below 0 (null-sec and wormholes) | ![Security -1 in red](../assets/img/info/security/NS.png) |
| **Orange** | 0.1 to 0.4 (low-sec) | ![Security 0.4 in orange](../assets/img/info/security/LS.png) |
| **Green** | 0.5 and above (high-sec) | ![Security in green](../assets/img/info/security/HS.png) |

### System class

The class badge tells you what kind of space the system is in.

**Known space:**

| Class | Badge |
|---|---|
| High-sec (HS) | ![HS badge](../assets/img/info/class/HS.png) |
| Low-sec (LS) | ![LS badge](../assets/img/info/class/LS.png) |
| Null-sec (NS) | ![NS badge](../assets/img/info/class/NS.png) |

**Wormhole space:**

| Class | Badges |
|---|---|
| C1 to C6 | ![C1](../assets/img/info/class/C1.png) ![C2](../assets/img/info/class/C2.png) ![C3](../assets/img/info/class/C3.png) ![C4](../assets/img/info/class/C4.png) ![C5](../assets/img/info/class/C5.png) ![C6](../assets/img/info/class/C6.png) |
| C13 to C18 | ![C13](../assets/img/info/class/C13.png) ![C14](../assets/img/info/class/C14.png) ![C15](../assets/img/info/class/C15.png) ![C16](../assets/img/info/class/C16.png) ![C17](../assets/img/info/class/C17.png) ![C18](../assets/img/info/class/C18.png) |
| Thera | ![Thera badge](../assets/img/info/class/Thera.png) |
| Pochven | ![Pochven badge](../assets/img/info/class/Pochven.png) |

## Wormhole effect and statics

Wormhole systems show two extra lines: **Effect** and **Statics**.

### Effect

Some wormholes have an effect that changes how ships and modules behave. The colour of the square tells you which one:

| Effect | Square |
|---|---|
| Black Hole | ![Black Hole](../assets/img/info/effects/black_hole.png) |
| Cataclysmic Variable | ![Cataclysmic Variable](../assets/img/info/effects/cataclysmic.png) |
| Magnetar | ![Magnetar](../assets/img/info/effects/magnetar.png) |
| Pulsar | ![Pulsar](../assets/img/info/effects/pulsar.png) |
| Red Giant | ![Red Giant](../assets/img/info/effects/red_giant.png) |
| Wolf-Rayet | ![Wolf-Rayet](../assets/img/info/effects/wolf-rayet.png) |

Hover the square to see the bonuses and penalties of the effect:

![Pulsar effect details in a tooltip](../assets/img/info/system_wh_effect_tooltip.png)

### Statics

Statics are the wormholes that always spawn in the system. Each one shows its type and its destination class:

![One static: D845 to high-sec](../assets/img/info/system_wh_static.png)

![Two statics: B274 to high-sec and Y683 to C4](../assets/img/info/system_wh_statics.png)

Hover a static to see its mass limits and lifetime:

![Static details: max mass, max jump mass and stable time](../assets/img/info/system_wh_static_tooltip_info.png)

## Notes

The **Notes** window holds one note per system and per map. Everyone who can open the map sees the same note: use it for what your corporation needs to know about the system (residents, structures, what is inside…).

### Write a note

Click the text area and type. The note is saved automatically a few seconds after you stop typing.

![Notes window with a note](../assets/img/info/notes.png)

A confirmation appears when the note is saved:

![Note saved notification](../assets/img/info/note_success.png)

### Delete a note

Clear the text of the note. The empty note is saved like any other change.

:::info
Removing a system from the map does not delete its note. If the system is added again, its note comes back.
:::
