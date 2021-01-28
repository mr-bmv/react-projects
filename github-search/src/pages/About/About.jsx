import React from 'react'

const About = () => {
  return (
    <div className="row main-row bg-dark" >
      {/* image side */}
      <div className="col-lg-4 col-md-6 col-sm-12">
        <img
          src={`https://avatars.githubusercontent.com/u/27474473?s=460&u=d73d5d14288ee3b50d16cedd69498b6af84c511c&v=4`}
          alt={"mr-bmv"}
          className="img-fluid rounded mt-3"
        />
        {/* icons */}
        <div className="row m-3">
          <div className="col-sm-12">
            <ul className="list-group list-group-horizontal ul-cls">
              <a
                href={'https://github.com/mr-bmv/react-projects'}
                target="_blank"
                rel="noopener noreferrer"
              >

                <i className="fa fa-github-square fa-2x mr-4"
                  aria-hidden="true"
                  style={{ color: "black" }}
                />
              </a>
              <a
                href={'https://www.linkedin.com/in/mikhail-botkin-4a6483a2'}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-linkedin fa-2x text-info"
                  aria-hidden="true" />
              </a>
            </ul>
          </div>
        </div>
      </div>
      {/* main info */}
      <div className="col-lg-8 col-md-6 col-sm-12 mt-3 mb-3">
        <div >
          <div>Hello,</div>
          <div>I'm Mike.</div>

            I've create this application for practice some new frameworks and libraries.
            <div>
            There are next features in this application:

            <ul >
              <li>this application based on <span className="text-primary">React</span>;</li>
              <li><span className="text-primary">React-Router</span> was used for jumping between pages;</li>
              <li><span className="text-primary">useContext</span> and <span className="text-primary">useReducer</span> hooks were used for manage state;</li>
              <li>application gets data from github using these <span className="text-primary">REST API</span>;</li>
              <li><span className="text-primary">Bootstrap</span> CSS-framework was used for style;</li>
              <li>Spinner for loading process was generated on
                <a
                  href={`https://loading.io/`}
                  rel="noopener noreferrer"
                  target="_blank"
                > https://loading.io/</a>

              </li>
              <li><span className="text-primary">propTypes</span> was used for prevents any issue with types in components</li>
            </ul>
          </div>
          <div className="text-success mb-1">
            <i className="fa fa-github-square fa-lg mr-1" style={{ color: "black" }} />
            <a href={`https://github.com/mr-bmv/react-projects/tree/master/github-search`} rel="noopener noreferrer" target="_blank">Github repository</a>
          </div>
          <div className="text-success"> <i className="fa fa-envelope fa-sm text-success mr-1" /> mr.m.botkin@gmail.com </div>

        </div>
      </div>
    </div>
  )
}

export default About;