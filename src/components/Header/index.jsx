import './index.css'
import { BiMenuAltRight } from 'react-icons/bi'
import {UseState, useState} from 'react'
import OutsideClickHandler from 'react-outside-click-handler'

export default function Header(){

const [MenuOpen, setMenuOpen] = useState(false)

const getMenuStyles = (MenuOpen) => {
    if(document.documentElement.clientWidth <= 800){
        return{ right: !MenuOpen && '-100%'}
    }
}

    return (
        <section className='headerContainer'>
         <div className='h-container'>
            <div>
                 <img src="./logo.png" alt="logo" width={100}/>
            </div>
            <div className='h-menu'>
                <OutsideClickHandler onOutsideClick={() => setMenuOpen(false)}>
                <nav style={getMenuStyles(MenuOpen)}>
                    <a href="">Residencies</a>
                    <a href="">Residencies</a>
                    <a href="">Residencies</a>
                    <a href="">Residencies</a>
                    <button className='button'>
                        <a href="">Contact</a>
                    </button>
                </nav>
                </OutsideClickHandler>
            </div>
        </div> 
        <div className='mobile-icon' onClick={() => setMenuOpen((prev)=>!prev)}>
            <BiMenuAltRight size={30}/>
        </div>
        </section>
    )
}

