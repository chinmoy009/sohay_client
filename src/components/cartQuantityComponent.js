import React from 'react'

export default function CartQuantityComponent(props) {
    return (
        <div className="row">
            <div>Quantity</div>
            <div>
                <select value={props.qty} onChange={e => props.setQty(e)}>
                    {
                        [...Array(props.countInStock).keys()].map(x => (
                            <option key = {x + 1} value={x + 1}>{x + 1}</option>
                        ))
                    }
                </select>
            </div>
        </div>
    )
}
