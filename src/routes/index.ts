import { Router } from 'express'
import usersRouter from './users.routes'

const router = Router()

router.get('/', (req, res) => {
    return res.json({ message: 'Welcome to API with Prisma 2 and Express' })
})

router.use('/users', usersRouter)

export default router