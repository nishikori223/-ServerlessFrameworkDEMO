# ServerlessFrameworkDemo

## 準備

ServerlessFrameworkはグローバルインストールする

```bash
npm install -g serverless
npm install

# dynamodbを使う場合
sls dynamodb install

# s3を使う場合
npm install --save-dev　serverless-s3-local
sls plugin install --name serverless-s3-local
```



## ローカル実行

dynamodbを使用する場合

```bash
sls dynamodb start
```

s3を使用する場合

```bash
node_modules/.bin/s3rver -d ./s3
```

実行コマンド

```bash
sls offline --reloadHandler
```

※ホットリロード機能使わないのであればオプション不要



## ローカルS3用のprofile

同期用のprofile情報を作成（Access Key ID、Secret Access Keyはともに"S3RVER"を指定）

```bash
aws configure --profile local-s3
AWS Access Key ID [None]: S3RVER
AWS Secret Access Key [None]: S3RVER
Default region name [None]:
Default output format [None]: json
```



既にファイルが格納済みで同期したい場合
s3を起動状態で以下を実行

```bash
aws --endpoint http://localhost:4568 --profile local-s3 s3 sync ./s3/local-buckets s3://local-buckets/
```

ファイルのアップロード等は都度CLIでアップロードを実施すること
```
aws --endpoint http://localhost:4568 --profile local-s3 s3 cp <ファイル> s3://local-buckets
```



## localhostをngrok使用してhttpsで公開

ngrokをインストール

```
npm install -g ngrok
```

公開するポートを指定

```
ngrok http <ポート番号>
```

