import styles from './AgeSelectionView.module.scss';
import Header from '@/components/Header';

interface AgeSelectionViewProps {
  onSelect: (ageGroup: string) => void;
  onBack: () => void;
}

export default function AgeSelectionView({ onSelect, onBack }: AgeSelectionViewProps) {
  const handleSelection = (ageGroup: string) => {
    localStorage.setItem('ageGroup', ageGroup);
    onSelect(ageGroup);
  };

  return (
    <main className={`${styles.container} animate-fade-in`}>
      <Header />
      
      <div className={styles.label}>Só mais algumas informações</div>
      <h1 className={styles.title}>
        Para um resultado mais <strong>personalizado,</strong> por favor selecione sua faixa etária
      </h1>
      
      <div className={styles.buttonGroup}>
        <button 
          className={styles.button}
          onClick={() => handleSelection('under-50')}
        >
          Até 50
        </button>
        <button 
          className={styles.button}
          onClick={() => handleSelection('51-70')}
        >
          51-70
        </button>
        <button 
          className={styles.button}
          onClick={() => handleSelection('70+')}
        >
          Mais de 70
        </button>
      </div>
    </main>
  );
}
