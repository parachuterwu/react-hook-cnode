import React, { useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import qs from 'qs';

import { useTopicsList } from '../../store/action';
import TopicsList from '../../components/TopicsList';
import HomeNav from '../../components/HomeNav';

const HomePage = () => {
    const { data, loading } = useSelector((state) => state.topics);
    const getTopics = useTopicsList();

    const { search } = useLocation();
    const { tab = 'all', page = 1 } = qs.parse(search.slice(1));

    useEffect(() => {
        getTopics(tab, page);
    }, [tab, page]);

    return (
        <div>
            <HomeNav />
            <TopicsList data={data} loading={loading} />
        </div>
    );
};

export default HomePage;
