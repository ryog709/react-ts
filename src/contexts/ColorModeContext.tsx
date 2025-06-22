import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

// カラーモードの型定義
type ColorMode = "light" | "dark";

// コンテキストの型定義
interface ColorModeContextType {
  mode: ColorMode;
  toggleMode: () => void;
}

// コンテキストを作成
const ColorModeContext = createContext<ColorModeContextType | undefined>(
  undefined
);

// プロバイダーコンポーネント
export const ColorModeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<ColorMode>("light");

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  // テーマ属性をbodyに設定
  useEffect(() => {
    document.body.setAttribute("data-theme", mode);
  }, [mode]);

  return (
    <ColorModeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ColorModeContext.Provider>
  );
};

// カスタムフック
export const useColorMode = () => {
  const context = useContext(ColorModeContext);
  if (context === undefined) {
    throw new Error("useColorMode must be used within a ColorModeProvider");
  }
  return context;
};
