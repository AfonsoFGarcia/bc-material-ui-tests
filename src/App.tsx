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
  const [value, setValue] = useState<DateRange<Date>>([null, null]);
  return (
    <LocalizationProvider dateAdapter={DateFnsUtils}>
      <Header />
      <BcGrid>
          <BcInputWrapper id="couseCode" label="Course code" help="This is the course code">
            <TextField />
          </BcInputWrapper>
          <BcInputWrapper id="sessionId" label="Session ID" help={<HelpMe helpText="This is the session ID" />}>
            <TextField />
          </BcInputWrapper>
          <BcInputWrapper fullWidth id="courseCategory" label="Course category" help={<HelpMe helpText="This is the course category" />}>
            <Select>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </BcInputWrapper>
          <BcInputWrapper id="dates" label="Dates" help={<HelpMe helpText="These are the dates" />}>
            <DateRangePicker
              startText=""
              endText=""
              value={value}
              onChange={(newValue) => setValue(newValue)}
              renderInput={(startProps, endProps) => (
                <React.Fragment>
                  <TextField {...startProps} margin="dense" helperText="" />
                  <DateRangeDelimiter> to </DateRangeDelimiter>
                  <TextField {...endProps} margin="dense" helperText="" />
                </React.Fragment>
              )}
            />
          </BcInputWrapper>
          <BcInputWrapper fullWidth id="courseSubcategory" label="Course subcategory" help={<HelpMe helpText="This is the course subcategory" />}>
            <Select>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </BcInputWrapper>
          <BcInputWrapper id="requestDate" label="Request date" help={<HelpMe helpText="This is the request date" />}>
            <DateRangePicker
              startText=""
              endText=""
              value={value}
              onChange={(newValue) => setValue(newValue)}
              renderInput={(startProps, endProps) => (
                <React.Fragment>
                  <TextField {...startProps} margin="dense" helperText="" />
                  <DateRangeDelimiter> to </DateRangeDelimiter>
                  <TextField {...endProps} margin="dense" helperText="" />
                </React.Fragment>
              )}
            />
          </BcInputWrapper>
          <BcInputWrapper fullWidth id="courseType" label="Course type" help={<HelpMe helpText="This is the course type" />}>
            <Select>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </BcInputWrapper>
          <BcInputWrapper fullWidth id="includesActiveTraining" label="Includes active training" help={<HelpMe helpText="This is the includes active training" />}>
            <TextField />
          </BcInputWrapper>
          <BcInputWrapper fullWidth id="obtainedQualifications" label="Obtained qualifications" help={<HelpMe helpText="These are the obtained qualifications" />}>
            <TextField />
            </BcInputWrapper>
          <BcInputWrapper id="obtainedQualificationsBool" label="Obtained qualifications" help={<HelpMe helpText="This is the obtained qualifications filter" />}>
            <RadioGroup name="obtainedQualificationsBool" row>
              <FormControlLabel value="yes" control={<Radio size="small" />} label="Yes" />
              <FormControlLabel value="no" control={<Radio size="small" />} label="No" />
            </RadioGroup>
          </BcInputWrapper>
          <BcInputWrapper id="documentNumber" label="Document number" help={<HelpMe helpText="This is the document number" />}>
            <TextField />
          </BcInputWrapper>
          <BcInputWrapper id="activeQualifications" label="Active qualifications" help={<HelpMe helpText="This is the active qualifications filter" />}>
            <RadioGroup name="activeQualifications" row>
              <FormControlLabel value="all" control={<Radio size="small" />} label="Show all" />
              <FormControlLabel value="active" control={<Radio size="small" />} label="Only show active qualifications" />
            </RadioGroup>
          </BcInputWrapper>
          <BcInputWrapper id="toggleGroup" label="Toggle group" help={<HelpMe helpText="This is the toggle group" />}>
            <ToggleButtonGroup exclusive>
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
          <BcInputWrapper id="radioButtonGroup" label="Radio button group" help={<HelpMe helpText="This is the radio button group" />}>
            <RadioGroup name="radioButtonGroup">
              <FormControlLabel value="meyrin" control={<Radio size="small" />} label="Meyrin" />
              <FormControlLabel value="prevessin" control={<Radio size="small" />} label="Prevessin" />
              <FormControlLabel value="geneva" control={<Radio size="small" />} label="Geneva" />
            </RadioGroup>
          </BcInputWrapper>
      </BcGrid>
      <Grid container justify="flex-end">
        <Button>Reset</Button>
        <Button variant="contained" color="primary" style={{backgroundColor: 'green'}}>Retrieve</Button>
      </Grid>
      <hr/>
    </LocalizationProvider>
  );
}

export default App;
