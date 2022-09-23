import React, { Component } from 'react';

import PropsFun from './01.2PropsFun';
import PropsClass from './01.32PropsClass';

class Props extends Component {
    render() {
        return (
            <>
                <PropsFun  name="vishal" lname="tank">
                   <a href='ckick me'>click </a>
                  </PropsFun>
                <PropsFun  name="mehul" lname="chavda"/>
                <PropsFun  name="ravi" />

                <PropsClass class="VISHAL TANK"/>
            </>
        );
    }
}

export default Props;

