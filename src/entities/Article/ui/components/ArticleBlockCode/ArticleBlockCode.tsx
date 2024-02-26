import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleBlockCode.module.scss';
import { ArticleBlockCode } from '../../../model/types/article';
import { Code } from '@/shared/ui/Code';

interface ArticleBlockCodeProps {
    className?: string;
    block: ArticleBlockCode;
}

export const ArticleBlockCodeComponent = memo(
    ({ className, block }: ArticleBlockCodeProps) => {
        return (
            <div className={classNames(cls.ArticleBlockCode, {}, [className])}>
                <Code text={block.code} />
            </div>
        );
    },
);
