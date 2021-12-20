
export function addToWishList(payload) {
    return {
        type: 'ADD_TO_WISH_LIST',
        payload
    }
}

export function removeFormWishList(payload) {
    return {
        type: 'REMOVE_FROM_WISH_LIST',
        payload
    }
}

