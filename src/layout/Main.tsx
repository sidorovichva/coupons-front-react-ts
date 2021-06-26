import {useSelector} from "react-redux";
import './Main.css';
import ConfigureStore from "../redux/StoreConfig";
import useFetch from '../hooks/useFetch';
import {useContext} from "react";
import {ThemeContext} from "../contexts/ThemeContext";
import {CouponInt} from "../interfaces/CouponInt";
import CouponRep from "../components/main/CouponRep";
import {CompanyInt} from "../interfaces/CompanyInt";
import {CustomerInt} from "../interfaces/CustomerInt";
import CompanyRep from "../components/main/CompanyRep";
import CustomerRep from "../components/main/CustomerRep";

const Main = (): JSX.Element => {

    //category name reducer
    const { title, link } = useSelector((state) => ConfigureStore.getState().MainScreenSlicer);

    //hook to data download
    const { data: data, isPending, error } = useFetch(link);

    //theme change context
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const currentTheme = isLightTheme ? light : dark;

    if (title === 'Companies') return (
        <div className="Main" style={{backgroundColor: currentTheme.bg, color: currentTheme.syntax}}>
            <h1>{title}</h1>
            {error !== null ? error :
                isPending === true ? "Loading..." :
                    data.map((company: CompanyInt) => (
                            <div key={ company.id }>
                                <CompanyRep {...company}/>
                            </div>
                        )
                    )
            }
        </div>
    );
    if (title === 'Customers') return (
        <div className="Main" style={{backgroundColor: currentTheme.bg, color: currentTheme.syntax}}>
            <h1>{title}</h1>
            {error !== null ? error :
                isPending === true ? "Loading..." :
                    data.map((customer: CustomerInt) => (
                            <div key={ customer.id }>
                                <CustomerRep {...customer}/>
                            </div>
                        )
                    )
            }
        </div>
    );
    return (
        <div className="Main" style={{backgroundColor: currentTheme.bg, color: currentTheme.syntax}}>
            <h1>{title}</h1>
            {error !== null ? error :
                isPending === true ? "Loading..." :
                    data.map((coupon: CouponInt) => (
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