/* global document */
import jQuery from 'jquery';
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { loadComponent } from 'admin/lib/Injector';

const selector = [
  '.js-injector-boot',
  ':not(.cms-search-form)',
  'input.text[type=text].extrashortcodes[data-shortcodes]:not(.relation-search)',
];

jQuery.entwine('ss', ($) => {
  $(selector.join(' ')).entwine({
    onmatch() {
      const renderRoot = document.createElement('div');
      this[0].parentNode.insertBefore(renderRoot, this[0]);
      const ShortcodableTextField = loadComponent('ShortcodableTextField');
      const props = {
        linkedInput: this[0],
        shortcodeConfig: JSON.parse(this[0].getAttribute('data-shortcodes')),
      };
      render(<ShortcodableTextField {...props} />, renderRoot);
    },
    onunmatch() {
      unmountComponentAtNode(this[0].previousElementSibling);
    }
  });
});
