import { Poppins, Roboto, Rubik } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";

const inter = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "NextMeal App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}