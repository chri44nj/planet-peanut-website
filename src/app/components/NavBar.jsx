import Link from "next/link";
import "../styles/NavBar.css";

function Navbar() {
  return (
    <div className="navbar">
      <Link className="link" href="/">
        Forside
      </Link>
      <div className="rightside">
        <nav>
          <ul className="nav-ul">
            <li>
              <Link className="link" href="/Laerer">
                For Lærere
              </Link>
            </li>
            <li>
              <Link className="link" href="/Foraeldre">
                For Forældre
              </Link>
            </li>
            <li>
              <Link className="link" href="/Konkurrencer">
                Konkurrencer
              </Link>
            </li>
            <li>
              <Link className="link" href="/Sponsorer">
                Bliv Sponsor
              </Link>
            </li>
            <li>
              <Link className="link" href="/Om-Planet_Peanut">
                Om Os
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
