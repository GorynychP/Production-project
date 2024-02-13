export { userReducer, userAction } from './model/slice/userSlice';
export type { User, UserSchema, UserRole } from './model/types/user';
export { getUserAuthData } from './model/selectors/getAuthData/getUserAuthData';
export { getUserAuthInited } from './model/selectors/getUserAuthInited/getUserAuthInited';
export {
    isUserAdmin,
    isUserModerator,
    getUserRoles as getUserRole,
} from './model/selectors/roleSelectors/roleSelectors';
