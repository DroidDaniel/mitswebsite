import React, { Component } from 'react'
import Img from 'gatsby-image'
import { node } from 'prop-types';



export default class BannerSection extends Component {
    constructor(props){
        super(props)
        this.state = {
            herostripe:props.herostripe.edges,
           myherostripe:props.herostripe.edges,

        }
   }

    render() {
        //console.log(this.props.herostripe);
        return (
            <section className="banner_stripe">
                <div className="conatiner">
                <div className="row">
                {this.state.herostripe.map(({node}) => {
                return(
                <div key={node.id} className="col-12">
                <div className="conatiner">  
                <div className="row">

                <div className="col-md-6 hero_text_section">
                <h1 className="banner_title">{node.heroTitle}</h1>
                </div>

                <div className="col-md-6 hero_img_section">
                <Img className="img-fluid hero_sripe" fixed={node.stripe.fixed}/>
                <Img className="img-fluid hero_bg" fixed={node.heroBg.fixed}/>
                <Img className="img-fluid hero_texture" fixed={node.texture.fixed}/>
                </div>

                </div>
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
