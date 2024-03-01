import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Home } from './components/Home';
// commented out for lazy loading
// import { About } from './components/About';
import { Navbar } from './components/Navbar';
import { OrderSummary } from './components/OrderSummary';
import { NoMatch } from './components/NoMatch';
import { Products } from './components/Products';
import { FeaturedProducts } from './components/FeaturedProducts';
import { NewProducts } from './components/NewProducts';
import { Users } from './components/Users';
import { UserDetails } from './components/UserDetails';
import { Admin } from './components/Admin';
import React, { startTransition } from 'react';
import { Profile } from './components/Profile';
import { AuthProvider } from './components/auth';
import { Login } from './components/Login';
import { RequireAuth } from './components/RequireAuth';

// added for lazy loading
const LazyAbout = React.lazy(() => import('./components/About'));


function App() {
  return (
    <>
      {/* added for authentication and protected routes */}
      <AuthProvider>
        <Router>
          {/* added created for Links */}
          <Navbar />
          {/* added for configuring routes */}
          <Routes>
            <Route path='/' element={<Home />} />
            {/* commented out for lazy loading */}
            {/* <Route path='about' element={<About />} /> */}
            {/* added for lazy loading */}
            <Route
              path='about'
              element={
                <React.Suspense fallback='Loading...'>
                  <LazyAbout />
                </React.Suspense>
              }
            />
            {/* added for navigating programmatically */}
            < Route path='order-summary' element={< OrderSummary />} />

            {/* added for nested routes */}
            <Route path='products' element={<Products />}>
              {/* added for index route */}
              <Route index element={<FeaturedProducts />} />
              {/* added for nested routes */}
              <Route path='featured' element={<FeaturedProducts />} />
              <Route path='new' element={<NewProducts />} />
            </Route>

            {/* added for dynamic routes */}
            <Route path='users' element={<Users />}>
              <Route path=':userId' element={<UserDetails />} />
              <Route path='admin' element={<Admin />} />
            </Route>

            {/* added for authentication and protected routes */}
            <Route
              path='/profile'
              element={
                <RequireAuth>
                  <Profile />
                </RequireAuth>
              }
            />
            <Route path='/login' element={<Login />} />
            {/* added for no match route */}
            <Route path='*' element={<NoMatch />} />
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}


export default App;
