import './PurchaseMP_style.css'
import MPButton from '../../Components/MercadopagoButton/MPButton';

const PurchaseMP= ()=>{
let price=15;

    return(
        <div id='purchaseContainer'>
            <div id='detailPurchaseContainer'></div>
            <div id='paymentsContainer'>
                <h1 id='title'>MAKE "NFT NAME" YOURS NOW</h1>
                <MPButton  totalValue={price} invoice={'Informacion de lo que se compro'}></MPButton>
            </div>
        </div>

    )
}

export default PurchaseMP;