import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "./components/Navbar";
export const metadata = {};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
