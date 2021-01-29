---
title: Jekyll インストールノート
date: 2021-01-28 03:07:00
updated:
categories: note
tags: jekyll
toc: true
published: true
---
[Jekyll](https://jekyllrb.com/)の私的導入手順。

### Rubyのインストール
{:#install-ruby}

01. [RubyInstaller for Windows](https://rubyinstaller.org/)から`Ruby+Devkit`（太字のバージョンが推奨）をダウンロードし、規定値のオプションでインストールする。
    `Use UTF-8 as default external encoding.`はオンで。

02. 最後の段階で`rick install`を実行する。

03. `succeeded`が表示されれば完了。

04. スタートメニューから`Start Command Prompt with Ruby`を起動して`ruby -v`を入力する。

05. バージョンが表示されればインストール完了。

### Jekyllのインストール
{:#install-jekyll}

01. スタートメニューから新しくコマンドプロンプトを開き`gem install jekyll bundler`を入力する。

02. `jekyll -v`でバージョンが表示されればインストール完了。

### Bundlerのインストール
{:#install-bundler}

01. コマンドプロンプトを起動して`gem install bundler`を入力する。

02. `bundler -v`でバージョンが表示されればインストール完了。

### Gemのインストール
{:#install-gem}

01. コマンドプロンプトを起動して`Gemfile`のあるディレクトリへ移動する。

02. `bundle install`を入力する。

### Jekyllの起動
{:#launch-jekyll}

01. コマンドプロンプトを起動してローカルサイトのルートディレクトリへ移動する。

02. `bundle exec jekyll serve`を入力する。

    `published: false`のポストを表示するには`--unpublished`を加える。
    タイムゾーンの関係で表示されない場合は`--future`を加える。

03. `http://localhost:4000/`で正常にページが表示されれば完了。
    `baseurl`を設定している場合は`http://localhost:4000/baseurl/`になる。

#### 設定ファイルの更新が反映されない場合
{:#if-the-update-of-the-configuration-file-is-not-reflected}

コマンドプロンプトを起動して`bundle exec jekyll build`を入力する。
