import React from 'react';
import { Route, Switch, useRouteMatch } from "react-router-dom";
import MainPage from './pages/Mainpage/index';
import NotFound from 'components/NotFound/index';

Home.propTypes = {

};

function Home() {
    const match = useRouteMatch();
    return (
        <Switch>
            <Route exact path={match.url} component={MainPage} />
            <Route component={NotFound} />
        </Switch>
    );
}

export default Home;