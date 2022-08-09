import {BrowserRouter, Routes, Route } from 'react-router-dom'
import {ProductsList, AddProducts, Footer} from './components'
import './components/ProductsList/ProductsList.scss'
import './components/AddProducts/AddProducts.scss'
import './components/Footer/Footer.scss'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductsList/>}/>
        <Route path="addproduct" element={<AddProducts/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
