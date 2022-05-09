import styles from './styles.module.scss';

interface HeaderProps{
    onOpenSingInModal: () => void;
}

export function Header({onOpenSingInModal} : HeaderProps){

    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img
                src="/images/logo.png" alt="logo" 
                />
                
                <button type="button" className={styles.signInButton} onClick={onOpenSingInModal}>
                    <span>Sing In</span>
                </button>
            </div>
        </header>
    )
}