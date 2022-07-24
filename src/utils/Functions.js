export const FilterLinksByText = (filtro,listData) => listData.filter(el=>{ 
    
    const title = el.title?.toLowerCase();
    const description = el.description?.toLowerCase()
    const link = el.link?.toLowerCase()
    const value = filtro.toLowerCase()

    return (
      title?.includes(value) ||
      description?.includes(value) ||
      link?.includes(value)
      ) 

  });

export const FilterLinksbyId = (id,listData) => listData.filter(el=>{     
  return ( el.id == id ) 
});

  
export const Element = elementID => document.getElementById(elementID)

export const PutDataOnForm = (data,arrayFields) => arrayFields.forEach((key) => {
  if(Element(key)){
    Element(key).value = data[0][key]
  }
})
export const ClearDataOnForm = (arrayFields) => arrayFields.forEach((key) =>{ 
  if(Element(key)){
    Element(key).value = ""
  }
})

export const ShowModal = (idModal) =>{
  const options={backdrop:true,keyboard:true,focus:true}  
  const myModal = new bootstrap.Modal(document.getElementById(idModal),options)
  myModal.show()
        
}
export const CloseModal = (idModal) =>{
  //Pegar a mesma instancia que já existe
  var myModalEl = document.getElementById(idModal)
  var modal = bootstrap.Modal.getInstance(myModalEl) 
  modal.hide()
 
}