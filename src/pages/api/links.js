import dbPool from "../../utils/PostgresConnection"
export default async function handler(req, res) {
    //const { pid } = req.query
  /**
   * 
   * INSERT INTO LINKS(link,title,description,id_user) values('https://github.com/FaztWeb/nextjs-postgres-crud-typescript/blob/master/src/pages/api/tasks/%5Bid%5D.ts',
														 'Nextjs PostgreSQL CRUD',
														 'This is a web application CRUD using Nextjs, Typescript and Pg (npm module) driver for PostgreSQL, and for style the interface this project is using semantic-ui-react.',1)

   */
   if (req.method === 'GET') {
        dbPool.query('SELECT * FROM links', (error, results) => {
            if (error) {
              throw error
            }
            res.status(200).json(results.rows)
          })    
   }
   
 
   
}