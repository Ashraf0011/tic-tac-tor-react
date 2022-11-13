import React from 'react'
import { IconContext } from 'react-icons';
import { GiReturnArrow, GiAbstract091, GiCrossedAxes } from "react-icons/gi";

export const Icons = ({ name }) => {
    switch (name) {
        case "Axe": return <IconContext.Provider value={{ color: "#A63E26" }}> <GiCrossedAxes className='icons' /> </IconContext.Provider>
        case "Shield": return <IconContext.Provider value={{ color: "#888C03" }}> <GiAbstract091 className='icons' /></IconContext.Provider >
        default: return <GiReturnArrow className='icons' />
    }
}
