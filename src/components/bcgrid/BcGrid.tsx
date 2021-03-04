import React from 'react'
import { PropsWithChildren } from 'react'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import styles from './BcGrid.module.css'

function getMissingChildren(childCount: number, width: number): number {
  if (width < 960) {
    return 0
  } else if (width < 1920) {
    return childCount % 2
  } else {
    switch (childCount % 3) {
      case 1:
        return 2
      case 2:
        return 1
      default:
        return 0
    }
  }
}

function BcGrid({ children }: PropsWithChildren<{}>): JSX.Element {
  const childCount = React.Children.count(children)
  const { width } = useWindowDimensions()
  const missingChildren = getMissingChildren(childCount, width)
  return (
    <div className={styles.Grid}>
      {React.Children.map(children, child =>
        React.isValidElement(child) ? React.cloneElement(child, { inGrid: true }) : child
      )}
      {missingChildren === 2 ? (
        <>
          <div />
          <div />
        </>
      ) : missingChildren === 1 ? (
        <div />
      ) : (
        <></>
      )}
    </div>
  )
}

export default BcGrid
