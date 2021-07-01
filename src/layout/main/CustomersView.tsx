import React from 'react';
import './CustomersView.css';
import CustomerRep from "../../components/main/CustomerRep";
import {CustomerInt} from "../../interfaces/CustomerInt";

interface Props {
    customers: []
}

const CustomersView: React.FC<Props> = ({ customers}): JSX.Element => {

    return (
        <div className="CustomersView">
            {customers.map((customer: CustomerInt) => (
                    <div key={ customer.id }>
                        <CustomerRep {...customer}/>
                    </div>
                )
            )}
        </div>
    );
}

export default CustomersView;