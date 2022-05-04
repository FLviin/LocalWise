import styles from './styles.module.scss'

export function InputInit(){
    return(
        <div className={styles.inputContainer}>
                 <legend>Para Onde Vamos Hoje?</legend> 
                 <input type="text" />
                 <legend>Quantas Pessoas Vão?</legend> 
                 <input type="text" />
                 <legend>Qual a Forma de Transporte?</legend> 
                 <input type="text" />
                 <legend>Qual o tipo de Passeio?</legend> 
                 <input type="text" />
                 <legend>Quando Vamos?</legend> 
                 <input type="text" />
        </div>
    )
}