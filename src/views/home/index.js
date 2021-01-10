import React from 'react';
import { useSelector } from 'react-redux';
import TopicsList from '../../components/TopicsList';

import HomeNav from '../../components/HomeNav';

const HomePage = (props) => {
    console.log(props);
    const { data, loading } = useSelector((state) => state.topics);
    return (
        <div>
            <HomeNav />
            <TopicsList data={data} loading={loading} />
        </div>
    );
};

export default HomePage;
