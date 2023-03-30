import { Outlet, Link } from 'react-router-dom';
import '../App.css';

const Layout = () => {
  return (
    <>
      <nav className="layout">
        <ul
          style={{
            paddingTop: '10px',
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <Link to="/" style={{ paddingRight: '20px', color: 'white' }}>
            Home
          </Link>

          <Link to="/podcasts" style={{ paddingRight: '20px', color: 'white' }}>
            Podcasts
          </Link>

          <Link to="/movies" style={{ paddingRight: '20px', color: 'white' }}>
            Movie Collection
          </Link>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
