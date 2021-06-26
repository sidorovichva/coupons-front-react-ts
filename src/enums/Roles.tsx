enum Roles {
    ADMINISTRATOR,
    CUSTOMER,
    COMPANY,
    GUEST
}

export const getRole = () => {
    const role = localStorage.getItem("Role");

    switch (role) {
        case 'ADMINISTRATOR': {
            return Roles.ADMINISTRATOR;
            break;
        }
        case 'CUSTOMER': {
            return Roles.CUSTOMER;
            break;
        }
        case 'COMPANY': {
            return Roles.COMPANY;
            break;
        }
        default: {
            return Roles.GUEST;
            break;
        }
    }
}


export default Roles;