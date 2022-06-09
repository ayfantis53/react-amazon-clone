import React from 'react';
import './SubTotal.css';
import CurrencyFormat from 'react-currency-format';

function SubTotal() {
  return (
    <div className='Subtotal'>
        <CurrencyFormat 
            renderText = {(value) => (
              <>
                <p>
                  SubTotal ( 0 items ): <strong>$0</strong>
                </p>
                <small className='subTotal__gift'>
                    <input type="checkbox" /> This Order contains a gift
                </small>
              </>
            )}

            decimalScale = {2}
            value = {0}
            displayType = {"text"}
            thousandSeparator = {true}
        />
    </div>
  )
}

export default SubTotal