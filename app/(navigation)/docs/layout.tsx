import DocsNavigation from '@/app/components/docsNavigation'
import DocsPath from '@/app/components/docsPath'
import styles from '@/app/css/docs.module.css'
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Docs',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.docsRoot}>
      <div className={styles.rootContainer}>
        <DocsNavigation />
        {children}
        <DocsPath />
      </div>
    </div>
  );
}
