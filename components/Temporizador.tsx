import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import styles from '../src/styles/Temporizador.module.css'

interface TemporizadorProps {
    duracao: number
    tempoEsgotado: () => void
}

export default function Temporizador(props: TemporizadorProps) {

    return (
        <div className={styles.temporizador}>
            <CountdownCircleTimer
                duration={props.duracao}
                size={120}
                isPlaying
                strokeWidth={12}
                rotation='clockwise'
                onComplete={props.tempoEsgotado}
                colors={[
                    ['#BCE596', 0.33],
                    ['#F7B801', 0.33],
                    ['#ED827A', 0.33]
                ]}>
                {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
        </div>
    )
}