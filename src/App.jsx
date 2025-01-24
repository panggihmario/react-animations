import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import WelcomePage from './pages/Welcome.jsx';
import ChallengesPage from './pages/Challenges.jsx';
import Motion from './pages/Motion.jsx';

const router = createBrowserRouter([
  { path: '/', element: <WelcomePage /> },
  { path: '/challenges', element: <ChallengesPage /> },
  { path: '/motion', element: <Motion /> }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
