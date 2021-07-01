import {useSelector} from "react-redux";
import './Main.css';
import ConfigureStore from "../redux/StoreConfig";
import useFetch from '../hooks/useFetch';
import {useContext} from "react";
import {ThemeContext} from "../contexts/ThemeContext";
import CouponsView from "./main/CouponsView";
import CompaniesView from "./main/CompaniesView";
import CustomersView from "./main/CustomersView";
import About from "./main/About";

const Main = (): JSX.Element => {

    const { type, title, link } = useSelector((state) => ConfigureStore.getState().MainScreenSlicer);

    const { data: array } = useFetch(link);

    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const currentTheme = isLightTheme ? light : dark;

    return (
        <div className="Main" style={{backgroundColor: currentTheme.bg, color: currentTheme.syntax}}>
            <h1>{title}</h1>
            {type === 'Coupon' && <CouponsView coupons={array}/>}
            {type === 'Company' && <CompaniesView companies={array}/>}
            {type === 'Customer' && <CustomersView customers={array}/>}
            {type === 'About' && <About/>}
        </div>
    )
}

export default Main;

// import {useSelector} from "react-redux";
// import './Main.css';
// import ConfigureStore from "../redux/StoreConfig";
// import useFetch from '../hooks/useFetch';
// import {useContext} from "react";
// import {ThemeContext} from "../contexts/ThemeContext";
// import CouponsView from "./main/CouponsView";
// import CompaniesView from "./main/CompaniesView";
// import CustomersView from "./main/CustomersView";
// import About from "./main/About";
//
// const Main = (): JSX.Element => {
//
//     const { type, title, link } = useSelector((state) => ConfigureStore.getState().MainScreenSlicer);
//     const { allCoupons } = useSelector((state) => ConfigureStore.getState().DataSlicer);
//
//     const { data: array, isPending, error } = useFetch(link);
//
//     const { isLightTheme, light, dark } = useContext(ThemeContext);
//     const currentTheme = isLightTheme ? light : dark;
//
//     return (
//         <div className="Main" style={{backgroundColor: currentTheme.bg, color: currentTheme.syntax}}>
//             <h1>{title}</h1>
//             {type === 'Coupon' && <CouponsView coupons={array}/>}
//             {type === 'Company' && <CompaniesView companies={array}/>}
//             {type === 'Customer' && <CustomersView customers={array}/>}
//             {type === 'About' && <About/>}
//         </div>
//     )
// }
//
// export default Main;