import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleViewSelector.module.scss';
import { ArticleView } from '../../../model/types/article';
import ListImg from '@/shared/assets/icons/bi_list.svg';
import TiledImg from '@/shared/assets/icons/fe_tiled.svg';
import { Button, ButtonTheme } from '@/shared/ui/Button';
interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}
const viewTypes = [
    {
        view: ArticleView.BIG,
        icon: <ListImg />,
    },
    {
        view: ArticleView.SMALL,
        icon: <TiledImg />,
    },
];
export const ArticleViewSelector = memo(
    ({ className, view, onViewClick }: ArticleViewSelectorProps) => {
        const onClick = (newView: ArticleView) => () => {
            onViewClick?.(newView);
        };
        return (
            <div
                className={classNames(cls.ArticleViewSelector, {}, [className])}
            >
                {viewTypes.map(viewType => (
                    <Button
                        key={viewType.view}
                        theme={ButtonTheme.CLEAR}
                        onClick={onClick(viewType.view)}
                        className={classNames('', {
                            [cls.selected]: viewType.view === view,
                        })}
                    >
                        {viewType.icon}
                    </Button>
                ))}
            </div>
        );
    },
);
