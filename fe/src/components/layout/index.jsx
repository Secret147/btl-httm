import { Outlet } from 'react-router-dom';
import './style.css';
import Header from '../header';
import Footer from '../footer';
import { Children } from 'react';
function Layout({ children }) {
    return (
        <div className="main-container">
            <div className="main-header-container">
                <Header></Header>
            </div>
            <div className="main-outlet-container">{children}</div>
            <div className="main-footer-container">
                <Footer></Footer>
            </div>
        </div>
    );
}

export default Layout;
