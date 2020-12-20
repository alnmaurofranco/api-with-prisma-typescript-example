import { Router } from 'express'
import usersController from '../controllers/UsersController'

const usersRouter = Router()

usersRouter.get('/', usersController.findAllUsers)
usersRouter.post('/create', usersController.createUser)
usersRouter.put('/update/:id', usersController.updateUser)
usersRouter.delete('/:id', usersController.deleteUser)

export default usersRouter