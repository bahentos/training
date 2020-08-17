import React from'react'
import s from './Main.module.css'

const Main = () => {
    return (
        <div className={s.mainContainer}>
            <div className={s.one}>1</div>
            <div className={s.two}>2</div>
            <div className={s.three}>3</div>
            <div className={s.for}>4</div>
        </div>
    )
}

export default Main