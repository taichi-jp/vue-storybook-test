/* eslint-disable react/react-in-jsx-scope */

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, color, number } from '@storybook/addon-knobs'
import VueInfoAddon from 'storybook-addon-vue-info'
import 'element-ui/lib/theme-chalk/index.css';

import Button from '../src/components/Button'
import Counter from '../src/components/Counter'

storiesOf('Buttons', module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add('button', () => {
    const label = text('Label', 'My Button')
    const backgroundColor = color('Color', '#409eff')
    const height = number('height', 50)
    const width = number('width', 150)
    return {
      components: { Button },
      template: `<Button
        @click.native="action"
        label="${label}"
        backGroundColor="${backgroundColor}"
        height="${height}px"
        width="${width}px"
      />`,
      methods: { action: action('button-clicked') },
    }
  })
  .add('Search', () => {
    const label = text('Label', 'Search')
    const backgroundColor = color('Color', '#409eff')
    const height = number('height', 50)
    const width = number('width', 150)
    return {
      components: { Button },
      template: `<Button
        @click.native="action"
        label="${label}"
        backGroundColor="${backgroundColor}"
        height="${height}px"
        width="${width}px"
        icon="el-icon-search"
      />`,
      methods: { action: action('button-clicked') },
    }
  })

storiesOf('Counter', module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add('counter', () => {
    return {
      components: { Counter },
      template: `<Counter />`,
    }
  })
