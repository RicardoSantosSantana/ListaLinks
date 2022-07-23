export default function FormLinks() {

    const handleSubmit = async (event) => {

        // Stop the form from submitting and refreshing the page.
      event.preventDefault()
      console.log(event)

      const data = {
        title: event.target.title.value,
        link: event.target.link.value,
        description: event.target.description.value,
        id:event.target.id.value,
        id_user:event.target.id_user.value,
      }
        
      const JSONdata = JSON.stringify(data)
      const endpoint = '/api/users'
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        
        body: JSONdata,
      }
 
      const response = await fetch(endpoint, options)
      const result = await response.json()
      console.log(result.data)
    }
    return (
      // We pass the event to the handleSubmit() function on submit.
      <form onSubmit={handleSubmit}>    
          <input type="hidden" id="id" name="id"></input>
          <input type="hidden" id="id_user" name="id_user"></input>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Títle</label>
            <input type="text" className="form-control" id="title" name="title" rows="3" required></input>
          </div>
          <div className="mb-3">
            <label htmlFor="link" className="form-label">Link</label>
            <input type="text" className="form-control" id="link" name="link" placeholder="http://seulink.com.br" required></input>
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea className="form-control" id="description" name="description" rows="3"></textarea>
          </div>
          <button className="btn btn-outline-success" type="submit">Save changes</button>
      </form>

// CREATE TABLE LINKS(
//   ID  SERIAL PRIMARY KEY,
//   LINK           TEXT      NOT NULL,
//   TITLE          TEXT       NOT NULL,
//   DESCRIPTION 	  TEXT			NULL,
//   ID_USER        INT      references USERS(ID)
// );




    )
  }