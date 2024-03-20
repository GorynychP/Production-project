## Сущность статьи

Описание:
Статьи состоящие из [ArticleList](/src/entities/Article/ui/components/ArticleList/), имеющие два вида отображения большой карточки и маленькой - компонента [ArticleListItem](/src/entities/Article/ui/components/ArticleListItem). При переходе на статью [ArticleDetails](/src/entities/Article/ui/ArticleDetails), можно увидеть как статья складывается из разных блоков. Такие как [ArticleBlockCode](/src/entities/Article/ui/components/ArticleBlockCode/), [ArticleBlockText](/src/entities/Article/ui/components/ArticleBlockText/),[ArticleBlockImage](/src/entities/Article/ui/components/ArticleBlockImage/). В зависимости какой тип блока пришел с бекенда и отображает эту информацию при помощи [renderArticleBlock](/src/entities/Article/ui/ArticleDetails/renderArticleBlock/)

-   Components

`ArticleDetails` - компонент с информацией о статье

`ArticleListItem` - Компонент одной статьи

`ArticleList` - Компонент со списком статей

-   Blocks for Components

`ArticleBlockCode` - компонент который имеет код

`ArticleBlockText` - компонент который имеет текст

`ArticleBlockImage` - компонент который имеет картинку

`renderArticleBlock` - функция которая отображает компонент в зависимости от его типа

-   types

`Article` - Тип, описывающий статью

-   selectors

`getArticleDetailsData` - Селектор для получения информации о текущей открытой статье

`getArticleDetailsError` - Селектор для получения информации о ошибке

`getArticleDetailsLoading` - Селектор для получения информации о загрузке
