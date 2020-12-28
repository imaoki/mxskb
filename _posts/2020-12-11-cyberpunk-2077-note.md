---
title: Cyberpunk 2077 PC版ノート
date: 2020-12-11 04:58:00
updated: 2020-12-29 02:37:00
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

ファイル
: `\GOG Galaxy\Games\Cyberpunk 2077\r6\config\inputUserMappings.xml`

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
    <button id="IK_Alt" val="0" overridableUI="left"/>
    <button id="IK_Alt" val="0" overridableUI="right"/>
  </mapping>

  <mapping name="LeftY_Axis" type="Axis">
    <button id="IK_Pad_LeftAxisY"/>
    <button id="IK_W" val="1.0" overridableUI="forward"/>
    <button id="IK_S" val="-1.0" overridableUI="back"/>
    <button id="IK_Alt" val="0" overridableUI="forward"/>
    <button id="IK_Alt" val="0" overridableUI="back"/>
  </mapping>
  ```

`Alt`{:.key}キーを押しながら移動するとゆっくりになる。ただし斜め移動は少し速くなってしまう。
`val`属性を`0`以外の値にすると何れかの値が優先されて`Alt`{:.key}を押しただけで移動してしまう。

#### 群集調整

[Alternate Crowd Behavior](https://www.nexusmods.com/cyberpunk2077/mods/526)

#### しゃがみのビネットエフェクトを削除

[Crouch vignette effect remover](https://www.nexusmods.com/cyberpunk2077/mods/535)

#### 起動時のイントロをスキップ

[No Intro Videos](https://www.nexusmods.com/cyberpunk2077/mods/533)

インストール管理＞設定から起動パラメーターに`-skipStartScreen`を加える。
