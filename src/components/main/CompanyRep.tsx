import './CompanyRep.css';
import {CompanyInt} from "../../interfaces/CompanyInt";

const CompanyRep = (company: CompanyInt) => {

    return (
        <div className="CompanyRep">
            <div className="nameComp">{company.name}</div>
            <div className="emailComp">{company.email}</div>
        </div>
    );
}

export default CompanyRep;