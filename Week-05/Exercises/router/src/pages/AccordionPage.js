import React from 'react'
import Accordion from '../components/Accordion'

const ITEMS = [
  {
    id: '1',
    label: 'How much money has Nicholas invested on Robinhood?',
    content:
      '800 dollars',
  },
  {
    id: '2',
    label: 'What are the names of Nicholas\' dogs?',
    content:
      'Maximus and Rocky',
  },
  {
    id: '3',
    label: 'What is Nicholas\' favorite food?',
    content:
      'Chaulafan',
  },
]

const AccordionPage = () => {return <Accordion items={ITEMS}/>}

export default AccordionPage
