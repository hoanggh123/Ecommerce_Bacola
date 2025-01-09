import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter, Routes } from 'react-router-dom';
import Header from "./component/header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route path="/" exact={true} element={<Home />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
