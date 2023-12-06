import "./globals.css";
import { Poppins } from "next/font/google";
import NavBar from "./components/NavBar";
export const metadata = {};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
