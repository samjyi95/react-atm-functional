import React, {useState} from 'react'

const Savings = (props) => {
    let [amount, setAmount] = useState(0)
    let [balacnce, setBalance] = useState(0)

    const handleSubmit = e => {
        e.preventDefault()
        if (isNaN(amount)) {
            console.log("Not a number")
        }
        else {
            setBalance(balance + Number(amount))
        }
        setAmount(0)
    }

    const handleWithdrawal = e => {
        e.preventDefault()
        if (isNaN(amount)) {
            console.log("Not a number")
        }
        else {
            setBalance(balance - Number(amount))
        }
        setAmount(0)
    }

    let balanceClass = 'balance'
    if (balance <= 0) {
        balanceClass += ' zero'
    }

    return(
        <div className="account">
            <h2>{props.name}</h2>
            <div className={balanceClass}>${balance}</div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="enter an amount" 
                    value={amount} 
                    onChange={ e => setAmount(e.target.value) }
                />
                <input type="submit" value="Deposit" />
            </form>
            <form onSubmit={handleWithdrawal}>
                <input 
                    type="text" 
                    placeholder="enter an amount" 
                    value={amount} 
                    onChange={ e => setAmount(e.target.value) }
                />
                <input type="submit" value="Withdrawal" />
            </form>
        </div>
    )
}

export default Savings