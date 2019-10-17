import React from "react";
import ReactDOM from "react-dom";

import Home from "./component/home";
import Purchase from "./component/purchase";
// import Navi from "./routes/Header";
import Allsubjects from "./component/allsubjects";
import Test from "./component/test";
import SampleTest from "./component/sampleTest";
import SampleQuizResult from "./component/sampletestresult";
import QuizResult from "./component/quizresult";
import AllResults from "./component/AllResults";
import Subject from "./component/subject";
import Chapter from "./component/chapter";
import Subscription from "./component/subscription";
import Upload from "./component/upload";
import Dashboard from "./component/dashboard";
import LoadingComponent from "./component/LoadingComponent";
import AuthenticatedCompoment from "./component/AuthenticatedComponent";
import Profile from "./component/profile";
import AddtoHome from "./component/Addtohomescreen";
import Navi from "./routes/Header";
import Emailverification from './component/emailverification';
import * as serviceWorker from "./serviceWorker";
// import promiseMiddleware from 'redux-promise';
import { Layout } from "antd";
//Redux
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import { BrowserRouter, Route, Switch, Router } from "react-router-dom";
import history from "./history";

const { Header, Content, Footer } = Layout;

// create redux store -> reducers -> 'actions - actionType' | applyMiddleware()
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <BrowserRouter>
        <LoadingComponent>
          <div>
            <Switch>
              <Route path="/emailverification" component={Emailverification} exact={true} />
              <Route path="/" component={Home} exact={true} />
              <Route path="/purchase" component={Purchase} exact={true} />
              <Route path="/subscription" component={Subscription} exact={true} />
              <Route path="/sampletest" component={SampleTest} exact={true} />
              <Route path="/sampletestresult" component={SampleQuizResult} exact={true} />
              <Route path="/test" component={Test} exact={true} />
              <AuthenticatedCompoment>
                <Layout>
                  <Navi />
                  <AddtoHome />
                  <Layout className="mainlayout">
                    <Content>
                      <Route
                        path="/quizresult"
                        component={QuizResult}
                        exact={true}
                      />
                      <Route
                        path="/AllResults"
                        component={AllResults}
                        exact={true}
                      />
                      <Route path="/Subject" component={Subject} exact={true} />
                      <Route path="/Chapter" component={Chapter} exact={true} />
                      <Route
                        path="/courses"
                        component={Allsubjects}
                        exact={true}
                      />
                      <Route path="/upload" component={Upload} exact={true} />
                      <Route path="/dashboard" component={Dashboard} exact={true} />
                      <Route path="/profile" component={Profile} exact={true} />
                    </Content>
                    <Footer className="text-center">
                      @2019, SimpliNEET, All rights reserved
                    </Footer>
                  </Layout>
                </Layout>
              </AuthenticatedCompoment>
            </Switch>
          </div>
        </LoadingComponent>
      </BrowserRouter>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
