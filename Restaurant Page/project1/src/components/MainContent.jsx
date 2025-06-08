import styles from'./MainContent.module.css'

const MainContent = () => {
  return (
    <div className={styles.maincontainer}>
        
        <div className={styles.heroText}>
            <p>Welcome to OakFire Reserve</p>
        </div>

        <div className={styles.subHeroText}>
            <p>Where bold flavours meet refined taste. Indulge in expertly
                grilled steaks, rich ambience and timeless craftsmanship.
            </p>
        </div>

        <div className={styles.menuButtonContainer}>
            <a href="/menu"><button className={styles.orderButton}>Order now</button></a>
        </div>
        

    </div>
  )
}

export default MainContent
