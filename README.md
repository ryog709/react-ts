# React + TypeScript + Vite

このテンプレートは、HMR といくつかの ESLint ルールを使用して React を Vite で動作させるための最小限のセットアップを提供します。

現在、2 つの公式プラグインが利用可能です：

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) は [Babel](https://babeljs.io/) を使用して Fast Refresh を実現
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) は [SWC](https://swc.rs/) を使用して Fast Refresh を実現

## ESLint 設定の拡張

本番アプリケーションを開発している場合は、型を意識した lint ルールを有効にするために設定を更新することをお勧めします：

```js
export default tseslint.config({
  extends: [
    // ...tseslint.configs.recommendedを削除して、これに置き換える
    ...tseslint.configs.recommendedTypeChecked,
    // または、より厳しいルールを使用する場合はこちら
    ...tseslint.configs.strictTypeChecked,
    // オプションで、スタイリスティックなルールを追加
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // その他のオプション...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

React 固有の lint ルールについては、
[eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) と [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) をインストールすることもできます：

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
  plugins: {
    // react-xとreact-domプラグインを追加
    "react-x": reactX,
    "react-dom": reactDom,
  },
  rules: {
    // その他のルール...
    // 推奨されるTypeScriptルールを有効化
    ...reactX.configs["recommended-typescript"].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```

# react-ts
