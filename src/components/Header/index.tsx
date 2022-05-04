import {SignIn} from '../SingIn'
import styles from './styles.module.scss';

export function Header(){
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/logo.png" alt="logo" />
                <nav>
                    <a href="#" className={styles.active}>Home</a>
                    <a href="#">Pesquisar</a>
                </nav>

                <SignIn />
            </div>
        </header>
    )
}