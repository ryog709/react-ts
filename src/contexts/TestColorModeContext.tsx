import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

// カラーモードの型定義
type TestColorMode = "light" | "dark";

// コンテキストの型定義
interface TestColorModeContextType {
	mode: TestColorMode;
	toggleMode: () => void;
}

// コンテキストを作成（初期値はundefined）
const TestColorModeContext = createContext<TestColorModeContextType | undefined>(
	undefined
);

// プロバイダーコンポーネント
export const TestColorModeProvider = ({ children }: { children: ReactNode }) => {
	const [mode, setMode] = useState<TestColorMode>("light");

	const toggleMode = () => {
		setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
	};

	// テーマ属性をbodyに設定
	useEffect(() => {
		document.body.setAttribute("data-mode", mode);
	}, [mode]);

	return (
		<TestColorModeContext.Provider value={{ mode, toggleMode }}>
			{children}
		</TestColorModeContext.Provider>
	);
};

// カスタムフック
export const useTestColorMode = () => {
	const context = useContext(TestColorModeContext);
	if (context === undefined) {
		throw new Error(
			"useTestColorMode must be used within a TestColorModeProvider"
		);
	}
	return context;
};
