import './Purchase_style.css'
import PaypalButton from '../../Components/PayPalButton/PayPalButton';

const Purchase= ()=>{
let price=15;

    return(
        <div id='purchaseContainer'>
            <div id='detailPurchaseContainer'></div>
            <div id='paymentsContainer'>
                <h1 id='title'>MAKE "NFT NAME" YOURS NOW</h1>
                <PaypalButton  totalValue={price} invoice={'Informacion de lo que se compro'}></PaypalButton>
            </div>
        </div>

    )
}

export default Purchase;