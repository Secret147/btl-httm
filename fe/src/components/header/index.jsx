import './style.css';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <div className="header-container">
            <ul className="header-menu">
                <li className="select-header-menu">
                    <i class="fa-solid fa-database"></i>
                    Manage
                    <div class="sub-menu">
                        <Link to={`/manage-sample`}>
                            <div className="child-menu">Samples</div>
                        </Link>
                        <Link to={`/`}>
                            <div className="child-menu">Labels</div>
                        </Link>{' '}
                        <Link to={`/listmodel`}>
                            <div className="child-menu">Models</div>
                        </Link>
                    </div>
                </li>
                <li>
                    <Link to={`/camera`}>
                        <i class="fa-solid fa-camera"></i>
                        Camera
                    </Link>
                </li>
                <li>
                    <i class="fa-solid fa-cloud-arrow-up"></i>
                    Import
                </li>
            </ul>
            <div className="header-title">
                Drowsiness warning
                <i class="fa-solid fa-bell icon-title"></i>
            </div>
        </div>
    );
}

export default Header;
