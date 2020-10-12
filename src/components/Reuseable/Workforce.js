import React, { Component } from 'react'

export default class Workforce extends Component {
    constructor(props){
        super(props)
        this.state = {
            workforce:props.workforce.edges,
            myworkforce:props.workforce.edges,

        }
   }


    render() {
        return (
            <section className="workforce_stripe">
                {this.state.workforce.map(({node}) => {
                return(
                <div key={node.id} className="conatiner">
                <div className="row">
                <div className="col-md-6">
                <h1  className="workforce_title">{node.title}</h1>
                <p className="workforce_description">{node.description.description}</p>
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
