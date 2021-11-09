/**
 * { children }というのはreact特有のprops（？）
 * Vueで言うslotみたいなものだと思われる
 * 大文字小文字を区別するらしいので注意、ミスって{ Children }としてもエラーが出ない...
 */
import styles from "./layout.module.css";

export default function Layout({ children }) {
  return <div className={styles.container}>テスト{children}</div>;
}
