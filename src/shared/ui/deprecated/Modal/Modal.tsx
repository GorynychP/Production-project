import React, { ReactNode } from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Modal.module.scss';
import { Portal } from '../../redesigned/Portal';
import { Overlay } from '../../redesigned/Overlay';
import { useModal } from '../../../lib/hooks/useModal/useModal';
import { useTheme } from '../../../lib/hooks/useTheme/useTheme';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}
/**
Устарел, используем новые компоненты с папки redesigned
 * @deprecated
 */
export const Modal = (props: ModalProps) => {
    const { className, children, isOpen, onClose, lazy } = props;
    const { theme } = useTheme();
    const { close, isClosing, isMounted } = useModal({
        isOpen,
        onClose,
        animationDelay: 300,
    });
    // const onContentClick = (e: React.MouseEvent) => {
    //     e.stopPropagation();
    // };
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
                className={classNames(cls.Modal, mods, [
                    className,
                    theme,
                    'app_modal',
                ])}
            >
                <Overlay onClick={close} />
                <div className={cls.content}>{children}</div>
            </div>
        </Portal>
    );
};
