import App from './front/App.js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './front/Home.js';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './front/index.css';
import FavLayout from './front/FavLayout.js';
import Favorite from './back/Favorite.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Router>
        <Routes>
            <Route path='/' element={<App/>}>
                <Route index element={<Home/>}></Route>

                <Route path='/favorite' element={<FavLayout/>}>
                    <Route element={<Favorite></Favorite>}></Route>
                </Route>

            </Route>
        </Routes>
    
    </Router>
)