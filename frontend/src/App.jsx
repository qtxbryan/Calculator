import { useRef, useState} from 'react'
import './App.css'
import axios from 'axios';
import Input from './components/Input';
import Button from './components/Button';

// TODO to implement the error handling

function App() {

  const input1 = useRef();
  const input2 = useRef();
  const [data, setData] = useState(0);

  async function handleAdd(){
    let enteredInput1 = input1.current.value;
    let enteredInput2 = input2.current.value;

    enteredInput1 = enteredInput1 === '' ? 0 : enteredInput1;
    enteredInput2 = enteredInput2 === '' ? 0 : enteredInput2;

    const res = await axios.post(
      "http://localhost:3000/add",
      {
        input1: enteredInput1,
        input2:enteredInput2,
      },
      {
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );
    console.log(res.data.result);
    setData(res.data.result);
  }

  async function handleSub(){
    let enteredInput1 = input1.current.value;
    let enteredInput2 = input2.current.value;

    enteredInput1 = enteredInput1 === '' ? 0 : enteredInput1;
    enteredInput2 = enteredInput2 === '' ? 0 : enteredInput2;

      const res = await axios.post(
        "http://localhost:3000/sub",
        {
          input1: enteredInput1,
          input2:enteredInput2,
        },
        {
          headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      );
      console.log(res.data.result);
      setData(res.data.result);
    
  }
  
  return (
    <>
      <main>
        <Input inputType = 'number' id = 'input1' title = 'Input 1' ref = {input1}/>
        <Input inputType = 'number' id = 'input2' title = 'Input 2' ref = {input2}/>
        <Button onClick = {handleAdd}>Add</Button>
        <Button onClick = {handleSub}>Subtract</Button>
        <p>{data}</p>
      </main>
    </>
  )
}

export default App
