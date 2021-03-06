import React from 'react';

import Control from './Control/Control';
import styled from 'styled-components';
import { Button } from 'antd';

const controls = [{
    label: 'Panf',
    type: 'panf'
  },
  {
    label: 'Delta100',
    type: 'delta100'
  },
  {
    label: 'Hp5',
    type: 'hp5'
  },
  {
    label: 'Delta3200',
    type: 'delta3200'
  },
];

const Container = styled.div `
  padding-top: 10px;
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: auto;
`;

const OrderButton = styled.div `
  cursor: pointer;
  font-family: inherit;
  font-size: 1.2em;
  padding: 15px 30px;
`;

const Controls = (props) => (
  <Container>
    <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
    {controls.map(ctrl => (
      <Control 
        key={ctrl.label} 
        label={ctrl.label}
        added={() => props.filmAdded(ctrl.type)}
        removed={() => props.filmRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]} />
  ))}

    <OrderButton>
      <Button type="primary"
        disabled={!props.purchasable}
        onClick={props.ordered}>{props.isAuth ? 'ORDER NOW' : 'LOGIN TO ORDER'}
      </Button>
    </OrderButton>
  </Container>
);

export default Controls;
