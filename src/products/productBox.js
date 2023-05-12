import { useDispatch } from "react-redux"
import { addToCard } from "../redux/slice";

export const ProductBox = ({ item }) => {
    const dispatch = useDispatch();
    return (
        <li className="productBox">
            <h4>{item?.title}</h4>
            <p>{item?.description}</p>
            <div className="actions">
                <div className="left">
                    <span>Price:- ${item?.price}</span>
                    <span>On stock:- {item?.stock}</span>
                </div>
                <div className="rigth">
                    <button onClick={() => dispatch(addToCard(item))}>Add To Card</button>
                </div>
            </div>
        </li>
    )
}