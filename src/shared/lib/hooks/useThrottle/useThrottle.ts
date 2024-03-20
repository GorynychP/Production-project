/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useRef } from 'react';
/**
 *  Хук обеспечивает ограничение частоты вызова функции обратного вызова до определенной задержки.
 * @param callback
 * @param delay задержка в мс
 * @returns
 */
export function useThrottle(callback: (...args: any[]) => void, delay: number) {
    const throttleRef = useRef(false);
    return useCallback(
        (...args: any[]) => {
            if (!throttleRef.current) {
                callback(...args);
                throttleRef.current = true;
                setTimeout(() => {
                    throttleRef.current = false;
                }, delay);
            }
        },
        [callback, delay],
    );
}
