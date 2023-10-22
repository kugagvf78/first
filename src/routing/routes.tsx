import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/LoginAndSignUp/Login';
import HomePage from '../pages/HomePage';
import SignUp from '../pages/LoginAndSignUp/SignUp';

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
]);

export default router;
