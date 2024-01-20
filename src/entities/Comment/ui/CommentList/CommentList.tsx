import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CommentList.module.scss';
import { useTranslation } from 'react-i18next';
import { Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';
import { Text } from 'shared/ui/Text/Text';

interface CommentListProps {
	className?: string;
	comments?: Comment[];
	isLoading?: boolean;
}

export const CommentList = (props: CommentListProps) => {
	const { className, comments, isLoading } = props;
	const { t } = useTranslation();
	if (isLoading) {
		return (
			<div className={classNames(cls.CommentList, {}, [className])}>
				<CommentCard isLoading />
				<CommentCard isLoading />
				<CommentCard isLoading />
			</div>
		);
	}
	return (
		<div className={classNames(cls.CommentList, {}, [className])}>
			{comments?.length ? (
				comments.map((comment) => (
					<CommentCard
						key={comment.id}
						className={cls.comment}
						comment={comment}
						isLoading={isLoading}
					/>
				))
			) : (
				<Text text={t('Комментарии отсутствуют')} />
			)}
		</div>
	);
};
