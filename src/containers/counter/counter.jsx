import { useState } from 'react';
import CounterDisplay from '../../components/counter-display/counter-display';
import CounterIncr from '../../components/counter-incr/counter-incr';
import CounterReset from '../../components/counter-reset/counter-reset';

// Constante global
const INITIAL_COUNT = 0;

// Composant "Counter"
const Counter = () => {

    const [count, setCount] = useState(INITIAL_COUNT);

    const handleIncr = (step) => {
        setCount(c => c + step);
    };

    const handleReset = () => {
        setCount(INITIAL_COUNT);
    };

    return (
        <>
            <h2>Exemple du compteur</h2>

            {/* Composant d'affichage, où on envoie des données */}
            <CounterDisplay count={count} />

            {/* Composant d'interaction, où on réagie à un event */}
            <CounterIncr onIncr={handleIncr} />
            <CounterIncr onIncr={handleIncr} step={5} />
            <CounterIncr onIncr={handleIncr} step={10} />

            {/* Composant de reset, masque automatiquement sur une la valeur initial */}
            <CounterReset
                visible={count !== INITIAL_COUNT}
                onReset={handleReset} />
        </>
    );
};

export default Counter;