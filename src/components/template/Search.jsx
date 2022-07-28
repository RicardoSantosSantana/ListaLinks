import React from "react"
import { useAuth } from "../context/AuthContext"

export default function Search(){
    const { search } = useAuth()
    return (
        <>
            <label htmlFor="search" className="form-label lead text-muted">Digite o que procura</label>
            <input type="text" className="form-control" id="search" onChange={(e) => search(e)} />
        </>
    )
    
}