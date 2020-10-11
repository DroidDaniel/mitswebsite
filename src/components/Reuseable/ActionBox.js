import React, { Component } from 'react'
import Img from 'gatsby-image'


export default class ActionBox extends Component {
    constructor(props){
        super(props)
        this.state = {
            action:props.action.edges,
           myaction:props.action.edges,
        }
   }

    render() {
        return (
            <section className="action_box_stripe">
                <div className="container">
                    <div className="row">
                    {this.state.myaction.map(({node}) => {
                    return(
                        <div key={node.id} className="col-md-3">
                           <div className="action_box">
                           <p className="action_title">{node.title}</p>
                           <Img fixed={node.icon.fixed}/>
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
