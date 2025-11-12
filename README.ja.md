# Musuhi（産霊）

[English Version](./README.md)

**Musuhi(むすひ[産霊])** は、Claude CodeとGitHub Copilot向けの **仕様駆動開発（Specification Driven Development: SDD）** 専用AIエージェントインストーラーです。要件分析からデプロイ・保守まで、ソフトウェア開発ライフサイクル全体をサポートする19個の専門AIエージェントを提供します。

※ **「むすひ[産霊]」** は古語で 天地・万物を生み出し、成長させる霊妙な力 を指します。

## 仕様駆動開発（SDD）とは？

仕様駆動開発は、詳細な仕様書が開発プロセス全体をガイドする体系的アプローチです。Musuhiのエージェントは以下をサポートします：

1. **明確な要件定義** - Requirements Analystが包括的な仕様書を作成
2. **堅牢なアーキテクチャ設計** - System ArchitectとAPI Designerがスケーラブルなソリューションを計画
3. **品質の高い実装** - Software DeveloperがSOLID原則とベストプラクティスに従って開発
4. **セキュリティとパフォーマンスの保証** - Security AuditorとPerformance Optimizerが品質を検証
5. **確実なデプロイ** - DevOps EngineerとCloud Architectがインフラを管理
6. **継続的改善** - Orchestratorが全エージェントを調整して卓越性を維持

## 特徴

- 🎯 **19個の専門エージェント** - SDD ワークフローを完全カバー
- 🚀 **簡単インストール** - `npx`で1コマンド実行
- 🔄 **Claude Code & GitHub Copilot** - 両プラットフォーム対応
- 📋 **Orchestratorエージェント** - マルチエージェントワークフローを調整
- 🔧 **完全カスタマイズ可能** - プロジェクトニーズに合わせて調整
- 📚 **ベストプラクティス内蔵** - SOLID、OWASP、C4 Model、ADRなど

## インストール

グローバルインストール不要で、`npx`で直接使用できます：

```bash
npx musuhi
```

またはグローバルインストール：

```bash
npm install -g musuhi
```

## 使い方

### インタラクティブモード

引数なしで実行すると対話型セットアップが起動します：

```bash
npx musuhi
```

以下の質問に答えます：
1. Claude CodeかGitHub Copilotを選択
2. ターゲットディレクトリを指定（デフォルト：カレントディレクトリ）

### コマンドラインモード

コマンドライン引数で直接インストール：

```bash
# Claude Code用
npx musuhi install --tool claude-code

# GitHub Copilot用
npx musuhi install --tool github-copilot

# 別のディレクトリを指定
npx musuhi install --tool claude-code --dir /path/to/project
```

## ディレクトリ構造

### Claude Code
エージェントは `.claude/agents/` にインストールされます：

```
your-project/
├── CLAUDE.md              # Claude Code用プロジェクト設定
└── .claude/
    ├── README.md          # エージェントドキュメント
    └── agents/            # 19個の専門エージェント
        ├── orchestrator.md
        ├── code-reviewer.md
        ├── software-developer.md
        └── ... (他16個のエージェント)
```

`CLAUDE.md` ファイル（プロジェクトルート）は、Claude Codeにプロジェクト固有のコンテキストを提供します：
- 利用可能なエージェントとその目的
- SDDワークフローガイダンス
- クイックリファレンスコマンド
- エージェント使用のベストプラクティス

### GitHub Copilot
エージェントは `.github/agents/` にインストールされます：

```
your-project/
├── copilot-instructions.md  # GitHub Copilot用プロジェクト設定
└── .github/
    ├── README.md            # エージェントドキュメント
    └── agents/              # 19個の専門エージェント
        ├── orchestrator.md
        ├── code-reviewer.md
        ├── software-developer.md
        └── ... (他16個のエージェント)
```

`copilot-instructions.md` ファイル（プロジェクトルート）は、GitHub Copilotにプロジェクト固有のコンテキストを提供します：
- 利用可能なエージェントとその目的
- SDDワークフローガイダンス
- クイックリファレンスコマンド
- エージェント使用のベストプラクティス

## 利用可能なエージェント（19種類の専門家）

### 🎭 オーケストレーション
- **Orchestrator（統括管理者）** - 18個の専門エージェントを管理・調整し、タスク分解、エージェント選択、結果統合を担当

### 📋 要件定義・計画
- **Requirements Analyst（要件アナリスト）** - 要件分析、ユーザーストーリー作成、仕様定義、SRS文書、受入基準
- **Project Manager（プロジェクトマネージャー）** - プロジェクト計画、スケジューリング、リスク管理、進捗管理、チーム調整

### 🏗️ アーキテクチャ・設計
- **System Architect（システムアーキテクト）** - アーキテクチャ設計、C4モデル図、ADR作成、トレードオフ分析、技術選定
- **API Designer（API設計者）** - REST/GraphQL/gRPC API設計、OpenAPI仕様、APIベストプラクティス、エンドポイント文書化
- **Database Schema Designer（DB設計者）** - ER図、正規化、DDL生成、インデックス戦略、スキーマ最適化
- **UI/UX Designer（UI/UXデザイナー）** - ユーザーインターフェース設計、ワイヤーフレーム、プロトタイプ、デザインシステム、ユーザビリティテスト

### 💻 開発・実装
- **Software Developer（ソフトウェア開発者）** - 多言語コード実装（TypeScript、Python、Java、Goなど）、SOLID原則、デザインパターン、クリーンアーキテクチャ
- **Test Engineer（テストエンジニア）** - Jest、Pytest、Cypress、Playwright等を使ったユニット、統合、E2Eテスト

### 🔍 品質・レビュー
- **Code Reviewer（コードレビュアー）** - 品質、セキュリティ、SOLID原則、パフォーマンス、ベストプラクティスに焦点を当てた包括的コードレビュー
- **Bug Hunter（バグハンター）** - バグ調査、根本原因分析、体系的デバッグ、修正案生成
- **Quality Assurance（品質保証）** - QA戦略、テスト計画、品質メトリクス、包括的テスト調整

### 🔐 セキュリティ・パフォーマンス
- **Security Auditor（セキュリティ監査）** - OWASP Top 10チェック、認証認可レビュー、暗号化検証、脆弱性検出
- **Performance Optimizer（パフォーマンス最適化）** - パフォーマンス分析、ボトルネック検出、最適化戦略、プロファイリング、ベンチマーク

### ☁️ インフラ・運用
- **DevOps Engineer（DevOpsエンジニア）** - CI/CDパイプライン、Docker/Kubernetesデプロイ、インフラ自動化、監視設定
- **Cloud Architect（クラウドアーキテクト）** - AWS/Azure/GCPアーキテクチャ、IaC（Terraform/Bicep）、コスト最適化、クラウドネイティブ設計
- **Database Administrator（データベース管理者）** - データベース運用、パフォーマンスチューニング、バックアップ/リカバリ、監視、高可用性

### 📚 ドキュメント・特殊領域
- **Technical Writer（テクニカルライター）** - 技術文書、APIドキュメント、ユーザーガイド、READMEファイル、包括的プロジェクト文書
- **AI/ML Engineer（AI/MLエンジニア）** - 機械学習モデル開発、トレーニング、評価、デプロイ、MLOpsプラクティス

### 主要機能
- **対話型ダイアログ** - 各エージェントは5段階の構造化された会話で要件を収集
- **ドキュメント標準** - 英語ファーストの文書作成、日本語翻訳対応（`.md`と`.ja.md`）
- **ベストプラクティス** - SOLID、OWASP、C4 Model、ADR、TDD、DDDなどに準拠
- **ファイル管理** - 整理された出力ディレクトリ、進捗追跡、トレーサビリティ

## 使用例

### 新規プロジェクトの開始（仕様駆動開発ワークフロー）

```
# 1. 要件分析
@requirements-analyst タスク管理Webアプリケーションを構築したい

# 2. アーキテクチャ設計
@system-architect requirements-specification.mdに基づいてタスク管理システムのアーキテクチャを設計

# 3. API設計
@api-designer タスク管理エンドポイントのREST API仕様を作成

# 4. データベース設計
@database-schema-designer API仕様に基づいてデータベーススキーマを設計

# 5. 実装
@software-developer TypeScriptとExpressを使用してタスクAPIエンドポイントを実装

# 6. テスト
@test-engineer タスク管理APIの包括的テストを作成

# 7. セキュリティレビュー
@security-auditor 認証・認可実装を監査

# 8. デプロイ
@devops-engineer タスク管理アプリケーションのCI/CDパイプラインをセットアップ
```

### Orchestratorを使った複雑なタスク

```
@orchestrator ユーザー認証、商品カタログ、ショッピングカート、決済連携を含む
完全なEコマースプラットフォームを要件定義から作成してください。
```

**言語選択**: Orchestratorを初めて起動すると、コンソール出力に使用する言語（英語または日本語）を選択するよう求められます。選択した言語はセッション全体で使用されます。

```
🎭 Orchestrator AI

Welcome! / ようこそ！

Which language would you like to use for console output?
コンソール出力にどちらの言語を使用しますか？

Please select / 選択してください:
a) English
b) 日本語 (Japanese)
```

Orchestratorは自動的に：
- 適切なエージェントを選択（Requirements Analyst → System Architect → API Designer → Software Developer → Test Engineer → Security Auditor）
- 実行を調整
- タスク間の依存関係を管理
- 出力を統合・検証

### コードレビューワークフロー

```
@code-reviewer src/auth/ の認証モジュールをレビュー

@bug-hunter 断続的なログイン失敗問題を調査

@performance-optimizer 商品検索クエリのパフォーマンスを分析・最適化
```

### ドキュメント作成ワークフロー

```
@technical-writer OpenAPI仕様に基づいてAPIドキュメントを作成

@technical-writer タスク管理機能のユーザーガイドを生成
```

## カスタマイズ

インストール後、`agents/`ディレクトリ内のmarkdownファイルを編集してエージェントテンプレートをカスタマイズできます。プロジェクト固有のガイドライン、コーディング規約を追加したり、エージェントの動作をニーズに合わせて変更できます。

### カスタマイズ例

1. **企業固有のガイドラインを追加**
   - `code-reviewer.md`を編集してコーディング規約を含める
   - `security-auditor.md`を企業のセキュリティポリシーで更新

2. **エージェントの動作を設定**
   - 5段階ダイアログフローを調整
   - 出力ディレクトリ構造を変更
   - カスタムチェックリストを追加

3. **言語設定**
   - すべてのエージェントは英語と日本語のドキュメントをサポート
   - 各エージェントファイルで言語ポリシーをカスタマイズ

## 開発

Musuhiへの貢献や修正：

```bash
# リポジトリをクローン
git clone https://github.com/nahisaho/musuhi.git
cd musuhi

# 依存関係をインストール
npm install

# プロジェクトをビルド
npm run build

# ローカルでテスト
npm link
musuhi --help
```

## "Musuhi"の由来

"Musuhi"（結び）は日本語で「つながり」や「結びつき」を意味します。開発者とAIエージェントをつなぎ、有用なテンプレートをプロジェクトに結びつけるというツールの目的を表しています。

## ライセンス

MIT

## コントリビューション

コントリビューションを歓迎します！お気軽にPull Requestを送ってください。
