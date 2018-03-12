import Component from '@ember/component';
import { Styled, group } from 'ember-cli-ui-components';

export default Component.extend(Styled, {

  tagName: 'button',

  styles: {
    base: 'rounded p-2 font-bold text-white text-sm mr-2',

    defaultStyle: 'blue',

    colors: group({
      blue: 'bg-blue-light',
      red: 'bg-red-light',
    })
  }

});
