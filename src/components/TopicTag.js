import React from 'react';
import { Tag } from 'antd';
import { homeNav } from '../router/index';

const TopicTag = (props) => {
    const { tab = 'all', top, good } = props;

    const tabTxt = top
        ? '置顶'
        : good
        ? '精华'
        : homeNav.find((nav) => nav.key === tab).txt;
    const color = top || good ? '#80bd01' : '#e5e5e5';

    return (
        <Tag className="topic_tag" color={color}>
            {tabTxt}
        </Tag>
    );
};

export default TopicTag;
