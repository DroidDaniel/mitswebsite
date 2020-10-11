import React, { Component } from 'react'
import Heading from '../Reuseable/Heading'
import Img from 'gatsby-image'

export default class Speech extends Component {
    constructor(props){
         super(props)
         this.state = {
            wepinars:props.wepinars.edges,
            mywepinars:props.wepinars.edges,

         }
    }

    render() {
        return (
            <section className="py-5">
               <div className="conatiner">
                   <Heading title="Topics"/>
                   <div className="row">
                       {this.state.mywepinars.map(({node}) => {
                           return(
                               <div key={node.id} className="col-11 col-md-6 d-flex mx-auto">
                                   <Img fixed={node.image.fixed}/>
                                   <div className="flex-grow-1 px-3">
                                       <div className="d-flex">
                                           <h6 className="mb-0">{node.title}</h6>
                                           <h6 className="mb-0 text-success ml-3">{node.category}</h6>
                                       </div>
                                       <p className="text-muted">
                           <small>{node.description.description}</small>
                                       </p>
                                       <button className="btn btn-warning">Register Now</button>
                                   </div>
                               </div>
                           )
                       })

                       }
                   </div>
               </div>
            </section>
        )
    }
}
