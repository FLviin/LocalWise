import { FaGoogle } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

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
                <nav>
                    <a href="#" className={styles.active}>Home</a>
                    <a href="#">Pesquisar</a>
                </nav>
                <button type="button" className={styles.signInButton} onClick={onOpenSingInModal}>
                    <FaGoogle color="#04d361"/>
                        User Name
                    <FiX color="#737380" className={styles.closeIcon}/>
                </button>
                

            </div>
        </header>
    )
}