import { FeatureFlags } from '@/shared/types/featureFlag';

export enum UserRole {
    ADMIN = 'ADMIN',
    USER = 'USER',
    MODERATOR = 'MODERATOR',
}

export interface User {
    id: string;
    // email?: string;
    username: string;
    avatar?: string;
    roles?: UserRole[];
    features?: FeatureFlags;
}
export interface UserSchema {
    authData?: User;
    _inited: boolean;
}
