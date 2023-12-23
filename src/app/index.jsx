import Image from 'next/image'
import styles from './page.module.css'
 

export default function Index() {
  return (
    <>
<h2>sdserereeeeeeeeeeeeeeeed</h2>
    <div className={styles['centered-div']}>
      <div className={styles['left-section']}>
        <h2>Writeup Section</h2>
        <p>This is where your writeup content goes. You can add paragraphs, images, etc.</p>
      </div>
      <div className={styles['right-section']}>
        <h2>Form Section</h2>
        <div className={styles['form-container']}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit">Submit</button>
        </div>
      </div>
    
    </div>
    </>
  )
}
