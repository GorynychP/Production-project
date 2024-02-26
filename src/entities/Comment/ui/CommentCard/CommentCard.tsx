import React from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';
import { Avatar } from '@/shared/ui/Avatar';
import { Text } from '@/shared/ui/Text';
import { Skeleton } from '@/shared/ui/Skeleton';
import { AppLink } from '@/shared/ui/AppLink';
import { getRouteProfile } from '@/shared/const/router';
import { VStack } from '@/shared/ui/Stack';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = ({
    className,
    comment,
    isLoading,
}: CommentCardProps) => {
    if (isLoading) {
        return (
            <VStack
                max
                className={classNames(cls.CommentCard, {}, [
                    className,
                    cls.loading,
                ])}
            >
                <div className={cls.header}>
                    <Skeleton border="50%" width={32} height={32} />
                    <Skeleton
                        className={cls.username}
                        width={100}
                        height={16}
                    />
                </div>
                <Skeleton className={cls.text} width={'100%'} height={32} />
            </VStack>
        );
    }
    if (!comment) {
        return null;
    }

    return (
        <VStack max className={classNames(cls.CommentCard, {}, [className])}>
            <AppLink
                to={getRouteProfile(comment.user.id)}
                className={cls.header}
            >
                {comment.user.avatar ? (
                    <Avatar size={32} src={comment.user.avatar} />
                ) : null}
                <Text className={cls.username} title={comment.user.username} />
            </AppLink>
            <Text className={cls.text} text={comment.text} />
        </VStack>
    );
};
