import React from 'react'
import styles from './Header.module.css'


export default function Header() {
   
    return (
 <>
<div className={styles.header}>
      <div className={styles.left}>
        <h2>TERMLY</h2>
        {/* Add content for the left section */}
      </div>
      <div className={styles.middle}>
        <input type="text" placeholder="Search" className={styles['search-input']} />
      </div>
      <div className={styles.right}>
        <h2>ABOUT US</h2>
        {/* Add content for the right section */}
      </div>
    </div>
    </> 
 
 
        )
  }