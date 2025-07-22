# GitHub ワークフロー - 美容室ウイング R

## 📋 概要

このドキュメントでは、美容室ウイング R プロジェクトの標準的な GitHub ワークフローを定義します。

## 🌿 ブランチ戦略

### ブランチ構成

```
main (本番環境)
├── develop (開発統合)
│   ├── feature/機能名 (機能開発)
│   ├── fix/修正内容 (バグ修正)
│   └── hotfix/緊急修正 (緊急対応)
```

### ブランチの役割

#### `main` ブランチ

- **目的**: 本番環境デプロイ用
- **保護設定**: 有効
- **マージ条件**: Pull Request 必須
- **デプロイ**: 自動デプロイ (Vercel)

#### `develop` ブランチ

- **目的**: 開発統合・テスト用
- **保護設定**: 有効
- **マージ条件**: Pull Request 推奨
- **テスト**: ステージング環境

#### `feature/*` ブランチ

- **目的**: 新機能開発
- **命名規則**: `feature/機能名-詳細`
- **例**: `feature/contact-form`, `feature/menu-update`

#### `fix/*` ブランチ

- **目的**: バグ修正
- **命名規則**: `fix/修正内容`
- **例**: `fix/responsive-layout`, `fix/form-validation`

#### `hotfix/*` ブランチ

- **目的**: 緊急修正（本番障害対応）
- **命名規則**: `hotfix/修正内容`
- **例**: `hotfix/security-patch`, `hotfix/contact-error`

## 🔄 標準ワークフロー

### 1. 新機能開発フロー

```bash
# 1. 最新のdevelopを取得
git checkout develop
git pull origin develop

# 2. 機能ブランチ作成
git checkout -b feature/新機能名

# 3. 開発・コミット
git add .
git commit -m "feat: 新機能の実装"

# 4. リモートにプッシュ
git push -u origin feature/新機能名

# 5. Pull Request作成 (GitHub上)
# 6. コードレビュー
# 7. developにマージ
# 8. ローカルブランチ削除
git checkout develop
git branch -D feature/新機能名
```

### 2. バグ修正フロー

```bash
# 1. developから修正ブランチ作成
git checkout develop
git pull origin develop
git checkout -b fix/修正内容

# 2. 修正・テスト・コミット
git add .
git commit -m "fix: バグ修正内容"

# 3. プッシュ・PR作成
git push -u origin fix/修正内容

# 4. レビュー・マージ・ブランチ削除
```

### 3. 緊急修正フロー（Hotfix）

```bash
# 1. mainから直接hotfixブランチ作成
git checkout main
git pull origin main
git checkout -b hotfix/緊急修正内容

# 2. 修正・テスト
git add .
git commit -m "hotfix: 緊急修正内容"

# 3. mainとdevelopの両方にマージ
git push -u origin hotfix/緊急修正内容

# 4. mainへのPR作成・マージ
# 5. developへのPR作成・マージ
# 6. ブランチ削除
```

### 4. リリースフロー

```bash
# 1. developが安定していることを確認
git checkout develop
git pull origin develop

# 2. mainへのPR作成
# develop -> main

# 3. PR レビュー・承認・マージ
# 4. 本番デプロイ自動実行
# 5. リリースタグ作成（オプション）
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin v1.0.0
```

## 📝 コミットメッセージ規則

### フォーマット

```
type(scope): subject

body

footer
```

### Type（必須）

- `feat`: 新機能
- `fix`: バグ修正
- `docs`: ドキュメント変更
- `style`: コードフォーマット（機能に影響なし）
- `refactor`: リファクタリング
- `perf`: パフォーマンス改善
- `test`: テスト追加・修正
- `chore`: ビルドプロセス・補助ツール変更

### 例

```bash
git commit -m "feat(contact): お問い合わせフォームにバリデーション追加"
git commit -m "fix(menu): レスポンシブ表示の不具合修正"
git commit -m "docs: README に環境変数設定手順追加"
```

## 🔍 Pull Request ガイドライン

### PR 作成時のチェックリスト

#### 技術チェック

- [ ] TypeScript エラーの解消
- [ ] ESLint ルール違反なし
- [ ] テスト実行・パス
- [ ] レスポンシブ対応確認
- [ ] パフォーマンステスト

#### コードレビュー項目

- [ ] コード品質・可読性
- [ ] セキュリティ対策
- [ ] アクセシビリティ対応
- [ ] ブランドガイドライン遵守
- [ ] ドキュメント更新

#### PR テンプレート

```markdown
## 変更内容

- 変更点の簡潔な説明
- 関連する Issue 番号

## テスト内容

- 実施したテスト項目
- 確認環境

## スクリーンショット

- UI 変更の場合は画像添付

## レビューポイント

- 特に注意してほしい箇所
```

## 🗂️ ブランチ管理

### ローカルブランチ整理

```bash
# 1. リモートの最新情報取得
git fetch --prune

# 2. マージ済みブランチの確認
git branch --merged develop

# 3. 不要ブランチの削除
git branch -d ブランチ名

# 4. 強制削除（必要な場合のみ）
git branch -D ブランチ名
```

### リモートブランチ整理

```bash
# 1. マージ済みリモートブランチの確認
git branch -r --merged develop

# 2. リモートブランチ削除
git push origin --delete ブランチ名

# 3. ローカルの古いリモート参照削除
git remote prune origin
```

## 🚀 デプロイメント

### 本番デプロイ (main)

1. **自動デプロイ**: main ブランチマージで Vercel が自動実行
2. **デプロイ確認**: `https://hair-salon-wingr.vercel.app` で動作確認
3. **ロールバック**: 必要に応じて前のコミットに戻す

### ステージング (develop)

1. **プレビューデプロイ**: develop ブランチで Vercel プレビュー生成
2. **機能テスト**: プレビュー環境で動作確認
3. **品質保証**: 本番デプロイ前の最終チェック

## 🛠️ トラブルシューティング

### よくある問題と解決法

#### 1. マージコンフリクト

```bash
# 1. 最新のdevelopを取得
git checkout develop
git pull origin develop

# 2. feature ブランチでrebase
git checkout feature/ブランチ名
git rebase develop

# 3. コンフリクト解決後
git add .
git rebase --continue
```

#### 2. 間違ったブランチにコミット

```bash
# 1. コミットを取り消し（作業は保持）
git reset --soft HEAD~1

# 2. 正しいブランチに移動してコミット
git checkout 正しいブランチ
git add .
git commit -m "修正されたコミット"
```

#### 3. プッシュできない

```bash
# 1. リモートの最新を取得
git pull origin ブランチ名

# 2. 必要に応じてマージ・リベース
git push origin ブランチ名
```

## 📊 ワークフロー メトリクス

### 品質指標

- **PR レビュー時間**: 24 時間以内
- **CI/CD 実行時間**: 5 分以内
- **デプロイ成功率**: 95%以上
- **ホットフィックス頻度**: 月 1 回以下

### パフォーマンス目標

- **LCP**: 2.5 秒以下
- **FID**: 100ms 以下
- **CLS**: 0.1 以下

## 🔄 定期メンテナンス

### 週次作業

- [ ] 依存関係の更新確認
- [ ] セキュリティアップデート
- [ ] 不要ブランチの削除

### 月次作業

- [ ] パフォーマンス分析
- [ ] ログ分析・最適化
- [ ] バックアップ確認

---

**最終更新**: 2024 年 6 月 24 日  
**次回見直し**: 2024 年 7 月 24 日  
**担当者**: 開発チーム
