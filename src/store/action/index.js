import axios from 'axios';
import { useDispatch } from 'react-redux';

const cnodeServer = axios.create({
    baseURL: 'https://cnodejs.org/api/v1',
});

/**
 * Get topic list
 */
const useTopicsList = () => {
    const dispatch = useDispatch();

    return (tab = 'all', page = 1, limit = 20, mdrender = true) => {
        dispatch({
            type: 'topics_loading',
        });

        cnodeServer
            .get(
                `/topics?tab=${tab}&page=${page}&limit=${limit}&mdrender=${mdrender}`
            )
            .then((res) => {
                dispatch({
                    type: 'topics_loadover',
                    data: res.data.data,
                });
            });
    };
};

const useTopic = () => {
    const dispatch = useDispatch();

    return (id) => {
        dispatch({
            type: 'topic_loading',
        });

        cnodeServer
            .get(`/topic/${id}`)
            .then((res) => {
                console.log(res);
                dispatch({
                    type: 'topic_loadover',
                    data: res.data.data,
                });
            })
            .catch((res) => {
                dispatch({
                    type: 'topic_error',
                    error_msg: 'some error',
                });
            });
    };
};

export { useTopicsList, useTopic };
