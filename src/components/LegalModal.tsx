import Image from 'next/image';
import styles from './LegalModal.module.scss';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LegalModal({ isOpen, onClose }: LegalModalProps) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          Fechar ✕
        </button>

        <h2 className={styles.title}>AVISO LEGAL</h2>

        {/* #1 Test Results Disclaimer */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Aviso de Resultados</h3>
          <div className={styles.scrollableContent}>
            <p className={styles.text}>
              As informações fornecidas são apenas indicativas de resultados e não constituem diagnóstico médico.
              Para uma avaliação auditiva completa, consulte um profissional de saúde auditiva em uma 
              clínica AudioNova mais próxima.
            </p>
          </div>
        </div>

        {/* #2 Environmental Disclaimer */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Aviso dos Testes</h3>
          <div className={styles.scrollableContent}>
            <p className={styles.text}>
              Para resultados mais precisos, por favor realize o teste em um local silencioso usando fones de ouvido.
              Ruídos de fundo (rua, transporte público, etc...) podem afetar os resultados.
            </p>
          </div>
        </div>

        {/* #3 Privacy Notice */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Aviso de Privacidade</h3>
          <div className={styles.scrollableContent}>
            <p className={styles.text}>
              A triagem Auditiva da AudioNova coleta e processa apenas dados pessoais pseudoanonimizados, embora dados pessoais adicionais possam ser processados se você usar a funcionalidade "Encontrar um Centro" ou convidar outras pessoas para fazer a triagem. Os cookies de rastreamento e as ferramentas de análise usadas na triagem Auditiva coletam informações mínimas. Para obter mais informações sobre seus direitos e como a AudioNova gerencia suas informações pessoais, consulte nossa{' '}
              <a className={styles.legalLink} href="https://www.audionova.com/rights-and-policies/" target="_blank">Política de Privacidade</a>.
            </p>
          </div>
        </div>

        {/* Contact placeholders */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Contato</h3>
          <div className={styles.contactList}>
            <div className={styles.contactItem}>
              <Image src="/icons/location.svg" alt="Location" width={20} height={20} />
              <span>
                AudioNova - Cuidados Auditivos<br />
                Av. Maria Coelho Aguiar, 215 - Bl A - 4º Andar<br />
                São Paulo, São Paulo, Brasil
              </span>
            </div>
            <div className={styles.contactItem}>
              <Image src="/icons/call.svg" alt="Phone" width={20} height={20} />
              <span><a href="tel:08000111000" target="_blank">0800 011 1000</a></span>
            </div>
            <div className={styles.contactItem}>
              <Image src="/icons/email.svg" alt="Email" width={20} height={20} />
              <span><a href="mailto:atendimento@audionova.com.br">atendimento@audionova.com.br</a></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}