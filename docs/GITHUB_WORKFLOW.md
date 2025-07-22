# GitHub ワークフロー - 美容室ウイング R

## 📋 概要

美容室ウイング R プロジェクトのシンプルなブランチ運用ルールです。

## 🌿 ブランチ構成

```
main (本番環境)
├── develop (開発環境)
│   ├── feature/機能名 (機能開発)
│   └── fix/修正内容 (バグ修正)
```

## ブランチの役割

### `main` ブランチ

- **目的**: 本番環境・最終版
- **マージ条件**: 最終的なゴーサインが出たときのみ
- **自動デプロイ**: Vercel 本番環境

### `develop` ブランチ

- **目的**: 開発環境・統合テスト
- **普段の作業**: ここに機能をマージしていく
- **プレビューデプロイ**: Vercel ステージング環境

### `feature/*` ブランチ

- **目的**: 新機能開発
- **命名**: `feature/機能名`
- **例**: `feature/menu-update`, `feature/contact-fix`

## 🔄 基本的な作業フロー

### 新機能開発

```bash
# 1. developから新しい機能ブランチを作成
git checkout develop
git pull origin develop
git checkout -b feature/機能名

# 2. 機能を開発・コミット
git add .
git commit -m "feat: 機能の説明"

# 3. リモートにプッシュ
git push -u origin feature/機能名

# 4. GitHub でPull Request作成 (feature/機能名 → develop)
# 5. レビュー・マージ
# 6. ローカルブランチ削除
git checkout develop
git pull origin develop
git branch -D feature/機能名
```

### バグ修正

```bash
# 1. developから修正ブランチを作成
git checkout develop
git pull origin develop
git checkout -b fix/修正内容

# 2. 修正・コミット
git add .
git commit -m "fix: 修正の説明"

# 3. プッシュ・PR作成
git push -u origin fix/修正内容

# 4. レビュー・マージ・ブランチ削除
```

### 本番リリース

```bash
# 最終的なゴーサインが出たとき
# GitHub でPull Request作成 (develop → main)
# レビュー・マージで本番デプロイ
```

## 📝 コミットメッセージ

簡単なルールのみ：

- `feat: 新機能の説明`
- `fix: バグ修正の説明`
- `docs: ドキュメント変更`
- `style: 見た目の調整`

## 🔍 Pull Request

### 基本チェック項目

- [ ] ビルドエラーなし
- [ ] レスポンシブ対応確認
- [ ] 基本的な動作確認

### PR の流れ

1. feature → develop (日常的な開発)
2. develop → main (最終リリース時のみ)

## 🗂️ ブランチ整理

### 不要ブランチの削除

```bash
# マージ済みブランチの確認
git branch --merged develop

# 不要ブランチの削除
git branch -d ブランチ名

# リモートの古い参照削除
git remote prune origin
```

---

**運用方針**: シンプルに、develop で開発 → 最終確認後 main へ
