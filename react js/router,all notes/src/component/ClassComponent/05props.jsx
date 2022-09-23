import { MDBCol } from 'mdbreact';
import React, { Component } from 'react';
import CustomCardCompo from './05.2propsCardCompo';

class PropsExample extends Component {
    render() {
        // let subjects =[20,30]
        let subjects = { "Maths": 99, "Eng": 90, "Comp": 100 }
        let Products = [{ "ProdTitle": "Prod1", "productImg": "link", "ProdDesc": "abc" }, { "ProdTitle": "Prod2", "productImg": "link2", "ProdDesc": "abc2" }, { "ProdTitle": "Prod3", "productImg": "link3", "ProdDesc": "abc3" }]
        return (
            <>
                <div className="container">
                    <div className="row">

                        {Object.keys(subjects).map((item, i) => (
                            <li className="travelcompany-input" key={i}>
                                {item + " " + subjects[item]}
                                {/* <span className="input-label">{item}{i}</span> */}
                            </li>
                        ))}


                    </div>
                    <div className="row">
                        <MDBCol sm="3">
                            {Object.keys(subjects).map((item, i) => (
                                    <CustomCardCompo imgUrl="https://images-eu.ssl-images-amazon.com/images/I/31jgoap1cQL._SY445_SX342_QL70_FMwebp_.jpg" anythingtitle="card 1 title" />
                            ))}
                        </MDBCol>
                        <MDBCol sm="3">
                            <CustomCardCompo imgUrl="https://m.media-amazon.com/images/G/31/img21/Wireless/katariy/Apple/Aplus_content/13_pro_desk/r1436_Product_Page_Flex_Module_Amazon_Desktop_Avail_1500__en-IN_04._CB640701017_.jpg" anythingtitle="card 2 title" />
                        </MDBCol>
                        <MDBCol sm="3">
                            <CustomCardCompo imgUrl="https://m.media-amazon.com/images/G/31/img21/Wireless/katariy/Apple/Aplus_content/13_pro_desk/r1436_Product_Page_Flex_Module_Amazon_Desktop_Avail_1500__en-IN_06._CB640701017_.jpg" anythingtitle="card 3" />
                        </MDBCol>
                        <MDBCol sm="3">
                            <CustomCardCompo imgUrl="https://m.media-amazon.com/images/G/31/img21/Wireless/katariy/Apple/Aplus_content/13_pro_desk/r1436_Product_Page_Flex_Module_Amazon_Desktop_Avail_1500__en-IN_06._CB640701017_.jpg" anythingtitle="Data" />
                        </MDBCol>
                    </div>
                </div>
            </>
        );
    }
}

export default PropsExample;