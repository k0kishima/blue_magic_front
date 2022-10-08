## 概要

- [blue_magic](https://github.com/k0kishima/blue_magic]) の管理画面

## 環境構築手順

### IdPへのクライアント(RP)登録

認証にOAuth2.0/OIDCを利用しているので、IdPと接続する必要がある

上記標準仕様に準拠していてURIやパラメータなどのインターフェースが同じならなんでもいいが、ここでは以下を利用する
https://github.com/k0kishima/openid-provider

### 本サービスの起動

環境変数にはIdP自体のURLや、前節でクライアント登録を行ったときに払い出されたクライアントID (UID) を設定する

```bash
$ git clone git@github.com:k0kishima/blue_magic_front.git
$ cp .env.example .env
$ vi .env
$ yarn install
$ yarn start
```

## 機能

- システム設定
- データ管理機能実装予定(CSVインポート/エクスポート) ※ 未完成

## 動作イメージ

<img width="1440" alt="スクリーンショット 2022-02-06 20 08 20" src="https://user-images.githubusercontent.com/56298669/152678079-d36b1055-70fe-45c6-8288-2479e2fbee9e.png">

