import React, { useEffect, useState } from 'react';
import categories from "../Assets/Category.json";

import ProductsList from "../Components/ProductsList";
function ProductListPage() {


    const [jsonDataArray, setJsonDataArray] = useState([]);
    const category = categories[0].category;
    useEffect(() => {

        const importedDataArray = [];

        const importJsonData = async () => {
            for (let i = 0; i < category.count; i++) {
                const categoryName = category.categoryName[i];

                try {
                    const module = await import(`../Assets/${categoryName}.json`);
                    importedDataArray.push(module.default);
                    console.log(categoryName)
                } catch (error) {
                    console.error(`Error importing module for ${categoryName}:`, error);
                }
            }

            // setJsonDataArray(importedDataArray);
            // Dispatch the action to set card data in Redux store
            // dispatch(setProductData(importedDataArray.flat()));
            // Set the imported JSON data array
            setJsonDataArray(importedDataArray);
            console.log(jsonDataArray)
        };

        importJsonData();
    }, []);


    const dataToRender = [];
    for (let i = 0; i < jsonDataArray.length; i++) {
        dataToRender.push(

            <div key={i} style={{padding:"2%"}} >
                {/*<h1 style={{textAlign:"center"}}>{category.categoryName[i]}</h1><br/><br/>*/}
                <ProductsList jsonData={jsonDataArray[i]} />
                <div className="horizontal-line"></div>
            </div>
        )
    }

    return (
        <div style={{textAlign:"center"}}>
            {dataToRender}
        </div>
    );
}

export default ProductListPage;
