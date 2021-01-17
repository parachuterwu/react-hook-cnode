import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import qs from 'qs';

import { useTopicsList } from '../../store/action';
import TopicsList from '../../components/TopicsList';
import HomeNav from '../../components/HomeNav';
import HomePagination from '../../components/HomePagination';

const HomePage = () => {
    const { data, loading } = useSelector((state) => state.topics);
    const { search } = useLocation();
    const { tab = 'all', page = 1 } = qs.parse(search.slice(1));
    const getTopics = useTopicsList();

    useEffect(() => {
        getTopics(tab, page);
    }, [tab, page]);

    return (
        <div>
            <HomeNav />
            <TopicsList data={data} loading={loading} />
            {loading ? '' : <HomePagination />}
        </div>
    );
};

export default HomePage;
