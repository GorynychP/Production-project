import React from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { AppLink as AppLinkDeprecated } from '@/shared/ui/deprecated/AppLink';
import { getRouteProfile } from '@/shared/const/router';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { ToggleFeatures } from '@/shared/lib/features';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Text } from '@/shared/ui/redesigned/Text';
import { Avatar } from '@/shared/ui/redesigned/Avatar';

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
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <VStack
                        data-testid="CommentCard.Loading"
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
                        <Skeleton
                            className={cls.text}
                            width={'100%'}
                            height={32}
                        />
                    </VStack>
                }
                off={
                    <VStack
                        data-testid="CommentCard.Loading"
                        max
                        className={classNames(cls.CommentCard, {}, [
                            className,
                            cls.loading,
                        ])}
                    >
                        <div className={cls.header}>
                            <SkeletonDeprecated
                                border="50%"
                                width={32}
                                height={32}
                            />
                            <SkeletonDeprecated
                                className={cls.username}
                                width={100}
                                height={16}
                            />
                        </div>
                        <SkeletonDeprecated
                            className={cls.text}
                            width={'100%'}
                            height={32}
                        />
                    </VStack>
                }
            />
        );
    }
    if (!comment) {
        return null;
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <VStack
                    data-testid="CommentCard.Content"
                    max
                    className={classNames(cls.CommentCardRedesigned, {}, [
                        className,
                    ])}
                >
                    <AppLink
                        to={getRouteProfile(comment.user.id)}
                        className={cls.header}
                    >
                        {comment.user.avatar ? (
                            <Avatar size={32} src={comment.user.avatar} />
                        ) : null}
                        <Text
                            className={cls.username}
                            title={comment.user.username}
                        />
                    </AppLink>
                    <Text className={cls.text} text={comment.text} />
                </VStack>
            }
            off={
                <VStack
                    data-testid="CommentCard.Content"
                    max
                    className={classNames(cls.CommentCard, {}, [className])}
                >
                    <AppLinkDeprecated
                        to={getRouteProfile(comment.user.id)}
                        className={cls.header}
                    >
                        {comment.user.avatar ? (
                            <AvatarDeprecated
                                size={32}
                                src={comment.user.avatar}
                            />
                        ) : null}
                        <TextDeprecated
                            className={cls.username}
                            title={comment.user.username}
                        />
                    </AppLinkDeprecated>
                    <TextDeprecated className={cls.text} text={comment.text} />
                </VStack>
            }
        />
    );
};
