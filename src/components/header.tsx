import * as React from 'react';
import {connect} from 'react-redux';
import {Panel, Col, Row, Well, Button, ButtonGroup, Label, Modal, Navbar, Nav, NavItem} from 'react-bootstrap';
import {bindActionCreators} from 'redux';

export interface HeaderProps { compiler: string, framework: string }

const htmlFormat = (
	<Navbar>
		<Navbar.Header>
			<Navbar.Brand>
				<a href="/">Keeper Team</a>
			</Navbar.Brand>
			<Navbar.Toggle />
		</Navbar.Header>
		<Navbar.Collapse>
			<Nav>
				<NavItem eventKey={1} href='/' >
					Home
				</NavItem>
				<NavItem eventKey={2} href='/Blog-Leave_A_Tip' >
					Blog
				</NavItem>
				<NavItem eventKey={3} href='/About_Us' >
					About Us
				</NavItem>
				<NavItem eventKey={4} href='/Contact' >
					Contact
				</NavItem>
			</Nav>
			<Nav pullRight>
				<NavItem eventKey={1} href='https://twitter.com/Keeper_Official'>
					Twitter
				</NavItem>
				<NavItem eventKey={2} href='/'>
					Pinterest
				</NavItem>
			</Nav>
		</Navbar.Collapse>
	</Navbar>
)

export class Header extends React.Component<HeaderProps, {}>{
	render(){
		return(
			htmlFormat
		)
	}
}
