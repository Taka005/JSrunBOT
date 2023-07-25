# JSrunBOT
discordでJSを実行するBOT
## 使い方
- BOTのトークンを取得する(調べてね)
- GitやNode.jsが入っていない人は[Git](https://git-scm.com/download/win)や[Node.js](https://nodejs.org/ja/download)から自分の環境に合わせてインストールしてください。注意:Node.jsはv16以上をインストールしてください
- プロンプトを起動し`git clone https://github.com/Taka005/JSrunBOT.git`を実行する
- `npm i`を実行してパッケージをインストールする
- 実行したディレクトリにJSrunBOTのフォルダがあるので開く
- example.envを.envに名前を変更する
- .envの中の`BOT_TOKEN=ボットのトークン`の形で保存する
- config.jsonのadminの配列の中に自分のユーザーIDを入れる(ユーザーIDはDiscordを開発者モードにすることでコピーできます)
- JSrunBOTのフォルダの中でコマンドプロンプトを立ち上げる
- `node index.js`を実行し起動するまで待つ
- 起動したらBOTを自分のサーバーに追加する
- \>\>exec message.reply("Hello World"); を送ればBOTがJavaScriptを実行して結果が送信されます  
