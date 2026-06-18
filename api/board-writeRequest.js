import { getAuthHeader, getServerUrl } from '../utils/function.js';
import { requestJson } from '../utils/request.js';

export const createPost = boardData => {
    const result = requestJson(`${getServerUrl()}/api/posts`, {
        method: 'POST',
        body: JSON.stringify(boardData),
        headers: {
            'Content-Type': 'application/json',
            ...getAuthHeader()
        },
        credentials: 'include',
    });
    return result;
};

export const updatePost = (postId, boardData) => {
    const result = requestJson(`${getServerUrl()}/api/posts/${postId}`, {
        method: 'PATCH',
        body: JSON.stringify(boardData),
        headers: {
            'Content-Type': 'application/json',
            ...getAuthHeader()
        },
        credentials: 'include',
    });

    return result;
};

export const fileUpload = formData => {
    const result = requestJson(getServerUrl() + '/api/posts/upload/attach-file', {
        method: 'POST',
        body: formData,
        headers: getAuthHeader()
    });

    return result;
};

export const getBoardItem = postId => {
    const result = requestJson(getServerUrl() + `/api/posts/${postId}`, {
        method: 'GET',
        credentials: 'include',
        headers: getAuthHeader()
    });

    return result;
};
