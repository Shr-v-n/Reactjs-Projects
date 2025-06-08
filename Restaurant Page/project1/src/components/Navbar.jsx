import styles from'./Navbar.module.css'

const Navbar = () => {

  return (
    <div className={styles.mainContainer}>
      
        <div>
            <a href="/"><img 
            className={styles.logoContainer}
            src='../src/images/Logo_no_bg.png' />
            </a>
        </div>

        <ul className={styles.unorderedlist}>
          <a href="/"><li>Home</li></a>
          <a href="/menu"><li>Menu</li></a>
          <a href="/about"><li>About</li></a>
        </ul>

        <button className={styles.book_button}>BOOK A TABLE</button>

    </div>
  )
}

export default Navbar
