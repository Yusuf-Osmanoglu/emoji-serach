import { useEffect, useState } from 'react';
import './App.css';
import emojiData from './emojiList.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


function App() {
  const[search, setSearch] = useState('');
  const[data, setData] = useState([]);

  useEffect(()=>{

    const newData = emojiData.filter((emoji)=> emoji.title.toLowerCase().includes(search.toLocaleLowerCase()));
    setData(newData);
  
  },[search]);

  return (
    <div className="App">
        <div className='App-header'>
          <h1>Search</h1>
          
          <div className='input'>
          <InputGroup className="mb-3">
            <Form.Control 
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              type='text' 
              placeholder='Search' 
              onChange={(e)=>setSearch(e.target.value)} 
              value={search}
            />
          </InputGroup>
          </div>

          {data.map(emoji =>
          <h2 key={emoji.title}>
            {emoji.title}
            {emoji.symbol}
            </h2>)}
        </div>
    </div>
  );
}

export default App;
