import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function handler(req, res) {
    
    if (req.method === 'POST') {
        
        const name = req.body.name;
        const email = req.body.email;

         
        const user = await prisma.users.create({
            data:{name,email},
        })
        
        res.status(200).json(user)

    }

}