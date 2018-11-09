export const createPost = (post) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // make async call to db
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('posts').add({
            title: post.title,
            content: post.content,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_POST', post: post });
        }).catch((err) => {
            dispatch({ type: 'CREATE_POST_ERROR', err });
        });
    }
};