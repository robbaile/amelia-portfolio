import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Amelia Fraser Portfolio</title>
        <meta name="description" content="Nottingham Trent marketing portfolio for amelia fraser" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <nav>
          <ul className={styles.nav}>
            <li className={styles["nav-item"]}><a href="#About">About me</a></li>
            <li className={styles["nav-item"]}><a href="#Experience">Experience</a></li>
            <li className={styles["nav-item"]}><a href="#Portfolio">Portfolio</a></li>
          </ul>
        </nav>
        <div className={styles['container_beige']}>
          <img className={styles.initials} alt="initials" src="initials.svg"/>
        </div>
        <div id="About" className={styles['container_green-dark']}>
            <img className={styles.initials} alt="initials" src="initials.svg"/>
        </div>
        <div id="Experience" className={styles['container_mustard']}>
          <img className={styles.initials} alt="initials" src="initials.svg"/>
        </div>
        <div id="Portfolio" className={styles['container_green-light']}>
          <img className={styles.initials} alt="initials" src="initials.svg"/>
        </div>
        <div className={styles['container_beige']}>
          <img className={styles.initials} alt="initials" src="initials.svg"/>
        </div>
      </main>
    </div>
  )
}
