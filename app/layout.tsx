import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  metadataBase: new URL('https://elassali.netlify.app'),
  title: "Karim El Assali - Full Stack Developer | Aosta Hub Creator",
  description: "Expert web developer specializing in React, Next.js, and AI solutions. Creator of Aosta Hub - connecting communities through innovative technology.",
  authors: [{ name: "Karim El Assali" }],
  keywords: [
    "Karim El Assali",
    "Full Stack Developer",
    "Morocco",
    "Italy",
    "React Developer",
    "Next.js Expert",
    "Aosta Hub",
    "AI Solutions",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "Supabase",
    "Web Development",
    "Software Engineering",
    "Tech Innovation",
    "Digital Platforms"
  ],
  creator: "Karim El Assali",
  publisher: "Karim El Assali",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  openGraph: {
    type: "website",
    siteName: "Karim El Assali",
    title: "Karim El Assali - Full Stack Developer | Aosta Hub Creator",
    description: "Expert web developer crafting digital experiences with React, Next.js, and AI solutions. Discover Aosta Hub - connecting communities through technology.",
    images: [
      {
        url: "/karim.jpg",
        width: 1200,
        height: 630,
        alt: "Karim El Assali - Full Stack Developer",
      }
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Karim El Assali - Full Stack Developer",
    description: "Building the future of digital experiences. Creator of Aosta Hub - where technology meets community.",
    creator: "@yourtwitterhandle",
    images: ["/karim.jpg"],
  },
  other: {
    "theme-color": "#4A90E2",
    "rating": "General",
  },
  alternates: {
    canonical: "https://elassali.netlify.app",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
          <link rel="apple-touch-icon" sizes="180x180" href="favicon_io/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="favicon_io/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="favicon_io/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest"></link>
      </head>
      <body className={inter.className}>
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
