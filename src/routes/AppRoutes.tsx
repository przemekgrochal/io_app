import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import NewsPage from "../pages/NewsPage/NewsPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export default function AppRoutes() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={(props: any) => (
                            <>
                              <HomePage/>
                            </>
                        )}
                    />
                    
                    <Route
                        exact
                        path="/news/:newsId"
                        component={(props: any) => (
                            <>
                                <NewsPage/>
                            </>
                        )}
                    />

                    <Route>
                        <ErrorPage />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
