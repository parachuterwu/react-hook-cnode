import React, { useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { useTopic } from '../../store/action';

const TopicPage = (props) => {
    const { id } = useParams();
    const { loading, data, isError, err_msg } = useSelector(
        (state) => state.topic
    );
    const getTopic = useTopic();

    useEffect(() => {
        getTopic(id);
    }, [id]);

    return <div>{data.content}</div>;
};

export default TopicPage;
