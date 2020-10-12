import React, { Component } from 'react'

export default class Heading extends Component {
    constructor(props){
        super(props)
        this.state = {
            heading:props.heading.edges,
           myheading:props.heading.edges,
        }
   }

    render() {
        return (
            <section className="heading_stripe">
                <div className="container">
                <div className="row">
                {this.state.heading.map(({node}) => {
                    return(
                <div key={node.id} className="col-md-12">
                <h1 className="heading_title">{node.title}</h1>
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
