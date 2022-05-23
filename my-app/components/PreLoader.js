import React from 'react'
import styles from './PreLoader.module.css'

function PreLoader() {
    return (
        <div>
            <div >
                <div className={styles.circle}></div>
                <div className={styles.post}></div>
            </div>


        </div>
    )
}

export default PreLoader