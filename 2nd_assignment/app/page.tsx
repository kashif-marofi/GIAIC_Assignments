import Link from "next/link"
import ContactPage from "./Contact/page"
import AboutPage from "./About/page"
import ServicesPage from "./Services/page"
import WebPage from "./Services/Websites/page"
import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
import Hero from "./Components/Hero/Hero"

const Homepage = () => {
  return (
    <div>
      <Header/>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="./Contact">Contact</Link>
        </li>
        <li>
          <Link href="./About">About</Link>
        </li>
        <li>
          <Link href="./Services">Services</Link>
        </li>
      </ul>
      <Hero/>

      <Footer/>

    </div>
  )
}

export default Homepage

