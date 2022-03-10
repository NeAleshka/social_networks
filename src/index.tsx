import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Routes} from 'react-router-dom';
import {Layout} from "./components/layout/Layout";
import {Home} from "./components/pages/home/Home";


ReactDOM.render(
    <React.StrictMode>
        <HashRouter>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Home/>}/>
                </Route>
            </Routes>
        </HashRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

