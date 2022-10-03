import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './Header.scss';
import ConnexionButton from 'src/components/Buttons/ConnexionButton/ConnexionButton';
import RegisterButton from 'src/components/Buttons/RegisterButton/RegisterButton';
import LogOutButton from 'src/components/Buttons/LogOutButton/LogOutButton';
import MyPosts from 'src/components/Buttons/MyPosts/MyPosts';
import logo from '../../assets/Images/Logo_3.png';

function Header() {
  // je veux déterminer si oui ou non le user sera connecté
  const isLogged = useSelector((state) => state.user.isLogged);
  return (
    <header className="header">
      <section className="header__main__section">
        <section className="header__section--left">
          <Link to="/">
            <img src={logo} alt="logo LinkO'Dev" className="header--logo" />
          </Link>
        </section>
        <section className="header__section--right">
          {!isLogged && (
          <div className="header--noLogged-buttons">
            <NavLink
              to="/register"
            ><RegisterButton />
            </NavLink>
            <NavLink
              to="/login"
            ><ConnexionButton />
            </NavLink>
          </div>
          )}
        </section>
      </section>
      {isLogged && (
      <section className="header__section--center">
        <div className="header__Logged-buttons--myposts">
          <MyPosts />
        </div>
        <div className="header__Logged-buttons--logout">
          <LogOutButton />
        </div>
      </section>
      )}
    </header>
  );
}

export default Header;
