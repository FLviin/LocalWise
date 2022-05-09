import { FormControl, InputGroup } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import styles from './styles.module.scss';

interface HeaderProps{
    onOpenSingInModal: () => void;
}
const myLoader = ({ src, width, quality }) => {
    return `../../../public/images/search.svg/${src}?w=${width}&q=${quality || 75}`
  }

export function Header({onOpenSingInModal} : HeaderProps){

    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img
                src="/images/logo.png" alt="logo" 
                />
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Recipient's username"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Text id="basic-addon2"><FaSearch/></InputGroup.Text>
                </InputGroup>
                <button type="button" className={styles.signInButton} onClick={onOpenSingInModal}>
                    <span>Sing In</span>
                </button>
            </div>
        </header>
    )
}