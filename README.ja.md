# Musuhi（産霊）

[English Version](./README.md)

**Musuhi(むすひ[産霊])** は、Claude Code、GitHub Copilot、Cursor、Windsurf IDE、およびAI CLI（Gemini、Codex、Qwen）をサポートする **仕様駆動開発（Specification Driven Development: SDD）** 専用AIエージェントインストーラーです。要件分析からデプロイ・保守まで、ソフトウェア開発ライフサイクル全体をサポートする20個の専門AIエージェントを提供します。

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

- 🎯 **20個の専門エージェント** - SDD ワークフローを完全カバー
- 🧭 **プロジェクトメモリシステム** - 一貫性のあるコンテキスト認識開発のためのステアリングコンテキスト（v0.3.0）
- 📝 **EARS形式サポート** - 検証可能な要件定義（Easy Approach to Requirements Syntax）（v0.3.1）
- 📐 **SDD ワークフローテンプレート** - 要件、設計、タスク、調査の包括的なテンプレート（v0.3.2）
- 🌐 **マルチプラットフォーム対応** - Claude Code、GitHub Copilot、Cursor、Windsurf IDE、Gemini CLI、Codex CLI、Qwen Codeに対応（v0.4.0 新機能）
- 🚀 **簡単インストール** - `npx`で1コマンド実行
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
1. AIツールを選択（Claude Code、GitHub Copilot、Cursor、Windsurf IDE、Gemini CLI、Codex CLI、Qwen Code）
2. ターゲットディレクトリを指定（デフォルト：カレントディレクトリ）

### コマンドラインモード

コマンドライン引数で直接インストール：

```bash
# Claude Code用
npx musuhi install --tool claude-code

# GitHub Copilot用
npx musuhi install --tool github-copilot

# Cursor用
npx musuhi install --tool cursor

# Windsurf IDE用
npx musuhi install --tool windsurf

# Gemini CLI用
npx musuhi install --tool gemini-cli

# Codex CLI用
npx musuhi install --tool codex-cli

# Qwen Code用
npx musuhi install --tool qwen-code

# 別のディレクトリを指定
npx musuhi install --tool claude-code --dir /path/to/project
```

## ディレクトリ構造

### Claude Code
エージェントは `.claude/agents/` にインストールされます：

```
your-project/
├── CLAUDE.md              # Claude Code用プロジェクト設定
├── steering/              # プロジェクトメモリ（共有コンテキスト）
│   ├── structure.md       # アーキテクチャパターン、ディレクトリ構成
│   ├── tech.md            # 技術スタック、フレームワーク決定
│   ├── product.md         # ビジネスコンテキスト、製品目的
│   ├── rules/             # 開発ガイドライン
│   │   ├── ears-format.md      # EARS要件構文ガイド
│   │   ├── ears-format.ja.md   # EARS要件構文ガイド（日本語版）
│   │   ├── workflow.md         # SDD ワークフローガイド（8段階）
│   │   └── agent-validation-checklist.md  # エージェント品質検証
│   └── templates/         # ドキュメントテンプレート
│       ├── requirements.md     # 要件定義書テンプレート
│       ├── requirements.ja.md  # 要件定義書テンプレート（日本語版）
│       ├── design.md           # 技術設計テンプレート
│       ├── design.ja.md        # 技術設計テンプレート（日本語版）
│       ├── tasks.md            # 実装計画テンプレート
│       ├── tasks.ja.md         # 実装計画テンプレート（日本語版）
│       └── research.md         # 調査ドキュメントテンプレート
└── .claude/
    ├── README.md          # エージェントドキュメント
    └── agents/            # 20個の専門エージェント
        ├── steering.md            # プロジェクトメモリ管理者
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
├── steering/                # プロジェクトメモリ（共有コンテキスト）
│   ├── structure.md         # アーキテクチャパターン、ディレクトリ構成
│   ├── tech.md              # 技術スタック、フレームワーク決定
│   ├── product.md           # ビジネスコンテキスト、製品目的
│   ├── rules/               # 開発ガイドライン
│   │   ├── ears-format.md        # EARS要件構文ガイド
│   │   ├── ears-format.ja.md     # EARS要件構文ガイド（日本語版）
│   │   ├── workflow.md           # SDD ワークフローガイド（8段階）
│   │   └── agent-validation-checklist.md  # エージェント品質検証
│   └── templates/           # ドキュメントテンプレート
│       ├── requirements.md       # 要件定義書テンプレート
│       ├── requirements.ja.md    # 要件定義書テンプレート（日本語版）
│       ├── design.md             # 技術設計テンプレート
│       ├── design.ja.md          # 技術設計テンプレート（日本語版）
│       ├── tasks.md              # 実装計画テンプレート
│       ├── tasks.ja.md           # 実装計画テンプレート（日本語版）
│       └── research.md           # 調査ドキュメントテンプレート
└── .github/
    ├── README.md            # エージェントドキュメント
    └── agents/              # 20個の専門エージェント
        ├── steering.md              # プロジェクトメモリ管理者
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

### Cursor
エージェントは `.cursor/agents/` にインストールされます：

```
your-project/
├── .cursorrules           # Cursor用プロジェクト設定
├── steering/              # プロジェクトメモリ（共有コンテキスト）
│   ├── structure.md       # アーキテクチャパターン、ディレクトリ構成
│   ├── tech.md            # 技術スタック、フレームワーク決定
│   ├── product.md         # ビジネスコンテキスト、製品目的
│   ├── rules/             # 開発ガイドライン
│   │   ├── ears-format.md      # EARS要件構文ガイド
│   │   ├── workflow.md         # SDD ワークフローガイド（8段階）
│   │   └── agent-validation-checklist.md  # エージェント品質検証
│   └── templates/         # ドキュメントテンプレート
│       ├── requirements.md     # 要件定義書テンプレート
│       ├── design.md           # 技術設計テンプレート
│       ├── tasks.md            # 実装計画テンプレート
│       └── research.md         # 調査ドキュメントテンプレート
└── .cursor/
    ├── README.md          # エージェントドキュメント
    └── agents/            # 20個の専門エージェント
        ├── steering.md            # プロジェクトメモリ管理者
        ├── orchestrator.md
        ├── code-reviewer.md
        ├── software-developer.md
        └── ... (他16個のエージェント)
```

`.cursorrules` ファイルは、Cursorにプロジェクト固有のコンテキストとエージェント使用方法を提供します。

### Windsurf IDE
エージェントは `.windsurf/agents/` にインストールされます：

```
your-project/
├── .windsurfrules         # Windsurf IDE用プロジェクト設定
├── steering/              # プロジェクトメモリ（共有コンテキスト）
│   ├── structure.md       # アーキテクチャパターン、ディレクトリ構成
│   ├── tech.md            # 技術スタック、フレームワーク決定
│   ├── product.md         # ビジネスコンテキスト、製品目的
│   ├── rules/             # 開発ガイドライン
│   │   ├── ears-format.md      # EARS要件構文ガイド
│   │   ├── workflow.md         # SDD ワークフローガイド（8段階）
│   │   └── agent-validation-checklist.md  # エージェント品質検証
│   └── templates/         # ドキュメントテンプレート
│       ├── requirements.md     # 要件定義書テンプレート
│       ├── design.md           # 技術設計テンプレート
│       ├── tasks.md            # 実装計画テンプレート
│       └── research.md         # 調査ドキュメントテンプレート
└── .windsurf/
    ├── README.md          # エージェントドキュメント
    └── agents/            # 20個の専門エージェント
        ├── steering.md            # プロジェクトメモリ管理者
        ├── orchestrator.md
        ├── code-reviewer.md
        ├── software-developer.md
        └── ... (他16個のエージェント)
```

`.windsurfrules` ファイルは、Windsurf IDEにプロジェクト固有のコンテキストとエージェント使用方法を提供します。

### Gemini CLI、Codex CLI、Qwen Code
エージェントは `.gemini/agents/`、`.codex/agents/`、または `.qwen/agents/` にインストールされます：

```
your-project/
├── gemini-config.md       # プロジェクト設定（または codex-config.md / qwen-config.md）
├── steering/              # プロジェクトメモリ（共有コンテキスト）
│   ├── structure.md       # アーキテクチャパターン、ディレクトリ構成
│   ├── tech.md            # 技術スタック、フレームワーク決定
│   ├── product.md         # ビジネスコンテキスト、製品目的
│   ├── rules/             # 開発ガイドライン
│   │   ├── ears-format.md      # EARS要件構文ガイド
│   │   ├── workflow.md         # SDD ワークフローガイド（8段階）
│   │   └── agent-validation-checklist.md  # エージェント品質検証
│   └── templates/         # ドキュメントテンプレート
│       ├── requirements.md     # 要件定義書テンプレート
│       ├── design.md           # 技術設計テンプレート
│       ├── tasks.md            # 実装計画テンプレート
│       └── research.md         # 調査ドキュメントテンプレート
└── .gemini/               # （または .codex/ または .qwen/）
    ├── README.md          # エージェントドキュメント
    └── agents/            # 20個の専門エージェント
        ├── steering.md            # プロジェクトメモリ管理者
        ├── orchestrator.md
        ├── code-reviewer.md
        ├── software-developer.md
        └── ... (他16個のエージェント)
```

設定markdownファイルは、CLIツールにプロジェクト固有のコンテキストとエージェント使用方法を提供します。エージェントは `@` メンション（例：`@orchestrator`、`@requirements-analyst`）で呼び出します。

## プロジェクトメモリ（ステアリングシステム）

**v0.3.0 新機能**: Musuhiは全エージェントの共有コンテキストとして機能する **プロジェクトメモリ** システムを導入しました。これにより、プロジェクト全体で一貫性のある、コンテキストを考慮した開発が可能になります。

### プロジェクトメモリとは？

`steering/` ディレクトリには、プロジェクトの「記憶」を格納する3つのコアファイルがあります：

- **`structure.md`** - アーキテクチャパターン、ディレクトリ構成、命名規則
- **`tech.md`** - 技術スタック、フレームワーク、開発ツール、技術的制約
- **`product.md`** - ビジネスコンテキスト、製品目的、対象ユーザー、コア機能

### 動作の仕組み

1. **初期セットアップ**: Musuhiをインストールすると、テンプレートのステアリングファイルが作成されます
2. **ブートストラップ**: **Steering Agent** を使用してコードベースを分析し、プロジェクト固有のステアリングファイルを生成します
3. **自動参照**: すべてのエージェントが自動的にステアリングファイルを読み込み、プロジェクトコンテキストを理解します
4. **一貫性**: エージェントはアーキテクチャパターン、技術スタック、ビジネス要件に従います
5. **同期**: プロジェクトの進化に合わせてステアリングファイルを更新し、エージェントを最新の状態に保ちます

### Steering Agent

**Steering Agent** はプロジェクトメモリを管理します：

```bash
# 初回：コードベース分析からプロジェクトメモリをブートストラップ
@steering   # (Claude Codeの場合)

# 更新：コードベースの変更とステアリングファイルを同期
@steering   # ドリフトを検出して更新を提案

# レビュー：現在のステアリングコンテキストを確認
@steering   # 現在のプロジェクトメモリを表示
```

**モード：**
- **Bootstrap**: コードベース分析 → ステアリングファイル生成（初回）
- **Sync**: コード vs ステアリング比較 → ドリフト検出 → ファイル更新
- **Review**: 現在のステアリングコンテキストを表示

### メリット

- ✅ **一貫したアーキテクチャ** - すべてのエージェントが同じパターンに従う
- ✅ **技術スタックの認識** - エージェントがプロジェクトのフレームワークとツールを使用
- ✅ **ビジネスコンテキスト** - 製品目標に沿った開発
- ✅ **コンテキストスイッチの削減** - セッション間でプロジェクト知識が永続化
- ✅ **チームの整合性** - プロジェクト構造と決定事項の共通理解

---

## EARS形式による要件定義

**v0.3.1 新機能**: Musuhiは **EARS（Easy Approach to Requirements Syntax）** をサポートします。これは、検証可能で明確な受入基準を書くための標準化された形式です。

### EARSとは？

EARSは曖昧な要件を排除し、以下を保証する構造化パターンを提供します：
- ✅ **テスト可能性** - すべての要件を自動テストで検証可能
- ✅ **明確性** - 「〜すべき」「〜かもしれない」「使いやすい」などの曖昧な表現を排除
- ✅ **トレーサビリティ** - 要件からテストケースへの直接マッピング
- ✅ **一貫性** - すべての要件で標準化された形式

### EARS 5つのパターン

1. **イベント駆動** - `WHEN [イベント], the [システム] SHALL [応答]`
   - 例: `WHEN user clicks "Submit", the Order System SHALL validate all form fields`

2. **状態駆動** - `WHILE [状態], the [システム] SHALL [応答]`
   - 例: `WHILE payment is processing, the Checkout UI SHALL display loading indicator`

3. **望ましくない動作** - `IF [エラー条件], THEN the [システム] SHALL [応答]`
   - 例: `IF invalid card number is entered, THEN the Payment Form SHALL display "Invalid card number" error`

4. **オプション機能** - `WHERE [機能有効], the [システム] SHALL [応答]`
   - 例: `WHERE dark mode is enabled, the UI SHALL use dark color scheme`

5. **遍在的** - `The [システム] SHALL [応答]`
   - 例: `The User Service SHALL encrypt passwords using bcrypt with cost factor 12`

### EARS の実践

```bash
# Requirements Analyst が EARS形式で要件を作成
@requirements-analyst ユーザー認証の要件を作成

# 結果：受入基準が以下のように記述される：
# - WHEN user submits valid credentials, the Auth Service SHALL return JWT token
# - IF user enters incorrect password 3 times, THEN the System SHALL lock account
# - The Auth Service SHALL enforce password minimum 12 characters

# Test Engineer が EARS要件から直接テストケースを生成
@test-engineer 要件からテストを生成

# 結果：各EARS要件がテストになる：
# test_valid_login_returns_jwt()
# test_three_failed_attempts_locks_account()
# test_password_minimum_length_enforced()
```

### メリット

- ✅ **要件 → テストの直接マッピング** - EARS要件がテストケースに1:1で変換
- ✅ **曖昧性の排除** - すべての要件が具体的で測定可能
- ✅ **優れたカバレッジ** - すべてのシナリオ（正常系、エラー、エッジケース）が明示的
- ✅ **高速な開発** - 開発者が何を実装すべきか正確に把握
- ✅ **自動検証** - 受入基準が機械的に検証可能

### EARSリソース

- **ガイドライン**: `steering/rules/ears-format.md` / `steering/rules/ears-format.ja.md` - 包括的なEARS形式ドキュメント
- **テンプレート**: `steering/templates/requirements.md` / `steering/templates/requirements.ja.md` - EARS例付き要件定義書テンプレート
- **エージェント**: Requirements Analyst、System Architect、Test Engineer がすべてEARS形式をサポート

---

## SDD ワークフローテンプレート

**v0.3.2 新機能**: Musuhiは、仕様駆動開発のライフサイクル全体をサポートする包括的なドキュメントテンプレートとワークフローガイダンスを提供します。

### 8段階 SDD ワークフロー

Musuhiは調査から展開までの構造化された8段階ワークフローを実装します：

```
調査 → 要件定義 → 設計 → タスク化 → 実装 → テスト → デプロイ → 監視
```

**ワークフローガイド**: `steering/rules/workflow.md` は以下の詳細を提供します：
- 各フェーズの品質ゲート
- エージェント引継ぎ手順
- 要件トレーサビリティマトリクス
- ドキュメントライフサイクル管理
- ベストプラクティス（DO/DON'Tリスト）

### ドキュメントテンプレート

すべてのテンプレートはバイリンガルサポート（英語 `.md` と日本語 `.ja.md` バージョン）を含みます：

#### 1. 調査ドキュメント (`steering/templates/research.md`)
**目的**: 技術調査と選択肢分析
**使用タイミング**: 技術的決定が必要な場合、要件定義の前

**セクション**:
- 調査質問と方法論
- 長所・短所付きの選択肢分析
- 比較マトリックス
- 根拠付きの推奨事項
- リスク評価

#### 2. 要件定義書 (`steering/templates/requirements.md` / `.ja.md`)
**目的**: システムが **何をすべきか** を定義
**エージェント**: `@requirements-analyst`

**セクション**:
- EARS形式の機能要件
- 非機能要件（パフォーマンス、セキュリティ、スケーラビリティ）
- 受入基準付きユーザーストーリー
- 要件トレーサビリティマトリックス
- MoSCoW優先順位付け

#### 3. 設計ドキュメント (`steering/templates/design.md` / `.ja.md`)
**目的**: システムを **どのように構築するか** を定義
**エージェント**: `@system-architect`

**セクション**:
- アーキテクチャパターン選択（根拠付き）
- C4モデル図（コンテキスト、コンテナ、コンポーネント）
- EARSマッピング付きコンポーネント仕様
- API設計、データベーススキーマ、セキュリティ設計
- 主要フローのシーケンス図
- 技術スタックの整合性
- 付録：EARS要件クロスリファレンス

#### 4. タスクドキュメント (`steering/templates/tasks.md` / `.ja.md`)
**目的**: 設計を実行可能な実装タスクに分解
**エージェント**: `@project-manager` または `@software-developer`

**セクション**:
- 依存関係付きフェーズベースのタスク構成
- 各タスクには以下を含む：説明、EARSベースの受入基準、サブタスク、マップされた要件、設計参照
- 要件カバレッジマトリックス（100%カバレッジを保証）
- チーム割り当てとタイムライン（ガントチャート）
- 完了の定義チェックリスト
- 付録：EARSからテストへのマッピングガイド

### 全体的なトレーサビリティ

すべてのテンプレートは双方向トレーサビリティを強制します：

```
要件 ↔ 設計コンポーネント ↔ タスク ↔ コード ↔ テスト
```

**例**:
- `REQ-001`: WHEN user clicks submit, System SHALL validate
  → **設計**: `FormValidator` コンポーネント (design.md セクション 4.2)
  → **タスク**: タスク 2.3 "フォーム検証の実装"
  → **コード**: `src/validators/FormValidator.ts:25`
  → **テスト**: `tests/FormValidator.test.ts:test_submit_validation()`

### 品質ゲート

各ワークフロー段階には明確な完了基準があります：

- **要件ゲート**: すべての要件がEARS形式、ステークホルダー承認済み
- **設計ゲート**: すべての要件が設計にマップ済み、ステアリングとアーキテクチャが整合
- **実装ゲート**: コードレビュー合格、80%以上のテストカバレッジ、クリティカルバグなし
- **テストゲート**: すべてのEARS要件がテスト済み、すべてのテストが合格
- **デプロイゲート**: ステージングデプロイ成功、監視設定済み

### 使用方法

```bash
# 1. (オプション) 技術的選択肢を調査
# 作成: research.md をテンプレートから使用

# 2. Requirements Analyst で要件を定義
@requirements-analyst [機能] の要件を作成
# 出力: EARS受入基準付き requirements.md

# 3. System Architect でアーキテクチャを設計
@system-architect requirements.md に基づいて [機能] を設計
# 出力: コンポーネント仕様とEARSマッピング付き design.md

# 4. 実装計画を作成
@project-manager design.md からタスクを作成
# 出力: 要件カバレッジマトリックス付き tasks.md

# 5. Software Developer で実装
@software-developer tasks.md のタスク 2.1 を実装
# 開発者はコードコメントで要件IDを参照

# 6. Test Engineer でテスト
@test-engineer requirements.md からテストを生成
# EARS要件がテストケースに直接変換

# 7. デプロイ
@devops-engineer tasks.md のタイムラインに従ってデプロイ

# 8. 監視
@performance-optimizer 本番メトリクスを監視
```

### テンプレートリソース

- **ワークフローガイド**: `steering/rules/workflow.md` - 完全な8段階SDDワークフロー
- **検証**: `steering/rules/agent-validation-checklist.md` - エージェント品質検証フレームワーク
- **テンプレートディレクトリ**: `steering/templates/` - 例付きすべてのドキュメントテンプレート

### メリット

- ✅ **構造化プロセス** - 要件からデプロイまでの明確なワークフロー
- ✅ **完全なトレーサビリティ** - すべての要件をコードとテストまで追跡
- ✅ **品質保証** - 品質ゲートが不完全な作業の進行を防止
- ✅ **チーム調整** - 標準化されたドキュメントが役割間の引継ぎを改善
- ✅ **包括的カバレッジ** - 要件カバレッジマトリックスで漏れをゼロに
- ✅ **バイリンガルサポート** - すべてのテンプレートが英語と日本語で利用可能

---

## 利用可能なエージェント（20種類の専門家）

### 🎭 オーケストレーション
- **Orchestrator（統括管理者）** - 19個の専門エージェントを管理・調整し、タスク分解、エージェント選択、結果統合を担当する仕様駆動開発のマスターコーディネーター
- **Steering Agent（ステアリングエージェント）** - 🧭 プロジェクトメモリ管理者。コードベースを分析してステアリングコンテキスト（アーキテクチャパターン、技術スタック、ビジネスコンテキスト）を生成・維持し、一貫性のある開発を実現

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
