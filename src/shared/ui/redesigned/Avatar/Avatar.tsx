import React, { useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { AppImage } from '../../redesigned/AppImage';
import { Skeleton } from '../Skeleton';
import UserAvatar from '../../../assets/icons/user.svg';
import { Icon } from '../Icon';
interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}

export const Avatar = (props: AvatarProps) => {
    const { className, src, size = 100, alt } = props;
    const styles = useMemo(() => {
        return { width: size, height: size };
    }, [size]);

    const fallback = <Skeleton width={size} height={size} border="50%" />;
    const errorFallback = <Icon Svg={UserAvatar} width={size} height={size} />;
    return (
        <AppImage
            fallback={fallback}
            errorFallback={errorFallback}
            src={src}
            style={styles}
            alt={alt}
            className={classNames(cls.Avatar, {}, [className])}
        ></AppImage>
    );
};
