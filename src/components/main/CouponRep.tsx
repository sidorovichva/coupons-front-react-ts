import './CouponRep.css';
import {CouponInt} from "../../interfaces/CouponInt";

const CouponRep = (coupon: CouponInt) => {

    //const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    return (
        <div className="CouponRep">
            <div className="title">{coupon.title}</div>
            <div className="description">{coupon.description}</div>
            <div className="endDate">{coupon.endDate}</div>
            <div className="price">{coupon.price}</div>
        </div>
    );

    // return (screenWidth < 760) ? (
    //     <div className="CouponRep-1">
    //         <div className="title">{coupon.title}</div>
    //         <div className="description">{coupon.description}</div>
    //         <div className="endDate">{coupon.endDate}</div>
    //         <div className="price">{coupon.price}</div>
    //     </div>
    // ) : (
    //     <div className="CouponRep-2">
    //         <div className="title">{coupon.title}</div>
    //         <div className="description">{coupon.description}</div>
    //         <div className="endDate">{coupon.endDate}</div>
    //         <div className="price">{coupon.price}</div>
    //     </div>
    // );
}

export default CouponRep;