import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@material-ui/core'
import { ExpandMore } from '@material-ui/icons'
import React, { PropsWithChildren } from 'react'
import BcGrid from '../bcgrid/BcGrid'

function BcGroup({id, title, expanded = true, children}: PropsWithChildren<{id: string, title: string, expanded?: boolean}>) {
  return (
    <Accordion expanded={expanded}>
      <AccordionSummary expandIcon={<ExpandMore />} aria-controls={id.concat('-content')} id={id.concat('-header')}>
        <Typography>
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails id={id.concat('-content')}>
        <BcGrid>
          {children}
        </BcGrid>
      </AccordionDetails>
    </Accordion>
  )
}

export default BcGroup