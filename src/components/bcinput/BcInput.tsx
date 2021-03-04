import { Grid, FormLabel, Hidden, FormHelperText, Drawer, createMuiTheme, ThemeProvider } from "@material-ui/core"
import HelpIcon from "@material-ui/icons/Help"
import React, { PropsWithChildren, ReactNode, useState } from "react"
import styles from './BcInput.module.css'

function Help({mobile = false, onClick}: {mobile?: boolean, onClick: () => void}) {
  return (<Hidden smDown={!mobile} mdUp={mobile}><HelpIcon className={styles.HelpIcon} onClick={onClick}/></Hidden>)
}

function BcInputWrapper({id, label, hint, help, fullWidth = false, inGrid = false, children} : PropsWithChildren<{id: string, label: string, help?: ReactNode, hint?: string, fullWidth?: boolean, inGrid?: boolean}>): JSX.Element {
  const theme = createMuiTheme({
    overrides: {
      MuiFormControl: {
        marginDense: {
          marginTop: 0,
        },
      },
    },
  })

  const [isOpen, setOpen] = useState<boolean>(false)
    return (
      <ThemeProvider theme={theme}>
        <Grid container direction="row" className={inGrid ? styles.MarginMiddle : ""}>
          <Grid item xs={12} md={3}>
            <Grid container alignItems="center" className={styles.NoWrap}>
              <FormLabel htmlFor={id} className={styles.LabelPadding}>{label}</FormLabel>
              {help && <Help onClick={() => setOpen(true)} />}
            </Grid>
          </Grid>
          <Grid item xs={12} md={9} container alignItems="center">
            <div className={fullWidth ? styles.FullScreenInput : ''}>
              {React.Children.map(children, child => React.isValidElement(child) ? React.cloneElement(child, {fullWidth, id, margin: 'dense', variant: 'outlined'}) : child)}
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
      </ThemeProvider>
    )
}

export default BcInputWrapper