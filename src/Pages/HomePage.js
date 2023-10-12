import React from 'react';
import ProductsListPage from "./ProductsListPage";
import useBreakpoint from "antd/es/grid/hooks/useBreakpoint";
import ProductsCategoryPage from "./ProductsCategoryPage";
import {Content, Header} from "antd/es/layout/layout";
import SearchBar from "../Components/SearchBar";
import OfferZone from "../Components/OfferZone";
import {OfferZoneData} from "../Assets/OfferZoneData";

const HomePage = () => {
    // To differentiate desktop and mobile view
    // const screens = useBreakpoint();
    // const isMobile = !screens.md;
    return (
        <div>
            <div>
                {/*To be implemented in future*/}
                {/*<SearchBar />*/}
                <OfferZone data = {OfferZoneData} /><br/>
            </div>

            <Content>
                {/*To differentiate home page component based on desktop and mobile view*/}
                {/*{isMobile ? < ProductsCategoryPage /> : <ProductsListPage />}*/}
                <ProductsCategoryPage />
            </Content>

        </div>
    );
};

export default HomePage;
