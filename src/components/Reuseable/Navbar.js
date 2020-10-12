import React, { Component } from 'react'
import { Link } from 'gatsby';
import Img from 'gatsby-image'



export default class Navbar extends Component {
   
    constructor(props){
        super(props)
        this.state = {
            navsection:props.navsection.edges,
            mynavsection:props.navsection.edges,
            logosection:props.logosection.edges,
            mylogosection:props.logosection.edges,


        }
   }


    render() {
        //console.log(this.props.navsection);

        return (
            <nav className="navbar navbar-expand-md text-dark">
            {this.state.logosection.map(({node}) => {
                           return(
                               <div key={node.id}>
               <Link to={node.logourl} className="navbar-brand ml-5" target="_blank">
                <Img fixed={node.logo.fixed}/>
               </Link>
               </div>
            )
            })}
               
               <div className='navbar-collapse"'>
                   <ul className="navbar-nav ml-auto mr-5 float-right">
                   {this.state.mynavsection.map(({node}) => {
                           return(
                        <li key={node.id} className="nav-item">
                           <Link to={node.navicationUrl} target="_blank" className="nav-link text-dark">
                           {node.navicationMenu}
                           </Link>
                       </li>
                           )
                       })}
                   </ul>
               </div>
            </nav>
        )
    }
}
