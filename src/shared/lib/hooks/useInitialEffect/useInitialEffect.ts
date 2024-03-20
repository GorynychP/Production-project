import { useEffect } from 'react';

/**
 * Хук, который позволяет не производить действие( запрос на сервер ), если мы находимся в режиме storybook или jest
 * @param callback
 */
export function useInitialEffect(callback: () => void) {
    useEffect(() => {
        if (__PROJECT__ !== 'storybook' && __PROJECT__ !== 'jest') {
            callback();
        }
        // eslint-disable-next-line
    }, []);
}
