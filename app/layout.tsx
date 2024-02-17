import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/navigation";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: 'Iceterisk | %s',
    default: 'Iceterisk'
  },
  description: "Iceterisk i a notes taking app that allows you to make notes, edit the thext and save them in a database storage",
  icons: 'favicon.ico',
  openGraph: {
    title: {
      template: 'Iceterisk | %s',
      default: 'Iceterisk'
    },
    url: 'https://iceterisk.com',
    description: "Iceterisk i a notes taking app that allows you to make notes, edit the thext and save them in a database storage",
    images: [
      {
        url: 'link.svg'
      }
    ],
  },
  robots: {
    index: true,
    follow: true
  },
  keywords: ['Iceterisk', 'Note', 'Notes', 'Take notes', 'Taking notes', 'Iceterisk note', 'Iceterisk notes'],
  applicationName: 'Iceterisk.com',
  generator: 'Iceterisk.com',
  twitter: {
    card: 'summary_large_image',
    title: 'Iceterisk',
    description: 'Notes taking app',
    creator: '@iceterisk',
    images: ['link.svg'], // Must be an absolute URL
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
      </body>
    </html>
  );
}
