---
title: 3ds Max 設定
date: 2020-06-22 18:22:00
updated: 2021-01-29 19:46:00
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
| Gamma and LUT |                              | Enable Gamma/LUT Correction         | プロジェクトに合わせる             |
| General       | Scene Undo                   | Levels                              | `200`                              |
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
| Center Point Cycle            | `Alt+P`{:.key}                | Main UI | Tools             |
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

### SciTEの設定
{:#scite-settings}

maxscript.properties
: ```diff
  --- Default/maxscript.properties
  +++ 3ds Max 2018/maxscript.properties
  @@ -74 +74 @@
  -style.MAXScript.0=fore:#808080
  +style.MAXScript.0=fore:#D0D0D0
  @@ -90 +90 @@
  -style.MAXScript.8=$(colour.operator),bold
  +style.MAXScript.8=$(colour.operator)
  @@ -98 +98 @@
  -style.MAXScript.12=$(colour.keyword),bold
  +style.MAXScript.12=$(colour.keyword)
  @@ -100 +100 @@
  -style.MAXScript.13=$(colour.preproc),bold
  +style.MAXScript.13=$(colour.preproc)
  @@ -110 +110 @@
  -style.MAXScript.18=fore:#00B040,italics
  +style.MAXScript.18=fore:#00B040
  @@ -112 +112 @@
  -style.MAXScript.19=fore:#D0B080,italics
  +style.MAXScript.19=fore:#D0B080
  @@ -114 +114 @@
  -style.MAXScript.20=fore:#804020,italics
  +style.MAXScript.20=fore:#804020
  @@ -116 +116 @@
  -style.MAXScript.21=fore:#3060A0,italics
  +style.MAXScript.21=fore:#3060A0
  @@ -120 +120 @@
  -style.MAXScript.23=fore:#FF0000,bold,italics
  +style.MAXScript.23=fore:#FF0000
  ```

MXS_Editor.properties
: ```diff
  --- Default/MXS_Editor.properties
  +++ 3ds Max 2018/MXS_Editor.properties
  @@ -56 +56 @@
  -#view.eol=1
  +view.eol=1
  @@ -59 +59 @@
  -view.whitespace=0
  +view.whitespace=1
  @@ -108,4 +108,6 @@
  -tabsize=8
  -indent.size=8
  -use.tabs=1
  -#indent.auto=1
  +tabsize=2
  +tab.size.$(file.patterns.MAXScript)=2
  +indent.size=2
  +indent.size.$(file.patterns.MAXScript)=2
  +use.tabs=0
  +indent.auto=0
  @@ -116 +118,2 @@
  -#backspace.unindents=0
  +backspace.unindents=1
  +indent.maintain.$(file.patterns.MAXScript)=1
  @@ -151,2 +154,2 @@
  -#eol.mode=LF
  -eol.auto=1
  +eol.mode=LF
  +eol.auto=0
  @@ -173,9 +176,5 @@
  -statusbar.number=4
  -statusbar.text.1=\
  -li=$(LineNumber) co=$(ColumnNumber) offset=$(CharOffset) $(OverType) ($(EOLMode)) $(FileAttr)
  -statusbar.text.2=\
  -$(BufferLength) chars in $(NbOfLines) lines. Sel: $(SelLength) chars.
  -statusbar.text.3=\
  -Now is: Date=$(CurrentDate) Time=$(CurrentTime)
  -statusbar.text.4=\
  -$(FileNameExt) : $(FileDate) - $(FileTime) | Attributes: $(FileAttr) | Encoding: $(Encoding)
  +statusbar.number=2
  +statusbar.text.1=$(SelLength) chars selected. | Line:$(LineNumber) Column:$(ColumnNumber) | ($(EOLMode)) | $(Encoding) | $(OverType) | $(FileAttr)
  +statusbar.text.2=$(BufferLength) chars in $(NbOfLines) lines. Sel: $(SelLength) chars.
  +statusbar.text.3=Now is: Date=$(CurrentDate) Time=$(CurrentTime)
  +statusbar.text.4=$(FileNameExt) : $(FileDate) - $(FileTime) | Attributes: $(FileAttr) | Encoding: $(Encoding)
  @@ -184 +183 @@
  -code.page=-1
  +#code.page=-1
  @@ -189 +188 @@
  -#character.set=128
  +character.set=128
  @@ -191 +190 @@
  -#code.page=65001
  +code.page=65001
  @@ -246,3 +245,3 @@
  -font.base=font:Verdana,size:10
  -font.small=font:Verdana,size:8
  -font.comment=font:Comic Sans MS,size:9
  +font.base=font:Ricty Diminished Discord,size:10
  +font.small=font:Ricty Diminished Discord,size:10
  +font.comment=font:Ricty Diminished Discord,size:10
  @@ -253,5 +252,5 @@
  -font.text=font:Times New Roman,size:11
  -font.text.comment=font:Verdana,size:9
  -font.embedded.base=font:Verdana,size:9
  -font.embedded.comment=font:Comic Sans MS,size:8
  -font.monospace=font:Courier New,size:10
  +font.text=font:Ricty Diminished Discord,size:10
  +font.text.comment=font:Ricty Diminished Discord,size:10
  +font.embedded.base=font:Ricty Diminished Discord,size:10
  +font.embedded.comment=font:Ricty Diminished Discord,size:10
  +font.monospace=font:Ricty Diminished Discord,size:10
  @@ -303,2 +302,2 @@
  -print.header.style=font:Arial,size:12,bold
  -print.footer.style=font:Arial Narrow,size:10,italics
  +print.header.style=font:Ricty Diminished Discord,size:10
  +print.footer.style=font:Ricty Diminished Discord,size:10
  @@ -344,2 +343,3 @@
  -#user.context.menu=\
  -#||\
  +user.context.menu=\
  | +      |                      | \ |
  | +UTF-8 | IDM_ENCODING_UCOOKIE |   |
  ```
