import { useState } from "react";
import ListaLinks from "../components/ListaLinks";
import Modal from "../components/Modal";
import { FilterLinksByText } from "../utils/Functions"

export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:3000/api/links`)
  const listData = await res.json()

  return {
    props: { listData },
  }
}

export default function Home({ listData } = Props) {


  // const listData3 = [
  //   {
  //     id: 1,
  //     link: "https://youtube.com",
  //     title: "Youtube.com",
  //     description: "Site para video aulas",
  //     id_user: 1
  //   },
  //   {
  //     id: 2,
  //     link: "https://www.youtube.com/watch?v=W34hVDOjtWs",
  //     title: "Musicas Antigas",
  //     description: "Nat King Cole, Frank Sinatra, Dean Martin: Greatest Hits - Best Old Songs Of The 50's 60's 70's",
  //     id_user: 1
  //   },
  //   {
  //     id: 3,
  //     link: "https://getbootstrap.com/docs/5.0/layout/grid/",
  //     title: "Bootstrap 5.0",
  //     description: "Exemplos de componentes e por ai vai",
  //     id_user: 1
  //   },
  //   {
  //     id: 4,
  //     link: "https://getbootstrap.com/docs/5.0/layout/grid/",
  //     title: "Bootstrap 5.0",
  //     description: "Exemplos de componentes e por ai vai",
  //     id_user: 1
  //   },

  // ]

  const [list, setList] = useState(listData)

  const search = (e) => {
    const data = FilterLinksByText(e.target.value, listData)
    setList(data)
  }
  return (
    <>

      <div className="container px-5 ">

        <div className="mb-3">

          <p></p>
          <label htmlFor="search" className="form-label">Digite o que procura</label>
          <input type="text" className="form-control" id="search" onChange={(e) => search(e)} />
          <Modal />
        </div>
        <div className="row justify-content-md-center">
          <ListaLinks listaLinks={list} />
        </div>
      </div>
    </>
  )
}
