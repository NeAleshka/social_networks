import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Navigate, Route, Routes} from 'react-router-dom';
import {Layout} from "./components/layout/Layout";
import {Home} from "./components/pages/Home";
import {Messages} from "./components/pages/Messages";
import {Friends} from "./components/pages/Friends";
import {Error} from "./components/pages/Error";
import {Profile} from "./components/pages/Profile";
import {SingIn} from "./components/pages/Sing In";
import {Provider} from "react-redux";
import {store} from "./redux/store";


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <HashRouter>
                <Routes>
                    <Route path={'sing-in'} element={<SingIn/>}/>
                    <Route path={'/'} element={<Layout/>}>
                        <Route index element={<Home/>}/>
                        <Route path={'messages'} element={<Messages/>}/>
                        <Route path={'profile'} element={<Profile/>}/>
                        <Route path={'friends'} element={<Friends/>}/>
                        <Route path={'404'} element={<Error/>}/>
                        <Route path={'/*'} element={<Navigate to={'404'}/>}/>
                    </Route>
                </Routes>
            </HashRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

