import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

class UsersController {
    public async findAllUsers(_: Request, res: Response) {
        try {
            const users = await prisma.user.findMany({
                orderBy: { created_at: 'desc' }
            });

            if (users.length === 0) return res.json({ message: 'No momento não existe nenhum usuario.' })

            return res.json(users)
        } catch (err) {
            console.log(err)
        } finally {
            await prisma.$disconnect()
        }
    }

    public async createUser(req: Request, res: Response) {
        try {
            const { name, email } = req.body;

            const user = await prisma.user.create({
                data: { name, email }
            });

            return res.status(201).json(user)
        } catch (err) {
            console.log(err)
            await prisma.$disconnect()
        }
    }

    public async updateUser(req: Request, res: Response) {
        try {
            const { id } = req.params

            const user = await prisma.user.update({
                data: {
                    updated_at: new Date(),
                    ...req.body
                },
                where: { id: Number(id) }
            });

            if (!user) {
                return res.json({ message: 'Not found user' })
            }

            return res.json(user)
        } catch (err) {
            console.log(err)
            await prisma.$disconnect();
        }
    }

    public async deleteUser(req: Request, res: Response) {
        try {
            const { id } = req.params

            const user = await prisma.user.delete({
                where: { id: Number(id) }
            })

            if (!user) return res.json({ message: 'Not found user' })

            return res.status(204).send(user)
        } catch (err) {
            console.log(err)
            await prisma.$disconnect()
        }
    }
}

export default new UsersController()