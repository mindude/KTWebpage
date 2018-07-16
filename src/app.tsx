import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, RouteComponentProps } from 'react-router-dom';
import {applyMiddleware, createStore} from 'redux';

import { LandingPage } from './components/pages/landing_page';
import { Header } from './components/header';
import { Footer } from './components/footer';

interface mainProps extends RouteComponentProps<any> { }
const mainRoute: React.SFC<mainProps> = () => <LandingPage compiler='TypeScript' framework='React' />;



const Routes = (
	<div>
		<Header compiler='TypeScript' framework='React' />
		<Router>
			<Route path="/" component= { mainRoute } />
		</Router>
		<Footer compiler='TypeScript' framework='React' />
	</div>
)

render(
	Routes, document.getElementById('app')
)
