import React from 'react';

import {
    Jumbotron,
    Container, Row, Col
} from 'reactstrap';

import './Style.css';

export default class Style extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            masking: false
        };

        // TODO
    }

    render() {
        return (
            <div className={`styleTransfer`}>
                <div className={`jumbo`}>
                  <Jumbotron>
                    <h1 className="display-3">Style Transfer React</h1>
                    <p className="lead">We will use a pre-trained model for Image Style Transfer to receive an image posted to a route on this server, modify the image to the required style and then return it to the user.</p>
                    <hr className="my-2" />
                    <h3>Styles available</h3>
                    <p>The following are the styles available on the server.</p>

                    <Container>
                            <Row>
                              <Col>
                                <img className="styleImg" src="images/styles/la_muse.jpg" />
                                <p class="text-center">A Muse <br /> Pablo Picasso</p>
                              </Col>
                              <Col>
                                <img className="styleImg" src="images/styles/rain_princess.jpg"  />
                                <p class="text-center">Rain Princess<br />Leonid Afremov</p>
                              </Col>
                              <Col>
                                <img className="styleImg" src="images/styles/the_scream.jpg"  />
                                <p class="text-center">The Scream<br />Edvard Munch</p>
                              </Col>
                            </Row>

                            <Row>
                              <Col>
                                <img className="styleImg" src="images/styles/udnie.jpg"  />
                                <p class="text-center">Udnie<br />Francis Picabia</p>
                              </Col>
                              <Col>
                                <img className="styleImg" src="images/styles/wave.jpg"  />
                                <p class="text-center">The Great Wave off Kanagawa <br />Katsushika Hokusai</p>
                              </Col>
                              <Col>
                                <img className="styleImg" src="images/styles/wreck.jpg"  />
                                <p class="text-center">The Shipwreck of the Minotaur<br />J. M. W. Turner</p>
                              </Col>
                            </Row>
                    </Container>

                  </Jumbotron>
                </div>
            </div>
        );
    }
}
