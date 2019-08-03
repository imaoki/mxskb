---
title: MAXScript スタイルガイド
date: 2017-04-17 23:28:00 +0900
updated: 2019-08-04 05:35:00 +0900
categories: document
tags: maxscript
toc: true
published: true
---
### 言語
{:#language}

#### 禁止
{:#language-prohibited}

* セミコロン
  構文規則が曖昧なので無しで統一する。

* 永続グローバル変数
  シーンに値を保存する場合はカスタムアトリビュートを使用する。

* `break`{:.code .language-maxscript}、`continue`{:.code .language-maxscript}、`exit`{:.code .language-maxscript}、および`return`{:.code .language-maxscript}式
  低速なので使用しないこと。

#### 変数の可視性
{:#language-variable-visibility}

全ての変数および構造体メンバは可視性を明示する。

#### エラー処理
{:#language-error-handling}

複雑なエラー処理を実装するとかえってバグを発見しづらくなるため、可能な限りMAXScriptに委ねる。

##### try式
{:#language-error-try-expression}

プラグインのバグ等、自力で回避できない場合にのみ使用する。

##### throw関数
{:#language-error-throw-function}

言語仕様上は許されるが制限をかけたい場合等、限定的な利用に留める。

#### fileIn関数
{:#language-filein-function}

##### グローバル変数の定義
{:#language-filein-global-variable-difinition}

外部スクリプトファイルを評価することでグローバル変数を定義する場合、スコープの問題を考慮しなければならない。
以下の成功例の中から状況に応じた方法を選択し実装する。

SampleGlobalDecl.ms
: ```maxscript
  global sample = 0
  ```

失敗
: <span/>{:.invisible}

  同一のローカルスコープ内で`fileIn`{:.code .language-maxscript}関数を単独で呼び出し、その後グローバル変数を直接参照する。
  初回実行時にエラーが出るのでこの形式による実装は行わないこと。

  コード
  : ```maxscript
    if GlobalVars.IsGlobal "sample" do GlobalVars.Remove "sample"

    (
      fileIn "SampleGlobalDecl.ms"
      assert (classOf sample == Integer)
      assert (sample == 0)
      format "sample:%\n" sample
    )
    ```

  結果
  : ```maxscript
    Maxscript Assert Failed: DefinitionIsFailure1.ms (line 5)
    Maxscript Assert Failed: DefinitionIsFailure1.ms (line 6)
    sample:undefined
    ```

成功1
: <span/>{:.invisible}

  スクリプト冒頭のグローバルスコープで評価する。

  コード
  : ```maxscript
    if GlobalVars.IsGlobal "sample" do GlobalVars.Remove "sample"

    fileIn "SampleGlobalDecl.ms"
    (
      assert (classOf sample == Integer)
      assert (sample == 0)
      format "sample:%\n" sample
    )
    ```

  結果
  : ```maxscript
    sample:0
    ```

成功2
: <span/>{:.invisible}

  `::`{:.code .language-maxscript}演算子を用いて明示的にグローバル変数を参照する。

  コード
  : ```maxscript
    if GlobalVars.IsGlobal "sample" do GlobalVars.Remove "sample"

    (
      fileIn "SampleGlobalDecl.ms"
      assert (classOf ::sample == Integer)
      assert (::sample == 0)
      format "sample:%\n" sample
    )
    ```

  結果
  : ```maxscript
    sample:0
    ```

    一度`::`{:.code .language-maxscript}演算子で参照すると、それ以降は変数が可視化される。

    コード
    : ```maxscript
      if GlobalVars.IsGlobal "sample" do GlobalVars.Remove "sample"

      (
        fileIn "SampleGlobalDecl.ms"
        ::sample
        format "sample:%\n" sample
      )
      ```

    結果
    : ```maxscript
      sample:0
      ```

成功3
: <span/>{:.invisible}

  `GlobalVars`{:.code .language-maxscript}構造体を利用して参照する。

  コード
  : ```maxscript
    if GlobalVars.IsGlobal "sample" do GlobalVars.Remove "sample"

    (
      fileIn "SampleGlobalDecl.ms"
      assert (classOf (GlobalVars.Get "sample") == Integer)
      assert (GlobalVars.Get "sample" == 0)
      format "sample:%\n" sample
    )
    ```

  結果
  : ```maxscript
    sample:undefined
    ```

    `GlobalVars`{:.code .language-maxscript}経由では可視化されない。

##### 戻り値の代入
{:#language-filein-assignment-of-return-value}

`fileIn`{:.code .language-maxscript}関数の戻り値は通常の関数とは異なるようなので、以下の成功例を基に適宜対策を講じる。

SampleInteger.ms
: ```maxscript
  0
  ```

失敗
: <span/>{:.invisible}

  直接代入すると関数や演算子を利用した際にエラーが出る。

  コード
  : ```maxscript
    (
      local var = fileIn "SampleInteger.ms"
      assert (classOf var == Integer)
      assert (var == 0)
      assert (abs var == 0)
      format "var:%\n" var
    )
    ```

  結果
  : ```maxscript
    Maxscript Assert Failed: AssignmentIsFailure1.ms (line 4)
    -- Error occurred in anonymous codeblock; filename: AssignmentIsFailure1.ms; position: 120; line: 4
    --  Frame:
    --   var: 0
    -- Error occurred during fileIn in "AssignmentIsFailure1.ms"; line number: 4
    >> MAXScript FileIn Exception:
    -- No ""abs"" function for 0 <<
    ```

成功1
: <span/>{:.invisible}

  評価ファイルのコードをブロック式で囲む。

  SampleIntegerBlock.ms
  : <span/>{:.invisible}

    SampleInteger.msの内容をブロック式で囲んだもの。

    ```maxscript
    (0)
    ```

  コード
  : ```maxscript
    (
      local var = fileIn "SampleIntegerBlock.ms"
      assert (classOf var == Integer)
      assert (var == 0)
      assert (abs var == 0)
      format "var:%\n" var
    )
    ```

  結果
  : ```maxscript
    var:0
    ```

成功2（推奨）
: <span/>{:.invisible}

  関数を中継して`fileIn`{:.code .language-maxscript}関数を実行する。

  コード
  : ```maxscript
    (
      fn evaluateFile = (
        fileIn "SampleInteger.ms"
      )
      local var = evaluateFile()
      assert (classOf var == Integer)
      assert (var == 0)
      assert (abs var == 0)
      format "var:%\n" var
    )
    ```

  結果
  : ```maxscript
    var:0
    ```

##### 直接代入の定義毎の可否
{:#language-filein-whether-direct-assignment-per-definition-is-possible}

| 種類                       | 直接代入 |
| -------------------------- | -------- |
| カスタムアトリビュート定義 | 否       |
| ロールアウト定義           | 可       |
| 構造体定義                 | 可       |

<!-- #### 構造体
{:#language-struct}

構造体インスタンスをコピーする際は`mxs.CopyStruct`メソッドを使用する。
詳細は[構造体インスタンスのコピー修正版](https://imaoki.blogspot.jp/2017/03/maxscript-copy-struct-instance.html)を参照。 -->

#### べき乗
{:#language-exponentiation}

べき乗は`pow`{:.code .language-maxscript}関数ではなく`^`{:.code .language-maxscript}演算子を使用する。

##### 計測
{:#language-exponentiation-measurement}

コード
: ```maxscript
  (
    clearListener()

    local sw = DotNetObject "System.Diagnostics.Stopwatch"

    local iteration = 1000000
    local b = 2.0

    sw.Restart()
    for i = 1 to iteration do (
      b ^ 10
    )
    sw.Stop()
    format "  ^:%\n" sw.Elapsed.TotalMilliseconds

    sw.Restart()
    for i = 1 to iteration do (
      pow b 10
    )
    sw.Stop()
    format "pow:%\n" sw.Elapsed.TotalMilliseconds

    sw.Restart()
    for i = 1 to iteration do (
      b * b * b * b * b * b * b * b * b * b
    )
    sw.Stop()
    format "  *:%\n" sw.Elapsed.TotalMilliseconds

    ok
  )
  ```

結果
: ```maxscript
    ^:2538.33d0
  pow:2661.85d0
    *:9412.6d0
  ```

#### 関数の戻り値
{:#language-function-return-value}

配列要素の追加・削除やファイルの作成・削除において真偽値を返す関数
: <span/>{:.invisible}

  動作の成否ではなく結果の成否を返す。

  追加・作成
  : <span/>{:.invisible}

    成功もしくは既に存在する場合は`true`{:.code .language-maxscript}、失敗した場合は`false`{:.code .language-maxscript}。

  削除
  : <span/>{:.invisible}

    成功もしくは存在しなかった場合は`true`{:.code .language-maxscript}、失敗した場合は`false`{:.code .language-maxscript}。

配列インデックスを返す関数
: <span/>{:.invisible}

  `findItem`{:.code .language-maxscript}関数に合わせる。
  存在する場合はその要素のインデックス、存在しない場合は`0`{:.code .language-maxscript}。

### 名前
{:#name}

#### 原則
{:#name-basis}

* パスカル形式またはキャメル形式を使用する。

* スネーク形式は既定の名前に限り使用を認める。
  使用する際は以下のように変換する。

  | 基本形式     | スネーク形式 | ポイント             |
  | ------------ | ------------ | -------------------- |
  | `PascalCase` | `Snake_Case` | 単語の頭文字が大文字 |
  | `camelCase`  | `snake_case` | 全て小文字           |

* チェイン形式は使用しない。
  Web関連のファイル等、慣例的にチェイン形式が利用されているものは除く。

#### 略語
{:#name-abbreviation-and-acronym}

* 2文字以内は全て大文字で記述する。

* 3文字以上の略語はパスカル形式またはキャメル形式にする。

| 一般的な表記 | パスカル形式 | キャメル形式 |
| ------------ | ------------ | ------------ |
| `UI`         | `UIControl`  | `uiControl`  |
| `HTML`       | `HtmlParser` | `htmlParser` |

#### ファイル名
{:#name-filename}

| 種類             | 形式       |
| ---------------- | ---------- |
| ディレクトリ     | PascalCase |
| クラスファイル   | PascalCase |
| その他のファイル | camelCase  |

#### 識別子
{:#name-identifier}

| 種類                                                                                | 基本形式                                  | 備考                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------- | ------------------------------------------------------------ |
| `attributes`{:.code .language-maxscript}定義名                                      | `PascalCase`{:.code .language-maxscript}  |                                                              |
| `macroscript`{:.code .language-maxscript}定義名                                     | `PascalCase`{:.code .language-maxscript}  |                                                              |
| `parameters`{:.code .language-maxscript}定義名                                      | `PascalCase`{:.code .language-maxscript}  |                                                              |
| `plugin`{:.code .language-maxscript}定義名                                          | `PascalCase`{:.code .language-maxscript}  |                                                              |
| `rcmenu`{:.code .language-maxscript}定義名                                          | `PascalCase`{:.code .language-maxscript}  | 構造体定義と同様の扱い                                       |
| `rollout`{:.code .language-maxscript}定義名                                         | `PascalCase`{:.code .language-maxscript}  | 構造体定義と同様の扱い                                       |
| `struct`{:.code .language-maxscript}の`private`{:.code .language-maxscript}メンバ名 | `camelCase`{:.code .language-maxscript}   |                                                              |
| `struct`{:.code .language-maxscript}の`public`{:.code .language-maxscript}メンバ名  | `PascalCase`{:.code .language-maxscript}  |                                                              |
| `struct`{:.code .language-maxscript}定義名                                          | `PascalCase`{:.code .language-maxscript}  |                                                              |
| `tool`{:.code .language-maxscript}定義名                                            | `PascalCase`{:.code .language-maxscript}  |                                                              |
| UIコントロール変数名                                                                | `PascalCase`{:.code .language-maxscript}  | 構造体`public`{:.code .language-maxscript}メンバと同様の扱い |
| イベントハンドラ名                                                                  | `PascalCase`{:.code .language-maxscript}  | 構造体`public`{:.code .language-maxscript}メンバと同様の扱い |
| インタフェース                                                                      | `PascalCase`{:.code .language-maxscript}  |                                                              |
| 関数名                                                                              | `camelCase`{:.code .language-maxscript}   |                                                              |
| 記号パス名                                                                          | `$PascalCase`{:.code .language-maxscript} |                                                              |
| 定数                                                                                | `PascalCase`{:.code .language-maxscript}  |                                                              |
| 変数名                                                                              | `camelCase`{:.code .language-maxscript}   |                                                              |
| 名前値リテラル                                                                      | `#PascalCase`{:.code .language-maxscript} |                                                              |
| 予約キーワード                                                                      | `camelCase`{:.code .language-maxscript}   |                                                              |

#### UIコントロールの変数名
{:#name-ui-control-variable-name}

UIコントロールの変数名の先頭には以下に定めた識別子を使用する。

##### 標準コントロール
{:#name-ui-control-standard}

| 種類                                         | 型                                                      | 識別子                              |
| -------------------------------------------- | ------------------------------------------------------- | ----------------------------------- |
| `angle`{:.code .language-maxscript}          | `AngleControl`{:.code .language-maxscript}              | `Ang`{:.code .language-maxscript}   |
| `bitmap`{:.code .language-maxscript}         | `BitmapControl`{:.code .language-maxscript}             | `Bmp`{:.code .language-maxscript}   |
| `button`{:.code .language-maxscript}         | `ButtonControl`{:.code .language-maxscript}             | `Btn`{:.code .language-maxscript}   |
| `checkBox`{:.code .language-maxscript}       | `CheckBoxControl`{:.code .language-maxscript}           | `Ckbx`{:.code .language-maxscript}  |
| `checkButton`{:.code .language-maxscript}    | `CheckButtonControl`{:.code .language-maxscript}        | `Ckbtn`{:.code .language-maxscript} |
| `colorPicker`{:.code .language-maxscript}    | `ColorPickerControl`{:.code .language-maxscript}        | `Cpk`{:.code .language-maxscript}   |
| `comboBox`{:.code .language-maxscript}       | `ComboBoxControl`{:.code .language-maxscript}           | `Cbx`{:.code .language-maxscript}   |
| `curveControl`{:.code .language-maxscript}   | `MaxCurveCtl`{:.code .language-maxscript}               | `Cc`{:.code .language-maxscript}    |
| `dropDownList`{:.code .language-maxscript}   | `ComboBoxControl`{:.code .language-maxscript}（バグ？） | `Ddl`{:.code .language-maxscript}   |
| `editText`{:.code .language-maxscript}       | `EditTextControl`{:.code .language-maxscript}           | `Edt`{:.code .language-maxscript}   |
| `groupBox`{:.code .language-maxscript}       | `GroupBoxControl`{:.code .language-maxscript}           | `Gbx`{:.code .language-maxscript}   |
| `hyperLink`{:.code .language-maxscript}      | `LinkControl`{:.code .language-maxscript}               | `Hlk`{:.code .language-maxscript}   |
| `imgTag`{:.code .language-maxscript}         | `ImgTag`{:.code .language-maxscript}                    | `Itg`{:.code .language-maxscript}   |
| `label`{:.code .language-maxscript}          | `LabelControl`{:.code .language-maxscript}              | `Lbl`{:.code .language-maxscript}   |
| `listBox`{:.code .language-maxscript}        | `ListBoxControl`{:.code .language-maxscript}            | `Lbx`{:.code .language-maxscript}   |
| `mapButton`{:.code .language-maxscript}      | `MapButtonControl`{:.code .language-maxscript}          | `Mpbtn`{:.code .language-maxscript} |
| `materialButton`{:.code .language-maxscript} | `MtlButtonControl`{:.code .language-maxscript}          | `Mtbtn`{:.code .language-maxscript} |
| `multiListBox`{:.code .language-maxscript}   | `MultiListBoxControl`{:.code .language-maxscript}       | `Mlbx`{:.code .language-maxscript}  |
| `pickButton`{:.code .language-maxscript}     | `PickerControl`{:.code .language-maxscript}             | `Pkbtn`{:.code .language-maxscript} |
| `progressBar`{:.code .language-maxscript}    | `ProgressBar`{:.code .language-maxscript}               | `Pbr`{:.code .language-maxscript}   |
| `radioButtons`{:.code .language-maxscript}   | `RadioControl`{:.code .language-maxscript}              | `Rdbtn`{:.code .language-maxscript} |
| `rollout`{:.code .language-maxscript}        | `RolloutClass`{:.code .language-maxscript}              | `Rlt`{:.code .language-maxscript}   |
| `slider`{:.code .language-maxscript}         | `SliderControl`{:.code .language-maxscript}             | `Sld`{:.code .language-maxscript}   |
| `spinner`{:.code .language-maxscript}        | `SpinnerControl`{:.code .language-maxscript}            | `Spn`{:.code .language-maxscript}   |
| `subRollout`{:.code .language-maxscript}     | `SubRollout`{:.code .language-maxscript}                | `Srlt`{:.code .language-maxscript}  |
| `timer`{:.code .language-maxscript}          | `Timer`{:.code .language-maxscript}                     | `Tmr`{:.code .language-maxscript}   |

##### RCMenu
{:#name-ui-control-rcmenu}

| 種類                                    | 型                                   | 識別子                            |
| --------------------------------------- | ------------------------------------ | --------------------------------- |
| `rcMenu`{:.code .language-maxscript}    | `RCMenu`{:.code .language-maxscript} | `Mnu`{:.code .language-maxscript} |
| `menuItem`{:.code .language-maxscript}  | `Value`{:.code .language-maxscript}  | `Mi`{:.code .language-maxscript}  |
| `separator`{:.code .language-maxscript} | `Value`{:.code .language-maxscript}  | `Sep`{:.code .language-maxscript} |
| `subMenu`{:.code .language-maxscript}   |                                      |                                   |

##### .NETコントロール
{:#name-ui-control-dotnet}

| 種類                                                                                             | 識別子                            |
| ------------------------------------------------------------------------------------------------ | --------------------------------- |
| [`System.Windows.Forms.ListView`{:.code .language-maxscript}][System.Windows.Forms.ListView]     | `Lvw`{:.code .language-maxscript} |
| [`System.Windows.Forms.Splitter`{:.code .language-maxscript}][System.Windows.Forms.Splitter]     | `Spl`{:.code .language-maxscript} |
| [`System.Windows.Forms.StatusBar`{:.code .language-maxscript}][System.Windows.Forms.StatusBar]   | `Sbr`{:.code .language-maxscript} |
| [`System.Windows.Forms.TabControl`{:.code .language-maxscript}][System.Windows.Forms.TabControl] | `Tab`{:.code .language-maxscript} |
| [`System.Windows.Forms.TreeView`{:.code .language-maxscript}][System.Windows.Forms.TreeView]     | `Tvw`{:.code .language-maxscript} |
| [`System.Windows.Forms.WebBrowser`{:.code .language-maxscript}][System.Windows.Forms.WebBrowser] | `Wb`{:.code .language-maxscript}  |

[System.Windows.Forms.ListView]:https://docs.microsoft.com/ja-jp/dotnet/api/system.windows.forms.listview
[System.Windows.Forms.Splitter]:https://docs.microsoft.com/ja-jp/dotnet/api/system.windows.forms.splitter
[System.Windows.Forms.StatusBar]:https://docs.microsoft.com/ja-jp/dotnet/api/system.windows.forms.statusbar
[System.Windows.Forms.TabControl]:https://docs.microsoft.com/ja-jp/dotnet/api/system.windows.forms.tabcontrol
[System.Windows.Forms.TreeView]:https://docs.microsoft.com/ja-jp/dotnet/api/system.windows.forms.treeview
[System.Windows.Forms.WebBrowser]:https://docs.microsoft.com/ja-jp/dotnet/api/system.windows.forms.webbrowser

<!--
###### 複合コントロール
{:#name-ui-control-compound}

| 種類                                               | 識別子                               |
| -------------------------------------------------- | ------------------------------------ |
| `dropDownMenu`{:.code .language-maxscript}         | `Ddm`{:.code .language-maxscript}    |
| `dropDownMenuButton`{:.code .language-maxscript}   | `Ddmbtn`{:.code .language-maxscript} |
| `dropDownMenuEditText`{:.code .language-maxscript} | `Ddmedt`{:.code .language-maxscript} |
-->

### スタイル
{:#style}

#### 全般
{:#style-general}

* 1行の文字数は80桁以内に収まるよう努める。

* インデントは半角スペースを2つ使用する。

#### 継続行
{:#style-continuation-line}

* 継続行は半角スペース4つのぶら下げインデントを行う。

  ```maxscript
  foo \
      bar
  ```

* 部分式の終わりで区切ること。

  ```maxscript
  -- 悪い例
  foo and \
      bar and \
      baz

  for i = 1 to 10 where \
      mod i 2 == 0 do (
    expr
  )

  -- 良い例
  foo \
      and bar \
      and baz

  for i = 1 to 10 \
      where mod i 2 == 0 do (
    expr
  )
  ```

* 構文規則で改行が許されている場合でも、一貫性のために明示的な継続行にする。

  ```maxscript
  -- 悪い例
  foo +
      bar -
      baz

  -- 良い例
  foo + \
      bar - \
      baz

  -- より望ましい例
  foo \
      + bar \
      - baz
  ```

#### 空白
{:#style-whitespace}

演算子の前後
: * 前後とも入れる

    ```maxscript
    x + y == z
    foo and bar
    ```

`:`{:.code .language-maxscript}の前後
: * 前には入れない

    ```maxscript
    varname:
    ```

  * `case`{:.code .language-maxscript}式のラベルの後には入れる

    ```maxscript
    case of (
      (#Name): expr
      default: expr
    )
    ```

  * キーワードパラメータの後には入れない

    ```maxscript
    fn foo x:0 y: = (
      -- ...
    )
    foo x:1
    ```

括弧の内側
: * 括弧の内側には入れない

    ```maxscript
    #(foo, bar)
    [x, y, z]
    foo[1]
    ```

`,`{:.code .language-maxscript}の前後
: * 前には入れない

    ```maxscript
    [x, y, z]
    ```

  * 改行しない場合は後に入れる

    ```maxscript
    #(foo, bar, baz)
    ```

  * 改行する場合は後には入れない

    ```maxscript
    #(
      foo,
      bar,
      baz
    )
    ```

#### 比較式
{:#style-comparison-expression}

##### 原則
{:#style-comparison-expression-basis}

原則としてテスト値を前に、期待値を後に記述する。

```maxscript
currentTime == 0
```

##### 範囲判定
{:#style-comparison-expression-range}

値が範囲内、または範囲外かどうかをテストする場合は視覚的に分かりやすい順序で記述する。

範囲内
: ```maxscript
  20 <= currentTime and currentTime <= 60
  ```

範囲外
: ```maxscript
  currentTime < 20 and 60 < currentTime
  ```

#### ブロック式
{:#style-block-expression}

##### 字下げスタイル
{:#style-block-expression-indentation}

* 部分式であるブロック式は、直前のトークンと同じ行で開始する。（[K&Rスタイル](https://ja.wikipedia.org/wiki/%E5%AD%97%E4%B8%8B%E3%81%92%E3%82%B9%E3%82%BF%E3%82%A4%E3%83%AB#K.26R.E3.81.AE.E3.82.B9.E3.82.BF.E3.82.A4.E3.83.AB)）

  ```maxscript
  -- オールマンスタイルではなく
  fn foo =
  (
    expr
  )

  -- K&Rスタイルで
  fn foo = (
    expr
  )
  ```

##### ブロック式の省略
{:#style-block-expression-omit}

* ぶら下がり文によるブロック式の省略は行わないこと。

  ```maxscript
  -- 悪い例
  if foo then
    expr
  else
    expr

  -- 良い例
  if foo then (
    expr
  )
  else (
    expr
  )
  ```

* 式が1行に収まる場合はブロック式を省略してもよい。

  ```maxscript
  format "%%" (if i == 1 then "" else ",") i

  fn foo obj = obj != undefined

  for i = 1 to 10 collect i
  ```

#### コンテキスト式
{:#style-context-expression}

* ブール値の指定には`true`{:.code .language-maxscript}または`false`{:.code .language-maxscript}を使用する。
  `on`{:.code .language-maxscript}を使用するとテキストエディタの構文ハイライトが正しく機能しない場合があるため。

#### Case式
{:#style-case-expression}

* 必ず`default`{:.code .language-maxscript}ラベルを定義する。

* `default`{:.code .language-maxscript}以外のラベルは必ずブロック式にする。
  リテラルのみだとエラーになる場合があるため。

#### 定義構文
{:#style-definition-syntax}

構造体、カスタムアトリビュート、ロールアウト等の定義構文は制御文や関数定義と同様にキャメル形式で記述する。

```maxscript
struct Foo (
  on Create do ()
)

attributes Foo version:1 (
)

rollout rlt "Foo" rolledUp:false (
  spinner spnValue "Value:" range:[0, 100, 0] type:#Integer
)

rcMenu mnu (
  menuItem mi "Item"
)

macroScript Macro buttonText:"Macro" (
)
```

#### 構造体メンバの宣言順序
{:#style-declarative-order-of-structure-members}

1.  プロパティ

    1.  `public`{:.code .language-maxscript}

    2.  `private`{:.code .language-maxscript}

2.  メソッド

    1.  `public`{:.code .language-maxscript}

    2.  `private`{:.code .language-maxscript}

3.  `OnClone`{:.code .language-maxscript}メソッド
    `public`{:.code .language-maxscript}関数ではあるがイベントハンドラに近い扱いなのでこの位置に記述する。

     ```maxscript
     public fn OnClone obj = (
       this = obj
       this.prop = mxs.RecursiveCopy this.prop
       ok
     ),
     ```

4. イベントハンドラ

#### assert関数
{:#style-assert-function}

比較式同様にテスト値を前に、期待値を後に記述する。
`assert_equal`{:.code .language-maxscript}等、他の`assert_*`{:.code .language-maxscript}関数とは逆の順序だが、`actual is expected`の形式の方が分かりやすいためこのように統一する。

```maxscript
assert (actual == expected)
```

#### コメント
{:#style-comment}

* コメントの記号とテキストの間には半角スペースを1つ入れる。

  ```maxscript
  -- テキスト

  /* テキスト */
  ```

  ただし、コードのコメントアウトには空白を挟まない。

  ```maxscript
  --format "%\n" foo
  ```

* 複数行のブロックコメントにおいてテキストのインデントは行わないこと。

  ```maxscript
  -- 悪い例
  /*
    テキスト
  */

  -- 良い例
  /*
  テキスト
  */
  ```

#### ドキュメンテーションコメント
{:#style-documentation-comment}

詳細は[MAXScript ドキュメンテーションコメント](2017-02-27-specification-of-documentation-comment)を参照。

##### 文体
{:#style-documentation-comment-style}

* 普通体で記述する。

* 句読点を付ける。
  ただし、テーブル内の項目や値には付けない。
  テーブル内でも文章の場合には付ける。

* `BooleanClass`{:.code .language-maxscript}の変数、パラメータ、戻り値等の説明は以下の形式で記述する。

  ```markdown
  ○○の場合は`true`{:.code .language-maxscript}、○○の場合は`false`{:.code .language-maxscript}。
  ```

* 既定値は文章の最後に記述する。

  ```markdown
  ○○の値。既定値は○○。
  ```

### 開発環境
{:#developing-environment}

#### 3ds Maxの設定
{:#developing-environment-3dsmax-settings}

Preference Settings
: Files
  : <span/>{:.invisible}

    File String Data Handling

    | 項目                                              | 状態       |
    | ------------------------------------------------- | ---------- |
    | Save strings in legacy non-scene files using UTF8 | オフ       |
    | Default Language                                  | `Japanese` |

#### 外部テキストエディタの設定
{:#developing-environment-external-text-editor-settings}

| 項目                 | 設定          |
| -------------------- | ------------- |
| 文字エンコーディング | UTF-8 BOM無し |
| 改行コード           | LF            |
| タブ幅               | 2桁           |
| インデント           | 半角スペース  |

#### SciTEの設定
{:#developing-environment-scite-settings}

maxscript.properties
: ```diff
  --- Default/maxscript.properties
  +++ 3ds Max 2018/maxscript.properties
  @@ -74 +74 @@
  -style.MAXScript.0=fore:#808080
  +style.MAXScript.0=fore:#D0D0D0
  @@ -90 +90 @@
  -style.MAXScript.8=$(colour.operator),bold
  +style.MAXScript.8=$(colour.operator)
  @@ -98 +98 @@
  -style.MAXScript.12=$(colour.keyword),bold
  +style.MAXScript.12=$(colour.keyword)
  @@ -100 +100 @@
  -style.MAXScript.13=$(colour.preproc),bold
  +style.MAXScript.13=$(colour.preproc)
  @@ -110 +110 @@
  -style.MAXScript.18=fore:#00B040,italics
  +style.MAXScript.18=fore:#00B040
  @@ -112 +112 @@
  -style.MAXScript.19=fore:#D0B080,italics
  +style.MAXScript.19=fore:#D0B080
  @@ -114 +114 @@
  -style.MAXScript.20=fore:#804020,italics
  +style.MAXScript.20=fore:#804020
  @@ -116 +116 @@
  -style.MAXScript.21=fore:#3060A0,italics
  +style.MAXScript.21=fore:#3060A0
  @@ -120 +120 @@
  -style.MAXScript.23=fore:#FF0000,bold,italics
  +style.MAXScript.23=fore:#FF0000
  ```

MXS_Editor.properties
: ```diff
  --- Default/MXS_Editor.properties
  +++ 3ds Max 2018/MXS_Editor.properties
  @@ -56 +56 @@
  -#view.eol=1
  +view.eol=1
  @@ -59 +59 @@
  -view.whitespace=0
  +view.whitespace=1
  @@ -108,4 +108,6 @@
  -tabsize=8
  -indent.size=8
  -use.tabs=1
  -#indent.auto=1
  +tabsize=2
  +tab.size.$(file.patterns.MAXScript)=2
  +indent.size=2
  +indent.size.$(file.patterns.MAXScript)=2
  +use.tabs=0
  +indent.auto=0
  @@ -116 +118,2 @@
  -#backspace.unindents=0
  +backspace.unindents=1
  +indent.maintain.$(file.patterns.MAXScript)=1
  @@ -151,2 +154,2 @@
  -#eol.mode=LF
  -eol.auto=1
  +eol.mode=LF
  +eol.auto=0
  @@ -173,9 +176,5 @@
  -statusbar.number=4
  -statusbar.text.1=\
  -li=$(LineNumber) co=$(ColumnNumber) offset=$(CharOffset) $(OverType) ($(EOLMode)) $(FileAttr)
  -statusbar.text.2=\
  -$(BufferLength) chars in $(NbOfLines) lines. Sel: $(SelLength) chars.
  -statusbar.text.3=\
  -Now is: Date=$(CurrentDate) Time=$(CurrentTime)
  -statusbar.text.4=\
  -$(FileNameExt) : $(FileDate) - $(FileTime) | Attributes: $(FileAttr) | Encoding: $(Encoding)
  +statusbar.number=2
  +statusbar.text.1=$(SelLength) chars selected. | Line:$(LineNumber) Column:$(ColumnNumber) | ($(EOLMode)) | $(Encoding) | $(OverType) | $(FileAttr)
  +statusbar.text.2=$(BufferLength) chars in $(NbOfLines) lines. Sel: $(SelLength) chars.
  +statusbar.text.3=Now is: Date=$(CurrentDate) Time=$(CurrentTime)
  +statusbar.text.4=$(FileNameExt) : $(FileDate) - $(FileTime) | Attributes: $(FileAttr) | Encoding: $(Encoding)
  @@ -184 +183 @@
  -code.page=-1
  +#code.page=-1
  @@ -189 +188 @@
  -#character.set=128
  +character.set=128
  @@ -191 +190 @@
  -#code.page=65001
  +code.page=65001
  @@ -246,3 +245,3 @@
  -font.base=font:Verdana,size:10
  -font.small=font:Verdana,size:8
  -font.comment=font:Comic Sans MS,size:9
  +font.base=font:Ricty Diminished Discord,size:10
  +font.small=font:Ricty Diminished Discord,size:10
  +font.comment=font:Ricty Diminished Discord,size:10
  @@ -253,5 +252,5 @@
  -font.text=font:Times New Roman,size:11
  -font.text.comment=font:Verdana,size:9
  -font.embedded.base=font:Verdana,size:9
  -font.embedded.comment=font:Comic Sans MS,size:8
  -font.monospace=font:Courier New,size:10
  +font.text=font:Ricty Diminished Discord,size:10
  +font.text.comment=font:Ricty Diminished Discord,size:10
  +font.embedded.base=font:Ricty Diminished Discord,size:10
  +font.embedded.comment=font:Ricty Diminished Discord,size:10
  +font.monospace=font:Ricty Diminished Discord,size:10
  @@ -303,2 +302,2 @@
  -print.header.style=font:Arial,size:12,bold
  -print.footer.style=font:Arial Narrow,size:10,italics
  +print.header.style=font:Ricty Diminished Discord,size:10
  +print.footer.style=font:Ricty Diminished Discord,size:10
  @@ -344,2 +343,3 @@
  -#user.context.menu=\
  -#||\
  +user.context.menu=\
  | +      |                      | \ |
  | +UTF-8 | IDM_ENCODING_UCOOKIE |   |
  ```
