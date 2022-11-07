import React, { Component } from 'react';
import MyParticles from '../components/MyParticles';
import '../assets/glitch.css'

class Construction extends Component {
    state = {}
    footerStyle = {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        marginBottom: 50,
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center'
    }
    render() {
        return (
            <React.Fragment>
                <MyParticles />
                <div className='section'>
                    <h3 className='text-secondary hero glitch layers'><span>UNDER CONSTRUCTION</span></h3>
                    <h4 className='text-warning hero glitch layers'><span>COMING SOON</span></h4>
                    <footer style={this.footerStyle}>
                        <small className='text-muted text-small'>Ryumoon &copy;</small>
                    </footer>
                </div>
            </React.Fragment>
        );
    }
}

export default Construction;