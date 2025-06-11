import { useState } from "react";
import { Modal } from "./Modal";

export const ModalExample = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSize, setModalSize] = useState<"sm" | "md" | "lg">("md");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="modal-example">
      <h1>モーダルサンプル</h1>
      <div className="controls">
        <label>
          モーダルサイズ
          <select
            value={modalSize}
            onChange={(e) => setModalSize(e.target.value as "sm" | "md" | "lg")}
          >
            <option value="sm">Small</option>
            <option value="md">Medium</option>
            <option value="lg">Large</option>
          </select>
        </label>
        <button onClick={openModal} className="open-button">
          モーダルを開く
        </button>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="モーダルタイトル"
        size={modalSize}
      >
        <div className="modal-content-example">
          <p>こんにちは！これはモーダルの中身だよ〜</p>
          <p>以下の方法でモーダルを閉じることができます：</p>
          <ul>
            <li>✕ ボタンをクリック</li>
            <li>背景をクリック</li>
            <li>Escキーを押す</li>
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
