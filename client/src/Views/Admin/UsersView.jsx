import React, { useEffect, useState } from 'react';
import './UsersView.css'; 

export default function UsersView() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
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

        fetchUsers();
    }, []);

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
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
