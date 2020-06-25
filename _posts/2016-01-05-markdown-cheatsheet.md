---
title: Markdown チートシート
date: 2016-01-05 21:32:00
updated: 2019-04-20 00:44:00
categories: document
tags: markdown
toc: true
published: true
---
[GFM](https://github.github.com/gfm/)と[kramdown](https://kramdown.gettalong.org/)に対応した記述のサンプル。

### ブロック要素
{:#block-elements}

#### 段落と改行
{:#paragraphs-and-line-breaks}

記述
: ```markdown
  Loremのイプサムの嘆き、AMET consecteturのadipiscingのELIT、sedのtemporと活力、そのような労働と悲しみ、eiusmod行うにはいくつかの重要な事柄に座ります。長年にわたり、私は学区と長寿であればそのような刺激の取り組み、彼女のうち、運動の利点をaliquipをnostrudする人、来ます。
  cupidatatのcillumの痛みになりたいDuisに批判されてきたらdoloreマグナ逃亡しても結果の喜びを生成しません。Excepteur cupidatatブラックはexcepteurていない、つまり、彼らはあなたの悩みに責任がある人の一般的な義務を捨て、魂を癒しています。

  ABCDEFGHIJKLMNOPQRSTUVWXYZ
  abcdefghijklmnopqrstuvwxyz
  0123456789

  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  ---------1---------2---------3---------4---------5---------6---------7---------8---------9---------0---------1---------2---------3---------4---------5---------6
  ```

結果
: <span/>{:.invisible}

  Loremのイプサムの嘆き、AMET consecteturのadipiscingのELIT、sedのtemporと活力、そのような労働と悲しみ、eiusmod行うにはいくつかの重要な事柄に座ります。長年にわたり、私は学区と長寿であればそのような刺激の取り組み、彼女のうち、運動の利点をaliquipをnostrudする人、来ます。
  cupidatatのcillumの痛みになりたいDuisに批判されてきたらdoloreマグナ逃亡しても結果の喜びを生成しません。Excepteur cupidatatブラックはexcepteurていない、つまり、彼らはあなたの悩みに責任がある人の一般的な義務を捨て、魂を癒しています。

  ABCDEFGHIJKLMNOPQRSTUVWXYZ
  abcdefghijklmnopqrstuvwxyz
  0123456789

  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  ---------1---------2---------3---------4---------5---------6---------7---------8---------9---------0---------1---------2---------3---------4---------5---------6

#### 見出し
{:#headers}

記述
: ```markdown
  # 見出し1

  ## 見出し2

  ### 見出し3

  #### 見出し4

  ##### 見出し5

  ###### 見出し6
  ```

結果
: # 見出し1
  {:#header-level1}

  Loremのイプサムの嘆き、AMET consecteturのadipiscingのELIT、sedのtemporと活力、そのような労働と悲しみ、eiusmod行うにはいくつかの重要な事柄に座ります。

  ## 見出し2
  {:#header-level2}

  Loremのイプサムの嘆き、AMET consecteturのadipiscingのELIT、sedのtemporと活力、そのような労働と悲しみ、eiusmod行うにはいくつかの重要な事柄に座ります。

  ### 見出し3
  {:#header-level3}

  Loremのイプサムの嘆き、AMET consecteturのadipiscingのELIT、sedのtemporと活力、そのような労働と悲しみ、eiusmod行うにはいくつかの重要な事柄に座ります。

  #### 見出し4
  {:#header-level4}

  Loremのイプサムの嘆き、AMET consecteturのadipiscingのELIT、sedのtemporと活力、そのような労働と悲しみ、eiusmod行うにはいくつかの重要な事柄に座ります。

  ##### 見出し5
  {:#header-level5}

  Loremのイプサムの嘆き、AMET consecteturのadipiscingのELIT、sedのtemporと活力、そのような労働と悲しみ、eiusmod行うにはいくつかの重要な事柄に座ります。

  ###### 見出し6
  {:#header-level6}

  Loremのイプサムの嘆き、AMET consecteturのadipiscingのELIT、sedのtemporと活力、そのような労働と悲しみ、eiusmod行うにはいくつかの重要な事柄に座ります。

  ## Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

  Loremのイプサムの嘆き、AMET consecteturのadipiscingのELIT、sedのtemporと活力、そのような労働と悲しみ、eiusmod行うにはいくつかの重要な事柄に座ります。

#### 引用
{:#blockquotes}

記述
: ```markdown
  > Loremのイプサムの嘆き、AMET consecteturのadipiscingのELIT、sedのtemporと活力、そのような労働と悲しみ、eiusmod行うにはいくつかの重要な事柄に座ります。長年にわたり、私は学区と長寿であればそのような刺激の取り組み、彼女のうち、運動の利点をaliquipをnostrudする人、来ます。
  >
  > > cupidatatのcillumの痛みになりたいDuisに批判されてきたらdoloreマグナ逃亡しても結果の喜びを生成しません。Excepteur cupidatatブラックはexcepteurていない、つまり、彼らはあなたの悩みに責任がある人の一般的な義務を捨て、魂を癒しています。
  > >
  > > ```
  > > 0123456789
  > > ```
  >
  > * ABCDEFGHIJKLMNOPQRSTUVWXYZ
  >
  > * abcdefghijklmnopqrstuvwxyz
  >
  > ```
  > 0123456789
  > ```
  >
  > 用語
  > : 定義
  >  Loremのイプサムの嘆き、AMET consecteturのadipiscingのELIT、sedのtemporと活力、そのような労働と悲しみ、eiusmod行うにはいくつかの重要な事柄に座ります。長年にわたり、私は学区と長寿であればそのような刺激の取り組み、彼女のうち、運動の利点をaliquipをnostrudする人、来ます。
  >
  > Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  ```

結果
: > Loremのイプサムの嘆き、AMET consecteturのadipiscingのELIT、sedのtemporと活力、そのような労働と悲しみ、eiusmod行うにはいくつかの重要な事柄に座ります。長年にわたり、私は学区と長寿であればそのような刺激の取り組み、彼女のうち、運動の利点をaliquipをnostrudする人、来ます。
  >
  > > cupidatatのcillumの痛みになりたいDuisに批判されてきたらdoloreマグナ逃亡しても結果の喜びを生成しません。Excepteur cupidatatブラックはexcepteurていない、つまり、彼らはあなたの悩みに責任がある人の一般的な義務を捨て、魂を癒しています。
  > >
  > > ```
  > > 0123456789
  > > ```
  >
  > * ABCDEFGHIJKLMNOPQRSTUVWXYZ
  >
  > * abcdefghijklmnopqrstuvwxyz
  >
  > ```
  > 0123456789
  > ```
  >
  > 用語
  > : 定義
  >  Loremのイプサムの嘆き、AMET consecteturのadipiscingのELIT、sedのtemporと活力、そのような労働と悲しみ、eiusmod行うにはいくつかの重要な事柄に座ります。長年にわたり、私は学区と長寿であればそのような刺激の取り組み、彼女のうち、運動の利点をaliquipをnostrudする人、来ます。
  >
  > Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

#### リスト
{:#lists}

記述
: ```markdown
  * A

  * B - start

      * Ba - start

        段落

        Loremのイプサムの嘆き、AMET consecteturのadipiscingのELIT、sedのtemporと活力、そのような労働と悲しみ、eiusmod行うにはいくつかの重要な事柄に座ります。長年にわたり、私は学区と長寿であればそのような刺激の取り組み、彼女のうち、運動の利点をaliquipをnostrudする人、来ます。
        cupidatatのcillumの痛みになりたいDuisに批判されてきたらdoloreマグナ逃亡しても結果の喜びを生成しません。Excepteur cupidatatブラックはexcepteurていない、つまり、彼らはあなたの悩みに責任がある人の一般的な義務を捨て、魂を癒しています。

        ABCDEFGHIJKLMNOPQRSTUVWXYZ
        abcdefghijklmnopqrstuvwxyz
        0123456789

        Ba - end

        * Baあ

      * Bb - start

          1.  1 - start

              1.  11 - start

                  * 11A - start

                    引用

                    > ABCDEFGHIJKLMNOPQRSTUVWXYZ
                    > abcdefghijklmnopqrstuvwxyz

                    11A - end

                  * 11B

                  11 - end

              2.  12 - start

                  整形済みテキスト

                  ```
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ
                  abcdefghijklmnopqrstuvwxyz
                  ```

                  12 - end

              1 - end

          2.  2 - start

              テーブル

              | TH  | TH  |
              | --- | --- |
              | TD  | TD  |
              | TD  | TD  |

              2 - end

          3.  3

        Bb - end

    B - end

  * C

    01. C.01

    02. C.02

    03. C.03

    04. C.04

    05. C.05

    06. C.06

    07. C.07

    08. C.08

    09. C.09

    10. C.10

  * D

  * E
  ```

結果
: * A

  * B - start

      * Ba - start

        段落

        Loremのイプサムの嘆き、AMET consecteturのadipiscingのELIT、sedのtemporと活力、そのような労働と悲しみ、eiusmod行うにはいくつかの重要な事柄に座ります。長年にわたり、私は学区と長寿であればそのような刺激の取り組み、彼女のうち、運動の利点をaliquipをnostrudする人、来ます。
        cupidatatのcillumの痛みになりたいDuisに批判されてきたらdoloreマグナ逃亡しても結果の喜びを生成しません。Excepteur cupidatatブラックはexcepteurていない、つまり、彼らはあなたの悩みに責任がある人の一般的な義務を捨て、魂を癒しています。

        ABCDEFGHIJKLMNOPQRSTUVWXYZ
        abcdefghijklmnopqrstuvwxyz
        0123456789

        Ba - end

        * Baあ

      * Bb - start

          1.  1 - start

              1.  11 - start

                  * 11A - start

                    引用

                    > ABCDEFGHIJKLMNOPQRSTUVWXYZ
                    > abcdefghijklmnopqrstuvwxyz

                    11A - end

                  * 11B

                  11 - end

              2.  12 - start

                  整形済みテキスト

                  ```
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ
                  abcdefghijklmnopqrstuvwxyz
                  ```

                  12 - end

              1 - end

          2.  2 - start

              テーブル

              | TH  | TH  |
              | --- | --- |
              | TD  | TD  |
              | TD  | TD  |

              2 - end

          3.  3

        Bb - end

    B - end

  * C

    01. C.01

    02. C.02

    03. C.03

    04. C.04

    05. C.05

    06. C.06

    07. C.07

    08. C.08

    09. C.09

    10. C.10

  * D

  * E

#### 定義リスト
{:#definition-lists}

記述
: ```markdown
  用語1
  : <span/>{:.invisible}

    定義1

    段落

    Loremのイプサムの嘆き、AMET consecteturのadipiscingのELIT、sedのtemporと活力、そのような労働と悲しみ、eiusmod行うにはいくつかの重要な事柄に座ります。長年にわたり、私は学区と長寿であればそのような刺激の取り組み、彼女のうち、運動の利点をaliquipをnostrudする人、来ます。
    cupidatatのcillumの痛みになりたいDuisに批判されてきたらdoloreマグナ逃亡しても結果の喜びを生成しません。Excepteur cupidatatブラックはexcepteurていない、つまり、彼らはあなたの悩みに責任がある人の一般的な義務を捨て、魂を癒しています。

    ABCDEFGHIJKLMNOPQRSTUVWXYZ
    abcdefghijklmnopqrstuvwxyz
    0123456789

  : 定義2

    引用

    > ABCDEFGHIJKLMNOPQRSTUVWXYZ
    > abcdefghijklmnopqrstuvwxyz
    > 0123456789

  用語2
  : <span/>{:.invisible}

    定義1

    整形済みテキスト

    \```
    ABCDEFGHIJKLMNOPQRSTUVWXYZ
    abcdefghijklmnopqrstuvwxyz
    0123456789
    \```

  : 定義2

    リスト

    * A

    * B
  ```

結果
: 用語1
  : <span/>{:.invisible}

    定義1

    段落

    Loremのイプサムの嘆き、AMET consecteturのadipiscingのELIT、sedのtemporと活力、そのような労働と悲しみ、eiusmod行うにはいくつかの重要な事柄に座ります。長年にわたり、私は学区と長寿であればそのような刺激の取り組み、彼女のうち、運動の利点をaliquipをnostrudする人、来ます。
    cupidatatのcillumの痛みになりたいDuisに批判されてきたらdoloreマグナ逃亡しても結果の喜びを生成しません。Excepteur cupidatatブラックはexcepteurていない、つまり、彼らはあなたの悩みに責任がある人の一般的な義務を捨て、魂を癒しています。

    ABCDEFGHIJKLMNOPQRSTUVWXYZ
    abcdefghijklmnopqrstuvwxyz
    0123456789

  : 定義2

    引用

    > ABCDEFGHIJKLMNOPQRSTUVWXYZ
    > abcdefghijklmnopqrstuvwxyz
    > 0123456789

  用語2
  : <span/>{:.invisible}

    定義1

    整形済みテキスト

    ```
    ABCDEFGHIJKLMNOPQRSTUVWXYZ
    abcdefghijklmnopqrstuvwxyz
    0123456789
    ```

  : 定義2

    リスト

    * A

    * B

最初の定義を段落にできないのでダミー要素を挟むことで対応。
{:.note}

#### 整形済みテキスト
{:#indented-code-blocks}

記述
: ```markdown
      Loremのイプサムの嘆き、AMET consecteturのadipiscingのELIT、sedのtemporと活力、そのような労働と悲しみ、eiusmod行うにはいくつかの重要な事柄に座ります。長年にわたり、私は学区と長寿であればそのような刺激の取り組み、彼女のうち、運動の利点をaliquipをnostrudする人、来ます。
      cupidatatのcillumの痛みになりたいDuisに批判されてきたらdoloreマグナ逃亡しても結果の喜びを生成しません。Excepteur cupidatatブラックはexcepteurていない、つまり、彼らはあなたの悩みに責任がある人の一般的な義務を捨て、魂を癒しています。

      ABCDEFGHIJKLMNOPQRSTUVWXYZ
      abcdefghijklmnopqrstuvwxyz
      0123456789

      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      ---------1---------2---------3---------4---------5---------6---------7---------8---------9---------0---------1---------2---------3---------4---------5---------6
  ```

結果
:     Loremのイプサムの嘆き、AMET consecteturのadipiscingのELIT、sedのtemporと活力、そのような労働と悲しみ、eiusmod行うにはいくつかの重要な事柄に座ります。長年にわたり、私は学区と長寿であればそのような刺激の取り組み、彼女のうち、運動の利点をaliquipをnostrudする人、来ます。
      cupidatatのcillumの痛みになりたいDuisに批判されてきたらdoloreマグナ逃亡しても結果の喜びを生成しません。Excepteur cupidatatブラックはexcepteurていない、つまり、彼らはあなたの悩みに責任がある人の一般的な義務を捨て、魂を癒しています。

      ABCDEFGHIJKLMNOPQRSTUVWXYZ
      abcdefghijklmnopqrstuvwxyz
      0123456789

      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      ---------1---------2---------3---------4---------5---------6---------7---------8---------9---------0---------1---------2---------3---------4---------5---------6

#### Fenced Code Blocks
{:#fenced-code-blocks}

記述
: ```markdown
  \```maxscript
  global var -- Line Comment

  /*
  Block Comment
  */
  struct TestClass (
    public Literals = #(
      1, .1e-2, 1.2, -0., 0x0E, "String", @"Verbatim", #Name, true,
      2m30s5f2t, 18.25f, 2:10.0, $'Node Name', #{1..3, 5}
    ),

    private rlt = Rollout rlt "Title" (
      CheckBox ckbx "Caption" checked:false triState:0
      on ckbx Changed state do (
        -- ...
      )
    ),

    public fn TestFunction pA &pB pC:false &pD:1.2 pE:#(1, 2) pF: = (
      -- ...
    ),

    private mapped fn compare x y = (
      -- ...
    ),

    on Create do (
      -- ...
    )
  )
  \```
  ```

結果
: ```maxscript
  global var -- Line Comment

  /*
  Block Comment
  */
  struct TestClass (
    public Literals = #(
      1, .1e-2, 1.2, -0., 0x0E, "String", @"Verbatim", #Name, true,
      2m30s5f2t, 18.25f, 2:10.0, $'Node Name', #{1..3, 5}
    ),

    private rlt = Rollout rlt "Title" (
      CheckBox ckbx "Caption" checked:false triState:0
      on ckbx Changed state do (
        -- ...
      )
    ),

    public fn TestFunction pA &pB pC:false &pD:1.2 pE:#(1, 2) pF: = (
      -- ...
    ),

    private mapped fn compare x y = (
      -- ...
    ),

    on Create do (
      -- ...
    )
  )
  ```

#### テーブル
{:#tables}

記述
: ```markdown
  | -   | 左寄せ |               中央寄せ               | 右寄せ |
  | --- | :----- | :----------------------------------: | -----: |
  | 行1 | TD     |                  TD                  |     TD |
  | 行2 | TD     | セル内の改行は<br>`<br>`タグを使う。 |     TD |
  ```

結果
: | -   | 左寄せ |               中央寄せ               | 右寄せ |
  | --- | :----- | :----------------------------------: | -----: |
  | 行1 | TD     |                  TD                  |     TD |
  | 行2 | TD     | セル内の改行は<br>`<br>`タグを使う。 |     TD |

#### 水平線
{:#horizontal-rules}

記述
: ```markdown
  ---
  ```

結果
: ---

### インライン要素
{:#inline-elements}

#### リンク
{:#links}

記述
: ```markdown
  [通常リンク]({{ site.url }}{{ site.baseurl }}/ "ツールチップA")
  [参照リンク][ref]
  [参照リンク（ID省略）][]
  [Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.][ref]

  [ref]:{{ site.url }}{{ site.baseurl }}/ "ツールチップB"
  [参照リンク（ID省略）]:{{ site.url }}{{ site.baseurl }}/ "ツールチップC"

  外部サイト[https://github.com/](https://github.com/)
  自動リンク<{{ site.url }}{{ site.baseurl }}/>
  相対リンク[highlight.js サンプル](2019-04-14-highlight-js-sample)
  ```

結果
: <span/>{:.invisible}

  [通常リンク]({{ site.url }}{{ site.baseurl }}/ "ツールチップA")
  [参照リンク][ref]
  [参照リンク（ID省略）][]
  [Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.][ref]

  [ref]:{{ site.url }}{{ site.baseurl }}/ "ツールチップB"
  [参照リンク（ID省略）]:{{ site.url }}{{ site.baseurl }}/ "ツールチップC"

  外部サイト[https://github.com/](https://github.com/)
  自動リンク<{{ site.url }}{{ site.baseurl }}/>
  相対リンク[highlight.js サンプル](2019-04-14-highlight-js-sample)

参照先の記述は前に一行空ける必要がある。
{:.note}

#### 脚注
{:#footnotes}

記述
: ```markdown
  脚注1[^1]
  脚注2[^a]

  [^1]:脚注1
  [^a]:脚注2
  ```

結果
: 脚注1[^1]
  脚注2[^a]

  [^1]:脚注1
  [^a]:脚注2

#### 文字修飾
{:#emphasis}

記述
: ```markdown
  *強調*
  _強調_
  **より強い強調**
  __より強い強調__
  `コード`
  ``中間`の`エスケープ``
  `` `先頭or末尾のエスケープ` ``
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
  ~~打ち消し線~~
  ```

結果
: *強調*
  _強調_
  **より強い強調**
  __より強い強調__
  `コード`
  ``中間`の`エスケープ``
  `` `先頭or末尾のエスケープ` ``
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
  ~~打ち消し線~~

#### 画像
{:#images}

記述
: ```markdown
  画像
  : <span/>{:.invisible}

    相対アドレス![代替文字]({{ '/assets/images/sample/32x32.png' | relative_url }} "ツールチップ")

  リンク
  : <span/>{:.invisible}

    相対アドレス[![代替文字]({{ '/assets/images/sample/64x64.png' | relative_url }} "ツールチップ")]({{ '/assets/images/sample/64x64.png' | relative_url }})
    絶対アドレス[![代替文字]({{ site.url | append: site.baseurl | append: '/assets/images/sample/128x128.png' }} "ツールチップ")]({{ site.url | append: site.baseurl | append: '/assets/images/sample/128x128.png' }})
    外部サイト[![代替文字]({{ '/assets/images/sample/128x128.png' | relative_url }} "ツールチップ")](https://github.com/)

  参照画像
  : <span/>{:.invisible}

    ID指定![参照画像][img]
    ID省略![参照画像（ID省略）][]

    [img]:{{ '/assets/images/sample/128x128.png' | relative_url }} "ツールチップA"
    [参照画像（ID省略）]:{{ '/assets/images/sample/128x128.png' | relative_url }} "ツールチップB"

  高解像度
  : <span/>{:.invisible}

    [![512x512]({{ '/assets/images/sample/512x512t.png' | relative_url }})]({{ '/assets/images/sample/512x512.png' | relative_url }})
    [![1024x1024]({{ '/assets/images/sample/1024x1024t.png' | relative_url }})]({{ '/assets/images/sample/1024x1024.png' | relative_url }})
    [![2048x2048]({{ '/assets/images/sample/2048x2048t.png' | relative_url }})]({{ '/assets/images/sample/2048x2048.png' | relative_url }})
  ```

結果
: 画像
  : <span/>{:.invisible}

    相対アドレス![代替文字]({{ '/assets/images/sample/32x32.png' | relative_url }} "ツールチップ")

  リンク
  : <span/>{:.invisible}

    相対アドレス[![代替文字]({{ '/assets/images/sample/64x64.png' | relative_url }} "ツールチップ")]({{ '/assets/images/sample/64x64.png' | relative_url }})
    絶対アドレス[![代替文字]({{ site.url | append: site.baseurl | append: '/assets/images/sample/128x128.png' }} "ツールチップ")]({{ site.url | append: site.baseurl | append: '/assets/images/sample/128x128.png' }})
    外部サイト[![代替文字]({{ '/assets/images/sample/128x128.png' | relative_url }} "ツールチップ")](https://github.com/)

  参照画像
  : <span/>{:.invisible}

    ID指定![参照画像][img]
    ID省略![参照画像（ID省略）][]

    [img]:{{ '/assets/images/sample/128x128.png' | relative_url }} "ツールチップA"
    [参照画像（ID省略）]:{{ '/assets/images/sample/128x128.png' | relative_url }} "ツールチップB"

  高解像度
  : <span/>{:.invisible}

    [![512x512]({{ '/assets/images/sample/512x512t.png' | relative_url }})]({{ '/assets/images/sample/512x512.png' | relative_url }})
    [![1024x1024]({{ '/assets/images/sample/1024x1024t.png' | relative_url }})]({{ '/assets/images/sample/1024x1024.png' | relative_url }})
    [![2048x2048]({{ '/assets/images/sample/2048x2048t.png' | relative_url }})]({{ '/assets/images/sample/2048x2048.png' | relative_url }})

<!--
### インラインフレーム
{:#iframes}

<iframe class="iframe-class" src="https://github.com/imaoki/imaoki.github.io" width="520" height="293"></iframe>
-->

### kramdown
{:#kramdown}

#### ブロック要素の属性
{:#block-attributes}

記述
: ```markdown
  ブロック要素
  {:#block-element-id style="color: magenta;"}
  ```

結果
: ```html
  <p id="block-element-id" style="color: magenta;">ブロック要素</p>
  ```

  ブロック要素
  {:#block-element-id style="color: magenta;"}

##### ノート
{:#block-attributes-note}

記述
: ```markdown
  ノート
  {:.note}
  ```

結果
: <span/>{:.invisible}

  ノート
  {:.note}

##### 警告
{:#block-attributes-warning}

記述
: ```markdown
  警告
  {:.warning}
  ```

結果
: <span/>{:.invisible}

  警告
  {:.warning}

#### インライン要素の属性
{:#inline-attributes}

記述
: ```markdown
  *インライン要素*{:#inline-element-id style="color: cyan;"}
  ```

結果
: ```html
  <em id="inline-element-id" style="color: cyan;">インライン要素</em>
  ```

  *インライン要素*{:#inline-element-id style="color: cyan;"}

##### シンタックスハイライト
{:#inline-attributes-syntax-highlihgt}

記述
: ```markdown
  `<style>body {width: 500px;}</style>`{:.code .language-html}
  ```

結果
: <span/>{:.invisible}

  `<style>body {width: 500px;}</style>`{:.code .language-html}

##### キーボタン
{:#inline-attributes-key-button}

記述
: ```markdown
  `Ctrl`{:.key}+`A`{:.key}で全て選択し、`Ctrl`{:.key}+`C`{:.key}でコピーする。
  ```

表示
: <span/>{:.invisible}

  `Ctrl`{:.key}+`A`{:.key}で全て選択し、`Ctrl`{:.key}+`C`{:.key}でコピーする。
