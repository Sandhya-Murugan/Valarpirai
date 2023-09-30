import React from 'react';
import ProductsListPage from "./ProductsListPage";
import useBreakpoint from "antd/es/grid/hooks/useBreakpoint";
import ProductsCategoryPage from "./ProductsCategoryPage";
import {Content, Header} from "antd/es/layout/layout";
import SearchBar from "../Components/SearchBar";
import OfferZone from "../Components/OfferZone";
import {OfferZoneData} from "../Assets/OfferZoneData";
import imageJSONData from "../data.json";
const HomePage = () => {
    const screens = useBreakpoint();
    const isMobile = !screens.md;
    return (
        <div>
            {/*<div>*/}
            {/*    {imageJSONData.map((image) => (*/}
            {/*        <div key={image.id}>*/}
            {/*            <h2>{image.title}</h2>*/}
            {/*            <img src={image.imagePath} alt={image.title} />*/}
            {/*        </div>*/}
            {/*    ))}*/}
            {/*</div>*/}
            <div>
                <SearchBar />
                <OfferZone data = {OfferZoneData} /><br/>
            </div>

            <Content>
                {isMobile ? < ProductsCategoryPage /> : <ProductsListPage />}
            </Content>

        </div>
    );
};

export default HomePage;
