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
import { Menu, Notifications, Search, Share } from '@material-ui/icons'
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab'
import { DatePicker, DateRangeDelimiter, DateRangePicker, LocalizationProvider } from '@material-ui/pickers'
import DateFnsUtils from '@material-ui/pickers/adapter/date-fns'
import { DateRange } from '@material-ui/pickers/DateRangePicker/RangeTypes'
import React, { useState } from 'react'
import BcInputWrapper from './components/bcinput/BcInput'
import styles from './App.module.css'
import BcGroup from './components/bcgroup/BcGroup'

function HelpMe({ helpText }: { helpText: string }) {
  return <Typography style={{ margin: '1rem' }}>{helpText}</Typography>
}

function Header() {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" color="inherit">
            <Menu />
          </IconButton>
          <Typography variant="h6">BC Information Mgmt UI</Typography>
          <div className={`${styles.HeaderIcons} ${styles.Spacing}`}>
            <IconButton edge="start" color="inherit">
              <Notifications />
            </IconButton>
            <IconButton edge="start" color="inherit">
              <Share />
            </IconButton>
            <IconButton edge="start" color="inherit">
              <Search />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <AppBar position="fixed" className={styles.OffsetSecondaryBar} color="default">
        <Toolbar>
          <Typography variant="h6">Name Person</Typography>
          <div className={`${styles.HeaderIcons} ${styles.Spacing}`}>
            <Button size="large">RESET</Button>
            <Button size="large" variant="contained">
              SECONDARY OPTION
            </Button>
            <Button size="large" variant="contained" color="primary" className={styles.Green}>
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
  const [birthdate, setBirthdate] = useState<Date | null>(null)
  const [contractPeriod, setContractPeriod] = useState<DateRange<Date>>([null, null])
  const [costCentres, setCostCentres] = useState<string[]>([])
  const [primaryNationality, setPrimaryNationality] = useState<string>('')
  const [secondaryNationality, setSecondaryNationality] = useState<string>('')
  const [status, setStatus] = useState<string>('')
  const [roles, setRoles] = useState<string>('')
  const [professionalCategory, setProfessionalCategory] = useState<string>('')
  const [benchmarkJob, setBenchmarkJob] = useState<string>('')
  const [residenceClass, setResidenceClass] = useState<string>('')
  const [ppaUnit, setPpaUnit] = useState<string>('')
  const [externalReason, setExternalReason] = useState<string>('')
  const [toggleGroup, setToggleGroup] = useState<string>('')

  return (
    <LocalizationProvider dateAdapter={DateFnsUtils}>
      <Header />
      <BcGroup id="generalInformation" title="General information" expanded={expanded} setExpanded={setExpanded}>
        <BcInputWrapper id="name" label="Name">
          <TextField />
        </BcInputWrapper>
        <BcInputWrapper
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
        <BcInputWrapper fullWidth id="primaryNationality" label="Primary Nationality">
          <Select value={primaryNationality} onChange={event => setPrimaryNationality(event.target.value as string)}>
            <MenuItem value="PT">Portuguese</MenuItem>
            <MenuItem value="ES">Spanish</MenuItem>
            <MenuItem value="NL">Dutch</MenuItem>
          </Select>
        </BcInputWrapper>
        <BcInputWrapper id="personId" label="Person ID" help={<HelpMe helpText="Person ID help" />}>
          <TextField />
        </BcInputWrapper>
        <BcInputWrapper
          fullWidth
          id="secondaryNationality"
          label="Secondary Nationality"
          help={<HelpMe helpText="Secondary nationality help" />}
        >
          <Select
            value={secondaryNationality}
            onChange={event => setSecondaryNationality(event.target.value as string)}
          >
            <MenuItem value="PT">Portuguese</MenuItem>
            <MenuItem value="ES">Spanish</MenuItem>
            <MenuItem value="NL">Dutch</MenuItem>
          </Select>
        </BcInputWrapper>
        <BcInputWrapper id="organicUnit" label="Organic Unit" help={<HelpMe helpText="Organic unit help" />}>
          <TextField />
        </BcInputWrapper>
        <BcInputWrapper id="sex" label="Sex">
          <RadioGroup name="sex" row>
            <FormControlLabel value="M" control={<Radio />} label="Male" />
            <FormControlLabel value="F" control={<Radio />} label="Female" />
          </RadioGroup>
        </BcInputWrapper>
        <BcInputWrapper fullWidth id="emailAddress" label="Email Address">
          <TextField />
        </BcInputWrapper>
        <BcInputWrapper id="birthdate" label="Birthdate">
          <DatePicker
            value={birthdate}
            onChange={newValue => setBirthdate(newValue)}
            renderInput={props => <TextField {...props} variant="outlined" margin="dense" helperText="" />}
          />
        </BcInputWrapper>
        <BcInputWrapper id="office" label="Office">
          <TextField />
        </BcInputWrapper>
        <BcInputWrapper id="preferredLanguage" label="Preferred Language">
          <RadioGroup name="sex" row>
            <FormControlLabel value="EN" control={<Radio />} label="English" />
            <FormControlLabel value="FR" control={<Radio />} label="French" />
          </RadioGroup>
        </BcInputWrapper>
        <BcInputWrapper fullWidth id="primaryPostbox" label="Primary Postbox">
          <TextField />
        </BcInputWrapper>
        <BcInputWrapper id="atCern" label="At CERN">
          <RadioGroup name="atCern" row>
            <FormControlLabel value="Y" control={<Radio />} label="Yes" />
            <FormControlLabel value="N" control={<Radio />} label="No" />
          </RadioGroup>
        </BcInputWrapper>
      </BcGroup>
      <BcGroup id="jobInformation" title="Job information" expanded={expanded} setExpanded={setExpanded}>
        <BcInputWrapper fullWidth id="status" label="Status">
          <Select value={status} onChange={event => setStatus(event.target.value as string)}>
            <MenuItem value="STAF">Staff</MenuItem>
            <MenuItem value="FELL">Fellow</MenuItem>
            <MenuItem value="PJAS">Project Associate</MenuItem>
          </Select>
        </BcInputWrapper>
        <BcInputWrapper id="contractType" label="Contract Type">
          <RadioGroup name="contractType" row>
            <FormControlLabel value="LD" control={<Radio />} label="Limited duration" />
            <FormControlLabel value="IC" control={<Radio />} label="Indefinite" />
          </RadioGroup>
        </BcInputWrapper>
        <BcInputWrapper fullWidth id="roles" label="Roles">
          <Select value={roles} onChange={event => setRoles(event.target.value as string)}>
            <MenuItem value="DG">Director General</MenuItem>
            <MenuItem value="DH">Department Head</MenuItem>
            <MenuItem value="GL">Group Leader</MenuItem>
          </Select>
        </BcInputWrapper>
        <BcInputWrapper id="grade" label="Grade">
          <TextField />
        </BcInputWrapper>
        <BcInputWrapper
          fullWidth
          id="costCentres"
          label="Cost Centre(s)"
          help={<HelpMe helpText="Cost centre(s) help" />}
        >
          <Select multiple value={costCentres} onChange={event => setCostCentres(event.target.value as string[])}>
            <MenuItem value={'71100'}>71100 - FAP-BC</MenuItem>
            <MenuItem value={'71110'}>71110 - FAP-BC-PSS</MenuItem>
            <MenuItem value={'71120'}>71120 - FAP-BC-PL</MenuItem>
          </Select>
        </BcInputWrapper>
        <BcInputWrapper id="percentageOfMidpoint" label="Percentage of Midpoint">
          <TextField />
        </BcInputWrapper>
        <BcInputWrapper fullWidth id="professionalCategory" label="Professional Category">
          <Select
            value={professionalCategory}
            onChange={event => setProfessionalCategory(event.target.value as string)}
          >
            <MenuItem value="1">Professional category 1</MenuItem>
            <MenuItem value="2">Professional category 2</MenuItem>
            <MenuItem value="3">Professional category 3</MenuItem>
          </Select>
        </BcInputWrapper>
        <BcInputWrapper id="contractPeriod" label="Contract Period">
          <DateRangePicker
            startText=""
            endText=""
            value={contractPeriod}
            onChange={newValue => setContractPeriod(newValue)}
            renderInput={(startProps, endProps) => (
              <React.Fragment>
                <TextField {...startProps} margin="dense" helperText="" />
                <DateRangeDelimiter> to </DateRangeDelimiter>
                <TextField {...endProps} margin="dense" helperText="" />
              </React.Fragment>
            )}
          />
        </BcInputWrapper>
        <BcInputWrapper fullWidth id="benchmarkJob" label="Benchmark Job">
          <Select value={benchmarkJob} onChange={event => setBenchmarkJob(event.target.value as string)}>
            <MenuItem value="1000">Benchmark job 1000</MenuItem>
            <MenuItem value="2000">Benchmark job 2000</MenuItem>
            <MenuItem value="3000">Benchmark job 3000</MenuItem>
          </Select>
        </BcInputWrapper>
        <BcInputWrapper fullWidth id="residenceClass" label="Residence Class">
          <Select value={residenceClass} onChange={event => setResidenceClass(event.target.value as string)}>
            <MenuItem value="1">Residence class 1</MenuItem>
            <MenuItem value="2">Residence class 2</MenuItem>
            <MenuItem value="3">Residence class 3</MenuItem>
          </Select>
        </BcInputWrapper>
        <BcInputWrapper fullWidth id="ppaUnit" label="PPA Unit">
          <Select value={ppaUnit} onChange={event => setPpaUnit(event.target.value as string)}>
            <MenuItem value="1">PPA unit 1</MenuItem>
            <MenuItem value="2">PPA unit 2</MenuItem>
            <MenuItem value="3">PPA unit 3</MenuItem>
          </Select>
        </BcInputWrapper>
        <BcInputWrapper id="hoursPerWeek" label="Hours per Week">
          <TextField />
        </BcInputWrapper>
        <BcInputWrapper fullWidth id="supervisor" label="Supervisor">
          <TextField />
        </BcInputWrapper>
        <BcInputWrapper fullWidth id="bankAccount" label="Bank Account">
          <TextField disabled value="CH 01 READ-ONLY-5892" />
        </BcInputWrapper>
      </BcGroup>
      <BcGroup id="leaveInformation" title="Leave information" expanded={expanded} setExpanded={setExpanded}>
        <BcInputWrapper id="leaveTaken" label="Leave Taken">
          <TextField />
        </BcInputWrapper>
        <BcInputWrapper id="overtimeTaken" label="Overtime Taken">
          <TextField />
        </BcInputWrapper>
        <BcInputWrapper id="leaveBalance" label="Leave Balance">
          <TextField />
        </BcInputWrapper>
        <BcInputWrapper id="overtimeBalance" label="Overtime Balance">
          <TextField />
        </BcInputWrapper>
        <BcInputWrapper
          fullWidth
          id="contactPerson"
          label="Contact Person"
          help={<HelpMe helpText="Contact person help" />}
        >
          <TextField />
        </BcInputWrapper>
        <BcInputWrapper id="compensatedBySalary" label="Compensated by Salary">
          <TextField />
        </BcInputWrapper>
        <BcInputWrapper fullWidth id="externalReason" label="External Reason">
          <Select value={externalReason} onChange={event => setExternalReason(event.target.value as string)}>
            <MenuItem value="1">External reason 1</MenuItem>
            <MenuItem value="2">External reason 2</MenuItem>
            <MenuItem value="3">External reason 3</MenuItem>
          </Select>
        </BcInputWrapper>
        <BcInputWrapper id="compensatedByLeave" label="Compensated by Leave">
          <TextField />
        </BcInputWrapper>
      </BcGroup>
      <BcGroup
        id="complicatedFields"
        title="Complicated fields that will be needed :("
        expanded={expanded}
        setExpanded={setExpanded}
      >
        <BcInputWrapper id="toggleGroup" label="Toggle group">
          <ToggleButtonGroup exclusive value={toggleGroup} onChange={(_event, value) => setToggleGroup(value)}>
            <ToggleButton value="university" size="small">
              University
            </ToggleButton>
            <ToggleButton value="school" size="small">
              School
            </ToggleButton>
            <ToggleButton value="other" size="small">
              Other
            </ToggleButton>
          </ToggleButtonGroup>
        </BcInputWrapper>
        <BcInputWrapper id="equivalentOfCheckbox" label="Equivalent of Checkbox">
          <Switch />
        </BcInputWrapper>
        <BcInputWrapper id="radioButtonGroup" label="Radio button group">
          <RadioGroup name="radioButtonGroup">
            <FormControlLabel value="meyrin" control={<Radio size="small" />} label="Meyrin" />
            <FormControlLabel value="prevessin" control={<Radio size="small" />} label="Prevessin" />
            <FormControlLabel value="geneva" control={<Radio size="small" />} label="Geneva" />
          </RadioGroup>
        </BcInputWrapper>
        <BcInputWrapper id="field1" label="Field">
          <TextField />
        </BcInputWrapper>
        <BcInputWrapper id="field2" label="Impossible long title that doesn't fit">
          <TextField />
        </BcInputWrapper>
        <BcInputWrapper id="field3" label="Field">
          <TextField />
        </BcInputWrapper>
        <BcInputWrapper fullWidth id="field4" label="Next field should align with other column">
          <TextField />
        </BcInputWrapper>
        <BcInputWrapper id="field5" label="Field">
          <TextField />
        </BcInputWrapper>
      </BcGroup>
    </LocalizationProvider>
  )
}

export default App
