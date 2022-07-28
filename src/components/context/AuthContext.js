import { createContext, useContext, useEffect, useState } from "react";
import React from "react";
import { FilterLinksByText } from "../../utils/Functions";
import { useSession } from "next-auth/react"

const AuthContext = createContext();
  
export function useAuth() {
    return useContext(AuthContext);
}

export default function AuthProvider(Props) {
    const { data: session } = useSession();
    
    const [ statusModalLinks, setStatusModalLinks ] = useState(false);
    const [ statusModalDelete, setStatusModalDelete ] = useState(false);

    const [DataList, setDataList] = useState([])
    const [data, setData] = useState([])

    const [DataListaChange, setDataListaChange] = useState([])
    
    const [HTTP_SELECT_METHOD, setHTTP_SELECT_METHOD] = useState({})
    
    const setHTTPMethod = (method) =>{
        setHTTP_SELECT_METHOD({method})
    }
    
    useEffect(()=>{

        if(session) {

            const email = session.user.email;           
            const fetchData = async () => {
                const res = await fetch(`/api/links?email=${email}`);
                const posts = await res.json();
                setData(posts);
                setDataList(posts);
            };
            fetchData();
        }
 
    },[DataListaChange,session])
 
    

    const setShowModalDelete = () =>{
        setStatusModalDelete(true);
    }
    const setCloseModalDelete = () =>{
        setStatusModalDelete(false);
    }
    
    const setShowFormModal = () =>{
        setStatusModalLinks(true);
    }
    const setHideFormModal = () =>{
        setStatusModalLinks(false);
    }
    const setList = (value) => {
        setDataList(value)
    }   
    const search = (e) => {
        const filterValue = FilterLinksByText(e.target.value, data)
        setDataList(filterValue)
    }
    const getAPILinks = (e) =>{
        setDataListaChange(e)
    }
    const value = {
        data,    
        DataList,    
        setList,
        search,
        getAPILinks,
        HTTP_SELECT_METHOD,
        setHTTPMethod,
        statusModalLinks,
        setShowFormModal,
        setHideFormModal,
        session,
        setShowModalDelete, 
        setCloseModalDelete,
        statusModalDelete
    };

    return (
  <>
            <AuthContext.Provider value={value}>
                {Props.children}
            </AuthContext.Provider>
       
            </>
    );
}