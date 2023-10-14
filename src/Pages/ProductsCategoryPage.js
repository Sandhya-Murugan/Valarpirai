import ProductsList from "../Components/ProductsList";
import CategoryData from "../Assets/CategoryList.json";
import Furniture from "../Assets/Furniture.json";
import MobileAccessories from "../Assets/MobileAccessories.json";
import ComputerAccessories from "../Assets/ComputerAccessories.json";
import ProductListWithoutAction from "../Components/ProductListWithoutAction";
import React from "react";
import MobileAccessoriesBrand from "../Assets/MobileAccessoriesLogo.json"
import ComputerAccessoriesBrand from "../Assets/ComputerAccessoriesLogo.json"
function ProductsCategoryPage() {
    console.log(ComputerAccessoriesBrand)
    return (
        <div className="App">
            <h1 id = "product" className="products_word_home_page">PRODUCTS</h1><br/><br/>
            <ProductsList jsonData={CategoryData} />

            <h1 id = "furniture" className="products_word_home_page">FURNITURE</h1><br/><br/>
            <ProductListWithoutAction jsonData={Furniture}/>

            <h1 id = "mobile_accessories" className="products_word_home_page">MOBILE ACCESSORIES</h1><br/><br/><br/>
            <div className="brand-logo-hp" style={{ display: 'flex', flexDirection:"row", margin:"2%", marginLeft:"2%", marginRight:"2%"}}>
                {MobileAccessoriesBrand.map((brand, index) => (
                    <div key={index}>
                        <img className="brand-logo-hp" src={brand.imagePath} alt="logos"/>
                    </div>
                ))}
            </div>
            <ProductListWithoutAction jsonData={MobileAccessories} />

            <h1 id = "computer_accessories" className="products_word_home_page">COMPUTER ACCESSORIES</h1><br/><br/><br/>
            <div  style={{ display: 'flex', flexDirection:"row", marginLeft:"2%", marginRight:"2%" }}>
                {ComputerAccessoriesBrand.map((brand, index) => (
                    <div key={index}>
                        <img className="brand-logo-hp" src={brand.imagePath} alt="logos"/>
                    </div>
                ))}
            </div>
            <ProductListWithoutAction jsonData={ComputerAccessories} />
        </div>
    );
}

export default ProductsCategoryPage;
