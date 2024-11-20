# learn-hono6-awslambda

[AWS Lambda - Hono](https://hono.dev/docs/getting-started/aws-lambda)
をやってみた。

## 事前に要るもの

- docker - `public.ecr.aws/sam/build-nodejs20.x:latest` を使って ts を cjs にするらしい。
- または esbuild - `bun add esbuild -D` しておけば docker 不要みたい。

## 手順

```sh
mkdir learn-hono6-awslambda
cd !$
cdk init app -l typescript --generate-only
bun i  # ここは好きなパッケージマネージャを使う
git init
git add --all
git commit -am 'initial commit'
```

で、<https://hono.dev/docs/getting-started/aws-lambda#_2-hello-world>
のコードを
`lambda/index.ts`
にコピペ

<https://hono.dev/docs/getting-started/aws-lambda#_3-deploy>
のコードを
`lib/cdk-stack.ts`
ではなく、元のディレクトリ名をベースにした名前の`-stack.ts` になってるので、そこへコピペ。(`lib/learn-hono6-awslambda-stack.ts`)。
クラス名も、元のディレクトリ名をキャメルケースにしたものになっているので(`LearnHono6AwslambdaStack`)
MyAppStack からリネーム。

package.json にちょっとだけ run-script を追加して、

```sh
# 以下2つはオプション、動作確認だけ
bun run list    # "LearnHono6AwslambdaStack"
bun run build   # 'cdk.out/LearnHono6AwslambdaStack.template.json'
# 指定のリージョンでCDKを始めて使うなら
bun run bootstrap
#
bun run deploy
#
bun run destory
```
