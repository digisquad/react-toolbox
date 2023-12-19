import React from 'react';
import { Meta, Story } from '@storybook/react';
import Card, { CardProps } from './index';

export default {
  title: 'Components/Card',
  component: Card,
  parameters: {
    docs: {
      description: {
        component: 'This is a Card component. It displays a title, content, and a button.',
      },
    },
  },
  argTypes: {
    buttonText: {
      description: 'The text to be displayed on the button',
      control: 'text',
    },
    title: {
      description: 'The title of the card',
      control: 'text',
    },
    content: {
      description: 'The content of the card',
      control: 'text',
    },
    onButtonClick: {
      description: 'The function to be called when the button is clicked',
      action: 'clicked',
    },
  },
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  buttonText: 'Click me',
  title: 'Card Title',
  content: 'This is a sample card content.',
};

export const WithoutButton = Template.bind({});
WithoutButton.args = {
  title: 'Card Title',
  content: 'This is a sample card content.',
};

export const WithCustomButton = Template.bind({});
WithCustomButton.args = {
  buttonText: 'Custom Button',
  title: 'Card Title',
  content: 'This is a sample card content.',
};
