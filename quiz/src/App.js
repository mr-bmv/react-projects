import React, { Component } from "react";
import Layout from "./hoc/Layout/layout";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import Quiz from "./containers/quiz/quiz";
import Auth from "./containers/Auth/auth";
import QuizCreator from "./containers/QuizCreator/QuizCreator";
import QuizList from "./containers/QuizList/QuizList";
import { connect } from "react-redux";
import Logout from "./components/Logout/Logout";

class App extends Component {

  render() {
    let routes = (
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/quiz/:id" component={Quiz} />
        <Route path="/" component={QuizList} />
        <Redirect to="/" />
      </Switch>
    )

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/quiz-creator" component={QuizCreator} />
          <Route path="/quiz/:id" component={Quiz} />
          <Route path="/logout" component={Logout} />
          <Route path="/" component={QuizList} />
          <Redirect to="/" />
        </Switch>
      )
    }

    return (
      <Layout>
        {routes}
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // if we have a token it means that user passed authorization
    isAuthenticated: !!state.auth.token
  }
}


//  this needed to connect with element with Store
export default withRouter(connect(mapStateToProps)(App));
