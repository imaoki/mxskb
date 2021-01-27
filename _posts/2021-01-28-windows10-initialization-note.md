---
title: Windows 10初期設定ノート
date: 2021-01-28 03:46:00
updated:
categories: note
tags: windows
toc: true
published: true
---
Windows 10の私的初期設定ノート。
SSDの最適化やOneDriveの移動等は行わず、なるべく標準を維持する方針で。

### チェックリスト
{:#checklist}

01. Chromeインストール

02. Windows Update

03. Thumbs.dbの抑制化

04. 回復ドライブの作成

05. ビデオカードのドライバー更新

06. 開発環境のインストール

07. グラフィックアプリのインストール

### Thumbs.dbの抑制化
{:#suppress-thumbs-db}

システムのプロパティ > 詳細設定 > パフォーマンス > 視覚効果 > アイコンの代わりに縮小版を表示する
: オフ

フォルダーオプション > 表示 > 詳細設定 > 縮小版にファイルアイコンを表示する
: オン

gpedit.msc > ユーザーの構成 > 管理用テンプレート > Windows コンポーネント > エクスプローラー
: 縮小表示を無効にしてアイコンのみを表示する
  : 有効

  ネットワークフォルダーで縮小表示を無効にしてアイコンのみを表示する
  : 有効

  非表示の thumbs.db ファイルで縮小表示のキャッシュを無効にする
  : 有効

  縮小表示の画像のキャッシュをオフにする
  : 有効

### 詳細設定
{:#advanced-settings}

設定 > デバイス > 入力 > キーボードの詳細設定 > 入力言語のホットキー > キーの詳細設定 > 入力言語を切り替える
: なし

設定 > 簡単操作 > キーボード > 固定キー機能を起動するショートカットキーを許可する
: オフ

設定 > Microsoft IME（検索から） > 全般 > 以前のバージョンの Microsoft IME を使う
: オン

設定 > デバイス > 入力 > キーボードの詳細設定 > アプリ ウインドウごとに異なる入力方式を設定する
: オフ

システムのプロパティ > 詳細設定 > パフォーマンス > 視覚効果 > ウィンドウの下に影を表示する
: オフ

設定 > システム > 電源とスリープ > 電源の追加設定 > バランス > プラン設定の変更 > 詳細な電源設定の変更 > スリープ > スリープ解除タイマーの許可
: 無効

### トラブル
{:#troubleshooting}

* システムイメージの作成に失敗
  [http://sas.at.webry.info/201712/article_1.html](http://sas.at.webry.info/201712/article_1.html)

* ネットワーク上にPCが表示されない
  [https://www.pasoble.jp/windows/10/kyouyu-pc-hyoujsarenai.html](https://www.pasoble.jp/windows/10/kyouyu-pc-hyoujsarenai.html)

* クイックアクセスのピン留めが解除できない
  [最近使ったフォルダ、ファイルのクイックアクセス表示の消去について](https://social.technet.microsoft.com/Forums/ja-JP/3e87e229-41f4-4427-be5e-242c0c0c7cc4?forum=win10itprogeneralJP)

### バックアップ
{:#backups}

[Acronis True Image](https://www.acronis.com/ja-jp/personal/computer-backup/)

スケジュール
: 日単位-4時間毎

バックアップスキーム
: カスタムスキーム

  バックアップの種類
  : 差分

  次の間隔で完全バージョンを作成する
  : 6差分バージョン

  次の期間が経過したバージョンチェーンを削除する
  : 7日

### レジストリ変更
{:#registry-changes}

#### ウィンドウ境界の幅
{:#window-border-width}

画面端にピッタリ寄せたウィンドウを開き直した際に画面端との間に隙間ができる場合は以下のレジストリを設定する。

キー
: `HKEY_CURRENT_USER\Control Panel\Desktop\WindowMetrics`

  文字列値
  : `PaddedBorderWidth`

    規定値
    : `-60`

    設定値
    : `0`

#### フォルダの種類を固定
{:#fix-folder-type}

01. 以下のキーを削除

    * `HKEY_CURRENT_USER\SOFTWARE\Classes\Local Settings\Software\Microsoft\Windows\Shell\BagMRU`

    * `HKEY_CURRENT_USER\SOFTWARE\Classes\Local Settings\Software\Microsoft\Windows\Shell\Bags`

02. PC再起動

03. 以下のキーを追加

    * `HKEY_CURRENT_USER\SOFTWARE\Classes\Local Settings\Software\Microsoft\Windows\Shell\Bags\AllFolders\Shell`

      文字列値
      : 名前
        : `FolderType`

        値
        : `NotSpecified`
