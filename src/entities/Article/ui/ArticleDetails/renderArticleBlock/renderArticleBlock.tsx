import { ArticleBlock, ArticleBlockType } from '../../../model/types/article';
import { ArticleBlockCodeComponent } from '../../components/ArticleBlockCode/ArticleBlockCode';
import { ArticleBlockImageComponent } from '../../components/ArticleBlockImage/ArticleBlockImage';
import { ArticleBlockTextComponent } from '../../components/ArticleBlockText/ArticleBlockText';
import cls from '../ArticleDetails.module.scss';

export const renderArticleBlock = (block: ArticleBlock) => {
    switch (block.type) {
        case ArticleBlockType.CODE:
            return (
                <ArticleBlockCodeComponent
                    className={cls.block}
                    key={block.id}
                    block={block}
                />
            );
        case ArticleBlockType.IMAGE:
            return (
                <ArticleBlockImageComponent
                    className={cls.block}
                    block={block}
                    key={block.id}
                />
            );
        case ArticleBlockType.TEXT:
            return (
                <ArticleBlockTextComponent
                    className={cls.block}
                    key={block.id}
                    block={block}
                />
            );
        default:
            return null;
    }
};
