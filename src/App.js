import './css/App.css';
import './css/anim.css';
import  logo  from  './img/logo.png';
import { useState, useRef } from "react";
import AddTodo from './addTodo'
import ItemsList from './itemsList'
import { IoAddCircle } from 'react-icons/io5'

function App(props) {
  const [newTitle, setTitle] = useState();
  const [newSubTitle, setSubTitle] = useState();
  const [search, setSearch] = useState();
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('items')))


  const clicked = (id) => {
    let list = items.map((item) => item.id === id ? { ...item, click: !item.click } : item);
    console.log(list);
    setItems(list)
    localStorage.setItem('items', JSON.stringify(list))
  }
  const DelList = (id) => {
    let list = items.filter((item) => item.id !== id);
    setItems(list);
    localStorage.setItem('items', JSON.stringify(list))
  }
  const handelSubmit = (e) => {
    e.preventDefault();
    if (!newTitle) return;
    console.log(newTitle);
    console.log(newSubTitle);
    const id = items.length ? items[items.length - 1].id + 1 : 1
    let newItem = { id, newTitle, newSubTitle, checked: false }
    let listItems = [...items, newItem]
    setItems(listItems);
    localStorage.setItem('items', JSON.stringify(listItems))
    setTitle('');
    setSubTitle('');
  }

  return (
    <div className="App" >
      <nav className='nav'>
        <div>
          <img src={logo}  style={{width:'164px'}}/>
        </div>
        <div className='util'>
        <input type='text' placeholder='Search' value={search} onChange={e => setSearch(e.target.value)} />
        </div>
      </nav>

      <AddTodo newTitle={newTitle} newSubTitle={newSubTitle} setTitle={setTitle} setSubTitle={setSubTitle} handelSubmit={handelSubmit} />
      <div className='mainCtn'>
        <ItemsList items={items.filter(e => ((e.newTitle).toLowerCase()).includes(search ? search : ''))} clicked={clicked} DelList={DelList} />
      </div>
    </div>
  );
}


export default App;







// last Watch  03:03:54



