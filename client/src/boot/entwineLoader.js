/* global document */
import jQuery from 'jquery';
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { loadComponent } from 'lib/Injector';

jQuery.entwine('ss', ($) => {
  $('.js-injector-boot input.extrashortcodes').entwine({
    onmatch() {
      const renderRoot = document.createElement('div');
      this[0].parentNode.insertBefore(renderRoot, this[0]);
      const ShortcodableTextField = loadComponent('ShortcodableTextField');
      const props = { linkedInput: this[0], validCodes: ['maori'] };
      render(<ShortcodableTextField {...props} />, renderRoot);
    },
    onunmatch() {
      unmountComponentAtNode(this[0].previousElementSibling);
    }
  });
});
