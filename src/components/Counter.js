
import styles from "./Counter.module.css"


function Counter({ count, setCount, countArr, setCountArr }) {
    const handleIncrement = () => {
        setCount(count + 1);
        setCountArr([...countArr, count + 1])
    }
    const handleDecrement = () => {
        setCount(count - 1)
        setCountArr([...countArr, count - 1])
    }

    return (
        <div className={styles.counterContainer}>
            <h1>Counter</h1>
            {/* <h2>{count}</h2> */}
            <p>{countArr.join(', ')}</p>
            <div className={styles.buttons}>

                <button onClick={handleDecrement} disabled={count === 0}>Decrement</button>

                <button onClick={handleIncrement}>Increment</button>

                <button onClick={() => {
                    setCount(0)
                    setCountArr([])
                }}>Reset</button>
            </div>

        </div>
    )
}

export default Counter