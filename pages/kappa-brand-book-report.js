import styles from "../styles/Home.module.scss";
import Link from "next/link";

export default function KappaBrandBookReport() {
  return (
    <div className={styles['beige_page']}>
      <Link href="/#Portfolio"><a href="/">Back to home</a></Link>
      <h1>Kappa brand book</h1>
      <p className={styles['beige_page-text']}>In the first year of my degree, I had to create a brand book of a brand of my choice. I chose Kappa, ensuring to define the seamless identity of the brand. This was an analytical piece of work that required concise and relevant information with realistic recommendations for the brand. The aim of this project was to provide a professional looking piece of work.  </p>
      <iframe className={styles.flipBook} src="https://online.fliphtml5.com/sxgai/degr/" seamless="seamless"
              scrolling="no" frameBorder="0" allowTransparency="true" allowFullScreen="true"></iframe>
    </div>
  )
}