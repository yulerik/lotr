import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {

    return(
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/fellowship'>Fellowship</Link>
            <Link to='/characters'>All Characters</Link>
        </nav>
    )
}