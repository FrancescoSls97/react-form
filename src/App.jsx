import { useState } from 'react'


function App() {
  const shop_items = [
    'item1',
    'item2',
    'item3',
    'item4',
    'item5',
  ]

  const [newItem, setNewItem] = useState('')
  const [items, setItems] = useState(shop_items)

  function handleSubmit(e) {
    e.preventDefault()
    console.log(newItem);

    setItems([...items, newItem])
  } 



  return (
    <>
    <div className="container">

      <h1>My Shop</h1>
      <ul className="list-group">
        {items.map((items, index)=>{
          return(
            <li key={index} className="list-group-item d-flex justify-content-between">{items}</li>
          )
        })}
      </ul>
      <form onSubmit={handleSubmit}>
        <div className="d-flex">
          <input className="form-control m-2" placeholder='New Item' type="text" value={newItem} onChange={e => setNewItem(e.target.value)}/>
          <button type='submit' className="btn btn-success">  Save New Item  </button>
        </div>
      </form>
    </div>   
    </>
  )
}

export default App
