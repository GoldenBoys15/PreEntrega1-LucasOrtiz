import { useState } from 'react'
import Navbar from './components/navbar.jsx'
import ItemListContainer from './components/itemlistcontainer.jsx'
import ItemCount from './components/itemcount.jsx'


function App() {

return (
    <>
    <Navbar/>
    <ItemListContainer greeting={'Bienvenidos al ecommerce'}/>
    </>
)
}

export default App