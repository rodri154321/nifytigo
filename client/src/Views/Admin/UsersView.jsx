import React, { useEffect, useState } from 'react';
import './UsersView.css';

export default function UsersView() {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        try {
            const response = await fetch('https://nifytigoserver.onrender.com/users');
            if (response.ok) {
                const jsonData = await response.json();
                setUsers(jsonData);
            } else {
                throw new Error('Error al obtener los datos de usuarios desde la API');
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleToggleUser = async (userId) => {
        try {
            const response = await fetch(`https://nifytigoserver.onrender.com/users/ban/${userId}`, {
                method: 'PUT',
            });

            if (response.ok) {
                fetchUsers();
            } else {
                throw new Error('Error al cambiar el estado del usuario');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="users-view">
            <h2 className='tit'>Lista de Usuarios</h2>
            <table className='table-container'>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Cell Phone</th>
                        <th>Country</th>
                        <th>State</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.username}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.cellPhone}</td>
                            <td>{user.country}</td>
                            <td>{user.active ? 'Active' : 'Inactive'}</td>
                            <td>
                            <button
                                    onClick={() => user.id && handleToggleUser(user.id)}
                                    className={user.active ? 'active-button' : 'inactive-button'}
                                >
                                    {user.active ? 'Deactivate' : 'Activate'}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
