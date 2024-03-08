import React, { memo } from 'react';
import { useArticleFilters } from '../../../lib/hooks/useArticleFilters/useArticleFilters';
import { ArticleFilters } from '@/widgets/ArticleFilters';

interface FilterContainerProps {
    className?: string;
}

export const FilterContainer = memo(({ className }: FilterContainerProps) => {
    const {
        onChangeOrder,
        onChangeSearch,
        onChangeSort,
        onChangeType,
        order,
        search,
        sort,
        type,
    } = useArticleFilters();
    return (
        <ArticleFilters
            className={className}
            onChangeOrder={onChangeOrder}
            onChangeSearch={onChangeSearch}
            onChangeSort={onChangeSort}
            onChangeType={onChangeType}
            order={order}
            search={search}
            sort={sort}
            type={type}
        />
    );
});
