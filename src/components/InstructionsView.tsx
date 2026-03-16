import Image from 'next/image';
import styles from './InstructionsView.module.scss';
import Header from '@/components/Header';

interface InstructionsViewProps {
  onReady?: () => void;
  buttonless?: boolean;
}

export default function InstructionsView({ onReady, buttonless }: InstructionsViewProps) {
  return (
    <main className={`${styles.container} animate-fade-in`}>
      <Header />
      
      <h1 className={styles.title}>Antes de começar</h1>
      
      <div className={styles.instructionList}>
        <div className={styles.instructionItem}>
          <div className={styles.iconWrapper}>
            <Image 
              src="/icons/quiet-place.svg" 
              alt="Quiet place" 
              width={24} 
              height={24} 
            />
          </div>
          <p>Encontre um lugar silencioso</p>
        </div>
        <div className={styles.instructionItem}>
          <div className={styles.iconWrapper}>
            <Image 
              src="/icons/headphones.svg" 
              alt="Headphones" 
              width={24} 
              height={24} 
            />
          </div>
          <p>Use fones de ouvido</p>
        </div>
        <div className={styles.instructionItem}>
          <div className={styles.iconWrapper}>
            <Image 
              src="/icons/volume.svg" 
              alt="Volume" 
              width={24} 
              height={24} 
            />
          </div>
          <p>Ajuste o volume do dispositivo<br />para 100%</p>
        </div>
      </div>
      {!buttonless && (
        <div className={styles.buttonWrapper}>
          <button className={styles.button} onClick={onReady}>
            Iniciar
          </button>
        </div>
      )}
    </main>
  );
}
