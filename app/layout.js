// import { Geist, Geist_Mono } from "next/font/google";
import { Roboto } from 'next/font/google'
import "./globals.css";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: "MyNext",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}
        
      >
        {children}
      </body>
    </html>
  );
}
