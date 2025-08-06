import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://elassali.netlify.app"),
  title:
    "Karim El Assali - Full Stack Developer in Italy & Morocco | Aosta Hub Creator",
  description:
    "Karim El Assali is a professional Full Stack Developer specializing in React, Next.js, Supabase, and AI-powered web solutions. Based in Italy and Morocco. Creator of Aosta Hub.",
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
    "Digital Platforms",
  ],
  creator: "Karim El Assali",
  publisher: "Karim El Assali",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  openGraph: {
    type: "website",
    siteName: "Karim El Assali",
    title:
      "Karim El Assali - Full Stack Developer in Italy & Morocco | Aosta Hub Creator",
    description:
      "Expert web developer crafting digital experiences with React, Next.js, and AI-driven platforms. Discover Aosta Hub - connecting people through technology.",
    images: [
      {
        url: "https://elassali.netlify.app/karim.jpg",
        width: 1200,
        height: 630,
        alt: "Karim El Assali - Full Stack Developer",
      },
    ],
    locale: "en_US",
    url: "https://elassali.netlify.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Karim El Assali - Full Stack Developer",
    description:
      "Building the future of digital experiences. Creator of Aosta Hub - where technology meets community.",
    creator: "@karimelassali",
    images: ["https://elassali.netlify.app/karim.jpg"],
  },
  other: {
    "theme-color": "#4A90E2",
    rating: "General",
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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon_io/apple-touch-icon.png"
        />
        <meta
          name="google-site-verification"
          content="4rbyLZnKjZGxGLNPg7U0yHnejve9G4OuFVv1xP5bmKk"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon_io/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon_io/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Karim El Assali",
              "url": "https://elassali.netlify.app",
              "sameAs": [
                "https://github.com/karimelassali",
                https://www.linkedin.com/in/karim-el-assali-32076a227/              ],
              "jobTitle": "Full Stack Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "ElassaliTech"
              }
              
            }`,
          }}
        />
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
