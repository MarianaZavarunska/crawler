import React from 'react';
import {Route, Routes} from "react-router-dom";
import './App.css';

import { CrawlerPage, HistoryItemPage, Layout, NotFoundPage} from "./components";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path={'/'} element={<Layout />}>
              <Route index element={<CrawlerPage/>}/>
              <Route path={'history/:id/:property'} element={<HistoryItemPage/>} />
              <Route path={'*'} element={<NotFoundPage />} />
           </Route>
      </Routes>
    </div>
  );
}

export default App;
