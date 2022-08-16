
// Le composant possede en props 'onIncr' qui est un callback
const CounterIncr = ({ step, onIncr }) => {

    const handleIncr = () => {
        // Déclanche l'event (recu depuis ses props)
        onIncr(step);
    };

    const handleDecr = () => {
        onIncr(-step);
    };

    return (
        <div>
            <button onClick={handleIncr}>+ {step}</button>
            <button onClick={handleDecr}>- {step}</button>
        </div>
    );
};

CounterIncr.defaultProps = {
    onIncr: () => { },  // NOOP (No Operation)
    step: 1
};


export default CounterIncr;