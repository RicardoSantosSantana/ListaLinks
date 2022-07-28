import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {

  if (req.method === 'POST') {
    
    try {
      const { email, title, link, description, category } = req.body

      if (!email || !title || !description) {
        return res.status(422).send({ message:'Missing one or more fields', error: 'Missing one or more fields' })
      }

      const links = await prisma.links.create({
        data: { email, title, link, description, category }
      })      

      res.status(200).json(links)

    } catch (error) {
       console.error(error);
      res.status(500).send({ message: "Error creating on the server", error: error })
    }
    
  }

  if (req.method === 'PUT') {
    
    try {
      const { id, email, title, link, description, category } = req.body

      if (!email || !title || !description || !id) {
        return res.status(422).send({ message:'Missing one or more fields', error: 'Missing one or more fields' })
      }

      const links = await prisma.links.update({
        where: { id } ,
        data: { email, title, link, description, category }
      })      

      res.status(200).json(links)

    } catch (error) {
       console.error(error);
      res.status(500).send({ message: "Error creating on the server", error: error })
    }
  }
  
  if (req.method === 'GET') {

      const email = req.query.email;       
      const links = await prisma.links.findMany({
        where: { email }
      })      
      await res.status(200).json(links)

  }


  if (req.method === 'DELETE') {

    try {
      const { id } = req.body
 
      if (!id) {
        return res.status(422).send({ message:'Missing one or more fields', error: 'Missing one or more fields' })
      }

      const sql =  'DELETE FROM links WHERE id=$1'
        
      const LINKDelete= await dbPool.query(sql, [id]) 

      res.status(200).json(LINKDelete)

    } catch (error) {      
      res.status(500).send({ message: "Error Delete on the server", error: error })
    }
    
  }

}