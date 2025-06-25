import Link from "next/link";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

export default function Logo() {
  return (
    <Link
      href="/"
      className={`inline-flex shrink-0 transition-transform duration-300 ease-in-out hover:scale-110 ${orbitron.variable}`}
      aria-label="IDEV42"
      style={{
        fontFamily: "Orbitron",
        border: "2px solid",
        padding: "2px 7px",
        borderRadius: "10px",
        boxShadow: "inset 0 0 6px rgba(255, 255, 255, 0.6)",
        willChange: "transform",
      }}
    >
      <span style={{ fontWeight: "bold", color: "white", fontSize: "18px" }}>iDev42</span>
      <span style={{ fontWeight: "bold", color: "red", fontSize: "18px" }}>.</span>
    </Link>
  );
}
