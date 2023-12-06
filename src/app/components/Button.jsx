import "../styles/Button.css";
import Link from "next/link";
function Button({ text, href }) {
  return (
    <Link href={href} className="primary-button">
      {text}
    </Link>
  );
}

export default Button;
