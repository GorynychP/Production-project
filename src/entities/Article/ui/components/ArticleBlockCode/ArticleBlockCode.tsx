import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleBlockCode.module.scss';
import { ArticleBlockCode } from '../../../model/types/article';
import { Code as CodeDeprecated } from '@/shared/ui/deprecated/Code';
import { ToggleFeatures } from '@/shared/lib/features';
import { Code } from '@/shared/ui/redesigned/Code';

interface ArticleBlockCodeProps {
    className?: string;
    block: ArticleBlockCode;
}

export const ArticleBlockCodeComponent = memo(
    ({ className, block }: ArticleBlockCodeProps) => {
        return (
            <div className={classNames(cls.ArticleBlockCode, {}, [className])}>
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={<Code text={block.code} />}
                    off={<CodeDeprecated text={block.code} />}
                />
            </div>
        );
    },
);
