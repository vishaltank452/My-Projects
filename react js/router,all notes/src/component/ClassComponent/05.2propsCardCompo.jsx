import React, { Component } from 'react';
import {  MDBCard, MDBCardBody, MDBCardText, MDBCardTitle} from 'mdbreact';
class PropsCardCompo extends Component {
    render() {
        return (
            <>
                <MDBCard >
                    {/* <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.webp" waves /> */}
                    <img className="img-fluid" src={this.props.imgUrl} alt="" />
                    <MDBCardBody>
                        <MDBCardTitle>{this.props.anythingtitle}</MDBCardTitle>
                        <MDBCardText>
                            Some quick example text to build on the card title and make
                            up the bulk of the card&apos;s content.
                        </MDBCardText>
                        {/* <MDBBtn href="#">MDBBtn</MDBBtn> */}
                    </MDBCardBody>
                </MDBCard>
            </>
        );
    }
}

export default PropsCardCompo;