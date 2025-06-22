import "./styles/index.css"; // 共通CSS（最初にインポート）
import "./styles/Timer.css"; // レイヤー別分割：stylesフォルダからCSSをインポート
import "./styles/Modal.css";
import "./styles/ModalExample.css";
import "./styles/ColorModeToggle.css";
import "./styles/SectionTitle.css";
// import Timer from "./components/Timer"; // レイヤー別分割：componentsフォルダからインポート
import { TestTimer } from "./components/TestTimer";
import { ModalExample } from "./components/ModalExample";
import { ColorModeToggle } from "./components/ColorModeToggle";
import { SectionTitle } from "./components/SectionTitle";

export const App = () => {
  return (
    <div className="container">
      <ColorModeToggle />
      <SectionTitle>React タイマーアプリ</SectionTitle>
      <TestTimer />
      <ModalExample />
    </div>
  );
};
