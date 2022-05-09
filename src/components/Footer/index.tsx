import { FaFacebook, FaGoogle, FaInstagram, FaLinkedin, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import styles from './styles.module.scss';

export function Footer(){
    return(
        <div className={styles.content}>
            <div>LocalWise</div>
            <div>
                <ul>
                    <li><FaGoogle color='red'/></li>
                    <li><FaFacebook color='blue'/></li>
                    <li><a href="https://www.instagram.com/localwiseoficial/" target='_blank'>
                        <   FaInstagram color='red'/>
                        </a>
                    </li>
                    <li><FaLinkedinIn color='blue'/></li>
                    <li><FaTwitter color='blue'/></li>
                </ul>
            </div>
            <div>
            <p>&copy; 2022 Direitos Reservado <strong>Localwise</strong> </p>
            </div>
        </div>
    )
}