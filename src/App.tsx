import { AppBar, Button, FormControlLabel, Grid, IconButton, MenuItem, Radio, RadioGroup, Select, TextField, Toolbar, Typography } from '@material-ui/core';
import { Menu, Notifications, Search, Share } from '@material-ui/icons';
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';
import { DateRangeDelimiter, DateRangePicker, LocalizationProvider } from '@material-ui/pickers';
import DateFnsUtils from '@material-ui/pickers/adapter/date-fns';
import { DateRange } from '@material-ui/pickers/DateRangePicker/RangeTypes';
import React, { useState } from 'react';
import BcInputWrapper from './components/bcinput/BcInput';
import styles from './App.module.css'
import BcGrid from './components/bcgrid/BcGrid';

function HelpMe({helpText}: {helpText: string}) {
  return (
    <Typography style={{margin: '1rem'}}>{helpText}</Typography>
  )
}

function Header() {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" color="inherit">
            <Menu />
          </IconButton>
          <Typography variant="h6" >
            BC Information Mgmt UI
          </Typography>
          <div className={styles.HeaderIcons}>
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
      <Toolbar/>
    </>
  );
}

function App() {
  const [dates, setDates] = useState<DateRange<Date>>([null, null]);
  const [requestDate, setRequestDate] = useState<DateRange<Date>>([null, null]);
  const [toggleGroup, setToggleGroup] = useState<string>('');
  const [obtainedQualificationsBool, setObtainedQualificationsBool] = useState<string>('');
  const [activeQualifications, setActiveQualifications] = useState<string>('');
  const [radioButtonGroup, setRadioButtonGroup] = useState<string>('');
  const [courseSubcategory, setCourseSubcategory] = useState<string>('');
  const [courseType, setCourseType] = useState<string>('');
  const [courseCategory, setCourseCategory] = useState<string>('');

  const resetForm = () => {
    setDates([null, null])
    setRequestDate([null, null])
    setToggleGroup('')
    setObtainedQualificationsBool('')
    setActiveQualifications('')
    setRadioButtonGroup('')
    setCourseCategory('')
    setCourseType('')
    setCourseSubcategory('')
    const bcForm = document.getElementById("bc-form") as HTMLFormElement
    bcForm && bcForm.reset();
  }

  return (
    <LocalizationProvider dateAdapter={DateFnsUtils}>
      <Header />
      <form id="bc-form">
        <BcGrid>
            <BcInputWrapper id="couseCode" label="Course code" help={<iframe title="YouTube" style={{margin: '1rem auto'}} width="560" height="315" src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&controls=0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>}>
              <TextField />
            </BcInputWrapper>
            <BcInputWrapper id="sessionId" label="Session ID" help={<HelpMe helpText="ID of the session where the course was lectured" />}>
              <TextField />
            </BcInputWrapper>
            <BcInputWrapper fullWidth id="courseCategory" label="Course category">
              <Select value={courseCategory} onChange={event => setCourseCategory(event.target.value as string)}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </BcInputWrapper>
            <BcInputWrapper id="dates" label="Dates">
              <DateRangePicker
                startText=""
                endText=""
                value={dates}
                onChange={(newValue) => setDates(newValue)}
                renderInput={(startProps, endProps) => (
                  <React.Fragment>
                    <TextField {...startProps} margin="dense" helperText="" />
                    <DateRangeDelimiter> to </DateRangeDelimiter>
                    <TextField {...endProps} margin="dense" helperText="" />
                  </React.Fragment>
                )}
              />
            </BcInputWrapper>
            <BcInputWrapper fullWidth id="courseSubcategory" label="Course subcategory">
              <Select value={courseSubcategory} onChange={event => setCourseSubcategory(event.target.value as string)}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </BcInputWrapper>
            <BcInputWrapper id="requestDate" label="Request date" help={<HelpMe helpText="Date when the training was requested" />}>
              <DateRangePicker
                startText=""
                endText=""
                value={requestDate}
                onChange={(newValue) => setRequestDate(newValue)}
                renderInput={(startProps, endProps) => (
                  <React.Fragment>
                    <TextField {...startProps} margin="dense" helperText="" />
                    <DateRangeDelimiter> to </DateRangeDelimiter>
                    <TextField {...endProps} margin="dense" helperText="" />
                  </React.Fragment>
                )}
              />
            </BcInputWrapper>
            <BcInputWrapper fullWidth id="courseType" label="Course type">
              <Select value={courseType} onChange={event => setCourseType(event.target.value as string)}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </BcInputWrapper>
            <BcInputWrapper fullWidth id="includesActiveTraining" label="Includes active training">
              <TextField />
            </BcInputWrapper>
            <BcInputWrapper fullWidth id="obtainedQualifications" label="Obtained qualifications">
              <TextField />
              </BcInputWrapper>
            <BcInputWrapper id="obtainedQualificationsBool" label="Obtained qualifications">
              <RadioGroup name="obtainedQualificationsBool" row value={obtainedQualificationsBool} onChange={event => setObtainedQualificationsBool(event.target.value)}>
                <FormControlLabel value="yes" control={<Radio size="small" />} label="Yes" />
                <FormControlLabel value="no" control={<Radio size="small" />} label="No" />
              </RadioGroup>
            </BcInputWrapper>
            <BcInputWrapper id="documentNumber" label="Document number">
              <TextField />
            </BcInputWrapper>
            <BcInputWrapper id="activeQualifications" label="Active qualifications">
              <RadioGroup name="activeQualifications" row value={activeQualifications} onChange={event => setActiveQualifications(event.target.value)}>
                <FormControlLabel value="all" control={<Radio size="small" />} label="Show all" />
                <FormControlLabel value="active" control={<Radio size="small" />} label="Only show active qualifications" />
              </RadioGroup>
            </BcInputWrapper>
            <BcInputWrapper id="toggleGroup" label="Toggle group">
              <ToggleButtonGroup exclusive value={toggleGroup} onChange={(_event, newValue) => setToggleGroup(newValue)}>
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
            <BcInputWrapper id="radioButtonGroup" label="Radio button group">
              <RadioGroup name="radioButtonGroup" value={radioButtonGroup} onChange={event => setRadioButtonGroup(event.target.value)}>
                <FormControlLabel value="meyrin" control={<Radio size="small" />} label="Meyrin" />
                <FormControlLabel value="prevessin" control={<Radio size="small" />} label="Prevessin" />
                <FormControlLabel value="geneva" control={<Radio size="small" />} label="Geneva" />
              </RadioGroup>
            </BcInputWrapper>
        </BcGrid>
        <Grid container justify="flex-end" className={styles.Spacing}>
          <Button onClick={resetForm}>Reset</Button>
          <Button variant="contained" color="primary" style={{backgroundColor: 'green'}}>Retrieve</Button>
        </Grid>
      </form>
      <hr/>
    </LocalizationProvider>
  );
}

export default App;
