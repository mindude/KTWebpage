import * as React from 'react';
import {connect} from 'react-redux';
import {Panel, Col, Row, Well, Button, ButtonGroup, Label, Modal} from 'react-bootstrap';
import {bindActionCreators} from 'redux';

export interface FooterProps { compiler: string, framework: string }

export class Footer extends React.Component<FooterProps, {}>{
  render(){
    return(
      <footer className="footer text-center">
        <div className="container">
          <p className="footer-text">Keeper Team</p>
          <p>Keeping our games fun!</p>
        </div>
      </footer>
    );
  }
}