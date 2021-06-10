import styles from "../styles/Home.module.scss";
import Link from "next/link";

export default function LooseTiesReport() {
  return (
    <div className={styles['beige_page']}>
      <Link href="/#Portfolio"><a href="/">Back to home</a></Link>
      <h1>Loose ties report</h1>
      <p className={styles['beige_page-text']}>This was a collaborative piece of work with fashion design students. I developed a brand based on my designer’s innovation project, portfolio and style. A brand book was created, communicating visually engaging aesthetics relevant to the brand and a successful communications plan that could be taken to market. </p>
      <iframe className={styles.flipBook} src="https://online.fliphtml5.com/sxgai/cbpr/" seamless="seamless"
              scrolling="no" frameBorder="0" allowTransparency="true" allowFullScreen="true"></iframe>
    </div>
  )
}