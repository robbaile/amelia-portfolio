import styles from "../styles/Home.module.scss";

export default function StageTwoReport() {
  return (
    <div className={styles['beige_page']}>
      <h1>Stage two report</h1>
      <p className={styles['beige_page-text']}>This project gave me the opportunity to put my creative thinking skills to use to product an innovative business concept based on insights from my Stage One report and primary research. A vast amount of market research was carried out to create a sustainable fashion brand for Generation Z. A realistic business plan was conceptualised containing a three-year marketing strategy accompanied by a detailed communications plan for the first year. The business plan was supported with appropriate financials to prove the brand could be commercially viable.</p>
      <iframe className={styles.flipBook} src="https://online.fliphtml5.com/sxgai/qnvl/" seamless="seamless"
              scrolling="no" frameBorder="0" allowTransparency="true" allowFullScreen="true"></iframe>
    </div>
    )
}