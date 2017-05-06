import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'body': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'wrapper': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'string', 'value': 'auto' }],
    'minHeight': [{ 'unit': 'px', 'value': 2000 }],
    'overflow': 'hidden'
  },
  'header': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 80 }],
    'lineHeight': [{ 'unit': 'px', 'value': 80 }],
    'background': '#446cb3',
    'position': 'fixed',
    'opacity': '0.9'
  },
  'header': {
    'transition': 'all 1s ease'
  },
  'container1': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'maxWidth': [{ 'unit': 'px', 'value': 1024 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }]
  },
  '#logo': {
    'fontFamily': 'Verdana',
    'fontWeight': 'bold',
    'fontSize': [{ 'unit': 'px', 'value': 40 }],
    'float': 'left',
    'color': 'white'
  },
  '#logo:hover': {
    'color': '#fbce2a'
  },
  'nav': {
    'float': 'right',
    'fontFamily': 'Helvetica'
  },
  'nav a': {
    'color': '#fff',
    'textDecoration': 'none',
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }]
  },
  'nav a:hover': {
    'color': '#fbce2a',
    'opacity': '0.4'
  },
  'headersticky': {
    'background': 'rgba(211, 84, 0, 0.9)',
    'height': [{ 'unit': 'px', 'value': 50 }],
    'lineHeight': [{ 'unit': 'px', 'value': 50 }]
  },
  'headersticky #logo': {
    'fontSize': [{ 'unit': 'px', 'value': 22 }]
  },
  'headersticky nav a': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }]
  }
});
