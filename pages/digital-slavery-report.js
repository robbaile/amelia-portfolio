import styles from "../styles/Home.module.scss";
import Link from "next/link";

export default function DigitalSlaveryReport() {
  return (
    <div className={styles['beige_page']}>
      <Link href="/#Portfolio"><a href="/">Back to home</a></Link>
      <h1>Future thinking report</h1>
      <p className={styles['beige_page-text']}>This research project involved deeply exploring our chosen macro trend. I chose Digital Connectivity, with trend drivers including ‘Mental Health and Wellbeing’, ‘Technology’ and ‘Social Media’. Research was undertaken into the impacts of this trend in society and the future impacts it will have in different industries.</p>
      <iframe className={styles.flipBook} src="https://online.fliphtml5.com/sxgai/yfbm/" seamless="seamless"
              scrolling="no" frameBorder="0" allowTransparency="true" allowFullScreen="true"></iframe>
    </div>
  )
}