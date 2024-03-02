import { FeatureFlag } from '@/shared/types/featureFlag';

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
    features?: FeatureFlag;
}
export interface UserSchema {
    authData?: User;
    _inited: boolean;
}
