import styles from './MenuNavbar.module.css'

const MenuNavbar = () => {
  return (
    <div className={styles.mainContainer}>
      
        <div className={styles.logoContainer}>
          <a href="/">
            <img 
            src="../src/images/Logo_no_bg.png"
            className={styles.logo}
            />
          </a>
        </div>

        <h1 className={styles.heading}>
        
        </h1>

        <div>

        </div>

    </div>
  )
}

export default MenuNavbar
