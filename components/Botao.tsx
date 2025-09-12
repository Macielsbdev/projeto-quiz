import Link from 'next/link'
import styles from '../src/styles/Botao.module.css'
import { MouseEvent } from 'react'


interface BotaoProps {
   href?: string
   texto: string
   onClick?: (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
}

export default function Botao(props: BotaoProps) {

    function renderizarBotao() {
        return (
            <button className={styles.botao}
        onClick={props.onClick}>
            {props.texto}
        </button>
        )
    }
    return props.href ? (
      <Link href={props.href}>
         {renderizarBotao()}
      </Link>
    ) : renderizarBotao()
        
    
}