import React, { ReactNode } from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Modal.module.scss';
import { Portal } from '../Portal';
import { Overlay } from '../Overlay';
import { useModal } from '../../../lib/hooks/useModal/useModal';
import { useTheme } from '../../../lib/hooks/useTheme/useTheme';
import { toggleFeatures } from '@/shared/lib/features';

export type ModalPadding = '0' | '8' | '16' | '24' | '32' | '40';

const mapPaddingToClasses: Record<ModalPadding, string> = {
    '0': 'gap_0',
    '8': 'gap_8',
    '16': 'gap_16',
    '24': 'gap_24',
    '32': 'gap_32',
    '40': 'gap_40',
};

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    padding?: ModalPadding;
    onClose?: () => void;
    lazy?: boolean;
}

export const Modal = (props: ModalProps) => {
    const { className, children, isOpen, onClose, lazy, padding = '0' } = props;
    const { theme } = useTheme();
    const { close, isClosing, isMounted } = useModal({
        isOpen,
        onClose,
        animationDelay: 300,
    });
    // const onContentClick = (e: React.MouseEvent) => {
    //     e.stopPropagation();
    // };
    const paddingClass = mapPaddingToClasses[padding];
    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };
    if (lazy && !isMounted) {
        return null;
    }
    return (
        <Portal element={document.getElementById('app') ?? document.body}>
            <div
                className={classNames(cls.Modal, mods, [
                    className,
                    theme,
                    'app_modal',
                    toggleFeatures({
                        name: 'isAppRedesigned',
                        on: () => cls.modalNew,
                        off: () => cls.modalOld,
                    }),
                ])}
            >
                <Overlay onClick={close} />
                <div
                    className={classNames(cls.content, {}, [cls[paddingClass]])}
                >
                    {children}
                </div>
            </div>
        </Portal>
    );
};
