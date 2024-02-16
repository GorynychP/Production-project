import React, { ReactNode } from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import cls from './Drawer.module.scss';
import { Portal } from '../Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider';
import { Overlay } from '../Overlay/Overlay';
import { useModal } from 'shared/lib/hooks/useModal/useModal';

interface DrawerProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

export const Drawer = (props: DrawerProps) => {
    const { className, children, isOpen, onClose, lazy } = props;
    const { theme } = useTheme();

    const { close, isClosing, isMounted } = useModal({
        isOpen,
        onClose,
        animationDelay: 300,
    });

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }
    return (
        <Portal>
            <div
                className={classNames(cls.Drawer, mods, [
                    className,
                    theme,
                    'app_drawer',
                ])}
            >
                <Overlay onClick={close} />
                <div className={cls.content}>{children}</div>
            </div>
        </Portal>
    );
};
