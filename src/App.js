import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./component/header";
import Home from "./pages/home";
import { createContext, useEffect, useState, useMemo } from "react";
import axios from "axios";

const MyContext = createContext();

function App() {

  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');

  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries");
  }, []);

  const getCountry = async (url) => {
    const response = await axios.get(url);
    setCountryList(response.data.data);
    console.log(response.data.data);
  };

  // Dùng useMemo để tối ưu việc tạo lại đối tượng values
  const values = useMemo(() => ({
    countryList,
    setSelectedCountry,
    selectedCountry
  }), [countryList, selectedCountry, setSelectedCountry]);

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />  {/* Lỗi 'exact' đã được loại bỏ */}
        </Routes>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { MyContext };
