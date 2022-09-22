/* global window */

import registerComponents from 'boot/injector/registerComponents';
import registerTransforms from 'boot/injector/registerTransforms';

window.document.addEventListener('DOMContentLoaded', () => {
  registerComponents();
  registerTransforms();
});
