---
title: Blenderノート
date: 2019-08-08 04:09:00 +0900
updated: 2019-08-25 21:18:00 +0900
categories: note
tags: blender
toc: true
published: true
---

3ds Maxの機能に対応する形で記載する。
Blender 2.8用。随時更新。

### 変換プロパティ
{:#transform-property}

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

### キーフレーム
{:#keyframe}

* `FCurve`がキーフレームを保持している。

* `FCurve`は`data_path`というプロパティによって作用するプロパティと関連付けられている。
  原理的にはネストさせたりもできそうだけど・・・。

### 相対変換
{:#relative-transform}

* ビューポート上でオブジェクトを移動してもキーフレームの値は変化しない。
  変更対象はあくまで`Location`プロパティであり、`FCurve`ではないから？

### 選択オブジェクト
{:#selection}

```python
bpy.context.selected_objects
```

### 一般イベントコールバック
{:#general-event-callback}

* [`bpy.app.handlers`](https://docs.blender.org/api/current/bpy.app.handlers.html)

  これだけ？他に無いのだろうか・・・。

### 変更ハンドラ
{:#change-handler}

* まだ出来ない？

  [Is there a post-finish operator hook in the python API - Blender Stack Exchange](https://blender.stackexchange.com/a/1585)

  代替方法としては`bpy.app.handlers.depsgraph_update_post`等を使って独自に変更を監視するとか。

### キーマップ

プリセット
: `Industry Compatible`

設定項目
: 3DView
  : 3D View (Global)
    : | 項目        | 設定                    |
      | ----------- | ----------------------- |
      | Rotate View | `Alt Middle Mouse`      |
      | Pan View    | `Middle Mouse`          |
      | Zoom View   | `Ctrl Alt Middle Mouse` |

    Object Mode
    : ツールモード切替によって Pan View が効かなくなるので重複している以下の項目を無効化しておく。

      | 項目                                           | 設定 |
      | ---------------------------------------------- | ---- |
      | 3D View Tool: Move > Move                      | 無効 |
      | 3D View Tool: Rotate > Rotate                  | 無効 |
      | 3D View Tool: Scale > Scale                    | 無効 |
      | 3D View Tool: Transform > Transform From Gizmo | 無効 |
