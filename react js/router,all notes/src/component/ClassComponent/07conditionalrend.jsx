import React, { Component } from 'react';

class Conditionalrend extends Component {
    constructor(props) {
        super(props);
        // this.state={date:"test"}
        this.state = { status: false }
    }
    changeState = ()=>{
        this.setState({ status:!this.state.status })
        // this.setState({ status:true })
        // if (this.state.status) {
        //     this.setState({ status:false })
        // } else {
        //     this.setState({ status:true })
        // }
        // console.log("called");
    }
    render() {
        // if (this.state.status) {
        //     return <>True</>
        // } else {
        //     return <>false</>
        // }
        return (
            <div className='container'>
                <div className="row">
                    <div className="col">
                        <button onClick={this.changeState}>Click</button>
                        {JSON.stringify(this.state)}
                        {/* {this.state.status} */}
                        {/* {(condition)? <> true block </>:<>False Block</>} */}
                        {(this.state.status)? <> <p className='alert-success'>Active</p> </>:<><p className='alert-danger'>Deactive</p></>}
                    </div>
                </div>
            </div>
        );
    }
}

export default Conditionalrend;