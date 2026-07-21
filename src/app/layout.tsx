import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Genta | Frontend Developer Portfolio",
  description: "Portfolio website of Muhammad Genta Dwiputra, an Information Systems student and Frontend Web Developer. Experience in React, Next.js, Tailwind CSS, and more.",
  keywords: ["Frontend Developer", "Web Developer", "Portfolio", "React", "Next.js", "Mahasiswa Sistem Informasi", "Genta", "Muhammad Genta Dwiputra"],
  authors: [{ name: "Muhammad Genta Dwiputra" }],
  openGraph: {
    title: "Genta | Frontend Developer Portfolio",
    description: "Portfolio of a Frontend Developer passionate about building modern web experiences.",
    url: "https://portfoliogenta.com",
    siteName: "Genta Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Genta | Frontend Developer Portfolio",
    description: "Portfolio of a Frontend Developer passionate about building modern web experiences.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${outfit.variable} ${plusJakartaSans.variable} font-sans min-h-screen flex flex-col antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
