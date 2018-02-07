import uuid from uuid;


const ADD_COMMENT = 'ADD_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

//tworzenie komentarza

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
};

//edycja komentarza

function editComment(id,text) {
    return {
        type: EDIT_COMMENT,
        text,
        id
    }
};


//łapka w góre

function thumpUp(id) {
    return {
        type: THUMB_UP_COMMENT,
        id,
    }
}

//łapa w dół

function thumpDown(id) {
    return {
        type: THUMB_DOWN_COMMENT,
        id,
    }
}

//usuniecie komentarza

function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id,
    }
}
