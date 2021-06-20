import {useSelector} from "react-redux";
import ConfigureStore from "../redux/StoreConfig";
import useFetch from '../hooks/useFetch';
import {useContext} from "react";
import {ThemeContext} from "../contexts/ThemeContext";
import {CouponInt} from "../interfaces/CouponInt";
import CouponRep from "../components/main/CouponRep";

const Main = (): JSX.Element => {

    //category name reducer
    const { title, link } = useSelector((state) => ConfigureStore.getState().DropDownMenuSlice);

    //hook to data download
    const { data: coupons, isPending, error } = useFetch(link);

    //theme change context
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const currentTheme = isLightTheme ? light : dark;

    return (
        <div className="Main" style={{backgroundColor: currentTheme.bg, color: currentTheme.syntax}}>
            <h1>{title}</h1>
            {error !== null ? error :
                isPending === true ? "Loading..." :
                    coupons.map((coupon: CouponInt) => (
                        <div key={ coupon.id }>
                            <CouponRep {...coupon}/>
                        </div>
                    )
                )
            }
        </div>
    );
}

export default Main;