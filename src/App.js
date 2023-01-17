import { useState } from "react"

import Counter from './components/Counter';


function App() {
  const [count, setCount] = useState(0)
  const [countArr, setCountArr] = useState([]);
  return (
    <div className="App">
      <Counter count={count} setCount={setCount} countArr={countArr} setCountArr={setCountArr}/>
    </div>
  );
}

export default App;
