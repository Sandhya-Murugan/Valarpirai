import React from 'react';
import ProductsListPage from "./ProductsListPage";
import useBreakpoint from "antd/es/grid/hooks/useBreakpoint";
import ProductsCategoryPage from "./ProductsCategoryPage";
import {Content, Header} from "antd/es/layout/layout";
import SearchBar from "../Components/SearchBar";
import OfferZone from "../Components/OfferZone";
import {OfferZoneData} from "../Assets/OfferZoneData";
import ScrollToTop from "../Components/ScrollToTop";
import ProductsList from "../Components/ProductsList";
import HeaderMenu from "../Components/Header";

const HomePage = () => {
    // To differentiate desktop and mobile view
    // const screens = useBreakpoint();
    // const isMobile = !screens.md;
    return (
        <div>
            <div>
                {/*To be implemented in future*/}
                {/*<SearchBar />*/}
                <HeaderMenu /><br/><br/><br/><br/><br/>
                <OfferZone data = {OfferZoneData} /><br/>
            </div>

            <Content>
                {/*To differentiate home page component based on desktop and mobile view*/}
                {/*{isMobile ? < ProductsCategoryPage /> : <ProductsListPage />}*/}
                <ProductsCategoryPage />
            </Content>
            <ScrollToTop />
        </div>
    );
};

export default HomePage;
