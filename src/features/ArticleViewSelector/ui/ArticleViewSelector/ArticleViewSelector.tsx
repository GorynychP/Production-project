import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleViewSelector.module.scss';
import ListImgDeprecated from '@/shared/assets/icons/bi_list.svg';
import TiledImgDeprecated from '@/shared/assets/icons/fe_tiled.svg';
import ListImg from '@/shared/assets/icons/burger.svg';
import TiledImg from '@/shared/assets/icons/tile.svg';
import { ArticleView } from '@/entities/Article';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import { Icon } from '@/shared/ui/redesigned/Icon';
interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}
const viewTypes = [
    {
        view: ArticleView.BIG,
        icon: toggleFeatures({
            name: 'isAppRedesigned',
            on: () => ListImg,
            off: () => ListImgDeprecated,
        }),
    },
    {
        view: ArticleView.SMALL,
        icon: toggleFeatures({
            name: 'isAppRedesigned',
            on: () => TiledImg,
            off: () => TiledImgDeprecated,
        }),
    },
];
export const ArticleViewSelector = memo(
    ({ className, view, onViewClick }: ArticleViewSelectorProps) => {
        const onClick = (newView: ArticleView) => () => {
            onViewClick?.(newView);
        };
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <div
                        className={classNames(
                            cls.ArticleViewSelectorRedesigned,
                            {},
                            [className],
                        )}
                    >
                        {viewTypes.map(viewType => (
                            <Icon
                                key={viewType.view}
                                Svg={viewType.icon}
                                onClick={onClick(viewType.view)}
                                clickable
                                className={classNames(cls.icon, {
                                    [cls.selectedRedesigned]:
                                        viewType.view !== view,
                                })}
                            />
                        ))}
                    </div>
                }
                off={
                    <div
                        className={classNames(cls.ArticleViewSelector, {}, [
                            className,
                        ])}
                    >
                        {viewTypes.map(viewType => (
                            <Icon
                                key={viewType.view}
                                Svg={viewType.icon}
                                clickable
                                onClick={onClick(viewType.view)}
                                className={classNames('', {
                                    [cls.selected]: viewType.view === view,
                                })}
                            />
                        ))}
                    </div>
                }
            />
        );
    },
);
