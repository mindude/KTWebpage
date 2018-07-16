import * as React from 'react';
import { connect } from 'react-redux';
import { Panel, Col, Row, Well, Button, ButtonGroup, Label, Modal, Navbar, Nav, NavItem } from 'react-bootstrap';
import { bindActionCreators } from 'redux';

export interface LandingPageProps { compiler: string, framework: string }

export class LandingPage extends React.Component<LandingPageProps, {}>{
	render(){
		return(
			<h1>This is the main page</h1>
		)
	}
}