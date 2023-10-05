import './App.css';
import ProductDetail from "./Components/ProductDetail";
import {Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import HeaderMenu from "./Components/Header";
import Footer from "./Components/Footer";
import {useDispatch} from "react-redux";

function App() {
    const dispatch = useDispatch();
  return (
    <div className="App">
        <HeaderMenu />
        {/*<HomePage />*/}
        <div>
            <Routes>
                <Route exact path='/' element={<HomePage/>}></Route>
                {/*<Route path="/productDetails" element={<CardDetails />}></Route>*/}
                <Route path="/productDetails" element={<ProductDetail />} />
            </Routes>
        </div>
        <Footer />
    </div>
  );
}
export default App;
