# eagle-sample

Vue製のSlideShow Framework 「[eagle.js](https://github.com/zulko/eagle.js/)」のシンプルな使い方

[公式のdemo](https://github.com/Zulko/eaglejs-demo)を整理して、Vue初心者でも簡単に始められるようにしています。

# 使い方
## dev server
`npm run dev`で`vue-cli-service serve`が実行されdev serverが起動するのでそこでスライドを確認できます。

## build
`npm run build`でdistディレクトリが作成されそこに成果物が出力されます。

`cd dist && python -m SimpleHTTPServer`などしてホスティングして確認すると`npm run dev`した時と同様のものが確認できます。

# vue.config.jsに書いていること

下記のエラーがでるのでwebpackにhookして回避します。

```
[Vue warn]: You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.
```
