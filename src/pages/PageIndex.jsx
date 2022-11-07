import React, { Component } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import About from './About';
import Home from './Home';
import Welcome from './Welcome';
import MyParticles from '../components/MyParticles';

class PageIndex extends Component {
    state = {}

    render() {
        const anchors = ['Welcome', "Home", "About"];
        const animateAnchors = ['fadeIn', 'fadeOut']
        return (
            <React.Fragment>
                <MyParticles />
                <ReactFullpage
                    anchors={anchors}
                    navigation
                    navigationTooltips={anchors}
                    scrollOverflow={false}
                    scrollingSpeed={500}
                    onLeave={(item, src, dest) => {
                        console.log(dest)
                    }}
                    render={({ state, fullpageApi }) => {
                        return (
                            <React.Fragment>
                                <Welcome fullpage_api={fullpageApi} />
                                <Home />
                                <About />
                            </React.Fragment>
                        );
                    }}
                />
            </React.Fragment>
        );
    }
}

export default PageIndex;