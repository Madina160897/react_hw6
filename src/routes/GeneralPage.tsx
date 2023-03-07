import React from 'react'
import { Link, Outlet, useLocation  } from "react-router-dom"

const GeneralPage = () => {
    const location = useLocation();

    console.log({location});
    
    return (
        <>
        <header>
            <Link to='/'>General</Link> <br />
            <Link to='/posts'>Posts</Link>
        </header>
        <div>
            <h1>GeneralPage</h1>
            <Outlet/>
        </div>
        </>
    )
}

export default GeneralPage
