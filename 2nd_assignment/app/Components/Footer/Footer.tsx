import React from "react"
import style from "./Footer.module.css"
const Footer = () => {
  return (
    <div className={style.container}>
      <footer className={style.footer}> 
        <p className={style.paragraph}>&copy; 2024 All Rights Reserved </p>
      </footer>
    </div>
  )
}

export default Footer