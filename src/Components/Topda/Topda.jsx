import React from 'react'

// import css
import styles from "./topda.module.scss"

function Topda() {
  return (
    <div className={styles.topda_con}>
        <a href="https://github.com/Jnanashish">
            <p className={styles.topda_text}>
                <i class="fab fa-github"/>
                Rate this projet on Github | Connect with me to contribute
                <i class="fas fa-external-link"></i>
            </p>
        </a>

    </div>
  )
}

export default Topda