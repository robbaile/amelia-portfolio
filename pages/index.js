import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import {useRouter} from "next/router";
import {SocialIcon} from "react-social-icons";

export default function Home() {
  const router = useRouter();

  const navigateTo = (location) => {
    router.push(`/${location}`,`/${location}`,{ scroll: true });
  }

  return (
    <div>
      <Head>
        <title>Amelia Fraser Portfolio</title>
        <meta name="description" content="Nottingham Trent marketing portfolio for amelia fraser" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;700&display=swap" rel="stylesheet" />
      </Head>

      <main>
        <nav>
          <ul className={styles.nav}>
            <li className={styles["nav-item"]}><a href="#Home">HOME</a></li>
            <li className={styles["nav-item"]}><a href="#About">ABOUT ME</a></li>
            <li className={styles["nav-item"]}><a href="#Portfolio">PORTFOLIO PROJECT</a></li>
            <li className={styles["nav-item"]}><a href="#Skills">SKILLS & ATTRIBUTES</a></li>
            <li className={styles["nav-item"]}><a href="#Experience">EXPERIENCE</a></li>
            <li className={styles["nav-item"]}><a href="#Contact">CONTACT</a></li>
          </ul>
        </nav>
        <div className={styles['container_beige']}>
          <img className={styles['hero']} src="/hero.png" alt="photo of me" />
          <div className={styles['flex-container']}>
            <div className={styles['flex-left']}>
              <img className={styles.initials} alt="initials" src="amelia-name.png"/>
              <div>
                <button onClick={() => navigateTo("#About")} className={styles.button}>ABOUT ME</button>
                <button onClick={() => navigateTo("#Portfolio")} className={styles.button}>PORTFOLIO</button>
              </div>
              <div className={styles.socials}>
                <SocialIcon style={{margin: '5px'}} url="https://www.linkedin.com/in/amelia-fraser-0b53b0198/"/>
                <SocialIcon url="https://www.instagram.com/ameliafraser8/"/>
              </div>
            </div>
          </div>
        </div>
        <div id="About" className={styles['container_green-dark']}>
            <img className={styles["about-me-image"]} src="/goats.png" />
            <div className={styles["flex-text"]}>
                <h2>ABOUT ME</h2>
                <h3>Hello, I'm Amelia, a strategic and creative marketer.</h3>
                <p>I am a confident and dedicated graduate from Nottingham Trent University where I studied Fashion Marketing and Branding. University and the completion of my degree has shaped who I am today and changed the way I view the world of marketing. I have found the course interesting and inspiring, and I can’t wait to apply my strategic and creative thinking skills into industry. I can confidently and comfortably work independently or as part of a team with the goal to constantly achieve and grow my abilities.</p>
            </div>
        </div>
        <div id="Experience" className={styles['beige_page']}>
          <div>
            <h2>EXPERIENCE</h2>
            <div className={styles['experience-container']}>
              <div className={styles.experience}>
                <div className={styles['image-container']}>
                  <img className={styles['experience-logo']} src={'/knead-pubs-logo-dark.png'} alt={"knead pubs"} />
                </div>
                <div>
                  <p>OCTOBER 2018 - CURRENT</p>
                  <p><strong>Bar Waitress | PATEN & CO | Stamford, Lincolnshire</strong></p>
                  <p>I work at Patens during my holidays when home from university. My responsibilities whilst working at Paten & Co are to make sure customers are always happy, the bar is always tidy and to make delicious cocktails. I can make 15+ cocktails to a high standard, quickly, as the bar is always busy on a Friday and Saturday night. With new rules and regulations as a result of COVID-19 it is important that I make sure customers feel comfortable in the environment and ensure them that the pub in clean. </p>
                </div>
              </div>
              <div className={styles.experience}>
                <div className={styles['image-container']}>
                  <img className={styles['experience-logo-2']} src={'/justin-capp-logo.png'} alt={"justin capp"} />
                </div>
                <div>
                  <p>JULY 2020 - SEPTEMBER 2020</p>
                  <p><strong>Work Experience with a Leather Maker | JUSTIN CAPP | Thurning, Northamptonshire</strong></p>
                  <p>During this time, I worked as an intern for Justin Capp with his collection to create samples for Athens fashion week 2021. I created a number of different bags for his collection and one of the bags has recently appeared in Vogue magazine.</p>
                </div>
              </div>
              <div className={styles.experience}>
                <div className={styles['image-container']}>
                  <img className={styles['experience-logo-2']} src={'/anna-coture.png'} alt={"anna coture"} />
                </div>
                <div>
                  <p>JUNE 2021 - CURRENT</p>
                  <p><strong>Sales Assistant, Model | ANNA COUTURE | Stamford, Lincolnshire</strong></p>
                  <p>This job is paid work experience in a boutique where I model prom/wedding dresses and tend to the store during the day. I also assist with certain altering and hemming jobs when the boutique is busy. I intend to work here over the summer to help out as much as I can.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="Portfolio" className={styles['container_mustard']}>
          <h2>PORTFOLIO</h2>
          <p className={styles.p}>Throughout my time at university, I have been able to progress and develop the skills acquired from my course. My experience with Adobe's suite of products has considerably improved. This  is showcased throughout the visuals in my work. The examples of work below are in response to various briefs throughout the three-years on my course. </p>
          <div className={styles['portfolio-container']}>
            <div className={styles['portfolio-item-1']}>
              <h3>STAGE ONE REPORT</h3>
              <a href="/stage-one-report">
                <img className={styles['portfolio-image']} src="/stage-one-report.png" alt="stage one report" />
              </a>
            </div>
            <div className={styles['portfolio-item-2']}>
              <a href="/stage-two-report">
                <h3>STAGE TWO REPORT</h3>
                <img className={styles['portfolio-image']} src="/stage-two-report.png" alt="gym shark report" />
              </a>
            </div>
            <div className={styles['portfolio-item-3']}>
              <a href="/digital-slavery-report">
                <h3>FUTURE THINKING REPORT</h3>
                <img className={styles['portfolio-image']} src="/digital-slavery.png" alt="digital slavery report" />
              </a>
            </div>
            <div className={styles['portfolio-item-4']}>
              <a href="/kappa-brand-book-report">
                <h3>KAPPA BRAND BOOK</h3>
                <img className={styles['portfolio-image']} src="/kappa-report.png" alt="kappa brand book report" />
              </a>
            </div>
            <div className={styles['portfolio-item-1']}>
              <h3>LOOSE TIES BRAND BOOK</h3>
              <a href="/loose-ties-report">
                <img className={styles['portfolio-image']} src="/loose-ties-report.png" alt="stage one report" />
              </a>
            </div>
            <div className={styles['portfolio-item-2']}>
              <a href="/gym-shark-report">
                <h3>GYMSHARK REPORT</h3>
                <img className={styles['portfolio-image']} src="/gym-shark-report.png" alt="gym shark report" />
              </a>
            </div>
          </div>
        </div>
        <div id="Skills" className={styles['container_green-light']}>
          <h2>SKILLS & ATTRIBUTES</h2>
          <div className={styles['polaroid-container']}>
            <div className={styles.polaroid}>
              <img className={styles['polaroid-photo']} src="/insta/cloud.png"/>
              <p><strong>CREATIVITY</strong></p>
            </div>
            <div className={styles.polaroid}>
              <img className={styles['polaroid-photo']} src="/insta/teamwork.png"/>
              <p><strong>TEAMWORK</strong></p>
            </div>
            <div className={styles.polaroid}>
              <img className={styles['polaroid-photo']} src="/insta/strategy.png"/>
              <p><strong>STRATEGIC THINKER</strong></p>
            </div>
            <div className={styles.polaroid}>
              <img className={styles['polaroid-photo']} src="/insta/commercial.png"/>
              <p><strong>COMMERCIALLY ASTUTE</strong></p>
            </div>
            <div className={styles.polaroid}>
              <img className={styles['polaroid-photo']} src="/insta/collab.png"/>
              <p><strong>COLLABORATIVE ETHOS</strong></p>
            </div>
            <div className={styles.polaroid}>
              <img className={styles['polaroid-photo']} src="/insta/you-can-do-it.png"/>
              <p><strong>CAN DO ATTITUDE</strong></p>
            </div>
          </div>
        </div>
        <div className={styles['container_green-dark']}>
          <h2>CONTACT ME</h2>
          <p>Phone number:  <strong><a href="tel:07503 622636">07503 622636</a></strong></p>
          <p>Email:  <strong><a href="mailto:amelia.fraser8@outlook.com">amelia.fraser8@outlook.com</a></strong></p>
        </div>
      </main>
    </div>
  )
}
