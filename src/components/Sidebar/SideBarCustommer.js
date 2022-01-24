import { NavLink,Link } from 'react-router-dom';
import profile from '../../assets/img/1.png';
import iconUser from '../../assets/img/user.png';
import iconMap from '../../assets/img/map.svg';
import iconClipboard from '../../assets/img/clipboard.svg';
import { useSelector } from 'react-redux';

const SidebarCustommer = (props) => {
  const { user } = useSelector((state) => state.user);
  return (
    <div className="d-flex wrapper flex-nowrap">
      <aside className={`sidebar ps-5 flex-column ${props.sidebarActive ? 'sidebar-active' : ''}`}>
        <div className="user-profile d-flex flex-wrap mb-5">
          <img
            src={user?.avatar ? `${process.env.REACT_APP_API_URL}/${user.avatar}` : profile}
            className="user-profile-img"
            alt="user-profile-img"
          />
          <div className="d-flex flex-column ps-3 pt-1">
            <div className="text-black-16px font-semi-bold">{user?.name}</div>
            <div className="text-black-14px text-black-50">{user?.roles}</div>
          </div>
          {user.roles === 'seller' && (
            <Link to="/seller/profilestore" className="badge bg-secondary mt-3 text-white text-decoration-none">
              Switch Dashboard Seller
            </Link>
          )}
        </div>
        <div>
          <ul className="sidebar-menu">
            <li>
              <NavLink to="/custommer/profile" activeClassName="active" className="d-flex align-items-center">
                <div className="sidebar-menu-icon-background bg-light-blue">
                  <img className="sidebar-menu-icon" src={iconUser} alt="" />
                </div>
                My Account
              </NavLink>
            </li>
            <li>
              <NavLink to="/custommer/address" activeClassName="active" className="d-flex align-items-center">
                <div className="sidebar-menu-icon-background bg-dark-orange">
                  <img className="sidebar-menu-icon" src={iconMap} alt="" />
                </div>
                Shipping Adrress
              </NavLink>
            </li>
            <li>
              <NavLink to="/custommer/myorder" activeClassName="active" className="d-flex align-items-center">
                <div className="sidebar-menu-icon-background bg-pink">
                  <img className="sidebar-menu-icon" src={iconClipboard} alt="" />
                </div>{' '}
                My Order
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
      <div className={`main-panel ${props.sidebarActive ? 'w-100' : ''}`}>{props.children}</div>
    </div>
  );
};

export default SidebarCustommer;
