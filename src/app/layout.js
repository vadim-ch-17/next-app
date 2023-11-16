import { Inter, Roboto } from "next/font/google";
import "./style.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next App",
  description: "Generated by create next app",
};
console.log("test_");
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` next`}>{children}</body>
    </html>
  );
}
