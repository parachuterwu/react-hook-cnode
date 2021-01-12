import React from 'react';
import { Pagination } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import qs from 'qs';

const HomePagination = () => {
    return (
        <div className="index-pagination">
            <Pagination />
        </div>
    );
};

export default HomePagination;
