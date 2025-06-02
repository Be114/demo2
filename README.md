# NTTコムウェア ソリューション紹介ページ

NTTコムウェアの様々なソリューションを紹介するWebサイトのプロジェクトです。

## 📋 プロジェクト概要

企業のデジタル変革を支援するNTTコムウェアのソリューションを効果的に紹介し、潜在顧客との接点を創出するためのWebサイトです。

## 🚀 技術スタック

- **フロントエンド**: React + Next.js 14
- **スタイリング**: Tailwind CSS
- **状態管理**: React Context API
- **アニメーション**: Framer Motion
- **型安全性**: TypeScript
- **パッケージマネージャー**: npm

## 📁 プロジェクト構造

```
src/
├── app/                # Next.js App Router
│   ├── globals.css     # グローバルスタイル
│   ├── layout.tsx      # レイアウトコンポーネント
│   └── page.tsx        # メインページ
├── components/         # 再利用可能なコンポーネント
│   ├── Header.tsx      # ヘッダー・ナビゲーション
│   ├── Hero.tsx        # ヒーローセクション
│   ├── Solutions.tsx   # ソリューション概要
│   ├── Contact.tsx     # お問い合わせフォーム
│   └── Footer.tsx      # フッター
├── next.config.js      # Next.js設定
├── tailwind.config.js  # Tailwind CSS設定
├── tsconfig.json       # TypeScript設定
└── package.json        # 依存関係とスクリプト
```

## 🎯 MVP機能

### Phase 1: 基本構造 ✅
- [x] 要件定義書作成
- [x] レスポンシブなランディングページ
- [x] ソリューションカテゴリの概要表示
- [x] 基本的なナビゲーション
- [x] お問い合わせフォーム

### Phase 2: コンテンツ拡充
- [ ] 詳細なソリューション説明ページ
- [ ] 事例紹介セクション
- [ ] 検索・フィルター機能
- [ ] 多言語対応

### Phase 3: 高度な機能
- [ ] インタラクティブなデモ
- [ ] 資料ダウンロード機能
- [ ] セミナー・イベント管理
- [ ] 管理画面の実装

## 📖 ドキュメント

詳細な要件定義書は [CLAUDE.md](./CLAUDE.md) をご覧ください。

## 🛠️ 開発環境のセットアップ

### 必要な環境
- **Node.js**: v18.0.0 以上
- **npm**: v8.0.0 以上（Node.jsに同梱）

### 🚀 プロジェクトの起動方法

1. **リポジトリのクローン**
   ```bash
   git clone https://github.com/Be114/demo2.git
   cd demo2
   ```

2. **依存関係のインストール**
   ```bash
   npm install
   ```

3. **開発サーバーの起動**
   ```bash
   npm run dev
   ```

4. **ブラウザでアクセス**
   ```
   http://localhost:3000
   ```

### 📦 利用可能なスクリプト

- `npm run dev` - 開発サーバーを起動（ホットリロード有効）
- `npm run build` - 本番用ビルドを作成
- `npm run start` - 本番用サーバーを起動（事前に`npm run build`が必要）
- `npm run lint` - ESLintによるコード検証
- `npm run type-check` - TypeScriptの型チェック

### 🔧 開発時の推奨フロー

1. **機能開発前**
   ```bash
   npm run type-check  # 型エラーチェック
   npm run lint        # コード品質チェック
   ```

2. **開発中**
   ```bash
   npm run dev         # 開発サーバー起動
   ```

3. **デプロイ前**
   ```bash
   npm run build       # 本番ビルド確認
   npm run start       # 本番動作確認
   ```

## 📞 お問い合わせ

プロジェクトに関するご質問は、GitHubのIssueまたはPull Requestでお知らせください。