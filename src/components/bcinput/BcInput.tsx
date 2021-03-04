import {
  Grid,
  FormLabel,
  Hidden,
  FormHelperText,
  Drawer,
  createMuiTheme,
  ThemeProvider,
  IconButton,
} from '@material-ui/core'
import HelpIcon from '@material-ui/icons/Help'
import React, { ReactElement, ReactNode, useState } from 'react'
import { Control, Controller } from 'react-hook-form'
import styles from './BcInput.module.css'

function Help({ mobile = false, onClick, fieldName }: { mobile?: boolean; onClick: () => void; fieldName: string }) {
  return (
    <Hidden smDown={!mobile} mdUp={mobile}>
      <IconButton onClick={onClick} className={styles.HelpIcon} aria-label={`${fieldName} help`}>
        <HelpIcon />
      </IconButton>
    </Hidden>
  )
}

const theme = createMuiTheme({
  overrides: {
    MuiFormControl: {
      marginDense: {
        marginTop: 0,
      },
    },
    MuiOutlinedInput: {
      root: {
        borderRadius: 0,
      },
    },
  },
})

function BcInputWrapper<T = string>({
  id,
  label,
  hint,
  help,
  fullWidth = false,
  inGrid = false,
  children,
  control,
  defaultValue,
  disabled = false,
}: {
  id: string
  label: string
  help?: ReactNode
  hint?: string
  fullWidth?: boolean
  inGrid?: boolean
  children: ReactElement
  control: Control
  defaultValue: T
  disabled?: boolean
}): JSX.Element {
  const [isOpen, setOpen] = useState<boolean>(false)
  return (
    <ThemeProvider theme={theme}>
      <Grid container direction="row" className={inGrid ? styles.MarginMiddle : ''}>
        <Grid item xs={12} md={3}>
          <Grid container alignItems="center" className={styles.NoWrap}>
            <FormLabel id={`${id}-label`} htmlFor={id} className={styles.LabelPadding}>
              {label}
            </FormLabel>
            {help && <Help onClick={() => setOpen(true)} fieldName={label} />}
          </Grid>
        </Grid>
        <Grid item xs={12} md={9} container alignItems="center">
          <div className={fullWidth ? styles.FullScreenInput : ''}>
            <Controller
              name={id}
              control={control}
              defaultValue={defaultValue}
              render={({ onChange, value }) =>
                React.cloneElement(children, {
                  fullWidth,
                  id,
                  margin: 'dense',
                  variant: 'outlined',
                  disabled,
                  className: disabled ? styles.Disabled : '',
                  'aria-labelledby': `${id}-label`,
                  onChange: (event: any, value: any) => {
                    if (event?.target?.value) {
                      onChange(event.target.value)
                    } else if (value?.props?.value) {
                      onChange(value.props.value)
                    } else if (value) {
                      onChange(value)
                    } else {
                      onChange(event)
                    }
                  },
                  value,
                })
              }
            />
          </div>
          {help && <Help mobile onClick={() => setOpen(true)} fieldName={label} />}
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
