import type { ReactNode } from "react";

interface SectionTitleProps {
  /** セクションタイトルのテキスト */
  children: ReactNode;
  /** タイトルのレベル (h1, h2, h3など) */
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  /** 追加のCSSクラス名 */
  className?: string;
  /** テキストの配置 */
  align?: "left" | "center" | "right";
}

export const SectionTitle = ({
  children,
  level = 1,
  className = "",
  align = "center",
}: SectionTitleProps) => {
  // ヘッダータグを動的に決定
  const HeadingTag = `h${level}` as const;

  // BEM記法でクラス名を構築
  const baseClass = "section-title";
  const modifierClass = align !== "center" ? `${baseClass}--${align}` : "";
  const classes = [baseClass, modifierClass, className]
    .filter(Boolean)
    .join(" ");

  return <HeadingTag className={classes}>{children}</HeadingTag>;
};
