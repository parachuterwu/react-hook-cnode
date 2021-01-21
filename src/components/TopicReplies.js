import React from 'react';
import { Card, List, Comment, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import FromNow from './FromNow';

const TopicReplies = (props) => {
    const { data = [], loading } = props;

    return (
        <Card title={`${data.length}回复`} loading={loading}>
            <List
                dataSource={data}
                renderItem={(item, index) => {
                    const { author, content, create_at } = item;

                    return (
                        <li>
                            <Comment
                                author={
                                    <Link to={`/user/${author.loginname}`}>
                                        {author.loginname}
                                    </Link>
                                }
                                avatar={
                                    <Link
                                        to={`/user/${author.loginname}`}
                                        style={{ marginRight: 10 }}
                                    >
                                        <Avatar
                                            shape="square"
                                            icon={<UserOutlined />}
                                            src={author.avatar_url}
                                            title={author.loginname}
                                        />
                                    </Link>
                                }
                                content={
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: content,
                                        }}
                                    ></div>
                                }
                                datetime={
                                    <span>
                                        <span className="reply-floor">
                                            {`${index + 1}楼`}
                                        </span>
                                        <FromNow date={create_at} />
                                    </span>
                                }
                            />
                        </li>
                    );
                }}
            />
        </Card>
    );
};

export default TopicReplies;
