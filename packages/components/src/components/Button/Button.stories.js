import React from 'react';
import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import Button from './Button.jsx';

export default {
  component: Button,
  title: 'Button',
  decorators: [withA11y, withKnobs]
};

export const _Button = () => (
  <Button
    type={select('Type', {None: null, Secondary: 'secondary', Warning: 'warning'})}
    disabled={boolean("Disabled", false)}
    onClick={action('clicked')}
    classes={text('Additional classes', '')}
  >
    {text("Content", "Save and continue")}
  </Button>
);

export const StartButton = () => (
  <Button
    disabled={boolean("Disabled", false)}
    onClick={action('clicked')}
    classes={text('Additional classes', '')}
    isStartButton
  >
    {text("Content", "Start now")}
  </Button>
);
