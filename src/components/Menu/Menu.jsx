import React from 'react'
import './Menu.css'
import Button from '../Button/Button'
import { NavLink } from 'react-router-dom'


export default function Menu() {
    return (
        <header className="header">
            <NavLink to="/"><Button name="All contacts" /></NavLink>
            <NavLink to="/add-contact"><Button name="Add contact" /></NavLink>
        </header>
    )
}
