import './styles/index.css';  // 共通CSS（最初にインポート）
import './styles/Timer.css';  // レイヤー別分割：stylesフォルダからCSSをインポート
import './styles/Modal.css';
import './styles/ModalExample.css';
import Timer from './components/Timer';  // レイヤー別分割：componentsフォルダからインポート
import { TestTimer } from './components/TestTimer';
import { ModalExample } from './components/ModalExample';

export const App = () => {
    return (
        <div className="container">
            <h1 className="text-center">React タイマーアプリ</h1>
            <Timer />
            <TestTimer />
            <ModalExample />
        </div>
    );
};
