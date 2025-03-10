import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home';
import Header from './component/header';
import { createContext, useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import Footer from './component/footer';
import ProductModal from './component/productModal';
import Listing from './pages/listing';
import ProductDetail from './pages/productDetail';
import Cart from './pages/cart';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';

const MyContext = createContext();

function App() {
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [isOpenProductModal, setIsOpenProductModal] = useState(false);
  const [isHeaderFooterShow, setIsHeaderFooterShow] = useState(true);
  const [isLogin,setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries");
  }, []);

  const getCountry = async (url) => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setCountryList(response.data.data);
    } catch (err) {
      setError("Failed to fetch country data");

      console.error("Error fetching countries:", err);
    } finally {
      setLoading(false);
    }
  }

  const values = useMemo(() => ({
    countryList,
    setSelectedCountry,
    selectedCountry,
    isOpenProductModal,
    setIsOpenProductModal,
    isHeaderFooterShow,
    setIsLogin,
    setIsHeaderFooterShow,
    isLogin
  }), [countryList, selectedCountry, isOpenProductModal, isHeaderFooterShow, isLogin]);
  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        {isHeaderFooterShow === true && <Header />}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/category/:id' element={<Listing />} />
          <Route exact={true} path='/product/:id' element={<ProductDetail />} />
          <Route exact={true} path='/cart' element={<Cart />} />
          <Route exact={true} path='/signIn' element={<SignIn />} />
          <Route exact={true} path='/signUp' element={<SignUp />} />
        </Routes>
        {isHeaderFooterShow === true && <Footer />}
        {isOpenProductModal && <ProductModal />}
        {loading && <div className="loading">Loading countries...</div>}
        {error && <div className="error">{error}</div>}
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { MyContext };