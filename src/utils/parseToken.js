import jwt_decode from 'jwt-decode';

export const parseJwt = token => {
    try {
        return jwt_decode(token);
    } catch (e) {
        return null;
    }
};
