import { getServerUrl, getAuthHeader } from '../utils/function.js';
import { requestJson } from '../utils/request.js';

export const changePassword = async password => {
    const result = requestJson(`${getServerUrl()}/api/users/me/password`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            ...getAuthHeader()
        },
        credentials: 'include',
        body: JSON.stringify({
            password,
        }),
    });
    return result;
};
