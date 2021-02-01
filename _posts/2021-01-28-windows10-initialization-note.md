---
title: Windows 10 初期設定ノート
date: 2021-01-28 03:46:00
updated: 2021-02-02 03:05:00
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

03. 回復ドライブ作成

04. ビデオカードのドライバー更新

05. [基本設定](#basic-settings)

06. [バックアップ設定](#backups-settings)

07. [アプリケーションインストール](#install-applications)

### 基本設定
{:#basic-settings}

#### Thumbs.db抑制化
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

#### 文字入力設定
{:#text-input-settings}

設定 > デバイス > 入力 > キーボードの詳細設定 > 入力言語のホットキー > キーの詳細設定 > 入力言語を切り替える
: なし

設定 > 簡単操作 > キーボード > 固定キー機能を起動するショートカットキーを許可する
: オフ

設定 > Microsoft IME（検索から） > 全般 > 以前のバージョンの Microsoft IME を使う
: オン

設定 > デバイス > 入力 > キーボードの詳細設定 > アプリ ウインドウごとに異なる入力方式を設定する
: オフ

#### スリープモード設定
{:#sleep-mode-settings}

デバイスマネージャー > ネットワーク アダプター > イーサネットコントローラのプロパティ > 電源の管理 > このデバイスで、コンピュータのスタンバイ状態を解除できるようにする
: オフ

設定 > システム > 電源とスリープ > 電源の追加設定 > バランス > プラン設定の変更 > 詳細な電源設定の変更 > スリープ > スリープ解除タイマーの許可
: 無効

#### VIDEO_TDR_FAILURE対策
{:#video_tdr_failure-countermeasure}

参考
: [ブルースクリーン: VIDEO\_TDR\_FAILUREの原因と解決方法 – Windows10](https://itojisan.xyz/trouble/21921/)

設定 > システム > 電源とスリープ > 電源の追加設定 > バランス > プラン設定の変更 > 詳細な電源設定の変更 > PCI Express > リンク状態の電源管理
: オフ

設定 > システム > 電源とスリープ > 電源の追加設定 > 電源ボタンの動作を選択する > シャットダウン設定 > 高速スタートアップを有効にする
: オフ

#### ウィンドウ境界の幅
{:#window-border-width}

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

全てのフォルダの種類を「全般」にする。

01. 以下のキーを削除

    * `HKEY_CURRENT_USER\SOFTWARE\Classes\Local Settings\Software\Microsoft\Windows\Shell\BagMRU`

    * `HKEY_CURRENT_USER\SOFTWARE\Classes\Local Settings\Software\Microsoft\Windows\Shell\Bags`

02. 以下のキーと文字列値を追加

    キー
    : `HKEY_CURRENT_USER\SOFTWARE\Classes\Local Settings\Software\Microsoft\Windows\Shell\Bags\AllFolders\Shell`

      文字列値
      : 名前
        : `FolderType`

        値
        : `NotSpecified`

#### その他
{:#other-settings}

システムのプロパティ > 詳細設定 > パフォーマンス > 視覚効果 > ウィンドウの下に影を表示する
: オフ

### バックアップ設定
{:#backups-settings}

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

### アプリケーションインストール
{:#install-applications}

#### ユーティリティアプリ
{:#install-utility-apps}

* [7-Zip](https://sevenzip.osdn.jp/)

* [FileZilla](https://filezilla-project.org/)

* [MassiGra](http://www.massigra.net/)

* [StrokesPlus.net](https://www.strokesplus.net/)

* [Sumatra PDF](https://www.sumatrapdfreader.org/free-pdf-reader.html)

#### 開発環境
{:#install-development-environment}

01. [Visual Studio Code インストールノート](2021-01-28-visual-studio-code-instllation-note)

02. [Git for Windows インストールノート](2021-01-28-git-for-windows-instllation-note)

03. [Jekyll インストールノート](2021-01-28-jekyll-instllation-note)

#### グラフィックアプリ
{:#install-graphic-apps}

* [3ds Max 設定](2020-06-22-3ds-max-settings)

* [Photoshop 設定](2021-01-29-photoshop-settings)

### トラブルシューティング
{:#troubleshooting}

* システムイメージの作成に失敗
  [https://sas.at.webry.info/201712/article_1.html](https://sas.at.webry.info/201712/article_1.html)

* ネットワーク上にPCが表示されない
  [https://www.pasoble.jp/windows/10/kyouyu-pc-hyoujsarenai.html](https://www.pasoble.jp/windows/10/kyouyu-pc-hyoujsarenai.html)

* クイックアクセスのピン留めが解除できない
  [https://social.technet.microsoft.com/Forums/ja-JP/3e87e229-41f4-4427-be5e-242c0c0c7cc4](https://social.technet.microsoft.com/Forums/ja-JP/3e87e229-41f4-4427-be5e-242c0c0c7cc4)