---
title: 3ds Max 設定
date: 2020-06-22 18:22:00
updated:
categories: note
tags: 3dsmax
toc: true
published: true
---
3ds Maxの設定。

### Preferences
{:#preferences}

| タブ          | グループ                     | 項目                                | 値                                 |
| ------------- | ---------------------------- | ----------------------------------- | ---------------------------------- |
| Animation     | Key Bracket Display          |                                     | `Selected Objects`                 |
| Files         | Auto Backup                  | Backup Interval                     | `2.0`                              |
| Files         | Auto Backup                  | Number of Autobak files             | `99`                               |
| Files         | File Handling                | Recent Files in Menu                | `50`                               |
| Files         | File String Data Handling    | Default Language                    | `Japanese`                         |
| Gamma and LUT |                              | Enable Gamma/LUT Correction         | `True`                             |
| General       | Scene Undo                   | Levels                              | `128`                              |
| General       | Spinners                     | Precision                           | `4`                                |
| General       | Spinners                     | Wrap Cursor Near Spinner            | `True`                             |
| General       | UI Display                   | Display Stack Collapse Warning      | `False`                            |
| General       | UI Display                   | Display Topology-Dependence Warning | `False`                            |
| General       | UI Display                   | Enable Caddy Controls               | `False`                            |
| General       | UI Display                   | Fixed Width Text Buttons            | `90`                               |
| Gizmos        | Move/Rotate Transforms       | Rotation Increment                  | `0.1`                              |
| MAXScript     | MAXScript Windows            | Font                                | `Ricty Diminished Discord Regular` |
| MAXScript     | MAXScript Windows            | Font size                           | `10`                               |
| Viewports     | Selection/Preview Highlights |                                     | `False`                            |
| Viewports     | Viewport Parameters          | Backface Cull on Object Creation    | `False`                            |

### Custom User Interface
{:#custom-user-interface}

| タブ  | グループ      | 項目                                | 値     |
| ----- | ------------- | ----------------------------------- | ------ |
| Mouse | Mouse Control | Right Click Menu Over Selected Only | `True` |

### Hotkey
{:#hotkey}

| Action                        | Hotkey                        | Group   | Category          |
| ----------------------------- | ----------------------------- | ------- | ----------------- |
| Back View                     | `K`{:.key}                    | Main UI | Views             |
| Backface Cull Toggle          | `Alt+B`{:.key}                | Main UI | Tools             |
| Create Command Mode           | `NumPad 1`{:.key}             | Main UI | Tools             |
| Cycle Selection Method        |                               | Main UI | Tools             |
| Disable Viewport              |                               | Main UI | Views             |
| Display Command Mode          | `NumPad 5`{:.key}             | Main UI | Tools             |
| Display Floater Toggle        | `Ctrl+Shift+D`{:.key}         | Main UI | Edit              |
| Go to End Frame               | `End`{:.key}, `Alt+.`{:.key}  | Main UI | Time              |
| Go to Start Frame             | `Home`{:.key}, `Alt+,`{:.key} | Main UI | Time              |
| Hide Frozen Objects Toggle    | `Ctrl+Shift+F`{:.key}         | Main UI | Tools             |
| Hierarchy Command Mode        | `NumPad 3`{:.key}             | Main UI | Tools             |
| InitializeCenterPoint         | `Ctrl+Alt+Shift+Space`{:.key} | Main UI | * - Command       |
| Local Coordinate System       | `Ctrl+Shift+L`{:.key}         | Main UI | Coordinate System |
| Merge File                    | `Ctrl+Shift+M`{:.key}         | Main UI | File              |
| Modify Command Mode           | `NumPad 2`{:.key}             | Main UI | Tools             |
| Motion Command Mode           | `NumPad 4`{:.key}             | Main UI | Tools             |
| Next/Previous Key Mode Toggle | `Alt+K`{:.key}                | Main UI | Tools             |
| Pan View                      |                               | Main UI | Views             |
| Pan Viewport                  |                               | Main UI | Tools             |
| Parent Coordinate System      | `Ctrl+Shift+P`{:.key}         | Main UI | Coordinate System |
| Properties                    | `Ctrl+P`{:.key}               | Main UI | Edit              |
| Reset File                    | `Ctrl+Shift+R`{:.key}         | Main UI | File              |
| Right View                    | `I`{:.key}                    | Main UI | Views             |
| Save File As                  | `Ctrl+Alt+S`{:.key}           | Main UI | File              |
| Save Incremental (+)          |                               | MainUI  | File              |
| Screen Coordinate System      | `Ctrl+Shift+S`{:.key}         | Main UI | Coordinate System |
| Select Object                 | `Q`{:.key}                    | Main UI | Selection         |
| Set Keys                      |                               | Main UI | Set Key Tools     |
| Show Motion Paths             | `Alt+M`{:.key}                | Main UI | Tools             |
| Smart Select                  |                               | Main UI | Selection         |
| Utility Command Mode          | `NumPad 6`{:.key}             | Main UI | Tools             |
| Viewport Background           |                               | Main UI | Views             |
| Virtual Viewport Pan Down     |                               | Main UI | Tools             |
| Virtual Viewport Pan Left     |                               | Main UI | Tools             |
| Virtual Viewport Pan Right    |                               | Main UI | Tools             |
| World Coordinate System       | `Ctrl+Shift+W`{:.key}         | Main UI | Coordinate System |

### Default Controller
{:#default-controller}

| 種類     | クラス       |
| -------- | ------------ |
| Rotation | TCB Rotation |

### MaxStart.max
{:#maxstart-max}

| 場所                         | タブ       | グループ           | 項目                 | 値                |
| ---------------------------- | ---------- | ------------------ | -------------------- | ----------------- |
| Grid and Snap Settings       | Options    | General            | Angle                | `2.5`             |
| Status Bar Controls          |            |                    | Adaptive Degradation | `False`           |
| System Unit Setup            |            | System Unit Scale  | 1 Unit               | `1.0 Centimeters` |
| Units Setup                  |            | Display Unit Scale |                      | `Generic Units`   |
| Viewport Configuration       | Statistics | Setup              |                      | `Selection`       |
| Viewport Configuration       | Statistics | Setup              | Edge Count           | `False`           |
| Viewport Configuration       | Statistics | Setup              | Frames Per Second    | `True`            |
| Viewport Configuration       | Statistics | Setup              | Polygon Count        | `False`           |
| Viewport Configuration       | Statistics | Setup              | Triangle Count       | `True`            |
| Viewport Configuration       | Statistics | Setup              | Vertex Count         | `True`            |
| Viewport Per-View Preference |            |                    | Viewport Background  | `Solid Color`     |
