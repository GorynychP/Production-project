import React, { useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AddCommentForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    getCommentFormError,
    getCommentFormText,
} from '../../model/selectors/addCommentFormSelectors';
import {
    addCommentFormAction,
    addCommentFormReducer,
} from '../../model/slice/addCommentFormSlice';
import { HStack } from '@/shared/ui/deprecated/Stack';
import { ToggleFeatures } from '@/shared/lib/features';
import { Input } from '@/shared/ui/redesigned/Input';
import { Button } from '@/shared/ui/redesigned/Button';

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

    const content = (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <HStack
                    max
                    justify="between"
                    align="center"
                    className={classNames(cls.AddCommentFormRedesigned, {}, [
                        className,
                    ])}
                    data-testid="AddCommentForm"
                >
                    <Input
                        className={cls.input}
                        value={text}
                        onChange={onCommentTextChange}
                        placeholder={t('Введите текст комментария')}
                        data-testid="AddCommentForm.Input"
                    />
                    <Button
                        data-testid="AddCommentForm.Button"
                        onClick={onSendHandler}
                    >
                        {t('Отправить')}
                    </Button>
                </HStack>
            }
            off={
                <HStack
                    max
                    justify="between"
                    align="center"
                    className={classNames(cls.AddCommentForm, {}, [className])}
                    data-testid="AddCommentForm"
                >
                    <InputDeprecated
                        className={cls.input}
                        value={text}
                        onChange={onCommentTextChange}
                        placeholder={t('Введите текст комментария')}
                        data-testid="AddCommentForm.Input"
                    />
                    <ButtonDeprecated
                        data-testid="AddCommentForm.Button"
                        onClick={onSendHandler}
                    >
                        {t('Отправить')}
                    </ButtonDeprecated>
                </HStack>
            }
        />
    );

    return (
        <DynamicModuleLoader reducers={reducer}>{content}</DynamicModuleLoader>
    );
};
export default AddCommentForm;
