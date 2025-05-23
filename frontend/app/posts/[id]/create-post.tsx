import styles from "./styles/Home.module.css";

const CreatePost = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ポスト新規登録</h1>
      <form className={styles.form}>
        <label className={styles.label}>タイトル</label>
        <input type="text" className={styles.input} />
        <label className={styles.label}>内容</label>
        <textarea className={styles.textarea}></textarea>
        <button type="submit" className={styles.button}>
          投稿
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
