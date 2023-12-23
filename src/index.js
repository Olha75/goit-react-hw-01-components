export * from 'components/App/App.jsx';
export * from 'components/Profile/Profile.jsx';
export * from 'components/Statistics/Statistics.jsx';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
