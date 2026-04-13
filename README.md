# karte-action-sdk-docs

> [!WARNING]
> **このリポジトリはアーカイブされました。今後メンテナンスは行われません。**

karte-action-sdk の API リファレンスをホスティングするリポジトリです。

## アーカイブの理由

このリポジトリは GitHub Actions を使った npm publish 起点でドキュメント生成を行っていましたが、以下の理由によりアーカイブします。

- エレメントビルダーの停止に伴い、フレックスエディタのみとなるため、このリポジトリのドキュメント生成パイプラインが実質機能しなくなる
- サプライチェーン攻撃対策などのメンテナンスコストを削減するため

## ドキュメント生成の仕組み（参考）

1. karte-io-systems の GitHub Action（[publish-flyer-core-gh-sdk.yml](https://github.com/plaidev/karte-io-systems/blob/481fdf6cb164cc138d8bf44d48f5f9aff7bd66df/.github/workflows/publish-flyer-core-gh-sdk.yml#L91)）が `systems/action-editor/core/action-sdk/package.json` の変更 PR が close されると実行され、`@plaidev/karte-action-sdk` を `beta` タグで npm に publish する
2. このリポジトリが `@plaidev/karte-action-sdk@beta` を install し、それを元に API ドキュメントを生成する

現在は action-sdk を npm に publish する必要がなくなり、直近半年以上 `action-sdk/package.json` の変更はありません。

## Slackスレ

https://plaidinc.slack.com/archives/C0934PXL1DL/p1776045256982299
