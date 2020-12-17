---
title: Cyberpunk 2077 PC版ノート
date: 2020-12-11 04:58:00
updated: 2020-12-17 15:43:00
categories: note
tags: game
toc: true
published: false
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

### HUD付きのスクリーンショットを撮る方法

GOG版はオーバーレイ非対応（2020年12月時点）のため、Xbox Game Bar（`Win+G`{:.key}）やGeForce Experience等のスクショ機能を使うしかない。（フレームレート表示も同様）
既定で武器の切り替えに割り当てられている`Alt`{:.key}キーはスクショのショートカットとかち合うことがあるので適当なキーに変更しておく。

### 設定ファイル調整MOD

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

ファイル
: `\GOG Galaxy\Games\Cyberpunk 2077\r6\config\inputUserMappings.xml`

`name="LeftX_Axis"`、`name="LeftY_Axis"`を持つ`mapping`要素の中身を以下のように変更する。`val`属性で速度を指定する。

変更前
: ```xml
  <mapping name="LeftX_Axis" type="Axis">
    <button id="IK_Pad_LeftAxisX"/>
    <button id="IK_A" val="-1.0" overridableUI="left"/>
    <button id="IK_D" val="1.0" overridableUI="right"/>
  </mapping>

  <mapping name="LeftY_Axis" type="Axis">
    <button id="IK_Pad_LeftAxisY"/>
    <button id="IK_W" val="1.0" overridableUI="forward"/>
    <button id="IK_S" val="-1.0" overridableUI="back"/>
  </mapping>
  ```

変更後
: ```xml
  <mapping name="LeftX_Axis" type="Axis">
    <button id="IK_Pad_LeftAxisX"/>
    <button id="IK_A" val="-1.0" overridableUI="left"/>
    <button id="IK_D" val="1.0" overridableUI="right"/>
    <button id="IK_Alt" val="0.1" overridableUI="left"/>
    <button id="IK_Alt" val="0.1" overridableUI="right"/>
  </mapping>

  <mapping name="LeftY_Axis" type="Axis">
    <button id="IK_Pad_LeftAxisY"/>
    <button id="IK_W" val="1.0" overridableUI="forward"/>
    <button id="IK_S" val="-1.0" overridableUI="back"/>
    <button id="IK_Alt" val="0.1" overridableUI="forward"/>
    <button id="IK_Alt" val="0.1" overridableUI="back"/>
  </mapping>
  ```

`Alt`{:.key}キーを押しながら移動するとゆっくりになる。ただし斜め移動は少し速くなってしまう。
