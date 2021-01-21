import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';

import TopicTag from './TopicTag';
import FromNow from './FromNow';
import { homeNav } from '../router/index';

const TopicDetail = (props) => {
    const { data, loading } = props;
    // prettier-ignore
    const { author, content, create_at, good, top, tab = 'all', title, visit_count } = data;
    const topicTitle = (
        <Fragment>
            <h1>
                <TopicTag tab={tab} top={top} good={good} />
                {title}
            </h1>
            <div className="changes">
                <span>
                    发布于
                    <FromNow date={create_at} />
                </span>
                <span>
                    作者{' '}
                    <Link to={`/user/${author.loginname}`}>
                        {author.loginname}
                    </Link>
                </span>
                <span>{visit_count}次浏览</span>
                <span>来自{homeNav.find((nav) => nav.key === tab).txt}</span>
            </div>
        </Fragment>
    );

    return (
        <Card bordered loading={loading} title={topicTitle}>
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </Card>
    );
};

export default TopicDetail;
