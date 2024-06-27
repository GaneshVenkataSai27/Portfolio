import logo from "../assets/AGVSLogoUpdated.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return <nav className="mb-1 flex items-center justify-between py-3">
    <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-32" src={logo} alt="logo" />
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-4xl">
        <a href="https://www.linkedin.com/in/ganeshvenkatasai27" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/GaneshVenkataSai27" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaSquareXTwitter />
          </a>
          <a href="https://www.instagram.com/ganesh_adapala_/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a> 
    </div>
     </nav>
}

export default Navbar