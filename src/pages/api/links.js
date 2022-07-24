import dbPool from "../../utils/PostgresConnection"

export default async (req, res) => {

  if (req.method === 'POST') {
    
    try {
      const { id, id_user, title, link, description } = req.body

      if (!id_user || !title || !description) {
        return res.status(422).send({ message:'Missing one or more fields', error: 'Missing one or more fields' })
      }

        const LINKS = await dbPool.query('INSERT INTO LINKS(id_user, title, link, description ) VALUES($1, $2, $3, $4) RETURNING id',
         [id_user, title, link, description])

      res.status(200).json(LINKS)

    } catch (error) {
      // console.error(error);
      res.status(500).send({ message: "Error creating on the server", error: error })
    }
    
  }


  if (req.method === 'PUT') {
    
    try {
      const { id, id_user, title, link, description } = req.body
 
      if (!id_user || !title || !description || !id) {
        return res.status(422).send({ message:'Missing one or more fields', error: 'Missing one or more fields' })
      }

      const sql =  'UPDATE links SET title=$1, link=$2, description=$3 WHERE id=$4 '
        
      const LINKSupdate = await dbPool.query(sql, [title, link, description,id]) 

      res.status(200).json(LINKSupdate)

    } catch (error) {      
      res.status(500).send({ message: "Error update on the server", error: error })
    }
  }
  
  if (req.method === 'GET') {

    dbPool.query('SELECT * FROM links', (error, results) => {
      if (error) {
        return res.status(400).send({ message:'Error on Get data', error: 'Error Select Data' })
      }
      res.status(200).json(results.rows)
    })    
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