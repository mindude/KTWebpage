import * as React from 'react';
import { render } from 'react-dom';
import { Router, Route, Switch } from 'react-router';

import { Hello } from './components/Hello';

render(
	<Hello compiler='TypeScript' framework='React' />,
	document.getElementById('app')
)
