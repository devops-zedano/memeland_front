import React from 'react'
import styles from './MemeListItem.module.css'

const MemeListItem = (props) => (
    <div>
        <img className={styles.item} src={props.url} />
        <p>{props.description}</p>
    </div>
)

export default MemeListItem