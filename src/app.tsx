import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Main from './components/main';
import 'normalize.css';
import './index.css';

const App = () => {
  return <div>
    <Main />
  </div>;
};

const root = createRoot(document.body);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
