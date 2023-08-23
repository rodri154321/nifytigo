import React from 'react';
import { Link } from 'react-router-dom'; // Asegúrate de tener react-router-dom instalado
import './Admin.css'

export default function Admin() {
    return (
        <div className="admin-container">
            <div className="admin-bar"><h1>Admin Panel</h1></div>
            <nav className="admin-nav">
                {/* <ul>
                    <li><Link to="/admin/UsersView">Usuarios</Link></li>
                    <li><Link to="/admin/NFTsView">NFTs</Link></li>
                    <li><Link to="/admin/DashboardView">Dashboard</Link></li>
                </ul> */}
                <a className='botn'>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span><Link to="/admin/UsersView">Usuarios</Link>
                </a>
                <a className='botn'>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span><Link to="/admin/NFTsView">NFTs</Link>
                </a>
                <a className='botn'>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span><Link to="/admin/DashboardView">Dashboard</Link>
                </a>
            </nav>
        </div>
    );
}
