---
title: Cyberpunk 2077 PC版ノート
date: 2020-12-11 04:58:00
updated: 2020-12-16 06:43:00
categories: note
tags: game
toc: true
published: true
---
GOG版のメモ。

### Logicool MX Masterで中ボタンが利かなくなる不具合の修正方法

01. `C:\Users\UserName\AppData\Roaming\Logishrd\LogiOptions\devices\6b0**`フォルダを開いて中の`6b0**.xml`をテキストエディタで開く。
    （フォルダ/ファイル名は型によって異なる）

02. `taskidlist="middleButtonTaskList"`を検索し、一致した要素の子の`task`要素に`divert`属性を追加する。

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

03. `Logi***.exe`プロセスを一旦落としてスタートメニューから`Logicool Options`を再起動。

参考
: * [MX Master 3's Middle click doesn't work in a few games \(like cyberpunk 2077\) : LogitechG](https://www.reddit.com/r/LogitechG/comments/ka1xm7/mx_master_3s_middle_click_doesnt_work_in_a_few/)

### HUD付きのスクリーンショットを撮る方法

2020年12月現在、GOG版はオーバーレイ非対応のため、Xbox Game Bar（`Win+G`{:.key}）やGeForce Experience等のスクショ機能を使うしかない。（フレームレート表示も同様）
既定で武器の切り替えに割り当てられている`Alt`{:.key}キーはスクショのショートカットとかち合うことがあるので適当なキーに変更しておく。

### キーボードでゆっくり歩く

01. `\GOG Galaxy\Games\Cyberpunk 2077\r6\config\inputUserMappings.xml`をテキストエディタで開く。

02. `name="LeftX_Axis"`、`name="LeftY_Axis"`を持つ`mapping`要素の中身を以下のように変更する。

    変更前
    : ```xml
      <mapping name="LeftX_Axis" type="Axis" >
            <button id="IK_Pad_LeftAxisX" />
            <button id="IK_A" val="-1.0" overridableUI="left"/>
            <button id="IK_D" val="1.0" overridableUI="right"/>
        </mapping>

        <mapping name="LeftY_Axis" type="Axis" >
            <button id="IK_Pad_LeftAxisY" />
            <button id="IK_W" val="1.0" overridableUI="forward"/>
            <button id="IK_S" val="-1.0" overridableUI="back"/>
        </mapping>
      ```

    変更後
    : ```xml
      <mapping name="LeftX_Axis" type="Axis" >
            <button id="IK_Pad_LeftAxisX" />
            <button id="IK_A" val="-1.0" overridableUI="left"/>
            <button id="IK_D" val="1.0" overridableUI="right"/>
            <button id="IK_Alt" val="0" overridableUI="left"/>
            <button id="IK_Alt" val="0" overridableUI="right"/>
        </mapping>

        <mapping name="LeftY_Axis" type="Axis" >
            <button id="IK_Pad_LeftAxisY" />
            <button id="IK_W" val="1.0" overridableUI="forward"/>
            <button id="IK_S" val="-1.0" overridableUI="back"/>
            <button id="IK_Alt" val="0" overridableUI="forward"/>
            <button id="IK_Alt" val="0" overridableUI="back"/>
        </mapping>
      ```

  03. ゆっくり歩く場合は`Alt`{:.key}キーを押しながら移動する。
      ただし斜め移動は少し速くなってしまう。
