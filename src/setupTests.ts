// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import React from 'react';
//import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
//import {configure} from 'enzyme';


React.useLayoutEffect = React.useEffect
//configure({adapter: new Adapter()})