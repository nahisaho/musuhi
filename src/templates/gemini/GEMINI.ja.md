# Musuhi - 仕様駆動開発 AI エージェント

このプロジェクトは、Gemini CLI用の20種類の専門AIエージェントを持つ**Musuhi**を使用しています。

## 🧭 プロジェクトメモリ（ステアリングシステム）

**重要**: タスクを開始する前に、`steering/` ディレクトリにステアリングファイルが存在するか確認してください：
- `steering/structure.md` - アーキテクチャパターン、ディレクトリ構成、命名規則
- `steering/tech.md` - 技術スタック、フレームワーク、開発ツール
- `steering/product.md` - ビジネスコンテキスト、プロダクトの目的、ユーザー

これらのファイルが存在する場合、プロジェクトのコンテキストを理解するため、**必ず最初に読んでください**。

## 🎭 利用可能なエージェント

このプロジェクトには`.gemini/agents/`に20種類の専門エージェントがあります：

### オーケストレーション
- `orchestrator` - 複雑なマルチエージェントワークフローのマスターコーディネーター
- `steering` - プロジェクトメモリマネージャー（コードベースを分析してステアリングコンテキストを生成・維持）

### 要件分析とプランニング
- `requirements-analyst` - 要件分析、ユーザーストーリー、EARS形式、SRS文書
- `project-manager` - プロジェクト計画、スケジューリング、リスク管理

### アーキテクチャと設計
- `system-architect` - システムアーキテクチャ、C4図、ADR、EARS要件マッピング
- `api-designer` - REST/GraphQL/gRPC API設計、OpenAPI仕様
- `database-schema-designer` - データベース設計、ER図、DDL
- `ui-ux-designer` - UI/UX設計、ワイヤーフレーム、プロトタイプ

### 開発と実装
- `software-developer` - 多言語コード実装、SOLID原則
- `test-engineer` - ユニット、統合、E2Eテスト（EARS要件マッピング付き）

### 品質とレビュー
- `code-reviewer` - コードレビュー、SOLID原則、ベストプラクティス
- `bug-hunter` - バグ調査、根本原因分析
- `quality-assurance` - QA戦略、テスト計画

### セキュリティとパフォーマンス
- `security-auditor` - OWASP Top 10、脆弱性検出
- `performance-optimizer` - パフォーマンス分析、最適化

### インフラストラクチャと運用
- `devops-engineer` - CI/CDパイプライン、Docker/Kubernetes
- `cloud-architect` - AWS/Azure/GCP、IaC（Terraform/Bicep）
- `database-administrator` - データベース運用、チューニング

### ドキュメントと専門分野
- `technical-writer` - 技術文書、APIドキュメント
- `ai-ml-engineer` - MLモデル開発、MLOps

## 📋 SDDワークフロー（8段階）

```
調査 → 要件定義 → 設計 → タスク化 → 実装 → テスト → デプロイ → 監視
```

**ワークフローガイド**: 詳細は`steering/rules/workflow.md`を参照してください。

### ドキュメントテンプレート

`steering/templates/`のテンプレートを使用してください：
- `research.md` - 技術調査とオプション分析
- `requirements.md` - EARS形式の要件と受入基準
- `design.md` - EARS要件マッピング付き技術設計
- `tasks.md` - 要件カバレッジマトリックス付き実装計画

## 📝 EARS形式（Easy Approach to Requirements Syntax）

すべての要件はEARSパターンを使用する必要があります：
- **イベント駆動**: `WHEN [イベント], the [システム] SHALL [応答]`
- **状態駆動**: `WHILE [状態], the [システム] SHALL [応答]`
- **望ましくない動作**: `IF [エラー], THEN the [システム] SHALL [応答]`
- **オプション機能**: `WHERE [機能が有効], the [システム] SHALL [応答]`
- **遍在**: `The [システム] SHALL [要件]`

**ガイドライン**: 完全なEARSドキュメントは`steering/rules/ears-format.md`を参照してください。

## 🎯 クイックスタート

### 初回セットアップ
```
1. steeringエージェントでプロジェクトメモリを生成
2. steering/ディレクトリのステアリングコンテキストを確認
3. エージェントで開発を開始
```

### 複雑なプロジェクトの場合
```
orchestratorエージェントを使用してマルチエージェントワークフローを調整
```

### 特定タスクの場合
```
requirements-analystを使用して機能の要件を作成
system-architectを使用してrequirements.mdに基づいてアーキテクチャを設計
software-developerを使用してdesign.mdに従ってコンポーネントを実装
test-engineerを使用してrequirements.mdからテストを生成
```

## 📐 ドキュメント標準

- **言語ポリシー**: 英語ドキュメントを先に作成（`.md`）、その後日本語翻訳（`.ja.md`）
- **参照ポリシー**: ドキュメントを読む際は常に英語版（`.md`）を参照
- **トレーサビリティ**: 要件 ↔ 設計 ↔ タスク ↔ コード ↔ テストのマッピングを維持

## ✅ 品質ゲート

- **要件**: すべてEARS形式、ステークホルダー承認済み
- **設計**: すべての要件がマッピング済み、ステアリングとアーキテクチャが整合
- **実装**: コードレビュー合格、80%以上のテストカバレッジ、クリティカルなバグなし
- **テスト**: すべてのEARS要件がテスト済み、すべてのテストが合格
- **デプロイ**: ステージング成功、モニタリング設定済み

## 🔗 リソース

- **ワークフロー**: `steering/rules/workflow.md` - 8段階SDDワークフロー
- **EARS形式**: `steering/rules/ears-format.md` - 要件構文ガイド
- **テンプレート**: `steering/templates/` - ドキュメントテンプレート
- **エージェント検証**: `steering/rules/agent-validation-checklist.md`

---

**Powered by Musuhi** - AI支援コーディングのための仕様駆動開発
