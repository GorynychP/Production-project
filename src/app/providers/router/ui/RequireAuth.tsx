import { UserRole, getUserAuthData, getUserRole } from '@/entities/User';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getRouteForbidden, getRouteMain } from '@/shared/const/router';

interface RequireAuthProps {
    children: JSX.Element;
    roles?: UserRole[];
}

export function RequireAuth({ children, roles }: RequireAuthProps) {
    const auth = useSelector(getUserAuthData);
    // const isAdmin = useSelector(isUserAdmin);
    const userRoles = useSelector(getUserRole);
    const location = useLocation();
    console.log('roles', roles);
    console.log('userRoles', userRoles);
    const hasRequiredRoles = useMemo(() => {
        if (!roles) {
            return true;
        }

        return roles.some(requiredRole => {
            const hasRole = userRoles?.includes(requiredRole);
            console.log('hasRole', hasRole);
            return hasRole;
        });
    }, [roles, userRoles]);

    if (!auth) {
        return (
            <Navigate to={getRouteMain()} state={{ from: location }} replace />
        );
    }
    if (!hasRequiredRoles) {
        return (
            <Navigate
                to={getRouteForbidden()}
                state={{ from: location }}
                replace
            />
        );
    }
    return children;
}
