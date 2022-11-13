import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Init from '../pages/Init';
import ItemListContainer from '../pages/ItemListContainer';
import ItemDetailContainer from '../pages/ItemDetailContainer'
import Layout from './Layout';
import CartContainer from '../pages/CartContainer';


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<Init/>}/>
          <Route path='/products/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<CartContainer/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router