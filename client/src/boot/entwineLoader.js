/* global document */
import jQuery from 'jquery';
import { render, unmountComponentAtNode } from 'react-dom';
import { loadComponent } from 'lib/Injector';

jQuery.entwine('ss', ($) => {
  $('.js-injector-boot input[type=text].extrashortcodes[data-shortcodes]').entwine({
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
