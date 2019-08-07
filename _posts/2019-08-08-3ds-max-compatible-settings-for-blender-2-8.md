---
title: Blender 2.8用の3ds Max互換設定
date: 2019-08-08 04:09:00 +0900
updated:
categories: note
tags: blender
toc: true
published: true
---

随時更新。

### キーマップ

プリセット
: Industry Compatible

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
