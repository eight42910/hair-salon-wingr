# 環境構築手順

美容室ウイング R プロジェクトの開発環境構築手順書です。

## 📋 前提条件

### 必要なソフトウェア

- **Node.js**: 18.0 以上
- **npm**: 9.0 以上（または yarn/pnpm）
- **Git**: 最新版

### 推奨環境

- **OS**: macOS, Windows 10/11, Ubuntu 20.04+
- **メモリ**: 8GB 以上
- **ストレージ**: 500MB 以上の空き容量

## 🚀 セットアップ手順

### 1. リポジトリのクローン

```bash
git clone [repository-url]
cd hair-salon-wingr
```

### 2. 依存関係のインストール

```bash
npm install
```

### 3. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて確認

## 🛠️ 開発スクリプト

```bash
# 開発サーバー起動
npm run dev

# 本番用ビルド
npm run build

# 本番用サーバー起動
npm run start

# ESLintチェック
npm run lint
```

## 🛠️ 開発ツールの設定

### VS Code / Cursor 推奨拡張機能

```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "ms-vscode.vscode-typescript-next",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-eslint"
  ]
}
```

## 📱 レスポンシブテスト

### 対応ブラウザ

- **Chrome**: 最新版
- **Firefox**: 最新版
- **Safari**: 最新版（macOS/iOS）
- **Edge**: 最新版

### テストデバイスサイズ

- **Mobile**: 375px（iPhone SE）
- **Mobile L**: 425px（iPhone 12 Pro）
- **Tablet**: 768px（iPad）
- **Desktop**: 1024px 以上

## 🔧 トラブルシューティング

### よくある問題と解決方法

#### Node.js バージョンエラー

```bash
# Node.jsバージョン確認
node --version

# nvm使用時のバージョン切り替え
nvm use 18
```

#### 依存関係のエラー

```bash
# node_modulesとpackage-lock.jsonを削除
rm -rf node_modules package-lock.json

# 再インストール
npm install
```

#### Tailwind CSS が効かない

1. `tailwind.config.ts`の path 設定確認
2. `src/styles/globals.css`の Tailwind ディレクティブ確認
3. 開発サーバーの再起動

#### TypeScript エラー

```bash
# 型チェック実行
npx tsc --noEmit
```

---

最終更新: 2024 年 12 月
