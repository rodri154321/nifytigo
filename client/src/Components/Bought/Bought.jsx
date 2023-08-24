import  { useState, useEffect } from 'react';
import './Bought.css';
function Kard({nft} ) {
    
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

function Bought() {
    const [nfts, setNfts] = useState([]);
    const idUserActual = localStorage.getItem("clientId");
 
    useEffect(() => {
        // Realizar la llamada a la API dentro del useEffect
        fetch(`https://nifytigoserver.onrender.com/nft/nfts/true/${idUserActual}`)
            .then(response => response.json())
            .then(data => setNfts(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
          
            <div className='KardC'>
                {nfts.map(nft => (
                    // eslint-disable-next-line react/jsx-key
                    <div >
                        <Kard nft={nft} />
                    </div>
                        
                   
                ))}
            </div> 
      
        </div>
    );
}

export default Bought;