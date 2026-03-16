import styles from './WelcomeView.module.scss';
import Header from '@/components/Header';

interface WelcomeViewProps {
  onStart?: () => void;
  buttonless?: boolean;
}

export default function WelcomeView({ onStart, buttonless }: WelcomeViewProps) {
  return (
    <main className={`${styles.container} animate-fade-in`}>
      <Header />
      
      <div className={styles.content}>
        <h1 className={styles.title}>
          Sua audição<br />importa
        </h1>
        <p className={styles.description}>
          <strong>Teste em 3 passos simples</strong> para saber como está sua audição.
        </p>
        
        <div className={styles.ctaText}>Verifique Agora</div>
      </div>

      {!buttonless && (
        <div className={styles.buttonWrapper}>
          <button className={styles.button} onClick={onStart}>
            Começar
          </button>
        </div>
      )}
    </main>
  );
}
