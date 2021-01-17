import React from 'react';
import { List, Col, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import FromNow from './FromNow';
import TopicTag from './TopicTag';

const TopicsList = (props) => {
    const { data, loading } = props;

    return (
        <List
            className="topics_list"
            loading={loading}
            dataSource={data}
            renderItem={(item) => {
                // prettier-ignore
                const { author, last_reply_at, good, top, tab, title, id } = item;
                const { loginname, avatar_url } = author;

                return (
                    <List.Item>
                        <Col xs={18} sm={20}>
                            <Link
                                to={`/user/${loginname}`}
                                style={{ marginRight: 10 }}
                            >
                                <Avatar
                                    shape="square"
                                    icon={<UserOutlined />}
                                    src={avatar_url}
                                    title={loginname}
                                />
                            </Link>
                            <TopicTag tab={tab} top={top} good={good} />
                            <Link className="topic_link" to={`/topic/${id}`}>
                                {title}
                            </Link>
                        </Col>
                        <Col xs={6} sm={4} className="from_now">
                            <FromNow data={last_reply_at} />
                        </Col>
                    </List.Item>
                );
            }}
        />
    );
};

export default TopicsList;
