import React from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useParams } from 'react-router-dom';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { EditableProfileCard } from '@/features/editableProfileCard';
import { Page } from '@/widgets/Page';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    // const { t } = useTranslation('profile');
    const { id } = useParams<{ id: string }>();

    return (
        <Page
            data-testid={'ProfilePage'}
            className={classNames('', {}, [className])}
        >
            <VStack gap="16" max={false}>
                <EditableProfileCard id={id} />
            </VStack>
        </Page>
    );
};

export default ProfilePage;
