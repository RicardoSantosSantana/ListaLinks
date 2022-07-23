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
export const PutDataOnForm = (data,...arrayFields) =>  arrayFields.forEach((key) => Element(key).value = data[0][key])
 