import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './RatingCard.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { HStack, VStack } from '@/shared/ui/deprecated/Stack';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { StarRating as StarRatingDeprecated } from '@/shared/ui/deprecated/StarRating';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import {
    Button as ButtonDeprecated,
    ButtonSize,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { BrowserView, MobileView } from 'react-device-detect';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';
import { Input } from '@/shared/ui/redesigned/Input';
import { Card } from '@/shared/ui/redesigned/Card';
import { Button } from '@/shared/ui/redesigned/Button';
import { StarRating } from '@/shared/ui/redesigned/StarRating';

interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
    rate?: number;
}

export const RatingCard = memo((props: RatingCardProps) => {
    const {
        className,
        feedbackTitle,
        hasFeedback,
        onAccept,
        onCancel,
        title,
        rate = 0,
    } = props;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rate);
    const [feedback, setFeedback] = useState('');

    const { t } = useTranslation();
    const onSelectStars = useCallback(
        (selectedStarsCount: number) => {
            setStarsCount(selectedStarsCount);
            if (hasFeedback) {
                setIsModalOpen(true);
            } else {
                onAccept?.(selectedStarsCount);
            }
        },
        [hasFeedback, onAccept],
    );
    const acceptHandle = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);

    const cancelHandle = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    const modalContent = (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <>
                    <Text title={feedbackTitle} />
                    <Input
                        data-testid="RatingCard.Input"
                        value={feedback}
                        onChange={setFeedback}
                        placeholder={t('Ваш отзыв')}
                    />
                </>
            }
            off={
                <>
                    <TextDeprecated title={feedbackTitle} />
                    <InputDeprecated
                        data-testid="RatingCard.Input"
                        value={feedback}
                        onChange={setFeedback}
                        placeholder={t('Ваш отзыв')}
                    />
                </>
            }
        />
    );

    const content = (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Card
                    data-testid="RatingCard"
                    max
                    className={classNames(cls.RatingCard, {}, [className])}
                >
                    <VStack align="center" gap="8">
                        <Text
                            title={starsCount ? t('Спасибо за отзыв!') : title}
                        />
                        <StarRating
                            selectedStars={starsCount}
                            size={40}
                            onSelect={onSelectStars}
                        />
                    </VStack>
                    <BrowserView>
                        <Modal padding="32" isOpen={isModalOpen} lazy>
                            <VStack max gap="32">
                                {modalContent}
                                <HStack
                                    justify="end"
                                    max
                                    gap="16"
                                    style={{ height: '45px' }}
                                >
                                    <Button
                                        theme="outline_cancel"
                                        onClick={cancelHandle}
                                        data-testid="RatingCard.Close"
                                    >
                                        {t('Закрыть')}
                                    </Button>
                                    <Button
                                        theme="outline_save"
                                        onClick={acceptHandle}
                                        data-testid="RatingCard.Send"
                                    >
                                        {t('Отправить')}
                                    </Button>
                                </HStack>
                            </VStack>
                        </Modal>
                    </BrowserView>
                    <MobileView>
                        <Drawer isOpen={isModalOpen}>
                            <VStack max gap="32">
                                {modalContent}
                                <Button
                                    onClick={acceptHandle}
                                    fullWidth
                                    size={ButtonSize.L}
                                >
                                    {t('Отправить')}
                                </Button>
                            </VStack>
                        </Drawer>
                    </MobileView>
                </Card>
            }
            off={
                <CardDeprecated
                    data-testid="RatingCard"
                    max
                    className={classNames(cls.RatingCard, {}, [className])}
                >
                    <VStack align="center" gap="8">
                        <Text
                            title={starsCount ? t('Спасибо за отзыв!') : title}
                        />
                        <StarRatingDeprecated
                            selectedStars={starsCount}
                            size={40}
                            onSelect={onSelectStars}
                        />
                    </VStack>
                    <BrowserView>
                        <Modal isOpen={isModalOpen} lazy>
                            <VStack max gap="32">
                                {modalContent}
                                <HStack justify="end" max gap="16">
                                    <ButtonDeprecated
                                        theme={ButtonTheme.OUTLINE_RED}
                                        onClick={cancelHandle}
                                        data-testid="RatingCard.Close"
                                    >
                                        {t('Закрыть')}
                                    </ButtonDeprecated>
                                    <ButtonDeprecated
                                        onClick={acceptHandle}
                                        data-testid="RatingCard.Send"
                                    >
                                        {t('Отправить')}
                                    </ButtonDeprecated>
                                </HStack>
                            </VStack>
                        </Modal>
                    </BrowserView>
                    <MobileView>
                        <Drawer isOpen={isModalOpen}>
                            <VStack max gap="32">
                                {modalContent}
                                <ButtonDeprecated
                                    onClick={acceptHandle}
                                    fullWidth
                                    size={ButtonSize.L}
                                >
                                    {t('Отправить')}
                                </ButtonDeprecated>
                            </VStack>
                        </Drawer>
                    </MobileView>
                </CardDeprecated>
            }
        />
    );

    return content;
});
