import React from 'react'
import PropTypes from 'prop-types'
import './Arrow.css'

const Arrows = ({ left, right, onLeft, onRight }) => {
  return (
    <div className="arrow-row text-center">
      {
        left
          ? <i className="fa fa-arrow-left fa-2x" onClick={onLeft} />
          : null
      }
      {
        right
          ? <i className="fa fa-arrow-right fa-2x m-2" onClick={onRight} />
          : null
      }
    </div>
  )
}

Arrows.propTypes = {
  left: PropTypes.bool.isRequired,
  right: PropTypes.bool.isRequired,
  onLeft: PropTypes.func.isRequired,
  onRight: PropTypes.func.isRequired,
}

export default Arrows;