import React, { Component } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { ChevronDoubleDown } from 'react-bootstrap-icons'


class Welcome extends Component {

    divStyle = {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 100
    }

    constructor() {
        super()
        this.state = {
            mounted: false
        }
    }

    render() {
        return (
            <div className='section'>
                <TypeAnimation
                    sequence={[
                        'Welcome to ryumoon.my.id',
                        1000,
                        'This is my personal web page',
                        1000,
                        'Scroll down or click button below to continue',
                        () => { if (!this.state.mounted) this.setState({ mounted: true }); },
                        10000,
                    ]}
                    repeat={Infinity}
                    wrapper='h2'
                />
                <div style={this.divStyle} className={`animate__animated animate__bounce animate__infinite ${this.state.mounted ? 'd-flex' : 'd-none'}`}>
                    <span className={`text-muted text-small animate__animated ${this.state.mounted ? 'animate__rubberBand' : ''}`}>Scroll Down</span>
                    <a className='btn' onClick={() => { this.props.fullpage_api.moveSectionDown() }}><ChevronDoubleDown color='grey' size={30} /></a>
                </div>
                {/* <div className="container d-flex justify-content-center align-items-center h-100 text-white flex-column">
                    
                    <div style={this.divStyle} className={`animate__animated animate__bounce animate__infinite ${this.state.mounted ? 'd-flex' : 'd-none'}`}>
                        <span className={`text-muted text-small animate__animated ${this.state.mounted ? 'animate__rubberBand' : ''}`}>Scroll Down</span>
                        <a href="#home"><ChevronDoubleDown color='grey' size={30} /></a>
                    </div>
                </div> */}
            </div >
        );
    }
}

export default Welcome;