import React, { Component } from 'react'
import Img from 'gatsby-image'
//test

export default class Dualinfoblock extends Component {
    constructor(props){
        super(props)
        this.state = {
            technology:props.technology.edges,
            mytechnology:props.technology.edges,
            techlist:props.techlist.edges,
            mytechlist:props.techlist.edges,
        }
   }

    render() {
        return (
            <section className="dual_info_block">
                {this.state.technology.map(({node}) => {
                return(
                <div key={node.id} className="container">
                <div className="row">
                    <div className="col-md-6">
                    <Img className="dual_poster" fixed={node.poster.fixed}/>
                    </div>
                    <div className="col-md-6 d-flex">
                    <div className="dual_right_sec">
                    <h3 className="dual_title">{node.title}</h3>
                    <p className="dual_descrip">{node.description}</p>

                    {this.state.techlist.map(({node}) => {
                     return(
                     <ul key={node.id} className="tech_list">
                         <li><span>
                             <Img className="tick_icon" fixed={node.icon.fixed}/>
                            </span>{node.list}
                        </li>
                     </ul>
                    )
                    })
                    }
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
