import './CouponRep.css';
import {CouponInt} from "../../interfaces/CouponInt";
import {useSelector} from "react-redux";
import ConfigureStore from "../../redux/StoreConfig";
import {SyntheticEvent, useState} from "react";
import axios from "axios";

const CouponRep = (coupon: CouponInt) => {

    const {role} = useSelector((state) => ConfigureStore.getState().LoginSlice);
    const {title} = useSelector((state) => ConfigureStore.getState().MainScreenSlicer);

    const [bought, setBought] = useState<boolean>(false);
    const [deleted, setDeleted] = useState<boolean>(false);

    const token = localStorage.getItem("Authorization")
    const config = {
        headers: {
            "Authorization": token,
            "Content-Type": "application/json"
        }
    }

    const handleBuy = (args: SyntheticEvent) => {
        args.preventDefault();
        const raw = JSON.stringify(coupon.id);
        console.log(raw)

        //axios.post('http://localhost:8080/purchases', raw, config)
        axios.post('https://coupons-back-mysql-jwt.herokuapp.com/purchases', raw, config)
            .then(response => {
                console.log(response.status)
                setBought(true);
            })
            .catch((err) => {
                console.log(err.name)
            })
    }

    const handleDelete = (args: SyntheticEvent) => {
        args.preventDefault();
        const raw = JSON.stringify(coupon.id);
        console.log(raw)

        //axios.delete('http://localhost:8080/coupons/' + coupon.id, config)
        axios.delete('https://coupons-back-mysql-jwt.herokuapp.com/coupons/' + coupon.id, config)
            .then(response => {
                console.log(response.status)
                setDeleted(true);
            })
            .catch((err) => {
                console.log(err.name)
            })

    }

    return (
        deleted ? <div></div> :
        <div className="CouponRep">
            <div className="title">{coupon.title}</div>
            <div className="description">{coupon.description}</div>
            <div className="endDate">{coupon.endDate}</div>
            <div className="price">{coupon.price}</div>
            {title !== 'My coupons' && <div className="actions">
                {role === 'CUSTOMER' && !bought && <div className="buy" onClick={handleBuy}>Buy</div>}
                {role === 'COMPANY' && <div className="update">Update</div>}
                {role === 'COMPANY' && <div className="delete" onClick={handleDelete}>Delete</div>}
            </div>}
        </div>
    );
}

export default CouponRep;