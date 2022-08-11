import Counter from './components/Counter';
import { useSelector } from 'react-redux';
import { Fragment } from 'react';
import Auth from './components/Auth';
import Header from './components/Header'
import UserProfle from './components/UserProfile';

function App() {
 const isAuth = useSelector(state => state.auth.isAuthenticated)

  return (
    <Fragment>
      <Header/>
      {isAuth && <UserProfle/>}
      {!isAuth && <Auth/>}
      <Counter />
    </Fragment>
    
  );
}

export default App;
