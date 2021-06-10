import styles from "../styles/Home.module.scss";
import Link from "next/link";

export default function GymSharkReport() {
  return (
    <div className={styles['beige_page']}>
      <Link href="/#Portfolio"><a href="/">Back to home</a></Link>
      <h1>Gym shark report</h1>
      <p className={styles['beige_page-text']}>I live brief was set by Gymshark to launch a new store for the brand and explore different marketing strategies for three years, including a communications plan for the first year. The end of this project involved pitching our ideas to members of the Gymshark team.</p>
      <iframe className={styles.flipBook} src="https://online.fliphtml5.com/sxgai/kvft/" seamless="seamless"
              scrolling="no" frameBorder="0" allowTransparency="true" allowFullScreen="true"></iframe>
    </div>
  )
}