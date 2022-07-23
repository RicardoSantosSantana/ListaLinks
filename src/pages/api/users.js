export default function handler(req, res) {
    // Get data submitted in request's body.
    const body = req.body
  
  
    console.log('body: ', body)
  
    // if (!body.first || !body.last) {      
    //   return res.status(400).json({ data: 'First or last name not found' })
    // }
    // res.status(200).json({ data: `${body.first} ${body.last}` })

    res.status(200).json(body)
  }

  