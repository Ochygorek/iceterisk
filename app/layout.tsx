import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: 'Iceterisk | %s',
    default: 'Iceterisk'
  },
  description: "Notes taking app that allows you to make notes, edit the thext and save them in a database storage.",
  openGraph: {
    title: {
      template: 'Iceterisk | %s',
      default: 'Iceterisk'
    },
    url: 'https://iceterisk.com',
    description: "Notes taking app that allows you to make notes, edit the thext and save them in a database storage.",
    siteName: 'Iceterisk',
    images: [
      {
        url: '/link.jpg',
        width: 1200,
        height: 630
      }
    ],
    type: 'website',
  },
  // robots: {
  //   index: false,
  //   follow: true,
  //   nocache: true,
  //   // googleBot: {
  //   //   index: true,
  //   //   follow: false,
  //   //   noimageindex: true,
  //   //   'max-video-preview': -1,
  //   //   'max-image-preview': 'large',
  //   //   'max-snippet': -1,
  //   // },
  // },
  keywords: ['Iceterisk', 'Note', 'Notes', 'Take notes', 'Taking notes', 'Iceterisk note', 'Iceterisk notes'],
  applicationName: 'Iceterisk.com', // ?
  generator: 'Iceterisk.com', // ?
  twitter: {
    card: 'summary_large_image',
    title: 'Iceterisk',
    description: 'Notes taking app that allows you to make notes, edit the thext and save them in a database storage.',
    creator: '@iceterisk',
    images: ['link.jpg'], // Must be an absolute URL
  },
  verification: {
    google: 'google',
    yandex: 'yandex',
    yahoo: 'yahoo',
  },
  metadataBase: new URL('https://iceterisk.com'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={inter.className}>
          <Navigation />
          {children}
        </div>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
