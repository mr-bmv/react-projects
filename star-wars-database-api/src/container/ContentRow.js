import React from 'react';
// container
// create container when some of layout would be re-used
// each container should be React element
// we can take from `props` or destructuring it in parameters

const ContentRow = ({ leftSide, rightSide }) => {
    return (
      <div className="row mb2">
        <div className="col-md-6">
          {leftSide}
        </div>
        <div className="col-md-6">
          {rightSide}
        </div>
      </div>
    )
  }

  export default ContentRow;