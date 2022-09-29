/* global window */

import jQuery from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import { loadComponent } from 'lib/Injector';

jQuery.entwine('ss', ($) => {
  $('.js-injector-boot input.extrashortcodes + span').entwine({
    onmatch() {
      const ShortcodableTextField = loadComponent('ShortcodableTextField');
      const props = { linkedInput: this[0].previousElementSibling };
      ReactDOM.render(<ShortcodableTextField {...props}></ShortcodableTextField>, this[0])
    },
    onunmatch() {
      ReactDOM.unmountComponentAtNode(this[0]);
    }
  });
});
