/* global window */

import registerComponents from 'boot/injector/registerComponents.js';
import registerTransforms from 'boot/injector/registerTransforms.js';

export default () => window.document.addEventListener('DOMContentLoaded', () => {
  registerComponents();
  registerTransforms();
});
