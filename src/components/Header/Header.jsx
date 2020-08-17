import React, {useRef} from 'react'
import s from './Header.module.css'

const Header = () => {
    const inputText = useRef(null)
    const onButtonClick = () => {
        inputText.current.focus()
    }
    return (
        <div className={s.headerContainer}>
            <input ref={inputText} type="text"/>
            <div className={s.strip}></div>
            <button onClick={onButtonClick}>Фокус на инпут</button>
        </div>
    )
}

export default Header