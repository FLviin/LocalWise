import Modal from 'react-modal';

import styles from './styles.module.scss';

import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';

interface SingInModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function SingInModal({isOpen , onRequestClose}: SingInModalProps){
    
    return(
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName='react-modal-overlay'
            className='react-modal-content'
        >
        <div className={styles.content}>
            <div className={styles.entryLogin}>
                <h1>Faço o Login</h1>
                <p>Com</p>
                <div className={styles.loginIcon}>
                    <button><FaGoogle color='red'/></button>
                    <button><FaFacebook color='blue' /></button>
                    <button><FaTwitter color='blue'/></button>
                </div>
                <div className={styles.or}>
                    <p>Ou</p>
                </div>     
                <input type="text" placeholder='Email'/>
                <input type="text" placeholder='Senha'/>
                <div className={styles.check}>
                        <label>
                            <input type="checkbox" />
                            Lembre-me
                        </label>
                    <a href="#">Esqueçeu a senha?</a>
                </div>
                <button type='submit' className={styles.login}>
                    Logar
                </button>
                <p>Não tem conta?
                    <a href="#"> Cadastre-se </a> 
                </p>
            </div>
        </div>
        <div className={styles.content}>
            <div className={styles.singIn}>
                <h1>Cadastre-se</h1>
                <p>Com</p>
                <div className={styles.loginIcon}>
                    <button><FaGoogle color='red'/></button>
                    <button><FaFacebook color='blue' /></button>
                    <button><FaTwitter color='blue'/></button>
                </div>
                <div className={styles.or}>
                    <p>Ou</p>
                </div>
                <input type="text" placeholder='Nome Completo'/>     
                <input type="text" placeholder='CPF ou CNPJ'/>     
                <input type="text" placeholder='Email'/>
                <input type="text" placeholder='Senha'/>
                <input type="text" placeholder='Confirmar Senha'/>
                <div className={styles.check}>
                        <label>
                            <input type="checkbox" />
                            Lembre-me
                        </label>
                    <a href="">Esqueçeu a senha?</a>
                </div>
                <button type='submit' className={styles.login}>
                    Logar
                </button>
                <p>Ja tem Cadastro?
                    <a href="#"> Faça Login </a> 
                </p>
            </div>
        </div>
            
        </Modal>
        
    );
}