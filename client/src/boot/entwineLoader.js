/* global window */

import jQuery from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import { loadComponent } from 'lib/Injector';

jQuery.entwine('ss', ($) => {
  $('.js-injector-boot .extrashortcodes').entwine({
    onmatch() {
      const ShortcodableTextField = loadComponent('ShortcodableTextInput');
      const props = {};
      ReactDOM.render(<ShortcodableTextField {...props}></ShortcodableTextField>)
    },
    onunmatch() {
      ReactDOM.unmountComponentAtNode(this[0]);
    }
  });
});
