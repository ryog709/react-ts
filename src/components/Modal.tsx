import { useEffect, useCallback } from "react";
import type { ReactNode } from "react";

interface ModalProps {
  /** モーダルが開いているかどうか */
  isOpen: boolean;
  /** モーダルを閉じるための関数 */
  onClose: () => void;
  /** モーダル内に表示する子要素 */
  children: ReactNode;
  /** モーダルのタイトル (任意) */
  title?: string;
}

export const Modal = ({
  isOpen,
  onClose,
  children,
  title = "",
}: ModalProps) => {
  // isOpen の状態が変化した際の副作用を管理 (例: イベントリスナーの追加・削除)
  useEffect(() => {
    // Escapeキーが押されたときにモーダルを閉じる関数
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      // モーダルが開いている場合、keydownイベントリスナーを追加
      document.addEventListener("keydown", handleEscKey);
      // 背景コンテンツのスクロールを無効化
      document.body.style.overflow = "hidden";
    }

    // クリーンアップ関数: コンポーネントが非表示になる際やアンマウントされる際に実行
    return () => {
      document.removeEventListener("keydown", handleEscKey);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  // モーダルの背景クリック時に呼ばれる関数
  // useCallback で関数をメモ化し、不要な再生成を防ぐ
  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      // クリックされた要素が背景自身である場合 (e.target) のみモーダルを閉じる
      // e.currentTarget はイベントリスナーが設定されている要素 (この場合は背景)
      if (e.target === e.currentTarget) {
        onClose();
      }
    },
    [onClose]
  );

  // モーダルが閉じていれば、何もレンダリングしない (nullを返す)
  if (!isOpen) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={handleBackdropClick}
      // WAI-ARIA属性: アクセシビリティを向上させるための役割や状態を定義
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? "modal-title" : undefined}
    >
      <div className="modal-content">
        <div className="modal-header">
          {title && (
            <h2 id="modal-title" className="modal-title">
              {title}
            </h2>
          )}
          <button
            className="modal-close-button"
            onClick={onClose}
            aria-label="モーダルを閉じる"
          >
            ✖︎
          </button>
        </div>
        {/* 親コンポーネントから渡されたモーダルの主要な内容を表示 */}
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};
