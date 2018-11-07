export const createPost = (post) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // make async call to db
        const firestore = getFirestore();
        firestore.collection('posts').add({
            title: post.title,
            content: post.content,
            authorFirstName: 'Vlad',
            authorLastName: 'Bibire',
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_POST', post: post });
        }).catch((err) => {
            dispatch({ type: 'CREATE_POST_ERROR', err });
        });
    }
};