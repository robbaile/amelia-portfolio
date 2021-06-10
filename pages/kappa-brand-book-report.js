import styles from "../styles/Home.module.scss";

export default function KappaBrandBookReport() {
  return (
    <div className={styles['beige_page']}>
      <h1>Kappa brand book</h1>
      <iframe className={styles.flipBook} src="https://online.fliphtml5.com/sxgai/degr/" seamless="seamless"
              scrolling="no" frameBorder="0" allowTransparency="true" allowFullScreen="true"></iframe>
    </div>
  )
}