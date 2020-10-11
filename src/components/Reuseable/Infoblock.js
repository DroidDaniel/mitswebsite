import React, { Component } from 'react'
import Img from 'gatsby-image'


export default class Infoblock extends Component {
    constructor(props){
        super(props)
        this.state = {
            device:props.device.edges,
            mydevice:props.device.edges,
        }
   }

    render() {
        return (
            <section className="info_stripe">
              
               
                   {this.state.device.map(({node}) => {
                    return(
                        <div key={node.id} className="conatiner">
                        <div className="row">
                       <div className="col-md-6">
                       
                       <div className="grey_box"></div>
                       <Img className="poster" fixed={node.poster.fixed}/>
                       <Img className="texture" fixed={node.texture.fixed}/>
                       
                       
                       </div>
                       <div className="col-md-6">
                       <div className="info_right_sec">
                         <h3 className="info_title">{node.title}</h3>
                         <p className="info_description">{node.description.description}</p>
                         </div>
                       </div>
                       </div>
                       </div>
                       
                       )
                       })
                       }
                   

            </section>
        )
    }
}
