import { useDispatch, useSelector } from "react-redux"
import { addToCard, removeToCard } from "../redux/slice";

export const Cart = () => {
    const dispatch = useDispatch();
    const carts = useSelector((state) => state.carts)
    console.log(carts)
    return <>
        <div className={carts?.productCount ? 'cart cartsHover' : 'cart'}>
            Cart Item {carts?.productCount}
            <ul className="cartslist">
                {carts?.productList?.map((item) => {
                    return (
                        <li className="cartList productBox">
                            <div className="details">
                                <h4>{item?.title}</h4>
                                <span>${item?.price}</span>
                            </div>
                            <div class="quantity-field" >
                                <button
                                    className="value-button decrease-button"
                                    onClick={() => dispatch(removeToCard(item.id))}
                                    title="Remove Cart">-</button>
                                <div className="number">{item?.qty}</div>
                                <button
                                    className="value-button increase-button"
                                    onClick={() => dispatch(addToCard(item))}
                                    title="Add Cart"
                                >+
                                </button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    </>
}