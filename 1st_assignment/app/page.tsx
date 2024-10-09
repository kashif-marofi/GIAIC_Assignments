import HomePage from "./Home/page";
import ContactPage from "./Contact/page";
import AboutPage from "./About/page";
import ServicesPage from "./Services/page";
import WebPage from "./Services/Websites/page";


export default function Home() {
  return (
    <div>
      <h1 className="text-xl" >HOME PAGE</h1>
      <ul>
        <li><a href="/Home" target="_blank">Home</a></li>
        <li><a href="/Contact">Contact</a></li>
        <li><a href="/About">About</a></li>
        <li><a href="/Services">Services</a></li>
        <li><a href="/Websites"></a></li>
      </ul>
    </div>
  );
}
