import React from 'react'
import styles from '@/app/css/docs.module.css'

function page() {
  return (
    <article className={styles.article}>
        <h2>Shortcuts</h2>
        <span>Allowing users to use their keyboard for faster and convenient editing experience.</span>
        <div className={styles.divider}></div>
        <h2>Text styling</h2>
        <h3>Bold</h3>
        <span>Bold text is a typographic term that refers to a style of text that is thicker and darker than regular text. It is often used to emphasize or highlight specific words, phrases, or headings in a document.</span>
        <span>
          <b>Shortcut:</b> <kbd>Ctrl</kbd> + <kbd>B</kbd>
        </span>
        <h3>Italic</h3>
        <span>Italic is a typeface style characterized by letters slanted or inclined to the right. It is commonly used to emphasize or differentiate text from the regular upright (roman) typeface. Italic text is often used for titles, quotations, emphasis, or to indicate foreign words or phrases.</span>
        <span>
          <b>Shortcut:</b> <kbd>Ctrl</kbd> + <kbd>I</kbd>
        </span>
        <h3>Underline</h3>
        <span>Underline, in the context of technology and computing, usually refers to a text style that places a horizontal line beneath the text. It's often used for emphasis or to indicate a clickable hyperlink on web pages.</span>
        <span>
          <b>Shortcut:</b> <kbd>Ctrl</kbd> + <kbd>U</kbd>
        </span>
        <div className={styles.divider}></div>
        <h2>Reverting changes</h2>
        <h3>Undo</h3>
        <span>Undo is a command that allows you to easily reverse the last action you performed on a computer. Whether you accidentally deleted text or made another mistake, with the Undo command, you can quickly reverse the error.</span>
        <span>
          <b>Shortcut:</b> <kbd>Ctrl</kbd> + <kbd>Z</kbd>
        </span>
        <h3>Redo</h3>
        <span>Redo command serves as a valuable counterpart to Undo, providing a means to reapply actions that were previously undone. If you find that the last action you reversed wasn't a mistake after all or if you simply need to repeat a series of steps, the Redo button is there for that.</span>
        <span>
          <b>Shortcut:</b> <kbd>Ctrl</kbd> + <kbd>Y</kbd>
        </span>
        <div className={styles.last}></div>
    </article>
  )
}

export default page