
/*profile prueba  */
import  { useEffect, useState } from 'react';
import axios from 'axios';

function ProfileFalso() {
  const [boughtNFTs, setBoughtNFTs] = useState([]);
  const userId = localStorage.getItem('clientId');


  useEffect(() => {
    // Carga las NFTs compradas por el usuario
    axios.get(`https://nifytigo-49k6.onrender.com/profile/${userId}/bought-nfts`)
    .then(response => {
        setBoughtNFTs(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [userId]);

  return (
    <div>
      <h2>Your Bought NFTs</h2>
      <div>
      {boughtNFTs.map(nft => (
          <div key={nft.id}>
            <p>Name: {nft.name}</p>
            <p>Description: {nft.description}</p>
            <p>Price: {nft.price}</p>
            {/* Other NFT properties */}
          </div>
        ))}
        </div>
        </div>
      );
    }
    
    export default ProfileFalso;
