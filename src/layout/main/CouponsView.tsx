import React from 'react';
import './CouponsView.css';
import {CouponInt} from "../../interfaces/CouponInt";
import CouponRep from "../../components/main/CouponRep";

interface Props {
    coupons: []
}

const CouponsView: React.FC<Props> = ({ coupons}): JSX.Element => {

    return (
        <div className="CouponsView">
            {coupons.map((coupon: CouponInt) => (
                    <div key={ coupon.id }>
                        <CouponRep {...coupon}/>
                    </div>
                )
            )}
        </div>
    );
}

export default CouponsView;