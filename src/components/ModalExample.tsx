import { useState } from "react"; // Reactのstateを使うために必要
import { Modal } from "./Modal"; // 作ったばっかりのModalコンポーネントをここで使う

export const ModalExample = () => {
  // モーダルが開いてるか閉じてるかを管理するstate
  // 最初は閉じてるから `false` にしてる
  const [isModalOpen, setIsModalOpen] = useState(false);

  // モーダルを開く関数！stateを `true` にするだけ
  const openModal = () => setIsModalOpen(true);
  // モーダルを閉じる関数！stateを `false` にするだけ
  const closeModal = () => setIsModalOpen(false);

  return (
    // モーダルサンプルの全体を囲むdiv
    <div className="modal-example">
      <h1>モーダルサンプル</h1> {/* タイトル */}
      <div className="controls">
        {/* このボタンをクリックするとモーダルが開く */}
        <button onClick={openModal} className="open-button">
          モーダルを開く
        </button>
      </div>
      {/* ここでModalコンポーネントを使ってる */}
      <Modal
        isOpen={isModalOpen} // isModalOpen の状態をModalコンポーネントに教えてあげる
        onClose={closeModal} // 閉じる関数もModalコンポーネントに渡してあげる
        title="モーダルタイトル" // モーダルに表示するタイトル
      >
        {/* ↓ここから下がModalコンポーネントの中に表示される内容 */}
        <div className="modal-content-example">
          <p>こんにちは！これはモーダルの中身だよ</p>
          <p>以下の方法でモーダルを閉じることができます</p>
          {/* モーダルを閉じる方法のリスト */}
          <ul className="modal-list">
            <li className="modal-list-item">✕ ボタンをクリック</li>
            <li className="modal-list-item">背景をクリック</li>
            <li className="modal-list-item">Escキーを押す</li>
          </ul>
          {/* モーダル内のアクションボタンたち */}
          <div className="modal-actions">
            <button
              onClick={closeModal} // このボタンもモーダルを閉じる
              className="action-button primary"
            >
              了解！
            </button>
            <button
              onClick={closeModal} // こっちのボタンもモーダルを閉じる
              className="action-button secondary"
            >
              キャンセル
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
