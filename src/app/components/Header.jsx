import Button from "./Button";
import "../styles/Header.css";

function Header() {
  return (
    <section className="header">
      <div className="header-grid">
        <div className="call-to-action">
          <h1 className="heading">Gør matematik sjovt & socialt</h1>
          <p>Vi tror på, at læring er sjovere, når det gøres sammen med andre, så join dine venner og deltag i matematikrevolutionen i dag!</p>
          <Button href="https://planetpeanut.io/da/app/" text="Download Appen"></Button>
        </div>
        <img className="header-hamster" src="../../pics/hamster.webp" alt="hamster" />
      </div>
    </section>
  );
}

export default Header;
