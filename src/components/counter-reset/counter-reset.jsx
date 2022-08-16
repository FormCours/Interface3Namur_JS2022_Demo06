
const CounterReset = ({ visible, onReset }) => (
    <div>
        {visible && (
            <button onClick={onReset}>Reset</button>
        )}
    </div>
);


export default CounterReset;