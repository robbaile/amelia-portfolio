import styles from "../styles/Home.module.scss";

export default function LooseTiesReport() {
  return (
    <div className={styles['beige_page']}>
      <h1>Loose ties report</h1>
      <iframe className={styles.flipBook} src="https://online.fliphtml5.com/sxgai/cbpr/" seamless="seamless"
              scrolling="no" frameBorder="0" allowTransparency="true" allowFullScreen="true"></iframe>
    </div>
  )
}