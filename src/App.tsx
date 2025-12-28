import Bingo from './Bingo';
import './App.css';
import { BINGO_ITEMS } from './constants';

function App() {
  return (
    <div className="App">
      <Bingo items={BINGO_ITEMS}/>
    </div>
  );
}

export default App;