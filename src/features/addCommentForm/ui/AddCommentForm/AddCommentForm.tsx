import React, { useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AddCommentForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { Button } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    getCommentFormError,
    getCommentFormText,
} from '../../model/selectors/addCommentFormSelectors';
import {
    addCommentFormAction,
    addCommentFormReducer,
} from '../../model/slice/addCommentFormSlice';
import { HStack } from 'shared/ui/Stack';

export interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducer: ReducersList = { addCommentForm: addCommentFormReducer };
const AddCommentForm = ({ className, onSendComment }: AddCommentFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const text = useSelector(getCommentFormText);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const error = useSelector(getCommentFormError);
    const onCommentTextChange = useCallback(
        (value: string) => {
            dispatch(addCommentFormAction.setCommentText(value));
        },
        [dispatch],
    );

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        onCommentTextChange('');
    }, [onSendComment, onCommentTextChange, text]);
    return (
        <DynamicModuleLoader reducers={reducer}>
            <HStack
                max
                justify="between"
                align="center"
                className={classNames(cls.AddCommentForm, {}, [className])}
            >
                <Input
                    className={cls.input}
                    value={text}
                    onChange={onCommentTextChange}
                    placeholder={t('Введите текст комментария')}
                />
                <Button onClick={onSendHandler}>{t('Отправить')}</Button>
            </HStack>
        </DynamicModuleLoader>
    );
};
export default AddCommentForm;
