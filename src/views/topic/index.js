import React, { useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { Alert } from 'antd';

import { useTopic } from '../../store/action';

const TopicPage = (props) => {
    const { id } = useParams();
    const { loading, data, isError, err_msg } = useSelector(
        (state) => state.topic
    );
    const getTopic = useTopic();
    const history = useHistory();

    useEffect(() => {
        getTopic(id);
    }, [id]);

    return (
        <div id="topic">
            {isError ? (
                <Alert
                    closable
                    message={'请求出错'}
                    description={
                        <Fragment>
                            <p>{err_msg}</p>
                            <p>点击关闭按钮返回上一步</p>
                        </Fragment>
                    }
                    afterClose={() => {
                        history.goBack();
                    }}
                />
            ) : (
                <Fragment>
                    <div>apple</div>
                </Fragment>
            )}
        </div>
    );
};

export default TopicPage;
