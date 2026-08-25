import { Geist, Geist_Mono,Rubik } from "next/font/google";
import { SmoothScroll } from "@/Componants/SmoothScroll";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['400', '500', '700','900'],
  variable: '--font-rubik',
})


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: "_____| Paul DAVID |______",
  description: "Portfolio de Paul DAVID, développeur web spécialisé en Next.js, JavaScript et C#. Ancien ingénieur du son passionné par la création d'applications web performantes et intuitives.",
  keywords: "Paul DAVID, développeur web, Next.js, JavaScript, C#, ingénieur du son, portfolio, applications web, développement front-end, développement back-end",
  author: "Paul DAVID",
  robots: "index",
};



export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} ${rubik.variable} antialiased`}>
        <SmoothScroll>
          {children}
          <Analytics />
        </SmoothScroll>
      </body>
    </html>
  );
}
