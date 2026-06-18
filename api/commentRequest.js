import { getServerUrl, getAuthHeader } from '../utils/function.js';
import { requestJson } from '../utils/request.js';

export const deleteComment = (postId, commentId) => {
    const result = requestJson(
        `${getServerUrl()}/api/posts/${postId}/comments/${commentId}`,
        {
            method: 'DELETE',
            credentials: 'include',
            headers: getAuthHeader()
        },
    );
    return result;
};

export const updateComment = (postId, commentId, commentContent) => {
    const result = requestJson(
        `${getServerUrl()}/api/posts/${postId}/comments/${commentId}`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                ...getAuthHeader()
            },
            credentials: 'include',
            body: JSON.stringify(commentContent),
        },
    );
    return result;
};
