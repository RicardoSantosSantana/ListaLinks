import Modal from "./Modal"
import Search from "./Search"
import BtnInserir from "./BtnInserir"
import ModalDelete from "./ModalDelete"

export default function Title() {
  return (
    <section className=" container">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light">USEFUL LINKS</h1>
          <Search />
          <BtnInserir />
          <Modal />
          <ModalDelete />
        </div>
      </div>
    </section>
  )
}