const { Router } = require("express");

const router = Router();

const {
    getUsersHandler,
    createUsersHandler,
    getUserNameHandler,
    updateUserHandler,
    deleteUsersHandler,
    getDeleteUsersnameHandler,
    getIdUsersHandler,
    getNftsUsersHandler,
    grantAdminAccesHandler
}= require('../handlers/usersHandler')


router
.get('/', getUsersHandler)
.get('/username', getUserNameHandler)
.get('/:id', getIdUsersHandler)
.get('/nfts/:id', getNftsUsersHandler)
.post('/username', getUserNameHandler)
.post('/', createUsersHandler)
.put('/update/:id', updateUserHandler)
.put('/admin/:id/grant-admin', grantAdminAccesHandler)
.delete('/:id', deleteUsersHandler)
.delete('/', getDeleteUsersnameHandler) 
 
module.exports = router;
