---
title: Git for Windows インストールノート
date: 2021-01-28 01:45:00
updated:
categories: note
tags: git
toc: true
published: true
---
[Git for Windows](https://gitforwindows.org/)の私的導入手順。

### インストールのタイミング
{:#installation-timing}

01. VSCodeをインストール。
    インストール完了後に**起動しない**ように注意。

02. Git for Windowsをインストール。
    SSHキーの設定なども全て行う。

03. VSCodeで動作確認。

### インストールオプション
{:#installation-options}

画面遷移の順に記載。(git version 2.30.0.windows.2)

Select Components
: 規定値

Select Start Menu Folder
: 規定値

Choosing the default editor used by Git
: Use Visual Studio Code As Git’s default editor

Adjustin the name of the initial branch in new repositories
: Let Git decide

Adjusting your PATH environment
: Use Git from the Windows Command Prompt

Choosing HTTPS transport backend
: Use the OpenSSL library

Configuring the line ending conversions
: Checkout as-is, commit as-is

Configuring the terminal emulator to use with Git Bash
: Use MinTTY

Choose the default behavior of 'git pull'
: Default (fast-forward or merge)

Choose a credential helper
: Git Credential Manager Core

Configuring extra options
: 規定値

Configuring experimental options
: 規定値

### グローバル設定
{:#global-settings}

#### ユーザー情報
{:#user-information}

```
$ git config --global user.name "user_name"
$ git config --global user.email "your_email@example.com"
```

#### 日本語ファイル名の文字化け対策
{:#countermeasures-against-garbled-japanese-file-names}

```
$ git config --global core.quotepath false
```

#### 設定の確認
{:#confirmation-of-settings}

```
$ git config --list
```

### SSHキーの生成
{:#ssh-key-generation}

```
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

`C:\Users\UserName\.ssh`ディレクトリに`id_rsa`と`id_rsa.pub`の2ファイルが作成される。

### GitHubアカウントにSSHキーを登録する
{:#register-ssh-key-to-github-account}

01. `clip < ~/.ssh/id_rsa.pub`で`id_rsa.pub`の内容をコピー。

02. GitHub > Settings > SSH and GPG keys で`New SSH Key`をクリック。

03. `Title`にはPCのデバイス名等を入力する。

04. `Key`には先ほどコピーしたキーを貼り付ける。

05. `Add Key`をクリック。

### SSHエージェントへ秘密鍵を登録する
{:#register-private-key-to-ssh-agent}

01. `$ ssh -T git@github.com`で出力されるfingerprintsが[GitHub's SSH key fingerprints \- GitHub Docs](https://docs.github.com/en/github/authenticating-to-github/githubs-ssh-key-fingerprints)のfingerprintsと一致すれば`yes`と入力。

02. `yes`入力後に以下のエラーが出た場合は`ssh-add -l`を試す。

    ```
    Warning: Permanently added 'github.com,52.69.186.44' (RSA) to the list of known hosts.
    Connection reset by 52.69.186.44 port 22
    ```

03. `ssh-add -l`で更に以下のエラーが出た場合は`$ eval ｀ssh-agent｀`（引用符は`@`{:.key}の方）と入力し、`Agent pid 数字`と出力されればOK。

    ```
    Could not open a connection to your authentication agent.
    ```

04. 再度`$ ssh-add -l`を入力し`The agent has no identities.`と出力されればOK。

05. SSHエージェントに作成した秘密鍵を登録する。

    ```
    $ ssh-add ~/.ssh/id_rsa
    ```

06. パスフレーズを設定している場合は入力し、`Identity added: /c/Users/UserName/.ssh/id_rsa (your_email@example.com)`と出力されればOK。

07. 再び`$ ssh -T git@github.com`し、パスフレーズ無しで以下のように表示されればOK。

    ```
    Hi user_name! You've successfully authenticated, but GitHub does not provide shell access.
    ```

### アップデート
{:#update}

```
$ git update-git-for-windows
```

### 参考
{:#reference}

* [私家版 Git For Windowsのインストール手順 \| OPCDiary](https://opcdiary.net/technical/programming/%E7%A7%81%E5%AE%B6%E7%89%88-git-for-windows%E3%81%AE%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB%E6%89%8B%E9%A0%86/)

* [\[Windows\]gitの設定ファイルと最初の設定\(ファイル名文字化け対策と個人識別情報\) \| Zero Configuration](https://zero-config.com/windows/git-config.html)

* [新しい SSH キーを生成して ssh\-agent に追加する \- GitHub Docs](https://docs.github.com/ja/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

* [GitHubにssh接続する初心者さん \- Qiita](https://qiita.com/aki4000/items/4c81bc2747bbd5e96d85)

* [ssh\-addできなかったときへの対処 \- Qiita](https://qiita.com/sshojiro/items/60982f06c1a0ba88c160)
