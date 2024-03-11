export const alertMessages = {
    NEW_MEMBERSHIPS: {
        SUCCESS: { message: 'Added successfully', severity:'success'},
        FAILURE: { message: 'Added unsuccessfully', severity: 'error'},
        OVERLIMIT: { message: 'Reach maximum 25 cards', severity: 'info'},
        STARTDATE_NOT_VALID: { message: 'Start Date should not be over or same with Expiry Date', severity:'info'}
    },

    EDIT_MEMBERSHIPS:{
        SUCCESS: { message: 'Update successfully', severity:'success'},
        FAILURE: { message: 'Update unsuccessfully', severity: 'error'},
        STARTDATE_NOT_VALID: { message: 'Start Date should not be over or same with Expiry Date', severity:'info'}
    },
}