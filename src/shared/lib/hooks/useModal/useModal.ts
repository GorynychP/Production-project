import {
    MutableRefObject,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';

interface useModalProps {
    isOpen?: boolean;
    onClose?: () => void;
    animationDelay?: number;
}
/**
 * Хук, который позволяет открывать и закрывать модалку + закрытие при нажатии на Escape
 * @param props
 * @returns
 */
export const useModal = (props: useModalProps) => {
    const { isOpen, onClose, animationDelay } = props;
    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    const timerRef = useRef() as MutableRefObject<
        ReturnType<typeof setTimeout>
    >;

    const close = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, animationDelay);
        }
    }, [animationDelay, onClose]);

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                close();
            }
        },
        [close],
    );

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    return {
        close,
        isClosing,
        isMounted,
    };
};
