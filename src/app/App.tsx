import { WishListProvider } from '@/entities/wishlist/model/WishListContext'
import './styles'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '@/pages/HomePage'
import ItemDetailsPage from '@/pages/ItemDetailsPage'
const App = () => {
  return (
    <BrowserRouter>
      <WishListProvider>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/item/:id' element={<ItemDetailsPage/>}></Route>
        </Routes>
      </WishListProvider>
    </BrowserRouter>
  )
}

export default App