import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { Header } from './components/Header/Header';
import { ErrorPage }from './components/ErrorPage/ErrorPage';
import { Cart } from './components/Cart/Cart';
import { Checkout} from './components/Checkout/Checkout';
import { Footer } from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <Header/>
          <main>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting ={'Bienvenido a sneakers store'}/>}/>
            <Route path='/category/:categoryId'element={<ItemListContainer greeting ={'Productos '}/>}/>
            <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>} />
            <Route path='/checkout' element={<Checkout/>} />
            <Route path='*' element={<ErrorPage/>}/>
          </Routes>  
          </main>
          <Footer/>
        </BrowserRouter>
        <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" />
      </CartContextProvider>
    </>
  )
}

export default App
