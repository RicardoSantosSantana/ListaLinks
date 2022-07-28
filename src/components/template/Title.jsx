import Modal from "./Modal"
import Search from "./Search"
import BtnInserir from "./BtnInserir"
import ModalDelete from "./ModalDelete"

export default function Title() {
  return (
    <section className=" container">
      <div className="row">
        <div className="col-12 mx-auto">
          <h1 className="mt-4 mb-3 display-6"><strong>USEFUL LINKS</strong></h1>
          <Search />
          <BtnInserir />
          <Modal />
          <ModalDelete />
        </div>
      </div>
    </section>
  )
}