// 【StrictMode】→ Reactの厳格モード（バグを見つけやすくしてくれる機能）
import { StrictMode } from 'react'

// 【createRoot】→ React 18の新しい方法でアプリを画面に表示する機能
import { createRoot } from 'react-dom/client'
import App from './App.tsx'  // メインのアプリコンポーネントを読み込み

// HTMLの「root」というIDの要素を探して、そこにReactアプリを表示する
createRoot(document.getElementById('root')!)
  .render(  // ←ここで実際に表示する
    <StrictMode>  {/* バグチェック機能をオンにする */}
      <App />     {/* あなたのアプリを表示 */}
    </StrictMode>
  )