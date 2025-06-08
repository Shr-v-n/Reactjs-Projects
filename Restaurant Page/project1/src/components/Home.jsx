import Navbar from "./Navbar";
import MainContent from "./MainContent";
import styles from "./Home.module.css"

const Home = () => {

  return (
    <div className={styles.mainContainer}>
        
        <Navbar />

        <MainContent />

    </div>
  )
}

export default Home
