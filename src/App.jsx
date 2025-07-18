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

  {/*function handleSubmit(e) {
    e.preventdefault()
    console.log(newItem);

    setItems([...items, newItem])
    alert('added New Item')
  } */}



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
    </div>
       
    </>
  )
}

export default App
