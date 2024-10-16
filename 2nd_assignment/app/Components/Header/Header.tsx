import React from 'react'
import styles from "./Header.module.css"
import Link from 'next/link'

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li><Link href="/" className={styles.navLink}>Home</Link></li>
          <li><Link href="/Contact" className={styles.navLink}>Contact</Link></li>
          <li><Link href="/About" className={styles.navLink}>About</Link></li>
          <li><Link href="/Services" className={styles.navLink}>Services</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
