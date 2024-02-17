import styles from '@/app/css/not-found.module.css'
import Button from './components/button';

export default function NotFound() {
  return (
    <main className={styles.main}>
      <h1>404</h1>
      <span>Page not found...</span>
      <Button
        content='Go Home'
        href='/'
        variant='filled'
      />
    </main>
  );
}