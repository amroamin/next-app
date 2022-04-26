import React from 'react';
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

const Nvabar = () => {
  return (
    
      <ul className={styles.ue}>
        <li className={styles.le}><a href='/' className={styles.Lin } >Home</a></li>
        <li className={styles.le}> <a href='/contact'className={styles.Lin} >Contact</a></li>
        <li className={styles.le} > <a href='/about'  className={styles.Lin}>About</a></li>
        <li className={styles.le}> <a href='/posts'  className={styles.Lin}>Posts</a></li>
        </ul>
    
  )
}

export default Nvabar