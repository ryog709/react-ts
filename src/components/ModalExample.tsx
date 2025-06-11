import { useState } from "react";
import { Modal } from "./Modal";

export const ModalExample = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="modal-example">
      <h1>モーダルサンプル</h1>
      <div className="controls">
        <button onClick={openModal} className="open-button">
          モーダルを開く
        </button>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="モーダルタイトル"
      >
        <div className="modal-content-example">
          <p>こんにちは！これはモーダルの中身だよ〜</p>
          <p>以下の方法でモーダルを閉じることができます：</p>
          <ul className="modal-list">
            <li className="modal-list-item">✕ ボタンをクリック</li>
            <li className="modal-list-item">背景をクリック</li>
            <li className="modal-list-item">Escキーを押す</li>
          </ul>
          <div className="modal-actions">
            <button
              onClick={closeModal}
              className="action-button primary"
            >
              了解！
            </button>
            <button
              onClick={closeModal}
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
