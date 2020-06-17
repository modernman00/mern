import React, { Component } from 'react';
import Homepage from './homepage/Homepage';
import axios from "axios"


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            userData : [],
         }
    }


    componentDidMount() {
         axios.get('http://localhost:5000/user/show')
            .then(res => {
                this.setState({ 
                   userData: res.data,
                    })
            })
            .catch(err => console.log(err))
    }





    render() { 
        return ( 
            <div className ="wrapper">
                  <Homepage
            cardData = {this.state.userData}/>

            </div>
          
         );
    }
}
 
export default Home;