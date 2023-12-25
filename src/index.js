import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import 'modern-normalize';
import './index.css';

export * from 'components/App/App.jsx';
export * from 'components/Profile/Profile.jsx';
export * from 'components/Statistics/Statistics.jsx';
export * from 'components/Profile/profile.module.css';
export * from 'components/Statistics/statistics.module.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
