import React, { useEffect, useState } from 'react';

export default function NFTsView() {
    const [nfts, setNFTs] = useState([]);

    useEffect(() => {
        const fetchNFTs = async () => {
            try {
                const response = await fetch('https://nifytigoserver.onrender.com/nft');
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

        fetchNFTs();
    }, []);

    return (
        <div>
            <h2>Lista de NFTs</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {nfts.map((nft, index) => (
                        <tr key={index}>
                            <td>{nft.name}</td>
                            <td>{nft.image}</td>
                            <td>{nft.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
