export const createPost = (post) => {
    return (dispatch, getState) => {
        // make async call to db
        dispatch({
            type: 'CREATE_POST',
            post: post
        });
    }
};