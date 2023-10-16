import './App.css';
import ProductDetail from "./Components/ProductDetail";
import {Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import HeaderMenu from "./Components/Header";
import Footer from "./Components/Footer";
import {useDispatch} from "react-redux";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";

function App() {
  return (
    <div className="App">
        <div>
            <Routes>
                <Route exact path='/' element={<HomePage/>}></Route>
                <Route path='about' element={<AboutPage/>}></Route>
                {/*<Route path='/contact' element={<ContactPage/>}></Route>*/}
                {/*<Route path='#product' element={<HomePage/>}></Route>*/}
                {/*<Route path="/productDetails" element={<CardDetails />}></Route>*/}
                {/*<Route path="/productDetails" element={<ProductDetail />} />*/}
            </Routes>
        </div>
        <Footer />
    </div>
  );
}
export default App;
