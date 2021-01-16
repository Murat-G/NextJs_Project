import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>

      <div className={styles.content}>

        <div className={styles.containerHeader}>
          <p className={styles.headerTitle}>New Title</p>
        </div>

        <div className={styles.main}>

          <input type="text" placeHolder="New Title" className={styles.mainInput} name="Title" />

          <div className={styles.mainDesc}>
            <textarea
              name="comments"
              placeholder="New Description"
              className={styles.mainDescInput}
              maxlength="1375">
            </textarea>
          </div>

          <div className={styles.mainImage}>
            <p className={styles.plus}>+</p>
            <p className={styles.imageText}>GÖRSEL</p>
          </div>

          <button className={styles.button}></button>

        </div>

      </div>

    </div>
  )
}
{/* <p className={styles.mainDescText}>New Description</p> */ }
{/* <input type="text" placeHolder="New Description"  name="desc" /> */ }