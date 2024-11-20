# 都道府県人口構成グラフアプリ

チェックを入れた都道府県の人口構成をグラフで確認できます。

https://prefecture-population-app-cyan.vercel.app/

## 技術スタック

- [Vite](https://vite.dev/)
- [TypeScript](https://www.typescriptlang.org/) 
- [React](https://react.dev/) - フレームワーク
- [Tanstack Query](https://tanstack.com/query/latest) - API取得管理
- [react-error-boundary](https://github.com/bvaughn/react-error-boundary) - 画面エラーハンドリング
- [Highcharts](https://www.highcharts.com/) - グラフツール
- [Biome](https://biomejs.dev/) - リンター・フォーマッター
- [Vitest](https://vitest.dev/) / [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) - テスト
- [msw](https://mswjs.io/) - モックサーバー
- [GitHub Actions](https://docs.github.com/en/actions) - CI

[Viteのreact-tsテンプレート](https://vite.dev/guide/#scaffolding-your-first-vite-project)から作成しています。

## ローカル環境で確認する方法

> [!WARNING]
> Node.js >= 20がインストールされている必要があります。

`.env`を以下コマンドで作成します。

```shell
$ cp .env.example .env
```

- `VITE_API_URL` - APIのエンドポイントURL
- `VITE_X_API_KEY` - 指定されたAPI Key

その後、以下でサイトが立ち上がります。

```shell
$ npm i
$ npm run dev
```

### Visual Studio Codeでの確認

リント・フォーマッターの確認には[Biome公式拡張機能](https://marketplace.visualstudio.com/items?itemName=biomejs.biome)が必要です。

詳細は以下ページに記載されています。
https://biomejs.dev/reference/vscode/#installation

### ビルド

プロダクション環境用のビルドは以下で実行可能です。

```shell
$ npm run build
$ npm run preview
```

詳細は以下のページに掲載されています。

- [ViteのCLIコマンドについて](https://vite.dev/guide/cli.html#vite-preview)
- [ビルドで生成したファイルの表示について](https://vite.dev/guide/troubleshooting#built-file-does-not-work-because-of-cors-error)

## コマンド

- `npm run dev` - ローカル環境でサイトが立ち上がります
- `npm run check` - コードの静的チェック（リント・フォーマット）
- `npm run test` - テストコードの実行

GitHub Actionsではコミットのpush時に、下2つを実行しチェックを行っています。


## Git管理

[Angular](https://github.com/angular/angular/blob/main/CONTRIBUTING.md#-commit-message-format)のルールを基に作成しています。

ブランチ名に関しては

```
<prefix>/#<issue番号>
```

ブランチ名のprefixは以下から選択しています。
- `docs` - 文言やテキストの修正のみ
- `feature` - 新しい機能の実装
- `fix` - バグの修正

コミットメッセージは以下のフォーマットとなります。特に設けられてない場合はissue番号は省略可能です。

```
<prefix>:#<issue番号> <対応の概要>
```

コミットメッセージのprefixは以下から選択しています。
- `docs:` - 文言やテキストの修正のみ
- `feat:` - 新しい機能の実装
- `fix:` - バグの修正


## 開発構成

### ディレクトリ構成

`src`ディレクトリ配下に画面用のファイルを設置しています。

- `api`
  - APIのfetch用関数およびmswで使用するモックデータの設置
- `components`
  - コンポーネントの設置
- `hooks`  
  - pages層やコンポーネントで使用するhooksの設置
- `pages`  
  - 画面のcontainerの設置。
  - APIのfetchを行うhooksを呼び、コンポーネントにpropsとして代入し、画面に表示します。
- `types`
  - APIのレスポンス・コンポーネントのセットで使用する型の設置
- `utils`
  - フォーマットした値の返却など汎用的に使用する関数の設置

### Biome

リンター・フォーマッター両方をBiome1つで解決させています。

なおリンターのルールに関しては、もともとViteのテンプレートに入っていたESLintのルールをマイグレーションしたものを使用しています[（対応時のPR）](https://github.com/miily8310s/prefecture-population-app/pull/9)。

### テストコード

Vitestを使用し作成・実行を行っています。

APIのfetchが伴うテストケースに関しては、`vitest.setup.ts`でmswのモックサーバーを立ち上げたうえで、確認を行っています(*1)。

またコンポーネント・hooksのテストについてはReact Testing Libraryを使用し作成しています。

*1 モックサーバーから返却されるモックデータは`api/mocks/handlers.ts`で定義しています。