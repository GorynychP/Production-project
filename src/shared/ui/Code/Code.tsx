import React, { useCallback } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Code.module.scss'
import { Button, ButtonTheme } from '../Button/Button'
import CopyIcon from '../../assets/icons/Copy.svg'

interface CodeProps {
	className?: string;
	text: string;
}

export const Code = ({ className, text }: CodeProps) => {
    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text)
    }, [text])
    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button className={cls.copyBtn} onClick={onCopy} theme={ButtonTheme.CLEAR}>
                <CopyIcon />
            </Button>
            <code> {text}</code>
        </pre>
    )
}
