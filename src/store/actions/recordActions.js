export const createRecord = (record) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // Make aync call to DB
        const firestore = getFirestore();
        firestore.collection('records').add({
            ...record,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_RECORD', record });
        }).catch((err) => {
            dispatch({ type: 'CREATE_RECORD_ERROR', err });
        })
    }
}
