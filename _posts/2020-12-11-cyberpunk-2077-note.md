---
title: Cyberpunk 2077 PC版ノート
date: 2020-12-11 04:58:00
updated: 2020-12-29 08:04:00
categories: note
tags: game
toc: true
published: true
---
GOG版のメモ。

### Logicool MX Masterで中ボタンが利かなくなる不具合の修正方法

`C:\Users\UserName\AppData\Roaming\Logishrd\LogiOptions\devices\6b012\6b012.xml`を開いて`taskidlist="middleButtonTaskList"`を検索し、一致した要素の子の`task`要素に`divert`属性を追加する。（フォルダ、ファイル名は型によって異なる）

変更前
: ```xml
  <controlid rawxy="0" group="2" groupmask="7" id="0x0052" reprogrammable="true" type="mouse" taskidlist="middleButtonTaskList">
    <task id="0x003a" class="mouseclick">
  ```

変更後
: ```xml
  <controlid rawxy="0" group="2" groupmask="7" id="0x0052" reprogrammable="true" type="mouse" taskidlist="middleButtonTaskList">
    <task id="0x003a" class="mouseclick" divert="0">
  ```

`Logicool Options`を再起動すれば完了。

参考
: * [MX Master 3's Middle click doesn't work in a few games \(like cyberpunk 2077\) : LogitechG](https://www.reddit.com/r/LogitechG/comments/ka1xm7/mx_master_3s_middle_click_doesnt_work_in_a_few/)

### MOD

#### 分解とクラフトの時間を短縮

ファイル
: `\GOG Galaxy\Games\Cyberpunk 2077\r6\config\inputContexts.xml`

変更前
: ```xml
  <hold action="disassemble_item" timeout="0.4"/>
  <hold action="craft_item" timeout="0.8"/>
  ```

変更後
: ```xml
  <hold action="disassemble_item" timeout="0.1"/>
  <hold action="craft_item" timeout="0.1"/>
  ```

#### キーボードでゆっくり歩く

[Walker \(all directions\)](https://www.nexusmods.com/cyberpunk2077/mods/576)

斜め移動対応の決定版。

#### 群集調整

[Alternate Crowd Behavior](https://www.nexusmods.com/cyberpunk2077/mods/526)

#### しゃがみのビネットエフェクトを削除

[Crouch vignette effect remover](https://www.nexusmods.com/cyberpunk2077/mods/535)

#### 起動時のイントロをスキップ

[No Intro Videos](https://www.nexusmods.com/cyberpunk2077/mods/533)

インストール管理＞設定から起動パラメーターに`-skipStartScreen`を加える。
