import { User } from 'entities/User'

export enum ArticleSortField {
	VIEWS = 'views',
	TITLE = 'title',
	CREATED = 'createdAt',
}

export enum ArticleType {
	ALL = 'ALL',
	SCIENCE = 'SCIENCE',
	ECONOMICS = 'ECONOMICS',
	IT = 'IT',
}
export enum ArticleBlockType {
	IMAGE = 'IMAGE',
	TEXT = 'TEXT',
	CODE = 'CODE',
}

export interface ArticleBlockBase {
	id: string;
	type: ArticleBlockType;
}

export interface ArticleBlockText extends ArticleBlockBase {
	type: ArticleBlockType.TEXT;
	title?: string;
	paragraphs: string[];
}
export interface ArticleBlockCode extends ArticleBlockBase {
	type: ArticleBlockType.CODE;
	code: string;
}
export interface ArticleBlockImage extends ArticleBlockBase {
	type: ArticleBlockType.IMAGE;
	src: string;
	title: string;
}

export type ArticleBlock = ArticleBlockText | ArticleBlockCode | ArticleBlockImage;

export enum ArticleView {
	BIG = 'BIG',
	SMALL = 'SMALL',
}
export interface Article {
	id: string;
	title: string;
	subtitle: string;
	user: User;
	img: string;
	views: number;
	createdAt: string;
	type: ArticleType[];
	blocks: ArticleBlock[];
}

export interface ArticleDetailsSchema {
	isLoading: boolean;
	error?: string;
	article?: Article;
}
