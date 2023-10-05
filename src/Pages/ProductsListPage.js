import ProductsList from "../Components/ProductsList";
import {cardData1} from "../Assets/ProductsData";
import {cardData2} from "../Assets/ProductsData";
import SearchBar from "../Components/SearchBar";
import React, { useEffect, useState } from 'react';
import categories from "../Assets/Category.json";
function ProductListPage() {
    const [jsonDataArray, setJsonDataArray] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const category = categories[0].category;
        const importedDataArray = [];

        const importJsonData = async () => {
            for (let i = 0; i < category.count; i++) {
                const categoryName = category.categoryName[i];

                try {
                    const module = await import(`../Assets/${categoryName}.json`);
                    importedDataArray.push(module.default);
                } catch (error) {
                    console.error(`Error importing module for ${categoryName}:`, error);
                }
            }

            // Set the imported JSON data array
            setJsonDataArray(importedDataArray);
        };

        importJsonData();
    }, []);

    const dataToRender = [];

    for (let i = 0; i < jsonDataArray.length; i++) {
        dataToRender.push(
            <div key={i}>
                <h1>{i}</h1>
                <ProductsList jsonData={jsonDataArray[i]} />
            </div>
        )
    }
    return (
        <div className="App">
            <div>
                {dataToRender}
            </div>
            {/*<ProductsList cardData={cardData1} cardSet="cardSet1"/><br/><br/>*/}
            {/*<ProductsList cardData={cardData2} cardSet="cardSet2"/><br/><br/>*/}
        </div>
    );
}

export default ProductListPage;
