import React from 'react'
import classes from './AnswerItem.css'

const AnswerItem = props => {
  return (
    <li
      className='answer-item'
    >
      { props.answer.text }
    </li>
  )
}

export default AnswerItem