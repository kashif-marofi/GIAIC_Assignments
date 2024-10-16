import Hero from "./Components/Hero/Hero";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import styles from "./page.module.css";

const Homepage = () => {
  return (
    <div className={styles.pageContainer}>
      <Header />
      <main className={styles.mainContent}>
        <Hero />
        {/* Add your main content here */}
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;