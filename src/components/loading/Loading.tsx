import React from 'react'
import { CircularProgress } from '@material-ui/core'
import styles from './Loading.module.css'

function Loading() {
  return (
    <div className={styles.Middle}>
      <CircularProgress />
    </div>
  )
}

export default Loading
