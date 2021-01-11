import axios from 'axios';
import { useDispatch } from 'react-redux';

const cnodeServer = axios.create({
    baseURL: 'https://cnodejs.org/api/v1',
});

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
                console.log(res);
                dispatch({
                    type: 'topics_loadover',
                    data: res.data.data,
                });
            });
    };
};

export { useTopicsList };
