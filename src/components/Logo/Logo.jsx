import s from './Logo.module.scss';
import logoImg from '../../assets/logo.png';
import { routes } from '../../routes/BaseRoutes';
import { Link } from 'react-router-dom';

const Logo = ({ className }) => {
  return (
    <div className={className}>
      <Link to={routes.HOME} aria-label="site logo">
      <img
      fill={s.logoPrimary}
      src={logoImg} alt="logo" />
      </Link>
    </div>
  );
};

export default Logo;
