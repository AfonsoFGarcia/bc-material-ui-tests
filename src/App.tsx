import {
  AppBar,
  Button,
  FormControlLabel,
  IconButton,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Switch,
  TextField,
  Toolbar,
  Typography,
} from '@material-ui/core'
import Menu from '@material-ui/icons/Menu'
import Notifications from '@material-ui/icons/Notifications'
import Search from '@material-ui/icons/Search'
import Share from '@material-ui/icons/Share'
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab'
import { DatePicker, DateRangeDelimiter, DateRangePicker, LocalizationProvider } from '@material-ui/pickers'
import DateFnsUtils from '@material-ui/pickers/adapter/date-fns'
import React, { useState } from 'react'
import BcInputWrapper from './components/bcinput/BcInput'
import styles from './App.module.css'
import BcGroup from './components/bcgroup/BcGroup'
import { useForm } from 'react-hook-form'
import { DateRange } from '@material-ui/pickers/DateRangePicker/RangeTypes'

function HelpMe({ helpText }: { helpText: string }) {
  return <Typography style={{ margin: '1rem' }}>{helpText}</Typography>
}

function Header({ reset }: { reset: () => void }) {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="Menu">
            <Menu />
          </IconButton>
          <Typography variant="h6">BC Information Mgmt UI</Typography>
          <div className={`${styles.HeaderIcons} ${styles.Spacing}`}>
            <IconButton edge="start" color="inherit" aria-label="Notifications">
              <Notifications />
            </IconButton>
            <IconButton edge="start" color="inherit" aria-label="Share">
              <Share />
            </IconButton>
            <IconButton edge="start" color="inherit" aria-label="Search">
              <Search />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <AppBar position="fixed" className={styles.OffsetSecondaryBar} color="default">
        <Toolbar>
          <Typography variant="h6">Name Person</Typography>
          <div className={`${styles.HeaderIcons} ${styles.Spacing}`}>
            <Button size="large" onClick={reset}>
              RESET
            </Button>
            <Button size="large" variant="contained">
              SECONDARY OPTION
            </Button>
            <Button
              size="large"
              variant="contained"
              color="primary"
              className={styles.Green}
              type="submit"
              form="bc-form"
            >
              SAVE
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <div className={styles.OffsetHeader}></div>
    </>
  )
}

function App() {
  const [expanded, setExpanded] = useState<string[]>(['generalInformation'])

  const { control, handleSubmit, reset } = useForm()

  const onSubmit = (data: any) => console.log(data)

  return (
    <LocalizationProvider dateAdapter={DateFnsUtils}>
      <Header reset={reset} />
      <form onSubmit={handleSubmit(onSubmit)} id="bc-form">
        <BcGroup id="generalInformation" title="General information" expanded={expanded} setExpanded={setExpanded}>
          <BcInputWrapper id="name" label="Name" control={control} defaultValue={''}>
            <TextField />
          </BcInputWrapper>
          <BcInputWrapper
            control={control}
            defaultValue={''}
            id="cernID"
            label="CERN ID"
            help={
              <iframe
                title="YouTube"
                style={{ margin: '1rem auto' }}
                width="560"
                height="315"
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&controls=0"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            }
          >
            <TextField />
          </BcInputWrapper>
          <BcInputWrapper
            fullWidth
            id="primaryNationality"
            label="Primary Nationality"
            control={control}
            defaultValue={''}
          >
            <Select>
              <MenuItem value="PT">Portuguese</MenuItem>
              <MenuItem value="ES">Spanish</MenuItem>
              <MenuItem value="NL">Dutch</MenuItem>
            </Select>
          </BcInputWrapper>
          <BcInputWrapper
            id="personId"
            label="Person ID"
            help={<HelpMe helpText="Person ID help" />}
            control={control}
            defaultValue={''}
          >
            <TextField />
          </BcInputWrapper>
          <BcInputWrapper
            fullWidth
            id="secondaryNationality"
            label="Secondary Nationality"
            help={<HelpMe helpText="Secondary nationality help" />}
            control={control}
            defaultValue={''}
          >
            <Select>
              <MenuItem value="PT">Portuguese</MenuItem>
              <MenuItem value="ES">Spanish</MenuItem>
              <MenuItem value="NL">Dutch</MenuItem>
            </Select>
          </BcInputWrapper>
          <BcInputWrapper
            id="organicUnit"
            label="Organic Unit"
            help={<HelpMe helpText="Organic unit help" />}
            control={control}
            defaultValue={''}
          >
            <TextField />
          </BcInputWrapper>
          <BcInputWrapper id="sex" label="Sex" control={control} defaultValue={''}>
            <RadioGroup row>
              <FormControlLabel value="M" control={<Radio />} label="Male" />
              <FormControlLabel value="F" control={<Radio />} label="Female" />
            </RadioGroup>
          </BcInputWrapper>
          <BcInputWrapper fullWidth id="emailAddress" label="Email Address" control={control} defaultValue={''}>
            <TextField />
          </BcInputWrapper>
          <BcInputWrapper<Date | null> id="birthdate" label="Birthdate" control={control} defaultValue={null}>
            <DatePicker
              value={null}
              onChange={() => {}}
              renderInput={props => (
                <TextField name="birthdate" id="birthdate" {...props} variant="outlined" margin="dense" helperText="" />
              )}
            />
          </BcInputWrapper>
          <BcInputWrapper id="office" label="Office" control={control} defaultValue={''}>
            <TextField />
          </BcInputWrapper>
          <BcInputWrapper id="preferredLanguage" label="Preferred Language" control={control} defaultValue={''}>
            <RadioGroup row>
              <FormControlLabel value="EN" control={<Radio />} label="English" />
              <FormControlLabel value="FR" control={<Radio />} label="French" />
            </RadioGroup>
          </BcInputWrapper>
          <BcInputWrapper fullWidth id="primaryPostbox" label="Primary Postbox" control={control} defaultValue={''}>
            <TextField />
          </BcInputWrapper>
          <BcInputWrapper id="atCern" label="At CERN" control={control} defaultValue={''}>
            <RadioGroup row>
              <FormControlLabel value="Y" control={<Radio />} label="Yes" />
              <FormControlLabel value="N" control={<Radio />} label="No" />
            </RadioGroup>
          </BcInputWrapper>
        </BcGroup>
        <BcGroup id="jobInformation" title="Job information" expanded={expanded} setExpanded={setExpanded}>
          <BcInputWrapper fullWidth id="status" label="Status" control={control} defaultValue={''}>
            <Select>
              <MenuItem value="STAF">Staff</MenuItem>
              <MenuItem value="FELL">Fellow</MenuItem>
              <MenuItem value="PJAS">Project Associate</MenuItem>
            </Select>
          </BcInputWrapper>
          <BcInputWrapper id="contractType" label="Contract Type" control={control} defaultValue={''}>
            <RadioGroup row>
              <FormControlLabel value="LD" control={<Radio />} label="Limited duration" />
              <FormControlLabel value="IC" control={<Radio />} label="Indefinite" />
            </RadioGroup>
          </BcInputWrapper>
          <BcInputWrapper fullWidth id="roles" label="Roles" control={control} defaultValue={''}>
            <Select>
              <MenuItem value="DG">Director General</MenuItem>
              <MenuItem value="DH">Department Head</MenuItem>
              <MenuItem value="GL">Group Leader</MenuItem>
            </Select>
          </BcInputWrapper>
          <BcInputWrapper id="grade" label="Grade" control={control} defaultValue={''}>
            <TextField />
          </BcInputWrapper>
          <BcInputWrapper<string[]>
            control={control}
            defaultValue={[]}
            fullWidth
            id="costCentres"
            label="Cost Centre(s)"
            help={<HelpMe helpText="Cost centre(s) help" />}
          >
            <Select onChange={() => {}} value={[]} multiple>
              <MenuItem value={'71100'}>71100 - FAP-BC</MenuItem>
              <MenuItem value={'71110'}>71110 - FAP-BC-PSS</MenuItem>
              <MenuItem value={'71120'}>71120 - FAP-BC-PL</MenuItem>
            </Select>
          </BcInputWrapper>
          <BcInputWrapper id="percentageOfMidpoint" label="Percentage of Midpoint" control={control} defaultValue={''}>
            <TextField />
          </BcInputWrapper>
          <BcInputWrapper
            fullWidth
            id="professionalCategory"
            label="Professional Category"
            control={control}
            defaultValue={''}
          >
            <Select>
              <MenuItem value="1">Professional category 1</MenuItem>
              <MenuItem value="2">Professional category 2</MenuItem>
              <MenuItem value="3">Professional category 3</MenuItem>
            </Select>
          </BcInputWrapper>
          <BcInputWrapper<DateRange<Date>>
            id="contractPeriod"
            label="Contract Period"
            control={control}
            defaultValue={[null, null]}
          >
            <DateRangePicker
              startText=""
              endText=""
              value={[null, null]}
              onChange={() => {}}
              renderInput={(startProps, endProps) => (
                <React.Fragment>
                  <TextField name="startContractPeriod" {...startProps} margin="dense" helperText="" />
                  <DateRangeDelimiter> to </DateRangeDelimiter>
                  <TextField name="endContractPeriod" {...endProps} margin="dense" helperText="" />
                </React.Fragment>
              )}
            />
          </BcInputWrapper>
          <BcInputWrapper fullWidth id="benchmarkJob" label="Benchmark Job" control={control} defaultValue={''}>
            <Select>
              <MenuItem value="1000">Benchmark job 1000</MenuItem>
              <MenuItem value="2000">Benchmark job 2000</MenuItem>
              <MenuItem value="3000">Benchmark job 3000</MenuItem>
            </Select>
          </BcInputWrapper>
          <BcInputWrapper fullWidth id="residenceClass" label="Residence Class" control={control} defaultValue={''}>
            <Select>
              <MenuItem value="1">Residence class 1</MenuItem>
              <MenuItem value="2">Residence class 2</MenuItem>
              <MenuItem value="3">Residence class 3</MenuItem>
            </Select>
          </BcInputWrapper>
          <BcInputWrapper fullWidth id="ppaUnit" label="PPA Unit" control={control} defaultValue={''}>
            <Select>
              <MenuItem value="1">PPA unit 1</MenuItem>
              <MenuItem value="2">PPA unit 2</MenuItem>
              <MenuItem value="3">PPA unit 3</MenuItem>
            </Select>
          </BcInputWrapper>
          <BcInputWrapper id="hoursPerWeek" label="Hours per Week" control={control} defaultValue={''}>
            <TextField />
          </BcInputWrapper>
          <BcInputWrapper fullWidth id="supervisor" label="Supervisor" control={control} defaultValue={''}>
            <TextField />
          </BcInputWrapper>
          <BcInputWrapper
            fullWidth
            id="bankAccount"
            label="Bank Account"
            control={control}
            defaultValue={'CH 01 READ-ONLY-5892'}
            disabled
          >
            <TextField />
          </BcInputWrapper>
        </BcGroup>
        <BcGroup id="leaveInformation" title="Leave information" expanded={expanded} setExpanded={setExpanded}>
          <BcInputWrapper id="leaveTaken" label="Leave Taken" control={control} defaultValue={''}>
            <TextField />
          </BcInputWrapper>
          <BcInputWrapper id="overtimeTaken" label="Overtime Taken" control={control} defaultValue={''}>
            <TextField />
          </BcInputWrapper>
          <BcInputWrapper id="leaveBalance" label="Leave Balance" control={control} defaultValue={''}>
            <TextField />
          </BcInputWrapper>
          <BcInputWrapper id="overtimeBalance" label="Overtime Balance" control={control} defaultValue={''}>
            <TextField />
          </BcInputWrapper>
          <BcInputWrapper
            control={control}
            defaultValue={''}
            fullWidth
            id="contactPerson"
            label="Contact Person"
            help={<HelpMe helpText="Contact person help" />}
          >
            <TextField />
          </BcInputWrapper>
          <BcInputWrapper id="compensatedBySalary" label="Compensated by Salary" control={control} defaultValue={''}>
            <TextField />
          </BcInputWrapper>
          <BcInputWrapper fullWidth id="externalReason" label="External Reason" control={control} defaultValue={''}>
            <Select>
              <MenuItem value="1">External reason 1</MenuItem>
              <MenuItem value="2">External reason 2</MenuItem>
              <MenuItem value="3">External reason 3</MenuItem>
            </Select>
          </BcInputWrapper>
          <BcInputWrapper id="compensatedByLeave" label="Compensated by Leave" control={control} defaultValue={''}>
            <TextField />
          </BcInputWrapper>
        </BcGroup>
        <BcGroup
          id="complicatedFields"
          title="Complicated fields that will be needed :("
          expanded={expanded}
          setExpanded={setExpanded}
        >
          <BcInputWrapper id="toggleGroup" label="Toggle group" control={control} defaultValue={''}>
            <ToggleButtonGroup exclusive>
              <ToggleButton value="university">University</ToggleButton>
              <ToggleButton value="school">School</ToggleButton>
              <ToggleButton value="other">Other</ToggleButton>
            </ToggleButtonGroup>
          </BcInputWrapper>
          <BcInputWrapper id="equivalentOfCheckbox" label="Equivalent of Checkbox" control={control} defaultValue={''}>
            <Switch />
          </BcInputWrapper>
          <BcInputWrapper id="radioButtonGroup" label="Radio button group" control={control} defaultValue={''}>
            <RadioGroup>
              <FormControlLabel value="meyrin" control={<Radio />} label="Meyrin" />
              <FormControlLabel value="prevessin" control={<Radio />} label="Prevessin" />
              <FormControlLabel value="geneva" control={<Radio />} label="Geneva" />
            </RadioGroup>
          </BcInputWrapper>
          <BcInputWrapper id="field1" label="Field" control={control} defaultValue={''}>
            <TextField />
          </BcInputWrapper>
          <BcInputWrapper
            id="field2"
            label="Impossible long title that doesn't fit"
            control={control}
            defaultValue={''}
          >
            <TextField />
          </BcInputWrapper>
          <BcInputWrapper id="field3" label="Field" control={control} defaultValue={''}>
            <TextField />
          </BcInputWrapper>
          <BcInputWrapper
            fullWidth
            id="field4"
            label="Next field should align with other column"
            control={control}
            defaultValue={''}
          >
            <TextField />
          </BcInputWrapper>
          <BcInputWrapper id="field5" label="Field" control={control} defaultValue={''}>
            <TextField />
          </BcInputWrapper>
        </BcGroup>
      </form>
    </LocalizationProvider>
  )
}

export default App
