import React from 'react';
import './SubTotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider'
import { getBasketTotal} from './reducer'

function SubTotal() {
  const [{basket}, dispatch] = useStateValue([]);

  return (
    <div className='Subtotal'>
        <CurrencyFormat 
            renderText = {(value) => (
              <>
                <p>
                  SubTotal ( {basket.length} items ): <strong>${value}</strong>
                </p>
                <small className='subTotal__gift'>
                    <input type="checkbox" /> This Order contains a gift
                </small>
              </>
            )}

            decimalScale = {2}
            value = {getBasketTotal(basket)}
            displayType = {"text"}
            thousandSeparator = {true}
        />
    </div>
  )
}

export default SubTotal