import { Grid, FormLabel, Hidden, FormHelperText, Drawer } from "@material-ui/core"
import HelpIcon from "@material-ui/icons/Help"
import React, { PropsWithChildren, ReactNode, useState } from "react"
import styles from './BcInput.module.css'

function Help({mobile = false, onClick}: {mobile?: boolean, onClick: () => void}) {
  return (<Hidden smDown={!mobile} mdUp={mobile}><HelpIcon className={styles.HelpIcon} onClick={onClick}/></Hidden>)
}

function BcInputWrapper({id, label, hint, help, fullWidth = false, inGrid = false, children} : PropsWithChildren<{id: string, label: string, help?: ReactNode, hint?: string, fullWidth?: boolean, inGrid?: boolean}>): JSX.Element {
  const [isOpen, setOpen] = useState<boolean>(false)
    return (
      <>
        <Grid container direction="row" className={inGrid ? styles.MarginMiddle : ""}>
          <Grid item xs={12} md={3} className={styles.MarginTop8}>
            <Grid container alignItems="center" className={styles.NoWrap}>
              <FormLabel htmlFor={id} className={styles.LabelPadding}>{label}</FormLabel>
              {help && <Help onClick={() => setOpen(true)} />}
            </Grid>
          </Grid>
          <Grid item xs={12} md={9} container alignItems="center">
            <div className={fullWidth ? styles.FullScreenInput : ''}>
              {React.Children.map(children, child => React.isValidElement(child) ? React.cloneElement(child, {fullWidth, id, margin: 'dense', variant: 'outlined', className: styles.MarginTop8}) : child)}
            </div>
            {help && <Help mobile onClick={() => setOpen(true)} />}
          </Grid>
          {hint && (
            <>
              <Hidden smDown>
                <Grid item xs={3}></Grid>
              </Hidden>
              <Grid item xs={12} md={9}>
                <FormHelperText id={id.concat('Hint')}>{hint}</FormHelperText>
              </Grid>
            </>
          )}
        </Grid>
        <Drawer anchor="bottom" open={isOpen} onClose={() => setOpen(false)}>
          {help}
        </Drawer>
      </>
    )
}

export default BcInputWrapper