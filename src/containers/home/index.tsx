import React from 'react';
import DefaultHeader from '../defaultLayout/DefaultHeader';
import DefaultFooter from '../defaultLayout/DefaultFooter';
import BannerArea from '../../components/baner-area';
import PopularArea from '../../components/popular-area';
import Price from '../../components/price-area';
import RightMember from '../../components/right-area';
import PartNer from '../../components/partner';
const Home: React.FunctionComponent = () => {
    return (
        <div >
            <DefaultHeader />
            <BannerArea />
            <PopularArea />
            <Price />
            <RightMember />
            <PartNer />
            <DefaultFooter />
        </div>
    );
}

export default Home;
