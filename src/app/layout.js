import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Runabout Farm",
  description: "Traveling petting zoo in the Fairfield County area",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Runabout Farm</title>

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.min.css"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/assets/finallogo.png" sizes="any" />
        <link rel="stylesheet" href="css/swiper-bundle.min.css" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
