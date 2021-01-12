import React from 'react';
import { List, Col, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const TopicsList = (props) => {
    const { data, loading } = props;
    console.log(data);

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
                        <Col xs={24} md={20}>
                            <Link to={`/user/${loginname}`}>
                                <Avatar
                                    icon={<UserOutlined />}
                                    src={avatar_url}
                                    title={loginname}
                                />
                            </Link>
                        </Col>
                        <Col xs={0} md={4}></Col>
                    </List.Item>
                );
            }}
        />
    );
};

export default TopicsList;
