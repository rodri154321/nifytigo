import React, { useEffect, useState } from 'react';
import './NFTsView.css';

export default function NFTsView() {
    const [nfts, setNFTs] = useState([]);

    const fetchNFTs = async () => {
        try {
            const response = await fetch('https://nifytigoserver.onrender.com/nft/admin');
            if (response.ok) {
                const jsonData = await response.json();
                setNFTs(jsonData);
            } else {
                throw new Error('Error al obtener los datos de NFTs desde la API');
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchNFTs();
    }, []);

    const handleToggleNFT = async (Id) => {
        try {
            const response = await fetch(`https://nifytigoserver.onrender.com/nft/active/${Id}`, {
                method: 'PUT',
            });

            if (response.ok) {
                fetchNFTs();
            } else {
                throw new Error('Error al cambiar el estado del NFT');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='nfts-view'>
            <h2>Lista de NFTs</h2>
            <table className='table-container'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>State</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {nfts.map((nft, index) => (
                        <tr key={index}>
                            <td>{nft.name}</td>
                            <td><img className='imgNFT' src={nft.image} alt="" /></td>
                            <td>{nft.price}</td>
                            <td>{nft.active ? 'Active' : 'Inactive'}</td>
                            <td>
                                <button
                                    onClick={() => nft.id && handleToggleNFT(nft.id)}
                                    className={nft.active ? 'active-button' : 'inactive-button'}
                                >
                                    {nft.active ? 'Deactivate' : 'Activate'}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
