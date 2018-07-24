import * as React from 'react';
import { connect } from 'react-redux';
import { Image, Media, Panel, Col, Row, Well, Button, ButtonGroup, Label, Modal, Navbar, Nav, NavItem, Grid } from 'react-bootstrap';
import { bindActionCreators } from 'redux';


export interface LandingPageProps { compiler: string, framework: string }

export class LandingPage extends React.Component<LandingPageProps, {}>{
	render(){
		return(
			<Grid bsClass="" fluid>
				<Image src="images/Barfront.gif" alt="banner" responsive />
				<Col sm={12} className="landingPage" >
					<br />
					<div className="video-container">
						<iframe width="1080" height="720" allowFullScreen frameBorder="0" src="https://www.youtube.com/embed/oGIrB5tw7Po"></iframe>
					</div>
					<h1>
						<div className="text-center">
							<p>Hello fellow Bartender!</p>
							<p>
								Ready to run your own business in your own bar?
							</p>
						</div>
						<div>
							<Media>
								<Media.Left>
									<Image width={500} height={300} src="/images/Screenshot.png" />
								</Media.Left>
								<Media.Body>
									<p>
										Be able to make your own drinks. <br /> 
										The possibilities are limitless!
									</p>
								</Media.Body>
							</Media>

							<Media>
								<Media.Left>
									<Image width={500} height={300} src="/images/Screenshot1.png" />
								</Media.Left>
								<Media.Body>
									<p>
										A lot of people to meet! <br />
										Some of them might have more to tell than others...
									</p>
								</Media.Body>
							</Media>

							<Media>
								<Media.Left>
									<Image width={380} height={300} src="/images/buildings.gif" />
								</Media.Left>
								<Media.Body>
									<p>
										Customize your bar! <br />
										It is yours, after all.
									</p>
								</Media.Body>
							</Media>
							<Media>
								<Media.Left>
									<Image width={150} height={300} src="/images/mainCharClean.gif" />
								</Media.Left>
								<Media.Body>
									<p>
										A lot of features are coming up, <br />
										so make sure to check the page often. 
									</p>
								</Media.Body>
							</Media>
							
						</div>
						<div className="text-center">
							<p>
								Visit our blog for more details. <br/>
								We make sure to update often, so don't miss out!
							</p>
						</div>
					</h1>
				</Col>
			</Grid>
		)
	}
}