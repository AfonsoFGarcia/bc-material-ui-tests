import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@material-ui/core'
import ExpandMore from '@material-ui/icons/ExpandMore'
import React, { PropsWithChildren } from 'react'
import BcGrid from '../bcgrid/BcGrid'

function BcGroup({
  id,
  title,
  expanded,
  setExpanded,
  children,
}: PropsWithChildren<{ id: string; title: string; expanded: string[]; setExpanded: (expanded: string[]) => void }>) {
  return (
    <Accordion
      expanded={expanded.includes(id)}
      onChange={(_event, isExpanded) =>
        isExpanded ? setExpanded([id, ...expanded]) : setExpanded(expanded.filter(value => value !== id))
      }
    >
      <AccordionSummary expandIcon={<ExpandMore />} aria-controls={id.concat('-content')} id={id.concat('-header')}>
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <BcGrid>{children}</BcGrid>
      </AccordionDetails>
    </Accordion>
  )
}

export default BcGroup
