import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { DECREMENT, DECREMENTBYUSER, INCREMENT, INCREMENTBYUSER } from './store/storeType';
import { useState } from 'react';

function App() {

  const dispatch = useDispatch();
  const counterStore = useSelector(state => state)
  const [inputValue, setInputValue] = useState(0)
  const addValue = () => {
    dispatch({type: INCREMENT})
  };

  const addBYuser = () => {
    dispatch({type: INCREMENTBYUSER, payload: parseInt(inputValue) })
  } 
 
  const subBYuser = () => {
    dispatch({type: DECREMENTBYUSER, payload: parseInt(inputValue) })
  } 
  return (
    <div className="App">
      {counterStore && <span className='operation'> {counterStore.counter}</span>}
      {counterStore.status !== '' && 
      <span className={counterStore.status == INCREMENT ? 'status-add' : 'status-sub' }>
        {counterStore.status}
        </span>}
      <button className='add-bt' onClick={addValue}>addValue </button>
      <button className='sub-bt' onClick={() =>  dispatch({type: DECREMENT})}>decrement </button>
  
  <br/>
    <input type='number' value={inputValue}  onChange={(e) => {setInputValue(e.target.value)}} />
    
    <button className='add-bt' onClick={addBYuser}>add BY user </button>
      <button className='sub-bt' onClick={subBYuser}>Sub by user </button>
  
    </div>
  );
}

export default App;
