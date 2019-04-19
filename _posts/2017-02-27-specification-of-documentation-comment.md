---
title: MAXScript ドキュメンテーションコメント
date: 2017-02-27 00:16:00 +0900
updated: 2019-04-19 17:56:00 +0900
categories: document
tags: maxscript
toc: true
published: true
---
APIの仕様を記述するためのコメント書式。

### 構文
{:#syntax}

```ebnf
doc_comment , { keyword } , var_name
```

式の種類を問わず、この構文に当てはまる箇所がドキュメント化される。

#### 例
{:#syntax-example}

```maxscript
/** @var <ClassName> 変数。 */
global sampleVar

/**
構造体。
@remarks 補足説明。
*/
struct SampleStruct (
  /** @prop <Number> 数値。既定値は`0`。 */
  public Num = 0,
  /** @prop <String> 文字列。既定値は`""`。 */
  private str = "",

  /** @prop <DotNetClass:System.Text.RegularExpressions.Regex> */
  private regexClass = DotNetClass "System.Text.RegularExpressions.Regex",

  /**
  パブリックメソッド。
  @param param1 <Integer> 位置パラメータ。
  @param param2 <Name> 位置パラメータ。
  @param &param3 <String> 参照パラメータ。
  @param param4: <Array<DataPair Name:<String> Value:<Any>>> キーワードパラメータ。
  `Name`
  : 名前。

  `Value`
  : 値。

    ```maxscript
    getHashValue "Hello World" 17
    ```
  @param &param5: <Name> キーワード参照パラメータ。
  | 値     | 説明 |
  | ------ | ---- |
  | `#Foo` | ほげ |
  | `#Bar` | ぴよ |
  @return <OkClass> 戻り値。
  @remarks 補足説明。
  */
  public fn PublicMethod param1 param2 &param3 param4:#() &param5: = (
    /** @var <Float> ローカル変数。 */
    local i
    (
      ok
    )
    ok
  ),

  /**
  プライベートメソッド。
  @return <OkClass>
  */
  private fn privateMethod = (
    ok
  ),

  on Create do ()
)
```

### コメントの構成
{:#structure}

#### 構文
{:#structure-syntax}

```ebnf
"/**" , { text } , { tag } , "*/"
```

* 開始記号の`*`は2つ必要。

* 開始記号直後のテキストは「概要」になる。

#### テキスト（text）
{:#structure-text}

概要や詳細を[Markdown](https://ja.wikipedia.org/wiki/Markdown)で記述する。
テキスト内で`@`を使用したい場合は`\@`を用いること。

<!-- デフォルトのパーサーには[markdown-it](https://github.com/markdown-it/markdown-it)を採用した。
プラグインは[definition list](https://github.com/markdown-it/markdown-it-deflist)のみ追加してある。 -->

#### タグ（tag）
{:#structure-tag}

パラメータや戻り値の仕様を記述する。

構文
: ```ebnf
  tag_type , [ param_name ] , [ class_form ] , { text }
  ```

##### タグタイプ（tag_type）
{:#structure-tag-type}

| タイプ    | 用途             |
| --------- | ---------------- |
| `@param`  | 関数パラメータ   |
| `@prop`   | 構造体プロパティ |
| `@remark` | 補足説明         |
| `@return` | 戻り値           |
| `@var`    | 変数             |

##### パラメータ名（param_name）
{:#structure-tag-param-name}

関数のパラメータ名。

構文
: ```ebnf
  [ "&" ] , ( identifier | quoted_name ) , [ ":" ]
  ```

##### 型（class_form）
{:#structure-tag-class-form}

パラメータや戻り値の型。

構文
: ```ebnf
  "<" , class_decl , { "|" , class_decl } , ">"
  ```

###### 型宣言（class_decl）
{:#structure-tag-class-form-class-decl}

型表記は次の4種類の形式の組み合わせで表現する。

| 形式                                     | 構文                                                       | 例                                         |
| ---------------------------------------- | ---------------------------------------------------------- | ------------------------------------------ |
| `accessor_def`{:.code .language-ebnf}    | `identifier , class_form`{:.code .language-ebnf}           | `Foo<Bar>`<br>`Foo<Bar<Baz>>`              |
| `class_def`{:.code .language-ebnf}       | `identifier ,  ":" , class_name`{:.code .language-ebnf}    | `Class:Foo`<br>`Class:Foo.Bar`             |
| `class_name`{:.code .language-ebnf}      | `identifier , { "." , identifier }`{:.code .language-ebnf} | `Foo`<br>`Foo.Bar`                         |
| `constructor_def`{:.code .language-ebnf} | `identifier , { parameter }+`{:.code .language-ebnf}       | `Foo <Bar> <Baz>`<br>`Foo x:<Bar> y:<Baz>` |

###### 識別子の調査方法
{:#structure-tag-class-form-identifier-search-method}

`classOf`{:.code .language-maxscript}関数等を使用して調べる。

| 例                                                     | 識別子                                      |
| ------------------------------------------------------ | ------------------------------------------- |
| `classOf 1.0`{:.code .language-maxscript}              | `Float`{:.code .language-maxscript}         |
| `superClassOf 1.0`{:.code .language-maxscript}         | `Number`{:.code .language-maxscript}        |
| `classOf $`{:.code .language-maxscript}                | `Box`{:.code .language-maxscript}           |
| `superClassOf $`{:.code .language-maxscript}           | `GeometryClass`{:.code .language-maxscript} |
| `superClassOf (classOf $)`{:.code .language-maxscript} | `Node`{:.code .language-maxscript}          |

###### .NETクラスの識別子
{:#structure-tag-class-form-dotnet-class-identifier}

[\.NET API ブラウザー](https://docs.microsoft.com/ja-jp/dotnet/api/)、または次のような方法で調べる。

```maxscript
(
  local obj = (DotNetClass "System.Text.Encoding").UTF8
  format "%\n" ((DotNet.GetType obj).ToString())
)

-- 結果
System.Text.UTF8Encoding
```

###### 特殊な型
{:#structure-tag-class-form-special-types}

不特定の型を取りうる場合
: | 形式                                | 構文                           |
  | ----------------------------------- | ------------------------------ |
  | `class_name`{:.code .language-ebnf} | `"Any"`{:.code .language-ebnf} |

DataPair値
: | 形式                                     | 構文                                                                                                                                                             |
  | ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `constructor_def`{:.code .language-ebnf} | `"DataPair" , class_form , class_form`{:.code .language-ebnf}<br>`"DataPair" , var_name , ":" , class_form , var_name , ":" , class_form`{:.code .language-ebnf} |

配列
: | 形式                                  | 構文                                          |
  | ------------------------------------- | --------------------------------------------- |
  | `accessor_def`{:.code .language-ebnf} | `"Array" , class_form`{:.code .language-ebnf} |

構造体
: | 種類                   | 形式                                | 構文                                                    |
  | ---------------------- | ----------------------------------- | ------------------------------------------------------- |
  | 定義                   | `class_def`{:.code .language-ebnf}  | `"StructDef" , ":" , class_name`{:.code .language-ebnf} |
  | インスタンス           | `class_def`{:.code .language-ebnf}  | `"Struct" , ":" , class_name`{:.code .language-ebnf}    |
  | 型が不明な定義         | `class_name`{:.code .language-ebnf} | `"StructDef"`{:.code .language-ebnf}                    |
  | 型が不明なインスタンス | `class_name`{:.code .language-ebnf} | `"Struct"`{:.code .language-ebnf}                       |

.NETクラス
: | 型                                          | 形式                               | 構文                                                        |
  | ------------------------------------------- | ---------------------------------- | ----------------------------------------------------------- |
  | `DotNetClass`{:.code .language-maxscript}   | `class_def`{:.code .language-ebnf} | `"DotNetClass" , ":" , class_name`{:.code .language-ebnf}   |
  | `DotNetObject`{:.code .language-maxscript}  | `class_def`{:.code .language-ebnf} | `"DotNetObject" , ":" , class_name`{:.code .language-ebnf}  |
  | `DotNetControl`{:.code .language-maxscript} | `class_def`{:.code .language-ebnf} | `"DotNetControl" , ":" , class_name`{:.code .language-ebnf} |

参照値
: | 形式                               | 構文                                                   |
  | ---------------------------------- | ------------------------------------------------------ |
  | `class_def`{:.code .language-ebnf} | `"ValueRef" , ":" , class_name`{:.code .language-ebnf} |

###### 入れ子
{:#structure-tag-class-form-nesting}

型表記は無制限に入れ子が可能。

```maxscript
/**
Array<Array<DataPair key:<String> value:<Any>>>
*/
```

### 制約等
{:#constraint}

* 変数、およびキーワードパラメータの既定値は認識できない。
  必要であればテキストの末尾に以下のような形式で記述する。

  ```maxscript
  /**
  @param digit: <Integer> 桁数。既定値は`40`。
  */
  ```

* 式の宣言部とそれに続くブロック式の構造的な関連付けは行わない。
  例えば定義構造の入れ子は次のような構造として解釈される。

  コード
  : ```maxscript
    /**
    Fooとは
    */
    struct Foo (
      /**
      Barとは
      */
      public fn Bar = (
      )
    )
    ```

  解析後の構造
  : 誤
    : * `struct`{:.code .language-maxscript}

        * `Foo`{:.code .language-maxscript}

        * `"Fooとは"`{:.code .language-maxscript}

        * `(`{:.code .language-maxscript}

          * `function`{:.code .language-maxscript}

            * `Bar`{:.code .language-maxscript}

            * `"Barとは"`{:.code .language-maxscript}

            * `()`{:.code .language-maxscript}

          `)`{:.code .language-maxscript}

    正
    : * `struct`{:.code .language-maxscript}

        * `Foo`{:.code .language-maxscript}

        * `"Fooとは"`{:.code .language-maxscript}

      * `(`{:.code .language-maxscript}

        * `function`{:.code .language-maxscript}

          * `Bar`{:.code .language-maxscript}

          * `"Barとは"`{:.code .language-maxscript}

        * `()`{:.code .language-maxscript}

        `)`{:.code .language-maxscript}

<!-- * ブロック式の深さは見出し要素のレベルに反映される。 -->

<!--
### 実装

字句解析
: <span/>{:.invisible}

  正規表現によるパターンマッチング。

パーサ
: <span/>{:.invisible}

  左再帰の無い独自の文法を用いた再帰下降パーサ。
  木構造の中間データを生成する。

レンダラ
: <span/>{:.invisible}

  中間データを再帰的に解析。

#### カスタマイズ

各段階のクラスを差し替えることで可能。
-->

### 文法
{:#grammar}

doc.ebnf
: ```ebnf
              program = { doc_delimiter } , { doc , { doc_delimiter } } , eof ;

                  doc = simple_doc
                      | doc_seq
                      ;

          simple_doc = doc_comment , { keyword_delimiter } , { keyword , { keyword_delimiter } } , var_name ;

              doc_seq = "(" , { doc_delimiter } , { doc , { doc_delimiter } }+ , ")" ;

        doc_delimiter = ? Any tokens except doc_comment or "(" or ")" or eof ? ;

    keyword_delimiter = ? Any tokens except keyword or var_name ? ;

            var_name = identifier - keyword
                      | quoted_name
                      ;

      string_literal = '@"' , { any_char - '"' } , '"'
                      | '"' , { any_char - '"' | '\"' | "\n" | "\r" | "\t" | "\*" | "\?" | "\\" | "\%" | "\x" , [ hex_digits ] } , '"'
                      ;

    path_name_literal = "$" , [ path ] ;

                path = [ objectset ] , [ "/" ] , [ levels ] , level ;

              levels = level , { "/" , level } ;

                level = { alphanumeric | "_" | "*" | "?" | "\" }
                      | "'" , { level_character } , "'"
                      ;

            objectset = "cameras"
                      | "geometry"
                      | "helpers"
                      | "lights"
                      | "objects"
                      | "selection"
                      | "shapes"
                      | "spacewarps"
                      | "systems"
                      ;

      level_character = any_char - "'" | "\'" | "\*" | "\?" | "\\" ;

          identifier = ( letter | "_" ) , { alphanumeric | "_" } ;

          quoted_name = "'" , { any_char - "'" | "\'" } , "'" ;

        alphanumeric = letter | digit ;

              decimal = digits , "." , [ digits ]
                      | "." , digits
                      ;

          hexadecimal = "0" , ( "x" | "X" ) , [ hex_digits ] ;

              digits = { digit }+ ;

          hex_digits = { hex_digit }+ ;

                digit = ? 0-9 ? ;

            hex_digit = ? a-fA-F0-9 ? ;

              letter = ? a-zA-Z ? ;

          doc_comment = "/**" , { any_char - "*/" } , "*/" ;

    delimited_comment = "/*" , { any_char - "*/" } , "*/" ;

  single_line_comment = "--" , { any_char - new_line } ;

          whitespace = { space }+ | "\" , { space } , { new_line }+ ;

                space = " " | "\t" ;

            delimiter = new_line | ";" ;

            new_line = "\n" ;

            operator = "!="
                      | "&"
                      | "*"
                      | "*="
                      | "+"
                      | "+="
                      | "-"
                      | "-="
                      | "/"
                      | "/="
                      | "<"
                      | "<="
                      | "="
                      | "=="
                      | ">"
                      | ">="
                      ;

          punctuator = "#"
                      | "$"
                      | "("
                      | ")"
                      | ","
                      | "."
                      | ":"
                      | ";"
                      | "?"
                      | "["
                      | "]"
                      | "{"
                      | "}"
                      ;

              keyword = "about"
                      | "and"
                      | "animate"
                      | "as"
                      | "at"
                      | "attributes"
                      | "by"
                      | "case"
                      | "catch"
                      | "collect"
                      | "continue"
                      | "coordsys"
                      | "do"
                      | "else"
                      | "exit"
                      | "fn"
                      | "for"
                      | "from"
                      | "function"
                      | "global"
                      | "if"
                      | "in"
                      | "local"
                      | "macroscript"
                      | "mapped"
                      | "max"
                      | "not"
                      | "of"
                      | "off"
                      | "on"
                      | "or"
                      | "parameters"
                      | "persistent"
                      | "plugin"
                      | "private"
                      | "public"
                      | "rcmenu"
                      | "return"
                      | "rollout"
                      | "set"
                      | "struct"
                      | "then"
                      | "throw"
                      | "to"
                      | "tool"
                      | "try"
                      | "undo"
                      | "utility"
                      | "when"
                      | "where"
                      | "while"
                      | "with"
                      ;

                  eof = ? End of file ? ;

            any_char = ? Any visible characters ? ;
  ```

doc_comment.ebnf
: ```ebnf
            program = [ whitespace ] , start , { text } , { tag } , [ whitespace ] , end , [ whitespace ] , eof ;

                tag = tag_type , [ whitespace ] , [ param_name ] , [ whitespace ] , [ class_form ] , { text } ;

          tag_type = "@" , keyword ;

        param_name = var_name , [ ":" ] ;

          var_name = [ "&" ] , ( identifier | quoted_name ) ;

        class_form = "<" , class_decl , { "|" , class_decl } , ">" ;

        class_decl = accessor_def
                    | class_def
                    | class_name
                    | constructor_def
                    ;

      accessor_def = identifier , class_form ;

          class_def = identifier , ":" , class_name ;

        class_name = identifier , { "." , identifier } ;

    constructor_def = identifier , { [ whitespace ] , parameter }+ ;

          parameter = class_form
                    | keyword_parameter
                    ;

  keyword_parameter = identifier , ":" , class_form ;

              text = ? Any characters between start, tag_type or class_form and the next param_name or end ? ;

        identifier = ( letter | "_" ) , { alphanumeric | "_" } ;

        quoted_name = "'" , { any_char - "'" | "\'" } , "'" ;

      alphanumeric = letter | digit ;

              digit = ? 0-9 ? ;

            letter = ? a-zA-Z ? ;

        whitespace = { space | new_line }+ ;

              start = "/**" ;

                end = "*/" ;

              space = " "
                    | "\t"
                    ;

          new_line = "\n" ;

        punctuator = "&"
                    | "."
                    | ":"
                    | "<"
                    | ">"
                    | "|"
                    ;

            keyword = "param"
                    | "prop"
                    | "remarks"
                    | "return"
                    | "var"
                    ;

                eof = ? End of file ? ;

          any_char = ? Any visible characters ? ;
  ```
