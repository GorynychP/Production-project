import React, { memo, useCallback } from 'react';
import { Card } from '@/shared/ui/redesigned/Card';
import { ArticleAdditionalInfo } from '@/widgets/ArticleAdditionalInfo';
import { useSelector } from 'react-redux';
import { getArticleDetailsData } from '@/entities/Article';
import cls from './AdditionalInfoContainer.module.scss';
import { getCanEditArticle } from '../../../model/selectors/article/article';
import { useNavigate } from 'react-router-dom';
import { getRouteArticleEdit } from '@/shared/const/router';

export const AdditionalInfoContainer = memo(() => {
    const article = useSelector(getArticleDetailsData);
    const navigate = useNavigate();
    const isEdit = useSelector(getCanEditArticle);
    const onEditArticle = useCallback(() => {
        if (article) {
            navigate(getRouteArticleEdit(article.id));
        }
    }, [article, navigate]);

    if (!article) {
        return null;
    }
    return (
        <Card border="normal" padding="24" className={cls.card}>
            <ArticleAdditionalInfo
                authData={article.user}
                onClick={onEditArticle}
                isEdit={isEdit}
                createdAt={article.createdAt}
                views={article.views}
            />
        </Card>
    );
});
