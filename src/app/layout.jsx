import { Mulish } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";

const inter = Mulish({ subsets: ["latin"] });

export const metadata = {
  title: "Ijara Web Portfolio",
  description: "Ijara Web Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
