import React from 'react'
import { SwapiServiceConsumer } from '../context/swapiServiceContext'

const withSwapiService = (Wrapper) => {
  return (props) => {
    return (
      <SwapiServiceConsumer>
        {
          (swapiService) => {
            return (
              <Wrapper {...props} swapiService={swapiService} />
            )
          }
        }
      </SwapiServiceConsumer>
    )
  }
};

export default withSwapiService;