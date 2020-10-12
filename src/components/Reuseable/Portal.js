import React, { Component } from 'react'
import Img from 'gatsby-image'


export default class Portal extends Component {
    constructor(props){
        super(props)
        this.state = {
            portal:props.portal.edges,
            myportal:props.portal.edges,
        }
   }

   video_popup = () => {
    console.log("hello")
}

    render() {
        return (
            <section className="portal_stripe">
                <div className="container">
                    <div className="row">
                    {this.state.portal.map(({node}) => {
                    return(
                    <div key={node.id} className="col-md-12">
                     <h3 className="portal_title">{node.title}</h3>
                     
                     <div className="video_poster">
                    <Img className="play_icon" fixed={node.playIcon.fixed} onClick={this.video_popup}/>
                    <Img className="portal_poster" fixed={node.poster.fixed}/>
                    </div>
                    <p className="portal_descrip">{node.description.description}</p>
                    <p className="btn_txt">{node.btntext}</p>
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
