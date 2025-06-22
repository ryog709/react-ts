import { useColorMode } from "../contexts/ColorModeContext";

export const ColorModeToggle = () => {
  const { mode, toggleMode } = useColorMode();

  return (
    <div className="color-mode-toggle">
      <div className="color-mode-toggle__wrapper">
        <span className="color-mode-toggle__label">ライト</span>
        <button
          className={`color-mode-toggle__button ${
            mode === "dark" ? "color-mode-toggle__button--active" : ""
          }`}
          onClick={toggleMode}
          aria-label={`Switch to ${mode === "light" ? "dark" : "light"} mode`}
          role="switch"
          aria-checked={mode === "dark"}
        >
          <span className="color-mode-toggle__slider"></span>
        </button>
        <span className="color-mode-toggle__label">ダーク</span>
      </div>
      <p className="color-mode-toggle__status">
        現在のモード: <strong>{mode === "light" ? "ライト" : "ダーク"}</strong>
      </p>
    </div>
  );
};
