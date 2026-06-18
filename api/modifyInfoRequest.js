import { getServerUrl } from '../utils/function.js';
import { requestJson } from '../utils/request.js';

export const userModify = async changeData => {
    const result = await requestJson(`${getServerUrl()}/api/users/me`, {
        method: '',
        headers: {
            'Content-Type': 'application/json',
            ...getAuthHeader()
        },
        credentials: 'include',
        body: JSON.stringify(changeData),
    });
    return result;
};

export const userDelete = async () => {
    const result = await requestJson(`${getServerUrl()}/api/users/me`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            ...getAuthHeader()
        },
        credentials: 'include',
    });
    return result;
};
