import jQuery from 'jquery';
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { loadComponent } from 'lib/Injector';

jQuery.entwine('ss', ($) => {
  $('.js-injector-boot input.extrashortcodes + span').entwine({
    onmatch() {
      const ShortcodableTextField = loadComponent('ShortcodableTextField');
      const props = { linkedInput: this[0].previousElementSibling, validCodes: ['maori'] };
      render(<ShortcodableTextField {...props} />, this[0]);
    },
    onunmatch() {
      unmountComponentAtNode(this[0]);
    }
  });
});
