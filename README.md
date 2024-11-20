# learn-hono6-awslambda

[AWS Lambda - Hono](https://hono.dev/docs/getting-started/aws-lambda)をやってみた。

## 事前に要るもの

- docker - `public.ecr.aws/sam/build-nodejs20.x:latest` を使ってtsをcjsにするらしい。
- またはesbuild - `bun add esbuild -D` しておけばdocker不要みたい。

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

で、<https://hono.dev/docs/getting-started/aws-lambda#_2-hello-world> のコードを
`lambda/index.ts`にコピペ

<https://hono.dev/docs/getting-started/aws-lambda#_3-deploy>のコードを
`lib/cdk-stack.ts` ではなく、元のディレクトリ名をベースにした名前の`-stack.ts` になってるので、
そこへコピペ。(`lib/learn-hono6-awslambda-stack.ts`)。

クラス名も、元のディレクトリ名をキャメルケースにしたものになっているので(`LearnHono6AwslambdaStack`)
MyAppStack からリネーム。

package.jsonにちょっとだけrun-scriptを追加して、

```sh
# 以下2つはオプション、動作確認だけ
bun run list    # "LearnHono6AwslambdaStack"
bun run build   # 'cdk.out/LearnHono6AwslambdaStack.template.json'
#
bun run deploy
```

## Useful commands

- `npm run build` compile typescript to js
- `npm run watch` watch for changes and compile
- `npm run test` perform the jest unit tests
- `npx cdk deploy` deploy this stack to your default AWS account/region
- `npx cdk diff` compare deployed stack with current state
- `npx cdk synth` emits the synthesized CloudFormation template
