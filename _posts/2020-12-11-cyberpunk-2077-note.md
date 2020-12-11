---
title: Cyberpunk 2077 PC版ノート
date: 2020-12-11 04:58:00
updated:
categories: note
tags: game
toc: false
published: true
---
### Logicool MX Masterで中ボタンが利かなくなる不具合の修正方法

01. `C:\Users\UserName\AppData\Roaming\Logishrd\LogiOptions\devices\6b0**`フォルダを開いて中の`6b0**.xml`をテキストエディタで開く。
    （フォルダ/ファイル名は型によって異なる）

02. `taskidlist="middleButtonTaskList"`を検索してマッチした要素の子の`task`要素に`divert`属性を追加する。

    修正前
    : ```xml
      <controlid rawxy="0" group="2" groupmask="7" id="0x0052" reprogrammable="true" type="mouse" taskidlist="middleButtonTaskList">
        <task id="0x003a" class="mouseclick">
      ```

    修正後
    : ```xml
      <controlid rawxy="0" group="2" groupmask="7" id="0x0052" reprogrammable="true" type="mouse" taskidlist="middleButtonTaskList">
        <task id="0x003a" class="mouseclick" divert="0">
      ```

03. `Logi***.exe`プロセスを一旦落としてスタートメニューから`Logicool Options`を再起動。

参考
: * [MX Master 3's Middle click doesn't work in a few games \(like cyberpunk 2077\) : LogitechG](https://www.reddit.com/r/LogitechG/comments/ka1xm7/mx_master_3s_middle_click_doesnt_work_in_a_few/)
