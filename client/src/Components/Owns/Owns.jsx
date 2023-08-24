import './Owns.css';
function Kard({ nft }) {
    return (
        <div>
            <div className="card">
                <div className="content">
                    <div className="back">
                        <div className="back-content">

                            <div>
                                <img width="220px" height="220px" src={nft.image} />
                            </div>

                        </div>
                    </div>
                    <div className="front">

                        <div className="img">
                            <div className="circle">
                            </div>
                            <div className="circle" id="right">
                            </div>
                            <div className="circle" id="bottom">
                            </div>
                        </div>

                        <div className="front-content">

                            <h1>{nft.name}</h1>

                            <div className="description">
                                <div className="description">
                                    <div className="title">
                                        <p>  {nft.price}</p>
                                    </div>
                                    <p className="card-footer">

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
import React, { useState, useEffect } from 'react';

function Owns() {
    const [nfts, setNfts] = useState([]);
    const idUserActual = localStorage.getItem("clientId");
    useEffect(() => {
        // Realizar la llamada a la API dentro del useEffect
        fetch(`https://nifytigoserver.onrender.com/nft/users/${idUserActual}`)
            .then(response => response.json())
            .then(data => setNfts(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <ul style={{ display: "flex" }}>
                {nfts.map(nft => (
                    <li key={nft.id}>
                        <Kard nft={nft} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Owns;