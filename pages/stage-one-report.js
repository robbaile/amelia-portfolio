import styles from "../styles/Home.module.scss";
import Link from "next/link";

export default function StageOneReport() {
  return (
    <div className={styles['beige_page']}>
      <Link href="/#Portfolio"><a href="/">Back to home</a></Link>
      <h1>Stage one report</h1>
      <p className={styles['beige_page-text']}>This research project allowed me to critically analyse and conduct in-depth research around my chosen macro trend, Digital Connectivity. The question above was extensively debated with primary and secondary research techniques. This report formed final insights and recommendations, which were later used to help create a new business concept.</p>
      <iframe className={styles.flipBook} src="https://online.fliphtml5.com/sxgai/xzit/" seamless="seamless"
              scrolling="no" frameBorder="0" allowTransparency="true" allowFullScreen="true"></iframe>
    </div>
  )
}