---
title: Blenderノート
date: 2019-08-08 04:09:00
updated: 2019-09-23 20:49:00
categories: note
tags: blender
toc: true
published: true
---
3ds Maxの機能に対応する形で記載する。
Blender 2.8用。随時更新。

### Preferences
{:#preferences}

#### Interface
{:#preferences-interface}

Display
: | 項目            | 設定   |
  | Python Tooltips | `True` |

Text Rendering
: | 項目            | 設定                                                  |
  | Interface Font  | `C:\Windows\Fonts\meiryo.ttc`                         |
  | Mono-space Font | `C:\Windows\Fonts\RictyDiminishedDiscord-Regular.ttf` |

#### Animation
{:#preferences-animation}

Keyframes
: | 項目               | 設定   |
  | Only Insert Needed | `True` |

#### Navigation
{:#preferences-navigation}

Orbit & Pan
: | 項目             | 設定    |
  | Auto Perspective | `False` |

#### Keymap
{:#preferences-keymap}

プリセット
: `Industry Compatible`

ビューポートナビゲーション
: 3DView > 3D View (Global)
  : | 項目        | 設定                    |
    | ----------- | ----------------------- |
    | Rotate View | `Alt Middle Mouse`      |
    | Pan View    | `Middle Mouse`          |
    | Zoom View   | `Ctrl Alt Middle Mouse` |

ツール設定
: 中クリックの無効化
  : Pan View と重複している以下の項目を無効化する。

    3DView > Object Mode
    : * 3D View Tool: Move > Move

      * 3D View Tool: Rotate > Rotate

      * 3D View Tool: Scale > Scale

      * 3D View Tool: Transform > Transform From Gizmo

  選択とドラッグ
  : マウスボタンダウンで選択し、そのままドラッグで編集を可能にする。
    （Blender標準キーマップの右クリック選択モードの挙動）

    次の項目にSelectキーを追加する。

    3DView > Object Mode
    : * 3D View Tool: Select Box

      * 3D View Tool: Select Circle

      * 3D View Tool: Select Lasso

      * 3D View Tool: Move

      * 3D View Tool: Rotate

      * 3D View Tool: Scale

      * 3D View Tool: Transform

    Selectキー
    : | 項目                | 設定            |
      | ------------------- | --------------- |
      | Mouse               | `Left Mouse`    |
      | Identifier          | `view3d.select` |
      | Deselect On Nothing | `True`          |

      [![Keymap-Select](/mxskb/assets/images/content/2019-08-08-blender-note/image001t.png)](/mxskb/assets/images/content/2019-08-08-blender-note/image001.png)

  オートキー切り替え
  : 標準の指定方法が分からないのでトグル用のアドオンを作成して割り当てた。

    Frames > Toggle Auto Keying

    | 項目       | 設定                                 |
    | ---------- | ------------------------------------ |
    | Identifier | `wm.toggle_use_keyframe_insert_auto` |

    frames_toggle_auto_keying.py
    : ```python
      """! © 2020 imaoki | MIT License | https://github.com/imaoki """
      bl_info = {
        "name": "Toggle Auto Keying",
        "description": "Toggle auto keying",
        "author": "imaoki",
        "version": (1, 0, 0),
        "blender": (2, 80, 0),
        "support": "TESTING",
        "category": "Frames",
        "location": "Timeline",
        "warning": "",
        "wiki_url": "",
        "tracker_url": ""
      }

      import bpy

      class FRAMES_OT_toggle_use_keyframe_insert_auto(bpy.types.Operator):
          bl_idname = "wm.toggle_use_keyframe_insert_auto"
          bl_label = "Toggle Auto Keying"

          def execute(self, context):
              context.scene.tool_settings.use_keyframe_insert_auto = not context.scene.tool_settings.use_keyframe_insert_auto
              bpy.ops.wm.redraw_timer(type='DRAW_WIN', iterations=1)
              return {'FINISHED'}

      def register():
          bpy.utils.register_class(FRAMES_OT_toggle_use_keyframe_insert_auto)

      def unregister():
          bpy.utils.unregister_class(FRAMES_OT_toggle_use_keyframe_insert_auto)

      if __name__ == "__main__":
          register()

          # bpy.ops.wm.toggle_use_keyframe_insert_auto()
      ```

### キーフレーム
{:#keyframe}

* `FCurve`がキーフレームを保持している。

* `FCurve`は`data_path`というプロパティによって作用するプロパティと関連付けられている。

### 相対変換
{:#relative-transform}

* ビューポート上でオブジェクトを移動してもキーフレームの値は変化しない。
  変更対象はあくまで`Location`プロパティであり、`FCurve`ではないから？

### Python API
{:#python-api}

#### 変換プロパティ
{:#python-api-transform-property}

変換
: | プロパティ     | 座標系   | 備考                                   |
  | -------------- | -------- | -------------------------------------- |
  | `matrix_world` | ワールド |                                        |
  | `matrix_local` | 親       | 親が`Armature`の場合は異なる処理が必要 |

位置
: | プロパティ | 座標系 | 備考 |
  | ---------- | ------ | ---- |
  | `location` | 親     |      |

回転
: | プロパティ            | 座標系 | 備考 |
  | --------------------- | ------ | ---- |
  | `rotation_axis_angle` | 親     |      |
  | `rotation_euler`      | 親     |      |
  | `rotation_quaternion` | 親     |      |

スケール
: | プロパティ | 座標系 | 備考 |
  | ---------- | ------ | ---- |
  | `scale`    | 親     |      |

#### 選択オブジェクト
{:#python-api-selection}

```python
bpy.context.selected_objects
```

#### 一般イベントコールバック
{:#python-api-general-event-callback}

* [`bpy.app.handlers`](https://docs.blender.org/api/current/bpy.app.handlers.html)

  これだけ？他に無いのだろうか・・・。

#### 変更ハンドラ
{:#python-api-change-handler}

* まだ出来ない？

  [Is there a post-finish operator hook in the python API - Blender Stack Exchange](https://blender.stackexchange.com/a/1585)

  現時点で思いつく方法としては`bpy.app.handlers.depsgraph_update_post`等を使って独自に変更を監視するとか。
