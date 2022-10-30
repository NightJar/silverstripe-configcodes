/* global document */
import jQuery from 'jquery';
import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import { loadComponent } from 'lib/Injector';

export default () => jQuery.entwine('ss', ($) => {
  $('.js-injector-boot input.extrashortcodes').entwine({
    onmatch() {
      const renderRoot = document.createElement('div');
      this[0].parentNode.insertBefore(renderRoot, this[0]);
      const ShortcodableTextField = loadComponent('ShortcodableTextField');
      const props = { linkedInput: this[0], validCodes: ['maori'] };
      createRoot(renderRoot).render(createElement(ShortcodableTextField, {...props}));
    },
    onunmatch() {
      unmountComponentAtNode(this[0].previousElementSibling);
    }
  });
});
