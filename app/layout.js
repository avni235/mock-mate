import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
//helpful for seo
export const metadata = {
  title: "Mock Mate",
  description: "Elevate your interview preparation with MockMate, the AI-powered platform that offers realistic mock interview simulations. Practice with tailored questions, receive instant feedback, and refine your responses to build confidence and improve your performance. Whether you're a student or a professional, MockMate helps you master the art of interviewing, ensuring you're ready for any opportunity that comes your way!",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster/>
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
