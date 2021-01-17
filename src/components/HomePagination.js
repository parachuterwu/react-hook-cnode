import React from 'react';
import { Pagination } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import qs from 'qs';

const HomePagination = () => {
    const { search } = useLocation();
    const { tab = 'all', page = 1 } = qs.parse(search.slice(1));

    return (
        <div className="index-pagination">
            <Pagination
                current={+page}
                defaultPageSize={20}
                total={500}
                itemRender={(page, type) => {
                    switch (type) {
                        case 'page':
                            return (
                                <Link to={`/?tab=${tab}&page=${page}`}>
                                    {page}
                                </Link>
                            );
                        case 'prev':
                            return (
                                <Link to={`/?tab=${tab}&page=${page}`}>
                                    {'<'}
                                </Link>
                            );
                        case 'next':
                            return (
                                <Link to={`/?tab=${tab}&page=${page}`}>
                                    {'>'}
                                </Link>
                            );
                        default:
                            return (
                                <Link to={`/?tab=${tab}&page=${page}`}>
                                    {'…'}
                                </Link>
                            );
                    }
                }}
            />
        </div>
    );
};

export default HomePagination;
