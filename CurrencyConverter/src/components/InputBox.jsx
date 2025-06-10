import React, {useId} from 'react';

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,

    className=""
}) {
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className='w-1/2'>
                <label
                className='text-black/40 mb-2 inline-block'
                >
                   {label}
                </label>
                <input type="number"
                placeholder='Amount'
                className='outline-none w-full bg-transparent py-1.5 text-black'
                disabled={amountDisable}
                value={amount}
                onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className='w-1/2 inline-block text-right'>
                <p className='text-black/40'>Currency Type</p>
                <select
                className='rounded-lg w-15 bg-gray-400 h-8 cursor-pointer outline-none'
                value={selectCurrency}
                disabled = {currencyDisable}
                onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}

                </select>
            </div>
        </div>
    );
}

export default InputBox;