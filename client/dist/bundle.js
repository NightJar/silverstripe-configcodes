/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/boot/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/boot/entwineLoader.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(8);

var _jquery2 = _interopRequireDefault(_jquery);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(3);

var _Injector = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var selector = ['.js-injector-boot', ':not(.cms-search-form)', 'input.text[type=text].extrashortcodes[data-shortcodes]:not(.relation-search)'];

_jquery2.default.entwine('ss', function ($) {
  $(selector.join(' ')).entwine({
    onmatch: function onmatch() {
      var renderRoot = document.createElement('div');
      this[0].parentNode.insertBefore(renderRoot, this[0]);
      var ShortcodableTextField = (0, _Injector.loadComponent)('ShortcodableTextField');
      var props = {
        linkedInput: this[0],
        shortcodeConfig: JSON.parse(this[0].getAttribute('data-shortcodes'))
      };
      (0, _reactDom.render)(_react2.default.createElement(ShortcodableTextField, props), renderRoot);
    },
    onunmatch: function onunmatch() {
      (0, _reactDom.unmountComponentAtNode)(this[0].previousElementSibling);
    }
  });
});

/***/ }),

/***/ "./client/src/boot/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("./client/src/boot/entwineLoader.js");
__webpack_require__("./client/src/boot/reactLoader.js");

/***/ }),

/***/ "./client/src/boot/injector/registerComponents.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Injector = __webpack_require__(2);

var _Injector2 = _interopRequireDefault(_Injector);

var _RichInput = __webpack_require__("./client/src/components/RichInput.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  _Injector2.default.component.registerMany({
    ShortcodableTextField: _RichInput.RichInput
  });
};

/***/ }),

/***/ "./client/src/boot/injector/registerTransforms.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {};

/***/ }),

/***/ "./client/src/boot/reactLoader.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _registerComponents = __webpack_require__("./client/src/boot/injector/registerComponents.js");

var _registerComponents2 = _interopRequireDefault(_registerComponents);

var _registerTransforms = __webpack_require__("./client/src/boot/injector/registerTransforms.js");

var _registerTransforms2 = _interopRequireDefault(_registerTransforms);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.document.addEventListener('DOMContentLoaded', function () {
  (0, _registerComponents2.default)();
  (0, _registerTransforms2.default)();
});

/***/ }),

/***/ "./client/src/components/Element.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _slate = __webpack_require__("./node_modules/slate/dist/index.es.js");

var _slateReact = __webpack_require__("./node_modules/slate-react/dist/index.es.js");

var _ShortcodeElement = __webpack_require__("./client/src/components/ShortcodeElement.js");

var _ShortcodeElement2 = _interopRequireDefault(_ShortcodeElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (elementProps) {
  return _slate.Element.isElementType(elementProps.element, 'shortcode') ? _react2.default.createElement(_ShortcodeElement2.default, elementProps) : _react2.default.createElement(_slateReact.DefaultElement, elementProps);
};

/***/ }),

/***/ "./client/src/components/RichInput.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RichInput = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _slate = __webpack_require__("./node_modules/slate/dist/index.es.js");

var _slateReact = __webpack_require__("./node_modules/slate-react/dist/index.es.js");

var _slateHistory = __webpack_require__("./node_modules/slate-history/dist/index.es.js");

var _shortcodeSerialiser = __webpack_require__("./client/src/lib/shortcodeSerialiser.js");

var _Toolbar = __webpack_require__("./client/src/components/Toolbar.js");

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Element = __webpack_require__("./client/src/components/Element.js");

var _Element2 = _interopRequireDefault(_Element);

var _keyboard = __webpack_require__("./client/src/lib/keyboard.js");

var _keyboard2 = _interopRequireDefault(_keyboard);

var _withShortcodes = __webpack_require__("./client/src/lib/withShortcodes.js");

var _withShortcodes2 = _interopRequireDefault(_withShortcodes);

var _reactstrap = __webpack_require__(1);

var _hookShortcodes = __webpack_require__("./client/src/lib/hookShortcodes.js");

var _hookHotkeys = __webpack_require__("./client/src/lib/hookHotkeys.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var makeLabelsFocusEditor = function makeLabelsFocusEditor(input, targetId) {
  input.labels.forEach(function (label) {
    return label.addEventListener('click', function (event) {
      event.preventDefault();
      document.getElementById(targetId).focus();
    });
  });
};

var RichInput = exports.RichInput = function RichInput(_ref) {
  var linkedInput = _ref.linkedInput,
      shortcodeConfig = _ref.shortcodeConfig;

  var _useState = (0, _react.useState)(function () {
    return (0, _slateReact.withReact)((0, _slateHistory.withHistory)((0, _withShortcodes2.default)((0, _slate.createEditor)())));
  }),
      _useState2 = _slicedToArray(_useState, 1),
      editor = _useState2[0];

  var initialValue = (0, _react.useMemo)(function () {
    return [{ children: (0, _shortcodeSerialiser.toSlateNodeTree)(linkedInput.value, shortcodeConfig) }];
  }, []);
  var storeValueForSubmit = function storeValueForSubmit(updatedContent) {
    return editor.isContentChanging() && linkedInput.setRangeText((0, _shortcodeSerialiser.toStorableString)(updatedContent, shortcodeConfig), 0, linkedInput.value.length);
  };
  var editableElementId = 'shortcodable-' + linkedInput.id;
  makeLabelsFocusEditor(linkedInput, editableElementId);
  var readOnly = linkedInput.disabled || linkedInput.readOnly || undefined;
  var isMultiline = linkedInput.type === 'textarea';

  var _hotKeys = (0, _keyboard2.default)(),
      registerHotKey = _hotKeys.registerHotKey,
      handleHotKey = _hotKeys.handleHotKey;

  var keyHandler = isMultiline ? handleHotKey : function (event) {
    if (event.key.toLowerCase() === 'enter') {
      if (linkedInput.dispatchEvent((0, _keyboard.cloneKeyboardEvent)(event.nativeEvent))) {
        linkedInput.form.querySelector('input[type=submit],button[type=submit],input[type=image]').click();
      }

      event.preventDefault();
    }
    handleHotKey(event);
  };
  var block = 'shortcodable-input';
  var classes = ['disabled', 'readOnly'].filter(function (state) {
    return linkedInput[state];
  }).reduce(function (classnames, modifier) {
    return classnames + ' ' + block + '--' + modifier;
  }, block);
  return _react2.default.createElement(
    _slateReact.Slate,
    { editor: editor, value: initialValue, onChange: storeValueForSubmit },
    _react2.default.createElement(
      _reactstrap.InputGroup,
      null,
      _react2.default.createElement(_slateReact.Editable, {
        id: editableElementId,
        'aria-labelledby': linkedInput.labels[0].id,
        tabIndex: '0',
        className: 'form-control ' + classes,
        readOnly: readOnly,
        'aria-multiline': !readOnly && isMultiline || undefined,
        'aria-disabled': linkedInput.disabled || undefined,
        'aria-readonly': linkedInput.readonly || undefined,
        onKeyDown: keyHandler,
        renderElement: _Element2.default
      }),
      _react2.default.createElement(
        _reactstrap.InputGroupAddon,
        { addonType: 'append' },
        _react2.default.createElement(
          _hookShortcodes.ShortcodeConfig.Provider,
          { value: shortcodeConfig },
          _react2.default.createElement(
            _hookHotkeys.HotKeyRegistrar.Provider,
            { value: registerHotKey },
            _react2.default.createElement(_Toolbar2.default, { blockId: editableElementId })
          )
        )
      )
    )
  );
};

/***/ }),

/***/ "./client/src/components/ShortcodeEditor.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactstrap = __webpack_require__(1);

var _hookShortcodes = __webpack_require__("./client/src/lib/hookShortcodes.js");

var _Injector = __webpack_require__(2);

var _UncontrolledTextField = __webpack_require__("./client/src/components/UncontrolledTextField.js");

var _UncontrolledTextField2 = _interopRequireDefault(_UncontrolledTextField);

var _translations = __webpack_require__("./client/src/lib/translations.js");

var _Button = __webpack_require__(4);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var serialiseForm = function serialiseForm(form) {
  var data = new FormData(form);
  var config = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _ref = _step.value;

      var _ref2 = _slicedToArray(_ref, 2);

      var name = _ref2[0];
      var value = _ref2[1];

      var configPath = name.split('.');
      var configField = configPath.pop();
      var configContext = config;
      while (configPath.length) {
        var nextContext = configPath.shift();
        configContext[nextContext] = configContext[nextContext] || {};
        configContext = configContext[nextContext];
      }
      configContext[configField] = value;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return config;
};

var makeSentenceCase = function makeSentenceCase(string) {
  var sentenceCase = function sentenceCase(character, indexInString) {
    return indexInString === 0 ? character.toUpperCase() : character;
  };
  var wordSeparators = /\+|\.|-/g;
  return string.replaceAll(wordSeparators, ' ').split('').map(sentenceCase).join('');
};

var buildMessage = function buildMessage(shortcode, selectedContent) {
  var type = selectedContent ? 'warning' : 'info';
  var message = [(0, _translations._tinject)('CONTENT_NOTICE', { shortcode: shortcode }), _react2.default.createElement('br', { key: 'br' }), (0, _translations._tinject)('CONTENT_WARNING', { shortcode: shortcode }), _react2.default.createElement(
    'q',
    { key: 'selectedContent', className: 'shortcode-editor__selected-content' },
    selectedContent
  )];

  var props = {
    color: type,
    tag: 'p',
    children: selectedContent ? message : [message.shift()]
  };

  return {
    type: type,
    value: {
      react: _react2.default.createElement(_reactstrap.Alert, props)
    }
  };
};

exports.default = function (_ref3) {
  var isOpen = _ref3.isOpen,
      close = _ref3.close,
      editing = _ref3.editing;

  var SingleSelectField = (0, _Injector.loadComponent)('SingleSelectField');

  var shortcodeDescriptors = (0, _hookShortcodes.useShortcodes)();

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      selectedCode = _useState2[0],
      setSelectedCode = _useState2[1];

  var _editing$shortcode = _extends({}, editing, {
    shortcode: selectedCode || editing.shortcode || Object.keys(shortcodeDescriptors)[0]
  }),
      shortcode = _editing$shortcode.shortcode,
      _editing$shortcode$at = _editing$shortcode.attributes,
      attributes = _editing$shortcode$at === undefined ? {} : _editing$shortcode$at,
      content = _editing$shortcode.content;

  var contentRequired = shortcodeDescriptors[shortcode].content;
  var contentDisabled = contentRequired === null;
  var actions = {
    CANCEL: function CANCEL() {
      return close(false);
    },
    REMOVE: function REMOVE() {
      return close(true);
    },
    APPLY: function APPLY(event) {
      return event.target.form.reportValidity() ? close(serialiseForm(event.target.form)) : true;
    }
  };
  var cancelSubmission = function cancelSubmission(event) {
    event.preventDefault();
    event.nativeEvent.stopImmediatePropagation();
    return false;
  };
  return _react2.default.createElement(
    _reactstrap.Modal,
    { isOpen: isOpen, toggle: actions.CANCEL, onClosed: function onClosed() {
        return setSelectedCode(null);
      } },
    _react2.default.createElement(
      _reactstrap.ModalHeader,
      { toggle: actions.CANCEL },
      (0, _translations._tinject)('EDITOR_TITLE', { verb: (0, _translations._tinject)(editing.shortcode ? 'VERB_EDIT' : 'VERB_ADD') })
    ),
    _react2.default.createElement(
      'form',
      { onSubmit: cancelSubmission, className: 'shortcode-editor' },
      _react2.default.createElement(
        _reactstrap.ModalBody,
        null,
        _react2.default.createElement(SingleSelectField, {
          id: 'shortcode-selector',
          name: 'shortcode',
          title: (0, _translations._tinject)('FIELD_SHORTCODE'),
          source: Object.keys(shortcodeDescriptors).map(function (name) {
            return { title: makeSentenceCase(name), value: name };
          }),
          value: shortcode,
          extraClass: 'shortcode-editor__field shortcode-editor__field--shortcode no-change-track',
          onChange: function onChange(e) {
            return setSelectedCode(e.target.value);
          }
        }),
        _react2.default.createElement(_UncontrolledTextField2.default, {
          id: 'shortcode-content',
          name: 'content',
          title: (0, _translations._tinject)('FIELD_CONTENT'),
          defaultValue: content,
          className: 'shortcode-editor__field shortcode-editor__field--content no-change-track',
          extraClass: contentRequired ? 'shortcode-editor__field--required' : undefined,
          disabled: contentDisabled,
          required: contentRequired,
          message: contentDisabled ? buildMessage(shortcode, content) : undefined
        }),
        contentDisabled && _react2.default.createElement('input', { type: 'hidden', name: 'selfclosing', value: 'true' }),
        _react2.default.createElement(
          'fieldset',
          null,
          _react2.default.createElement(
            'legend',
            null,
            (0, _translations._tinject)('EDITOR_ATTRIBUTES')
          ),
          shortcode && Object.entries(shortcodeDescriptors[shortcode].parameters).map(function (_ref4) {
            var _ref5 = _slicedToArray(_ref4, 2),
                name = _ref5[0],
                required = _ref5[1];

            return _react2.default.createElement(_UncontrolledTextField2.default, {
              key: shortcode + name,
              id: 'shortcode-attribute__' + name,
              name: 'attributes.' + name,
              title: makeSentenceCase(name),
              required: required || undefined,
              defaultValue: attributes[name],
              extraClass: required ? 'shortcode-editor__field--required' : undefined,
              className: 'shortcode-editor__field shortcode-editor__field--attribute no-change-track'
            });
          })
        )
      ),
      _react2.default.createElement(
        _reactstrap.ModalFooter,
        null,
        _react2.default.createElement(
          _Button2.default,
          { type: 'submit', icon: 'down-circled', color: 'primary', onClick: actions.APPLY },
          (0, _translations._tinject)('ACTIONS_APPLY')
        ),
        editing.shortcode && _react2.default.createElement(
          _Button2.default,
          { icon: 'block', outline: true, color: 'danger', onClick: actions.REMOVE },
          (0, _translations._tinject)('ACTIONS_REMOVE')
        ),
        _react2.default.createElement(
          _Button2.default,
          { color: 'subdued', onClick: actions.CANCEL },
          (0, _translations._tinject)('ACTIONS_CANCEL')
        )
      )
    )
  );
};

/***/ }),

/***/ "./client/src/components/ShortcodeElement.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _slateReact = __webpack_require__("./node_modules/slate-react/dist/index.es.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ShortcodeElement = function ShortcodeElement(_ref) {
  var _ref$element = _ref.element,
      shortcode = _ref$element.shortcode,
      _ref$element$attribut = _ref$element.attributes,
      shortcodeAttributes = _ref$element$attribut === undefined ? {} : _ref$element$attribut,
      _ref$element$selfclos = _ref$element.selfclosing,
      selfclosing = _ref$element$selfclos === undefined ? '' : _ref$element$selfclos,
      attributes = _ref.attributes,
      children = _ref.children;

  var selected = (0, _slateReact.useSelected)();
  var focused = (0, _slateReact.useFocused)();
  var selectedClass = selfclosing && selected && focused ? ' shortcode--selected' : '';
  return _react2.default.createElement(
    'span',
    _extends({
      className: 'shortcode shortcode--type-' + shortcode + (selfclosing && ' shortcode--selfclosing') + selectedClass,
      'data-shortcode': shortcode
    }, Object.keys(shortcodeAttributes).reduce(function (c, i) {
      return _extends({}, c, _defineProperty({}, 'data-attribute-' + i, shortcodeAttributes[i]));
    }, {}), attributes),
    children
  );
};

exports.default = ShortcodeElement;

/***/ }),

/***/ "./client/src/components/Toolbar.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _slateReact = __webpack_require__("./node_modules/slate-react/dist/index.es.js");

var _ShortcodeEditor = __webpack_require__("./client/src/components/ShortcodeEditor.js");

var _ShortcodeEditor2 = _interopRequireDefault(_ShortcodeEditor);

var _ToolbarButton = __webpack_require__("./client/src/components/ToolbarButton.js");

var _ToolbarButton2 = _interopRequireDefault(_ToolbarButton);

var _reactstrap = __webpack_require__(1);

var _shortcodeTransforms = __webpack_require__("./client/src/lib/shortcodeTransforms.js");

var _Tip = __webpack_require__(6);

var _Tip2 = _interopRequireDefault(_Tip);

var _slate = __webpack_require__("./node_modules/slate/dist/index.es.js");

var _translations = __webpack_require__("./client/src/lib/translations.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var editableElementId = _ref.blockId;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      editorIsOpen = _useState2[0],
      setEditorOpen = _useState2[1];

  var editor = (0, _slateReact.useSlate)();
  var isFocused = (0, _slateReact.useFocused)();

  var cursorInShortcode = editor.hasShortcode();
  var selectedText = editor.selection && _slate.Range.isExpanded(editor.selection) && _slate.Node.string({ children: editor.getFragment() });
  var editing = !cursorInShortcode ? { content: selectedText || undefined } : {
    shortcode: cursorInShortcode[0].shortcode,
    attributes: cursorInShortcode[0].attributes,
    content: _slate.Node.string(cursorInShortcode[0])
  };

  var closeModal = function closeModal(amendment) {
    setEditorOpen(false);

    if (amendment) {
      if (amendment === true) {
        (0, _shortcodeTransforms.removeShortcode)(editor);
      } else if (cursorInShortcode) {
        (0, _shortcodeTransforms.updateShortcode)(editor, amendment);
      } else {
        (0, _shortcodeTransforms.applyShortcode)(editor, amendment);
      }
    }

    return true;
  };

  return _react2.default.createElement(
    _reactstrap.ButtonToolbar,
    null,
    _react2.default.createElement(
      _reactstrap.ButtonGroup,
      null,
      _react2.default.createElement(
        _ToolbarButton2.default,
        {
          icon: cursorInShortcode ? 'edit' : 'edit-write',
          noText: true,
          outline: true,
          disabled: !isFocused,
          onClick: function onClick() {
            return setEditorOpen(true);
          },
          'aria-label': (0, _translations._tinject)('TOOLBAR_ACTION', { verb: (0, _translations._tinject)(cursorInShortcode ? 'VERB_EDIT' : 'VERB_ADD') }),
          hotKey: 'Alt+S'
        },
        _react2.default.createElement(_ShortcodeEditor2.default, { isOpen: editorIsOpen, close: closeModal, editing: editing })
      ),
      _react2.default.createElement(_ToolbarButton2.default, {
        icon: 'block',
        noText: true,
        outline: true,
        disabled: !(isFocused && cursorInShortcode),
        onClick: function onClick() {
          return closeModal(true);
        },
        'aria-label': (0, _translations._tinject)('TOOLBAR_ACTION', { verb: (0, _translations._tinject)('VERB_REMOVE') }),
        hotKey: 'Alt+Shift+S'
      }),
      _react2.default.createElement(_Tip2.default, {
        id: editableElementId + '__help',
        content: 'Press Alt+S to bring up an editor to create, amend, or remove a shortcode',
        icon: 'white-question',
        fieldTitle: editableElementId + ' editor help',
        tabIndex: '-1',
        hotKey: 'alt+k',
        'aria-label': (0, _translations._tinject)('TOOLBAR_HELP')
      })
    )
  );
};

/***/ }),

/***/ "./client/src/components/ToolbarButton.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactstrap = __webpack_require__(1);

var _hookHotkeys = __webpack_require__("./client/src/lib/hookHotkeys.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var preventFocusSteal = function preventFocusSteal(event) {
  return event.preventDefault();
};

exports.default = function (props) {
  var ariaLabel = props['aria-label'],
      noText = props.noText,
      icon = props.icon,
      _props$className = props.className,
      className = _props$className === undefined ? '' : _props$className,
      _props$tabIndex = props.tabIndex,
      tabIndex = _props$tabIndex === undefined ? '-1' : _props$tabIndex,
      hotKey = props.hotKey,
      onClick = props.onClick,
      buttonProps = _objectWithoutProperties(props, ['aria-label', 'noText', 'icon', 'className', 'tabIndex', 'hotKey', 'onClick']);

  var registerHotKey = (0, _hookHotkeys.useHotKey)();
  (0, _react.useEffect)(function () {
    return hotKey && onClick && registerHotKey(hotKey, onClick);
  }, [hotKey, onClick]);
  if (noText && !ariaLabel) {
    throw new Error('Cannot create a button with no accessible name. If using `noText`, also specify `aria-label`');
  }
  var classes = {
    icon: 'font-icon-' + icon,
    noText: 'btn--no-text'
  };
  var amendedProps = _extends({}, buttonProps, {
    className: [].concat(_toConsumableArray(className.split(' ')), _toConsumableArray(Object.keys(classes).filter(function (trigger) {
      return props[trigger];
    }).map(function (trigger) {
      return classes[trigger];
    }))).join(' '),
    tabIndex: tabIndex,
    onClick: onClick,
    onMouseDown: preventFocusSteal
  });
  return _react2.default.createElement(_reactstrap.Button, _extends({}, amendedProps, { 'aria-label': ariaLabel }));
};

/***/ }),

/***/ "./client/src/components/UncontrolledTextField.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _FieldHolder = __webpack_require__(5);

var _FieldHolder2 = _interopRequireDefault(_FieldHolder);

var _withNoInvalidation = __webpack_require__("./client/src/components/higher-order/withNoInvalidation.js");

var _withNoInvalidation2 = _interopRequireDefault(_withNoInvalidation);

var _reactstrap = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _FieldHolder2.default)((0, _withNoInvalidation2.default)(_reactstrap.Input));

/***/ }),

/***/ "./client/src/components/higher-order/withNoInvalidation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = function (Field) {
  return function (suppliedProps) {
    var fieldHolderSpecificProps = ['extraClass', 'leftTitle', 'rightTitle', 'description', 'hideLabels', 'noHolder', 'message', 'data'];
    var amendedProps = Object.keys(suppliedProps).filter(function (propName) {
      return !fieldHolderSpecificProps.includes(propName);
    }).reduce(function (domSafeProps, prop) {
      return _extends({}, domSafeProps, _defineProperty({}, prop, suppliedProps[prop]));
    }, {});

    if (suppliedProps.extraClass) {
      amendedProps.className = amendedProps.className.split(' ').concat(suppliedProps.extraClass.split(' ').filter(function (c) {
        return c !== 'is-invalid';
      })).join(' ');
    }

    return _react2.default.createElement(Field, amendedProps);
  };
};

/***/ }),

/***/ "./client/src/lib/hookHotkeys.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useHotKey = exports.HotKeyRegistrar = undefined;

var _react = __webpack_require__(0);

var HotKeyRegistrar = exports.HotKeyRegistrar = (0, _react.createContext)(null);

var useHotKey = exports.useHotKey = function useHotKey() {
  return (0, _react.useContext)(HotKeyRegistrar);
};

/***/ }),

/***/ "./client/src/lib/hookShortcodes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useShortcodes = exports.ShortcodeConfig = undefined;

var _react = __webpack_require__(0);

var ShortcodeConfig = exports.ShortcodeConfig = (0, _react.createContext)(null);

var useShortcodes = exports.useShortcodes = function useShortcodes() {
  return (0, _react.useContext)(ShortcodeConfig);
};

/***/ }),

/***/ "./client/src/lib/keyboard.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cloneKeyboardEvent = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _isHotkey = __webpack_require__("./node_modules/is-hotkey/lib/index.js");

exports.default = function () {
  var hotKeyRegister = {};

  var isRegisteredHotKey = function isRegisteredHotKey(keyPressConfig) {
    return Object.keys(hotKeyRegister).find(function (registeredCombo) {
      return hotKeyRegister[registeredCombo].matches(keyPressConfig);
    });
  };

  var registerHotKey = function registerHotKey(keyCombo, handler) {
    var keyPressConfig = (0, _isHotkey.parseHotkey)(keyCombo);
    if (keyPressConfig.altKey || keyPressConfig.ctrlKey || keyPressConfig.metaKey || keyPressConfig.shiftKey) {
      console && console.warn('Hot keys should always use modifiers - see WCAG 2.1 criterion 2.4.1');
    }
    var exists = isRegisteredHotKey(keyPressConfig);
    if (exists !== undefined) {
      var as = keyCombo === exists ? '' : ' as ' + exists;
      throw new Error('Duplicate hot key registration - ' + keyCombo + ' already exists' + as);
    }
    hotKeyRegister[keyCombo] = { matches: (0, _isHotkey.isHotkey)(keyCombo), handler: handler };
    return function () {
      return delete hotKeyRegister[keyCombo];
    };
  };

  var handleHotKey = function handleHotKey(event) {
    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) {
      var keyCombo = isRegisteredHotKey(event);
      if (keyCombo) {
        event.preventDefault();
        hotKeyRegister[keyCombo].handler(event);
      }
    }
  };

  return {
    registerHotKey: registerHotKey,
    handleHotKey: handleHotKey
  };
};

var cloneKeyboardEvent = exports.cloneKeyboardEvent = function cloneKeyboardEvent(_ref) {
  var type = _ref.type,
      bubbles = _ref.bubbles,
      cancelable = _ref.cancelable,
      composed = _ref.composed,
      detail = _ref.detail,
      view = _ref.view,
      sourceCapabiliites = _ref.sourceCapabiliites,
      key = _ref.key,
      code = _ref.code,
      location = _ref.location,
      repeat = _ref.repeat,
      isComposing = _ref.isComposing,
      charCode = _ref.charCode,
      keyCode = _ref.keyCode,
      ctrlKey = _ref.ctrlKey,
      shiftKey = _ref.shiftKey,
      altKey = _ref.altKey,
      metaKey = _ref.metaKey;
  var overrideType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var overrideOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return new KeyboardEvent(overrideType || type, _extends({
    bubbles: bubbles,
    cancelable: cancelable,
    composed: composed,
    detail: detail,
    view: view,
    sourceCapabiliites: sourceCapabiliites,
    key: key,
    code: code,
    location: location,
    repeat: repeat,
    isComposing: isComposing,
    charCode: charCode,
    keyCode: keyCode,
    ctrlKey: ctrlKey,
    shiftKey: shiftKey,
    altKey: altKey,
    metaKey: metaKey
  }, overrideOptions));
};

/***/ }),

/***/ "./client/src/lib/shortcodeSerialiser.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toStorableString = exports.toSlateNodeTree = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _parser = __webpack_require__("./node_modules/@bbob/parser/dist/index.js");

var _slate = __webpack_require__("./node_modules/slate/dist/index.es.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var createSlateNode = {
  fromParserNode: function fromParserNode(_ref, shortcodeDefinitions) {
    var tag = _ref.tag,
        attributes = _ref.attrs,
        content = _ref.content;
    return {
      type: 'shortcode',
      shortcode: tag,
      attributes: Object.keys(attributes).filter(function (v) {
        return v;
      }).reduce(function (r, c) {
        return _extends({}, r, _defineProperty({}, c, attributes[c]));
      }, {}),
      selfclosing: shortcodeDefinitions[tag].content === null || undefined,
      children: [{ text: content ? content.join('') : '' }]
    };
  },
  fromString: function fromString(text) {
    return { text: text };
  }
};

var toSlateNodeTree = exports.toSlateNodeTree = function toSlateNodeTree(input, shortcodeDefinitions) {
  var validCodes = Object.keys(shortcodeDefinitions);
  if (!validCodes || validCodes.length === 0 || !input) {
    return [createSlateNode.fromString(input)];
  }

  var parserOptions = { onlyAllowTags: validCodes };
  var codeNodes = (0, _parser.parse)(input, parserOptions);
  return codeNodes.map(function (node) {
    return (typeof node === 'undefined' ? 'undefined' : _typeof(node)) === 'object' && typeof node.tag === 'string' && node.tag ? createSlateNode.fromParserNode(node, shortcodeDefinitions) : createSlateNode.fromString(node);
  });
};

var toStringFromSlate = {
  textNode: function textNode(node) {
    return _slate.Node.string(node);
  },
  shortcodeElement: function shortcodeElement(node) {
    var code = node.shortcode,
        _node$attributes = node.attributes,
        attributes = _node$attributes === undefined ? {} : _node$attributes;

    var stringifyAttribute = function stringifyAttribute(key) {
      var value = attributes[key];
      var needsQuotes = value.match(/\s/);
      return key + '=' + (needsQuotes ? '"' + value + '"' : value);
    };
    var attributesString = Object.keys(attributes).reduce(function (prev, attribute) {
      return prev + ' ' + stringifyAttribute(attribute);
    }, '');
    return '[' + code + attributesString + ']' + _slate.Node.string(node) + '[/' + code + ']';
  },
  elementNode: function elementNode(node, shortcodeDefinitions) {
    return _slate.Element.isElementType(node, 'shortcode') ? toStringFromSlate.shortcodeElement(node) : toStorableString(node.children, shortcodeDefinitions);
  }
};

var toStorableString = exports.toStorableString = function toStorableString(tree, shortcodeDefinitions) {
  return tree.reduce(function (value, node) {
    return value + (_slate.Text.isText(node) ? toStringFromSlate.textNode(node) : toStringFromSlate.elementNode(node, shortcodeDefinitions));
  }, '');
};

exports.default = {
  deserialise: toSlateNodeTree,
  serialise: toStorableString
};

/***/ }),

/***/ "./client/src/lib/shortcodeTransforms.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeShortcode = exports.updateShortcode = exports.applyShortcode = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slate = __webpack_require__("./node_modules/slate/dist/index.es.js");

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var convertToShortcode = function convertToShortcode(editor, text, shortcodeSettings) {
  _slate.Transforms.wrapNodes(editor, shortcodeSettings, {
    split: true,
    match: function match(node) {
      return !editor.isShortcode(node);
    }
  });
  _slate.Editor.insertText(editor, text);
};

var insertShortcode = function insertShortcode(editor, shortcodeSettings) {
  return _slate.Transforms.insertNodes(editor, shortcodeSettings);
};

var applyShortcode = function applyShortcode(editor, _ref) {
  var _ref$content = _ref.content,
      text = _ref$content === undefined ? '' : _ref$content,
      shortcodeSettings = _objectWithoutProperties(_ref, ['content']);

  var shortcodeSlateElement = _extends({
    type: 'shortcode'
  }, shortcodeSettings);
  return _slate.Range.isExpanded(editor.selection) ? convertToShortcode(editor, text, shortcodeSlateElement) : insertShortcode(editor, _extends({}, shortcodeSlateElement, { children: [{ text: text }] }));
};

exports.applyShortcode = applyShortcode;
var updateShortcode = function updateShortcode(editor, _ref2) {
  var _ref2$content = _ref2.content,
      text = _ref2$content === undefined ? '' : _ref2$content,
      shortcodeSettings = _objectWithoutProperties(_ref2, ['content']);

  _slate.Transforms.setNodes(editor, shortcodeSettings, {
    match: function match(node) {
      return editor.isShortcode(node);
    }
  });

  var _editor$hasShortcode = editor.hasShortcode(),
      _editor$hasShortcode2 = _slicedToArray(_editor$hasShortcode, 2),
      shortcodePath = _editor$hasShortcode2[1];

  _slate.Transforms.insertText(editor, text, { at: shortcodePath });
};

exports.updateShortcode = updateShortcode;
var removeShortcode = exports.removeShortcode = function removeShortcode(editor) {
  return _slate.Transforms.unwrapNodes(editor, {
    match: function match(node) {
      return editor.isShortcode(node);
    }
  }) || _slate.Transforms.removeNodes(editor, {
    match: function match(node) {
      return editor.isShortcode(node);
    }
  });
};

/***/ }),

/***/ "./client/src/lib/translations.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._tinject = exports.DICTIONARY = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _i18n = __webpack_require__(7);

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var moduleName = 'Shortcodable';

var entity = function entity(id) {
  return moduleName + '.' + id.toUpperCase();
};

var verbs = {
  VERB_ADD: 'Add',
  VERB_EDIT: 'Edit',
  VERB_REMOVE: 'Remove'
};

var buttons = {
  TOOLBAR_ACTION: '{verb} shortcode',
  TOOLBAR_HELP: 'Shortcode editor help'
};

var editorControls = {
  EDITOR_TITLE: '{verb} Shortcode',
  FIELD_SHORTCODE: 'Shortcode',
  FIELD_CONTENT: 'Content',
  CONTENT_NOTICE: 'Content is not accepted by the {shortcode} shortcode.',
  CONTENT_WARNING: ' Selected content (as follows) will be deleted when applying this configuration: ',
  EDITOR_ATTRIBUTES: 'Attributes',
  ACTIONS_APPLY: 'Apply',
  ACTIONS_REMOVE: 'Remove',
  ACTIONS_CANCEL: 'Cancel'
};

var DICTIONARY = exports.DICTIONARY = _extends({}, verbs, buttons, editorControls);

var _tinject = exports._tinject = function _tinject(entry, params) {
  return (0, _i18n.inject)(_i18n2.default._t(entity(entry), DICTIONARY[entry]), params || {});
};

exports.default = Object.keys(DICTIONARY).reduce(function (table, entry) {
  return _extends({}, table, _defineProperty({}, entity(entry), DICTIONARY[entry]));
}, {});

/***/ }),

/***/ "./client/src/lib/withShortcodes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _slate = __webpack_require__("./node_modules/slate/dist/index.es.js");

exports.default = function (editor) {
  var originalIsInline = editor.isInline,
      orignialIsVoid = editor.isVoid;

  return Object.assign(editor, {
    isShortcode: function isShortcode(element) {
      return _slate.Element.isElementType(element, 'shortcode');
    },
    isInline: function isInline(element) {
      return editor.isShortcode(element) || originalIsInline(element);
    },
    isVoid: function isVoid(element) {
      return editor.isShortcode(element) && element.selfclosing || orignialIsVoid(element);
    },
    isContentChanging: function isContentChanging() {
      return editor.operations.some(function (op) {
        return op.type !== 'set_selection';
      });
    },
    hasShortcode: function hasShortcode() {
      var _Editor$nodes = _slate.Editor.nodes(editor, { match: function match(node) {
          return editor.isShortcode(node);
        } }),
          _Editor$nodes2 = _slicedToArray(_Editor$nodes, 1),
          shortcodeNode = _Editor$nodes2[0];

      return shortcodeNode;
    }
  });
};

/***/ }),

/***/ "./node_modules/@bbob/parser/dist/index.js":
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
     true ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.BbobParser = {}));
})(this, (function (exports) { 'use strict';

    var TagNode$1 = {};

    var char = {};

    Object.defineProperty(char, "__esModule", {
        value: true
    });
    var BACKSLASH_1 = char.BACKSLASH = char.PLACEHOLDER_SPACE = char.PLACEHOLDER_SPACE_TAB = SLASH_1 = char.SLASH = CLOSE_BRAKET_1 = char.CLOSE_BRAKET = OPEN_BRAKET_1 = char.OPEN_BRAKET = SPACE_1 = char.SPACE = QUOTEMARK_1 = char.QUOTEMARK = EQ_1 = char.EQ = TAB_1 = char.TAB = char.R = char.F = N_1 = char.N = void 0;
    var N = '\n';
    var TAB = '\t';
    var F = '\f';
    var R = '\r';
    var EQ = '=';
    var QUOTEMARK = '"';
    var SPACE = ' ';
    var OPEN_BRAKET = '[';
    var CLOSE_BRAKET = ']';
    var SLASH = '/';
    var BACKSLASH = '\\';
    var PLACEHOLDER_SPACE_TAB = '    ';
    var PLACEHOLDER_SPACE = ' ';
    var N_1 = char.N = N;
    char.F = F;
    char.R = R;
    var TAB_1 = char.TAB = TAB;
    var EQ_1 = char.EQ = EQ;
    var QUOTEMARK_1 = char.QUOTEMARK = QUOTEMARK;
    var SPACE_1 = char.SPACE = SPACE;
    var OPEN_BRAKET_1 = char.OPEN_BRAKET = OPEN_BRAKET;
    var CLOSE_BRAKET_1 = char.CLOSE_BRAKET = CLOSE_BRAKET;
    var SLASH_1 = char.SLASH = SLASH;
    char.PLACEHOLDER_SPACE_TAB = PLACEHOLDER_SPACE_TAB;
    char.PLACEHOLDER_SPACE = PLACEHOLDER_SPACE;
    BACKSLASH_1 = char.BACKSLASH = BACKSLASH;

    var lib = {};

    Object.defineProperty(lib, "__esModule", {
        value: true
    });
    lib.isEOL = lib.isStringNode = isTagNode_1 = lib.isTagNode = lib.getUniqAttr = lib.getNodeLength = lib.escapeHTML = lib.appendToNode = lib.attrValue = lib.attrsToString = void 0;
    var _char$1 = char;
    function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) {
            for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){
                arr2[i] = arr[i];
            }
            return arr2;
        }
    }
    function _iterableToArray(iter) {
        if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
    }
    function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
    }
    function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
    }
    var _typeof = function(obj) {
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var isTagNode = function(el) {
        return typeof el === 'object' && !!el.tag;
    };
    var isStringNode = function(el) {
        return typeof el === 'string';
    };
    var isEOL = function(el) {
        return el === _char$1.N;
    };
    var keysReduce = function(obj, reduce, def) {
        return Object.keys(obj).reduce(reduce, def);
    };
    var getNodeLength = function(node) {
        if (isTagNode(node)) {
            return node.content.reduce(function(count, contentNode) {
                return count + getNodeLength(contentNode);
            }, 0);
        }
        if (isStringNode(node)) {
            return node.length;
        }
        return 0;
    };
    /**
     * Appends value to Tag Node
     * @param {TagNode} node
     * @param value
     */ var appendToNode = function(node, value) {
        node.content.push(value);
    };
    /**
     * Replaces " to &qquot;
     * @param {String} value
     */ var escapeHTML = function(value) {
        return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;')// eslint-disable-next-line no-script-url
        .replace(/(javascript):/gi, '$1%3A');
    };
    /**
     * Acept name and value and return valid html5 attribute string
     * @param {String} name
     * @param {String} value
     * @return {string}
     */ var attrValue = function(name, value) {
        var type = typeof value === "undefined" ? "undefined" : _typeof(value);
        var types = {
            boolean: function() {
                return value ? "".concat(name) : '';
            },
            number: function() {
                return "".concat(name, "=\"").concat(value, "\"");
            },
            string: function() {
                return "".concat(name, "=\"").concat(escapeHTML(value), "\"");
            },
            object: function() {
                return "".concat(name, "=\"").concat(escapeHTML(JSON.stringify(value)), "\"");
            }
        };
        return types[type] ? types[type]() : '';
    };
    /**
     * Transforms attrs to html params string
     * @param values
     */ var attrsToString = function(values) {
        // To avoid some malformed attributes
        if (values == null) {
            return '';
        }
        return keysReduce(values, function(arr, key) {
            return _toConsumableArray(arr).concat([
                attrValue(key, values[key])
            ]);
        }, [
            ''
        ]).join(' ');
    };
    /**
     * Gets value from
     * @example
     * getUniqAttr({ 'foo': true, 'bar': bar' }) => 'bar'
     * @param attrs
     * @returns {string}
     */ var getUniqAttr = function(attrs) {
        return keysReduce(attrs, function(res, key) {
            return attrs[key] === key ? attrs[key] : null;
        }, null);
    };
    lib.attrsToString = attrsToString;
    lib.attrValue = attrValue;
    lib.appendToNode = appendToNode;
    lib.escapeHTML = escapeHTML;
    lib.getNodeLength = getNodeLength;
    lib.getUniqAttr = getUniqAttr;
    var isTagNode_1 = lib.isTagNode = isTagNode;
    lib.isStringNode = isStringNode;
    lib.isEOL = isEOL;

    Object.defineProperty(TagNode$1, "__esModule", {
        value: true
    });
    var default_1 = TagNode$1.default = exports.TagNode = TagNode$1.TagNode = void 0;
    var _char = char;
    var _index = lib;
    function _classCallCheck$1(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    function _defineProperties$1(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    function _createClass$1(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties$1(Constructor, staticProps);
        return Constructor;
    }
    function _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            obj[key] = value;
        }
        return obj;
    }
    function _objectSpread(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i] != null ? arguments[i] : {
            };
            var ownKeys = Object.keys(source);
            if (typeof Object.getOwnPropertySymbols === "function") {
                ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                    return Object.getOwnPropertyDescriptor(source, sym).enumerable;
                }));
            }
            ownKeys.forEach(function(key) {
                _defineProperty(target, key, source[key]);
            });
        }
        return target;
    }
    var getTagAttrs = function(tag, params) {
        var uniqAattr = (_index).getUniqAttr(params);
        if (uniqAattr) {
            var tagAttr = (_index).attrValue(tag, uniqAattr);
            var attrs = _objectSpread({
            }, params);
            delete attrs[uniqAattr];
            var attrsStr = (_index).attrsToString(attrs);
            return "".concat(tagAttr).concat(attrsStr);
        }
        return "".concat(tag).concat((_index).attrsToString(params));
    };
    var TagNode = /*#__PURE__*/ function() {
        function TagNode(tag, attrs, content) {
            _classCallCheck$1(this, TagNode);
            this.tag = tag;
            this.attrs = attrs;
            this.content = Array.isArray(content) ? content : [
                content
            ];
        }
        _createClass$1(TagNode, [
            {
                key: "attr",
                value: function attr(name, value) {
                    if (typeof value !== 'undefined') {
                        this.attrs[name] = value;
                    }
                    return this.attrs[name];
                }
            },
            {
                key: "append",
                value: function append(value) {
                    return (_index).appendToNode(this, value);
                }
            },
            {
                key: "length",
                get: function get() {
                    return (_index).getNodeLength(this);
                }
            },
            {
                key: "toTagStart",
                value: function toTagStart(param) {
                    var ref = param === void 0 ? {
                    } : param, _openTag = ref.openTag, openTag = _openTag === void 0 ? _char.OPEN_BRAKET : _openTag, _closeTag = ref.closeTag, closeTag = _closeTag === void 0 ? _char.CLOSE_BRAKET : _closeTag;
                    var tagAttrs = getTagAttrs(this.tag, this.attrs);
                    return "".concat(openTag).concat(tagAttrs).concat(closeTag);
                }
            },
            {
                key: "toTagEnd",
                value: function toTagEnd(param) {
                    var ref = param === void 0 ? {
                    } : param, _openTag = ref.openTag, openTag = _openTag === void 0 ? _char.OPEN_BRAKET : _openTag, _closeTag = ref.closeTag, closeTag = _closeTag === void 0 ? _char.CLOSE_BRAKET : _closeTag;
                    return "".concat(openTag).concat(_char.SLASH).concat(this.tag).concat(closeTag);
                }
            },
            {
                key: "toTagNode",
                value: function toTagNode() {
                    return new TagNode(this.tag.toLowerCase(), this.attrs, this.content);
                }
            },
            {
                key: "toString",
                value: function toString(param) {
                    var ref = param === void 0 ? {
                    } : param, _openTag = ref.openTag, openTag = _openTag === void 0 ? _char.OPEN_BRAKET : _openTag, _closeTag = ref.closeTag, closeTag = _closeTag === void 0 ? _char.CLOSE_BRAKET : _closeTag;
                    var isEmpty = this.content.length === 0;
                    var content = this.content.reduce(function(r, node) {
                        return r + node.toString({
                            openTag: openTag,
                            closeTag: closeTag
                        });
                    }, '');
                    var tagStart = this.toTagStart({
                        openTag: openTag,
                        closeTag: closeTag
                    });
                    if (isEmpty) {
                        return tagStart;
                    }
                    return "".concat(tagStart).concat(content).concat(this.toTagEnd({
                        openTag: openTag,
                        closeTag: closeTag
                    }));
                }
            }
        ]);
        return TagNode;
    }();
    TagNode.create = function(tag, param, param1) {
        var attrs = param === void 0 ? {
        } : param, content = param1 === void 0 ? [] : param1;
        return new TagNode(tag, attrs, content);
    };
    TagNode.isOf = function(node, type) {
        return node.tag === type;
    };
    exports.TagNode = TagNode$1.TagNode = TagNode;
    var _default = TagNode;
    default_1 = TagNode$1.default = _default;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    function _defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
    }
    // type, value, line, row,
    var TOKEN_TYPE_ID = 'type'; // 0;
    var TOKEN_VALUE_ID = 'value'; // 1;
    var TOKEN_COLUMN_ID = 'row'; // 2;
    var TOKEN_LINE_ID = 'line'; // 3;
    var TOKEN_TYPE_WORD = 1; // 'word';
    var TOKEN_TYPE_TAG = 2; // 'tag';
    var TOKEN_TYPE_ATTR_NAME = 3; // 'attr-name';
    var TOKEN_TYPE_ATTR_VALUE = 4; // 'attr-value';
    var TOKEN_TYPE_SPACE = 5; // 'space';
    var TOKEN_TYPE_NEW_LINE = 6; // 'new-line';
    /**
     * @param {Token} token
     * @returns {string}
     */ var getTokenValue = function(token) {
        if (token && typeof token[TOKEN_VALUE_ID] !== 'undefined') {
            return token[TOKEN_VALUE_ID];
        }
        return '';
    };
    /**
     * @param {Token}token
     * @returns {number}
     */ var getTokenLine = function(token) {
        return token && token[TOKEN_LINE_ID] || 0;
    };
    var getTokenColumn = function(token) {
        return token && token[TOKEN_COLUMN_ID] || 0;
    };
    /**
     * @param {Token} token
     * @returns {boolean}
     */ var isTextToken = function(token) {
        if (token && typeof token[TOKEN_TYPE_ID] !== 'undefined') {
            return token[TOKEN_TYPE_ID] === TOKEN_TYPE_SPACE || token[TOKEN_TYPE_ID] === TOKEN_TYPE_NEW_LINE || token[TOKEN_TYPE_ID] === TOKEN_TYPE_WORD;
        }
        return false;
    };
    /**
     * @param {Token} token
     * @returns {boolean}
     */ var isTagToken = function(token) {
        if (token && typeof token[TOKEN_TYPE_ID] !== 'undefined') {
            return token[TOKEN_TYPE_ID] === TOKEN_TYPE_TAG;
        }
        return false;
    };
    var isTagEnd = function(token) {
        return getTokenValue(token).charCodeAt(0) === SLASH_1.charCodeAt(0);
    };
    var isTagStart = function(token) {
        return !isTagEnd(token);
    };
    var isAttrNameToken = function(token) {
        if (token && typeof token[TOKEN_TYPE_ID] !== 'undefined') {
            return token[TOKEN_TYPE_ID] === TOKEN_TYPE_ATTR_NAME;
        }
        return false;
    };
    /**
     * @param {Token} token
     * @returns {boolean}
     */ var isAttrValueToken = function(token) {
        if (token && typeof token[TOKEN_TYPE_ID] !== 'undefined') {
            return token[TOKEN_TYPE_ID] === TOKEN_TYPE_ATTR_VALUE;
        }
        return false;
    };
    var getTagName = function(token) {
        var value = getTokenValue(token);
        return isTagEnd(token) ? value.slice(1) : value;
    };
    var convertTagToText = function(token) {
        var text = OPEN_BRAKET_1;
        text += getTokenValue(token);
        text += CLOSE_BRAKET_1;
        return text;
    };
    var Token = /*#__PURE__*/ function() {
        function Token(type, value, line, row) {
            _classCallCheck(this, Token);
            this[TOKEN_TYPE_ID] = Number(type);
            this[TOKEN_VALUE_ID] = String(value);
            this[TOKEN_LINE_ID] = Number(line);
            this[TOKEN_COLUMN_ID] = Number(row);
        }
        _createClass(Token, [
            {
                key: "isEmpty",
                value: function isEmpty() {
                    // eslint-disable-next-line no-restricted-globals
                    return isNaN(this[TOKEN_TYPE_ID]);
                }
            },
            {
                key: "isText",
                value: function isText() {
                    return isTextToken(this);
                }
            },
            {
                key: "isTag",
                value: function isTag() {
                    return isTagToken(this);
                }
            },
            {
                key: "isAttrName",
                value: function isAttrName() {
                    return isAttrNameToken(this);
                }
            },
            {
                key: "isAttrValue",
                value: function isAttrValue() {
                    return isAttrValueToken(this);
                }
            },
            {
                key: "isStart",
                value: function isStart() {
                    return isTagStart(this);
                }
            },
            {
                key: "isEnd",
                value: function isEnd() {
                    return isTagEnd(this);
                }
            },
            {
                key: "getName",
                value: function getName() {
                    return getTagName(this);
                }
            },
            {
                key: "getValue",
                value: function getValue() {
                    return getTokenValue(this);
                }
            },
            {
                key: "getLine",
                value: function getLine() {
                    return getTokenLine(this);
                }
            },
            {
                key: "getColumn",
                value: function getColumn() {
                    return getTokenColumn(this);
                }
            },
            {
                key: "toString",
                value: function toString() {
                    return convertTagToText(this);
                }
            }
        ]);
        return Token;
    }();
    var TYPE_WORD = TOKEN_TYPE_WORD;
    var TYPE_TAG = TOKEN_TYPE_TAG;
    var TYPE_ATTR_NAME = TOKEN_TYPE_ATTR_NAME;
    var TYPE_ATTR_VALUE = TOKEN_TYPE_ATTR_VALUE;
    var TYPE_SPACE = TOKEN_TYPE_SPACE;
    var TYPE_NEW_LINE = TOKEN_TYPE_NEW_LINE;

    function CharGrabber(source, options) {
        var cursor = {
            pos: 0,
            len: source.length
        };
        var substrUntilChar = function(char) {
            var pos = cursor.pos;
            var idx = source.indexOf(char, pos);
            return idx >= 0 ? source.substr(pos, idx - pos) : '';
        };
        var includes = function(val) {
            return source.indexOf(val, cursor.pos) >= 0;
        };
        var hasNext = function() {
            return cursor.len > cursor.pos;
        };
        var isLast = function() {
            return cursor.pos === cursor.len;
        };
        var skip = function(param, silent) {
            var num = param === void 0 ? 1 : param;
            cursor.pos += num;
            if (options && options.onSkip && !silent) {
                options.onSkip();
            }
        };
        var rest = function() {
            return source.substr(cursor.pos);
        };
        var curr = function() {
            return source[cursor.pos];
        };
        var prev = function() {
            var prevPos = cursor.pos - 1;
            return typeof source[prevPos] !== 'undefined' ? source[prevPos] : null;
        };
        var next = function() {
            var nextPos = cursor.pos + 1;
            return nextPos <= source.length - 1 ? source[nextPos] : null;
        };
        var grabWhile = function(cond, silent) {
            var start = 0;
            if (hasNext()) {
                start = cursor.pos;
                while(hasNext() && cond(curr())){
                    skip(1, silent);
                }
            }
            return source.substr(start, cursor.pos - start);
        };
        /**
       * @type {skip}
       */ this.skip = skip;
        /**
       * @returns {Boolean}
       */ this.hasNext = hasNext;
        /**
       * @returns {String}
       */ this.getCurr = curr;
        /**
       * @returns {String}
       */ this.getRest = rest;
        /**
       * @returns {String}
       */ this.getNext = next;
        /**
       * @returns {String}
       */ this.getPrev = prev;
        /**
       * @returns {Boolean}
       */ this.isLast = isLast;
        /**
       * @returns {Boolean}
       */ this.includes = includes;
        /**
       * @param {Function} cond
       * @param {Boolean} silent
       * @return {String}
       */ this.grabWhile = grabWhile;
        /**
       * Grabs rest of string until it find a char
       * @param {String} char
       * @return {String}
       */ this.substrUntilChar = substrUntilChar;
    }
    /**
     * Creates a grabber wrapper for source string, that helps to iterate over string char by char
     * @param {String} source
     * @param {Object} options
     * @param {Function} options.onSkip
     * @return CharGrabber
     */ var createCharGrabber = function(source, options) {
        return new CharGrabber(source, options);
    };
    /**
     * Trims string from start and end by char
     * @example
     *  trimChar('*hello*', '*') ==> 'hello'
     * @param {String} str
     * @param {String} charToRemove
     * @returns {String}
     */ var trimChar = function(str, charToRemove) {
        while(str.charAt(0) === charToRemove){
            // eslint-disable-next-line no-param-reassign
            str = str.substring(1);
        }
        while(str.charAt(str.length - 1) === charToRemove){
            // eslint-disable-next-line no-param-reassign
            str = str.substring(0, str.length - 1);
        }
        return str;
    };
    /**
     * Unquotes \" to "
     * @param str
     * @return {String}
     */ var unquote = function(str) {
        return str.replace(BACKSLASH_1 + QUOTEMARK_1, QUOTEMARK_1);
    };
    function NodeList(param) {
        var values = param === void 0 ? [] : param;
        var nodes = values;
        var getLast = function() {
            return Array.isArray(nodes) && nodes.length > 0 && typeof nodes[nodes.length - 1] !== 'undefined' ? nodes[nodes.length - 1] : null;
        };
        var flushLast = function() {
            return nodes.length ? nodes.pop() : false;
        };
        var push = function(value) {
            return nodes.push(value);
        };
        var toArray = function() {
            return nodes;
        };
        this.push = push;
        this.toArray = toArray;
        this.getLast = getLast;
        this.flushLast = flushLast;
    }
    /**
     *
     * @param values
     * @return {NodeList}
     */ var createList = function(param) {
        var values = param === void 0 ? [] : param;
        return new NodeList(values);
    };

    // for cases <!-- -->
    var EM = '!';
    /**
     * Creates a Token entity class
     * @param {Number} type
     * @param {String} value
     * @param {Number} r line number
     * @param {Number} cl char number in line
     */ var createToken = function(type, value, param, param1) {
        var r = param === void 0 ? 0 : param, cl = param1 === void 0 ? 0 : param1;
        return new Token(type, value, r, cl);
    };
    /**
     * @typedef {Object} Lexer
     * @property {Function} tokenize
     * @property {Function} isTokenNested
     */ /**
     * @param {String} buffer
     * @param {Object} options
     * @param {Function} options.onToken
     * @param {String} options.openTag
     * @param {String} options.closeTag
     * @param {Boolean} options.enableEscapeTags
     * @return {Lexer}
     */ function createLexer(buffer, param) {
        var options = param === void 0 ? {
        } : param;
        var emitToken = /**
       * Emits newly created token to subscriber
       * @param {Number} type
       * @param {String} value
       */ function emitToken(type, value) {
            var token = createToken(type, value, row, col);
            onToken(token);
            tokenIndex += 1;
            tokens[tokenIndex] = token;
        };
        var nextTagState = function nextTagState(tagChars, isSingleValueTag) {
            if (tagMode === TAG_STATE_ATTR) {
                var validAttrName = function(char) {
                    return !(char === EQ_1 || isWhiteSpace(char));
                };
                var name = tagChars.grabWhile(validAttrName);
                var isEnd = tagChars.isLast();
                var isValue = tagChars.getCurr() !== EQ_1;
                tagChars.skip();
                if (isEnd || isValue) {
                    emitToken(TYPE_ATTR_VALUE, unq(name));
                } else {
                    emitToken(TYPE_ATTR_NAME, name);
                }
                if (isEnd) {
                    return TAG_STATE_NAME;
                }
                if (isValue) {
                    return TAG_STATE_ATTR;
                }
                return TAG_STATE_VALUE;
            }
            if (tagMode === TAG_STATE_VALUE) {
                var stateSpecial = false;
                var validAttrValue = function(char) {
                    // const isEQ = char === EQ;
                    var isQM = char === QUOTEMARK_1;
                    var prevChar = tagChars.getPrev();
                    var nextChar = tagChars.getNext();
                    var isPrevSLASH = prevChar === BACKSLASH_1;
                    var isNextEQ = nextChar === EQ_1;
                    var isWS = isWhiteSpace(char);
                    // const isPrevWS = isWhiteSpace(prevChar);
                    var isNextWS = isWhiteSpace(nextChar);
                    if (stateSpecial && isSpecialChar(char)) {
                        return true;
                    }
                    if (isQM && !isPrevSLASH) {
                        stateSpecial = !stateSpecial;
                        if (!stateSpecial && !(isNextEQ || isNextWS)) {
                            return false;
                        }
                    }
                    if (!isSingleValueTag) {
                        return isWS === false;
                    // return (isEQ || isWS) === false;
                    }
                    return true;
                };
                var name = tagChars.grabWhile(validAttrValue);
                tagChars.skip();
                emitToken(TYPE_ATTR_VALUE, unq(name));
                if (tagChars.isLast()) {
                    return TAG_STATE_NAME;
                }
                return TAG_STATE_ATTR;
            }
            var validName = function(char) {
                return !(char === EQ_1 || isWhiteSpace(char) || tagChars.isLast());
            };
            var name = tagChars.grabWhile(validName);
            emitToken(TYPE_TAG, name);
            tagChars.skip();
            // in cases when we has [url=someval]GET[/url] and we dont need to parse all
            if (isSingleValueTag) {
                return TAG_STATE_VALUE;
            }
            var hasEQ = tagChars.includes(EQ_1);
            return hasEQ ? TAG_STATE_ATTR : TAG_STATE_VALUE;
        };
        var stateTag = function stateTag() {
            var currChar = chars.getCurr();
            if (currChar === openTag) {
                var nextChar = chars.getNext();
                chars.skip();
                // detect case where we have '[My word [tag][/tag]' or we have '[My last line word'
                var substr = chars.substrUntilChar(closeTag);
                var hasInvalidChars = substr.length === 0 || substr.indexOf(openTag) >= 0;
                if (isCharReserved(nextChar) || hasInvalidChars || chars.isLast()) {
                    emitToken(TYPE_WORD, currChar);
                    return STATE_WORD;
                }
                // [myTag   ]
                var isNoAttrsInTag = substr.indexOf(EQ_1) === -1;
                // [/myTag]
                var isClosingTag = substr[0] === SLASH_1;
                if (isNoAttrsInTag || isClosingTag) {
                    var name = chars.grabWhile(function(char) {
                        return char !== closeTag;
                    });
                    chars.skip(); // skip closeTag
                    emitToken(TYPE_TAG, name);
                    return STATE_WORD;
                }
                return STATE_TAG_ATTRS;
            }
            return STATE_WORD;
        };
        var stateAttrs = function stateAttrs() {
            var silent = true;
            var tagStr = chars.grabWhile(function(char) {
                return char !== closeTag;
            }, silent);
            var tagGrabber = createCharGrabber(tagStr, {
                onSkip: onSkip
            });
            var hasSpace = tagGrabber.includes(SPACE_1);
            tagMode = TAG_STATE_NAME;
            while(tagGrabber.hasNext()){
                tagMode = nextTagState(tagGrabber, !hasSpace);
            }
            chars.skip(); // skip closeTag
            return STATE_WORD;
        };
        var stateWord = function stateWord() {
            if (isNewLine(chars.getCurr())) {
                emitToken(TYPE_NEW_LINE, chars.getCurr());
                chars.skip();
                col = 0;
                row++;
                return STATE_WORD;
            }
            if (isWhiteSpace(chars.getCurr())) {
                emitToken(TYPE_SPACE, chars.grabWhile(isWhiteSpace));
                return STATE_WORD;
            }
            if (chars.getCurr() === openTag) {
                if (chars.includes(closeTag)) {
                    return STATE_TAG;
                }
                emitToken(TYPE_WORD, chars.getCurr());
                chars.skip();
                return STATE_WORD;
            }
            if (escapeTags) {
                if (isEscapeChar(chars.getCurr())) {
                    var currChar = chars.getCurr();
                    var nextChar = chars.getNext();
                    chars.skip(); // skip the \ without emitting anything
                    if (isEscapableChar(nextChar)) {
                        chars.skip(); // skip past the [, ] or \ as well
                        emitToken(TYPE_WORD, nextChar);
                        return STATE_WORD;
                    }
                    emitToken(TYPE_WORD, currChar);
                    return STATE_WORD;
                }
                var isChar = function(char) {
                    return isCharToken(char) && !isEscapeChar(char);
                };
                emitToken(TYPE_WORD, chars.grabWhile(isChar));
                return STATE_WORD;
            }
            emitToken(TYPE_WORD, chars.grabWhile(isCharToken));
            return STATE_WORD;
        };
        var tokenize = function tokenize() {
            stateMode = STATE_WORD;
            while(chars.hasNext()){
                switch(stateMode){
                    case STATE_TAG:
                        stateMode = stateTag();
                        break;
                    case STATE_TAG_ATTRS:
                        stateMode = stateAttrs();
                        break;
                    case STATE_WORD:
                        stateMode = stateWord();
                        break;
                    default:
                        stateMode = STATE_WORD;
                        break;
                }
            }
            tokens.length = tokenIndex + 1;
            return tokens;
        };
        var isTokenNested = function isTokenNested(token) {
            var value = openTag + SLASH_1 + token.getValue();
            // potential bottleneck
            return buffer.indexOf(value) > -1;
        };
        var STATE_WORD = 0;
        var STATE_TAG = 1;
        var STATE_TAG_ATTRS = 2;
        var TAG_STATE_NAME = 0;
        var TAG_STATE_ATTR = 1;
        var TAG_STATE_VALUE = 2;
        var row = 0;
        var col = 0;
        var tokenIndex = -1;
        var stateMode = STATE_WORD;
        var tagMode = TAG_STATE_NAME;
        var tokens = new Array(Math.floor(buffer.length));
        var openTag = options.openTag || OPEN_BRAKET_1;
        var closeTag = options.closeTag || CLOSE_BRAKET_1;
        var escapeTags = !!options.enableEscapeTags;
        var onToken = options.onToken || function() {
        };
        var RESERVED_CHARS = [
            closeTag,
            openTag,
            QUOTEMARK_1,
            BACKSLASH_1,
            SPACE_1,
            TAB_1,
            EQ_1,
            N_1,
            EM
        ];
        var NOT_CHAR_TOKENS = [
            // ...(options.enableEscapeTags ? [BACKSLASH] : []),
            openTag,
            SPACE_1,
            TAB_1,
            N_1, 
        ];
        var WHITESPACES = [
            SPACE_1,
            TAB_1
        ];
        var SPECIAL_CHARS = [
            EQ_1,
            SPACE_1,
            TAB_1
        ];
        var isCharReserved = function(char) {
            return RESERVED_CHARS.indexOf(char) >= 0;
        };
        var isNewLine = function(char) {
            return char === N_1;
        };
        var isWhiteSpace = function(char) {
            return WHITESPACES.indexOf(char) >= 0;
        };
        var isCharToken = function(char) {
            return NOT_CHAR_TOKENS.indexOf(char) === -1;
        };
        var isSpecialChar = function(char) {
            return SPECIAL_CHARS.indexOf(char) >= 0;
        };
        var isEscapableChar = function(char) {
            return char === openTag || char === closeTag || char === BACKSLASH_1;
        };
        var isEscapeChar = function(char) {
            return char === BACKSLASH_1;
        };
        var onSkip = function() {
            col++;
        };
        var unq = function(val) {
            return unquote(trimChar(val, QUOTEMARK_1));
        };
        var chars = createCharGrabber(buffer, {
            onSkip: onSkip
        });
        return {
            tokenize: tokenize,
            isTokenNested: isTokenNested
        };
    }

    /**
     * @public
     * @param {String} input
     * @param {Object} opts
     * @param {Function} opts.createTokenizer
     * @param {Array<string>} opts.onlyAllowTags
     * @param {String} opts.openTag
     * @param {String} opts.closeTag
     * @param {Boolean} opts.enableEscapeTags
     * @return {Array}
     */ var parse = function(input, param) {
        var opts = param === void 0 ? {
        } : param;
        var options = opts;
        var openTag = options.openTag || OPEN_BRAKET_1;
        var closeTag = options.closeTag || CLOSE_BRAKET_1;
        var tokenizer = null;
        /**
       * Result AST of nodes
       * @private
       * @type {NodeList}
       */ var nodes = createList();
        /**
       * Temp buffer of nodes that's nested to another node
       * @private
       * @type {NodeList}
       */ var nestedNodes = createList();
        /**
       * Temp buffer of nodes [tag..]...[/tag]
       * @private
       * @type {NodeList}
       */ var tagNodes = createList();
        /**
       * Temp buffer of tag attributes
       * @private
       * @type {NodeList}
       */ var tagNodesAttrName = createList();
        /**
       * Cache for nested tags checks
       */ var nestedTagsMap = new Set();
        /**
       *
       * @param token
       * @returns {boolean}
       */ var isTokenNested = function(token) {
            var value = token.getValue();
            if (!nestedTagsMap.has(value) && tokenizer.isTokenNested && tokenizer.isTokenNested(token)) {
                nestedTagsMap.add(value);
                return true;
            }
            return nestedTagsMap.has(value);
        };
        /**
       * @param tagName
       * @returns {boolean}
       */ var isTagNested = function(tagName) {
            return Boolean(nestedTagsMap.has(tagName));
        };
        /**
       * @private
       * @param {String} value
       * @return {boolean}
       */ var isAllowedTag = function(value) {
            if (options.onlyAllowTags && options.onlyAllowTags.length) {
                return options.onlyAllowTags.indexOf(value) >= 0;
            }
            return true;
        };
        /**
       * Flushes temp tag nodes and its attributes buffers
       * @private
       * @return {Array}
       */ var flushTagNodes = function() {
            if (tagNodes.flushLast()) {
                tagNodesAttrName.flushLast();
            }
        };
        /**
       * @private
       * @return {Array}
       */ var getNodes = function() {
            var lastNestedNode = nestedNodes.getLast();
            if (lastNestedNode && Array.isArray(lastNestedNode.content)) {
                return lastNestedNode.content;
            }
            return nodes.toArray();
        };
        /**
       * @private
       * @param {string|TagNode} node
       */ var appendNodes = function(node) {
            var items = getNodes();
            if (Array.isArray(items)) {
                if (isTagNode_1(node)) {
                    if (isAllowedTag(node.tag)) {
                        items.push(node.toTagNode());
                    } else {
                        items.push(node.toTagStart({
                            openTag: openTag,
                            closeTag: closeTag
                        }));
                        if (node.content.length) {
                            node.content.forEach(function(item) {
                                items.push(item);
                            });
                            items.push(node.toTagEnd({
                                openTag: openTag,
                                closeTag: closeTag
                            }));
                        }
                    }
                } else {
                    items.push(node);
                }
            }
        };
        /**
       * @private
       * @param {Token} token
       */ var handleTagStart = function(token) {
            flushTagNodes();
            var tagNode = default_1.create(token.getValue());
            var isNested = isTokenNested(token);
            tagNodes.push(tagNode);
            if (isNested) {
                nestedNodes.push(tagNode);
            } else {
                appendNodes(tagNode);
            }
        };
        /**
       * @private
       * @param {Token} token
       */ var handleTagEnd = function(token) {
            flushTagNodes();
            var lastNestedNode = nestedNodes.flushLast();
            if (lastNestedNode) {
                appendNodes(lastNestedNode);
            } else if (typeof options.onError === 'function') {
                var tag = token.getValue();
                var line = token.getLine();
                var column = token.getColumn();
                options.onError({
                    message: "Inconsistent tag '".concat(tag, "' on line ").concat(line, " and column ").concat(column),
                    tagName: tag,
                    lineNumber: line,
                    columnNumber: column
                });
            }
        };
        /**
       * @private
       * @param {Token} token
       */ var handleTag = function(token) {
            // [tag]
            if (token.isStart()) {
                handleTagStart(token);
            }
            // [/tag]
            if (token.isEnd()) {
                handleTagEnd(token);
            }
        };
        /**
       * @private
       * @param {Token} token
       */ var handleNode = function(token) {
            /**
         * @type {TagNode}
         */ var lastTagNode = tagNodes.getLast();
            var tokenValue = token.getValue();
            var isNested = isTagNested(token);
            if (lastTagNode) {
                if (token.isAttrName()) {
                    tagNodesAttrName.push(tokenValue);
                    lastTagNode.attr(tagNodesAttrName.getLast(), '');
                } else if (token.isAttrValue()) {
                    var attrName = tagNodesAttrName.getLast();
                    if (attrName) {
                        lastTagNode.attr(attrName, tokenValue);
                        tagNodesAttrName.flushLast();
                    } else {
                        lastTagNode.attr(tokenValue, tokenValue);
                    }
                } else if (token.isText()) {
                    if (isNested) {
                        lastTagNode.append(tokenValue);
                    } else {
                        appendNodes(tokenValue);
                    }
                } else if (token.isTag()) {
                    // if tag is not allowed, just past it as is
                    appendNodes(token.toString());
                }
            } else if (token.isText()) {
                appendNodes(tokenValue);
            } else if (token.isTag()) {
                // if tag is not allowed, just past it as is
                appendNodes(token.toString());
            }
        };
        /**
       * @private
       * @param {Token} token
       */ var onToken = function(token) {
            if (token.isTag()) {
                handleTag(token);
            } else {
                handleNode(token);
            }
        };
        tokenizer = (opts.createTokenizer ? opts.createTokenizer : createLexer)(input, {
            onToken: onToken,
            onlyAllowTags: options.onlyAllowTags,
            openTag: openTag,
            closeTag: closeTag,
            enableEscapeTags: options.enableEscapeTags
        });
        // eslint-disable-next-line no-unused-vars
        tokenizer.tokenize();
        return nodes.toArray();
    };

    exports["default"] = parse;
    exports.parse = parse;

    Object.defineProperty(exports, '__esModule', { value: true });

}));


/***/ }),

/***/ "./node_modules/compute-scroll-into-view/dist/index.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function t(t){return"object"==typeof t&&null!=t&&1===t.nodeType}function e(t,e){return(!e||"hidden"!==t)&&"visible"!==t&&"clip"!==t}function n(t,n){if(t.clientHeight<t.scrollHeight||t.clientWidth<t.scrollWidth){var r=getComputedStyle(t,null);return e(r.overflowY,n)||e(r.overflowX,n)||function(t){var e=function(t){if(!t.ownerDocument||!t.ownerDocument.defaultView)return null;try{return t.ownerDocument.defaultView.frameElement}catch(t){return null}}(t);return!!e&&(e.clientHeight<t.scrollHeight||e.clientWidth<t.scrollWidth)}(t)}return!1}function r(t,e,n,r,i,o,l,d){return o<t&&l>e||o>t&&l<e?0:o<=t&&d<=n||l>=e&&d>=n?o-t-r:l>e&&d<n||o<t&&d>n?l-e+i:0}/* harmony default export */ __webpack_exports__["a"] = (function(e,i){var o=window,l=i.scrollMode,d=i.block,u=i.inline,h=i.boundary,a=i.skipOverflowHiddenElements,c="function"==typeof h?h:function(t){return t!==h};if(!t(e))throw new TypeError("Invalid target");for(var f=document.scrollingElement||document.documentElement,s=[],p=e;t(p)&&c(p);){if((p=p.parentElement)===f){s.push(p);break}null!=p&&p===document.body&&n(p)&&!n(document.documentElement)||null!=p&&n(p,a)&&s.push(p)}for(var m=o.visualViewport?o.visualViewport.width:innerWidth,g=o.visualViewport?o.visualViewport.height:innerHeight,w=window.scrollX||pageXOffset,v=window.scrollY||pageYOffset,W=e.getBoundingClientRect(),b=W.height,H=W.width,y=W.top,E=W.right,M=W.bottom,V=W.left,x="start"===d||"nearest"===d?y:"end"===d?M:y+b/2,I="center"===u?V+H/2:"end"===u?E:V,C=[],T=0;T<s.length;T++){var k=s[T],B=k.getBoundingClientRect(),D=B.height,O=B.width,R=B.top,X=B.right,Y=B.bottom,L=B.left;if("if-needed"===l&&y>=0&&V>=0&&M<=g&&E<=m&&y>=R&&M<=Y&&V>=L&&E<=X)return C;var S=getComputedStyle(k),j=parseInt(S.borderLeftWidth,10),q=parseInt(S.borderTopWidth,10),z=parseInt(S.borderRightWidth,10),A=parseInt(S.borderBottomWidth,10),F=0,G=0,J="offsetWidth"in k?k.offsetWidth-k.clientWidth-j-z:0,K="offsetHeight"in k?k.offsetHeight-k.clientHeight-q-A:0;if(f===k)F="start"===d?x:"end"===d?x-g:"nearest"===d?r(v,v+g,g,q,A,v+x,v+x+b,b):x-g/2,G="start"===u?I:"center"===u?I-m/2:"end"===u?I-m:r(w,w+m,m,j,z,w+I,w+I+H,H),F=Math.max(0,F+v),G=Math.max(0,G+w);else{F="start"===d?x-R-q:"end"===d?x-Y+A+K:"nearest"===d?r(R,Y,D,q,A+K,x,x+b,b):x-(R+D/2)+K/2,G="start"===u?I-L-j:"center"===u?I-(L+O/2)+J/2:"end"===u?I-X+z+J:r(L,X,O,j,z+J,I,I+H,H);var N=k.scrollLeft,P=k.scrollTop;x+=P-(F=Math.max(0,Math.min(P+F,k.scrollHeight-D+K))),I+=N-(G=Math.max(0,Math.min(N+G,k.scrollWidth-O+J)))}C.push({el:k,top:F,left:G})}return C});
//# sourceMappingURL=index.module.js.map


/***/ }),

/***/ "./node_modules/direction/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = direction

var RTL = '\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC'
var LTR =
  'A-Za-z\u00C0-\u00D6\u00D8-\u00F6' +
  '\u00F8-\u02B8\u0300-\u0590\u0800-\u1FFF\u200E\u2C00-\uFB1C' +
  '\uFE00-\uFE6F\uFEFD-\uFFFF'

var rtl = new RegExp('^[^' + LTR + ']*[' + RTL + ']')
var ltr = new RegExp('^[^' + RTL + ']*[' + LTR + ']')

function direction(value) {
  value = String(value || '')

  if (rtl.test(value)) {
    return 'rtl'
  }

  if (ltr.test(value)) {
    return 'ltr'
  }

  return 'neutral'
}


/***/ }),

/***/ "./node_modules/immer/dist/immer.esm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Immer */
/* unused harmony export applyPatches */
/* unused harmony export castDraft */
/* unused harmony export castImmutable */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ln; });
/* unused harmony export current */
/* unused harmony export enableAllPlugins */
/* unused harmony export enableES5 */
/* unused harmony export enableMapSet */
/* unused harmony export enablePatches */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return dn; });
/* unused harmony export freeze */
/* unused harmony export immerable */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return r; });
/* unused harmony export isDraftable */
/* unused harmony export nothing */
/* unused harmony export original */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fn; });
/* unused harmony export produceWithPatches */
/* unused harmony export setAutoFreeze */
/* unused harmony export setUseProxies */
function n(n){for(var r=arguments.length,t=Array(r>1?r-1:0),e=1;e<r;e++)t[e-1]=arguments[e];if(true){var i=Y[n],o=i?"function"==typeof i?i.apply(null,t):i:"unknown error nr: "+n;throw Error("[Immer] "+o)}throw Error("[Immer] minified error nr: "+n+(t.length?" "+t.map((function(n){return"'"+n+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function r(n){return!!n&&!!n[Q]}function t(n){return!!n&&(function(n){if(!n||"object"!=typeof n)return!1;var r=Object.getPrototypeOf(n);if(null===r)return!0;var t=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return t===Object||"function"==typeof t&&Function.toString.call(t)===Z}(n)||Array.isArray(n)||!!n[L]||!!n.constructor[L]||s(n)||v(n))}function e(t){return r(t)||n(23,t),t[Q].t}function i(n,r,t){void 0===t&&(t=!1),0===o(n)?(t?Object.keys:nn)(n).forEach((function(e){t&&"symbol"==typeof e||r(e,n[e],n)})):n.forEach((function(t,e){return r(e,t,n)}))}function o(n){var r=n[Q];return r?r.i>3?r.i-4:r.i:Array.isArray(n)?1:s(n)?2:v(n)?3:0}function u(n,r){return 2===o(n)?n.has(r):Object.prototype.hasOwnProperty.call(n,r)}function a(n,r){return 2===o(n)?n.get(r):n[r]}function f(n,r,t){var e=o(n);2===e?n.set(r,t):3===e?(n.delete(r),n.add(t)):n[r]=t}function c(n,r){return n===r?0!==n||1/n==1/r:n!=n&&r!=r}function s(n){return X&&n instanceof Map}function v(n){return q&&n instanceof Set}function p(n){return n.o||n.t}function l(n){if(Array.isArray(n))return Array.prototype.slice.call(n);var r=rn(n);delete r[Q];for(var t=nn(r),e=0;e<t.length;e++){var i=t[e],o=r[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(r[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:n[i]})}return Object.create(Object.getPrototypeOf(n),r)}function d(n,e){return void 0===e&&(e=!1),y(n)||r(n)||!t(n)?n:(o(n)>1&&(n.set=n.add=n.clear=n.delete=h),Object.freeze(n),e&&i(n,(function(n,r){return d(r,!0)}),!0),n)}function h(){n(2)}function y(n){return null==n||"object"!=typeof n||Object.isFrozen(n)}function b(r){var t=tn[r];return t||n(18,r),t}function m(n,r){tn[n]||(tn[n]=r)}function _(){return"production"==="development"||U||n(0),U}function j(n,r){r&&(b("Patches"),n.u=[],n.s=[],n.v=r)}function O(n){g(n),n.p.forEach(S),n.p=null}function g(n){n===U&&(U=n.l)}function w(n){return U={p:[],l:U,h:n,m:!0,_:0}}function S(n){var r=n[Q];0===r.i||1===r.i?r.j():r.O=!0}function P(r,e){e._=e.p.length;var i=e.p[0],o=void 0!==r&&r!==i;return e.h.g||b("ES5").S(e,r,o),o?(i[Q].P&&(O(e),n(4)),t(r)&&(r=M(e,r),e.l||x(e,r)),e.u&&b("Patches").M(i[Q].t,r,e.u,e.s)):r=M(e,i,[]),O(e),e.u&&e.v(e.u,e.s),r!==H?r:void 0}function M(n,r,t){if(y(r))return r;var e=r[Q];if(!e)return i(r,(function(i,o){return A(n,e,r,i,o,t)}),!0),r;if(e.A!==n)return r;if(!e.P)return x(n,e.t,!0),e.t;if(!e.I){e.I=!0,e.A._--;var o=4===e.i||5===e.i?e.o=l(e.k):e.o;i(3===e.i?new Set(o):o,(function(r,i){return A(n,e,o,r,i,t)})),x(n,o,!1),t&&n.u&&b("Patches").R(e,t,n.u,n.s)}return e.o}function A(e,i,o,a,c,s){if("production"!=="development"&&c===o&&n(5),r(c)){var v=M(e,c,s&&i&&3!==i.i&&!u(i.D,a)?s.concat(a):void 0);if(f(o,a,v),!r(v))return;e.m=!1}if(t(c)&&!y(c)){if(!e.h.F&&e._<1)return;M(e,c),i&&i.A.l||x(e,c)}}function x(n,r,t){void 0===t&&(t=!1),n.h.F&&n.m&&d(r,t)}function z(n,r){var t=n[Q];return(t?p(t):n)[r]}function I(n,r){if(r in n)for(var t=Object.getPrototypeOf(n);t;){var e=Object.getOwnPropertyDescriptor(t,r);if(e)return e;t=Object.getPrototypeOf(t)}}function k(n){n.P||(n.P=!0,n.l&&k(n.l))}function E(n){n.o||(n.o=l(n.t))}function R(n,r,t){var e=s(r)?b("MapSet").N(r,t):v(r)?b("MapSet").T(r,t):n.g?function(n,r){var t=Array.isArray(n),e={i:t?1:0,A:r?r.A:_(),P:!1,I:!1,D:{},l:r,t:n,k:null,o:null,j:null,C:!1},i=e,o=en;t&&(i=[e],o=on);var u=Proxy.revocable(i,o),a=u.revoke,f=u.proxy;return e.k=f,e.j=a,f}(r,t):b("ES5").J(r,t);return(t?t.A:_()).p.push(e),e}function D(e){return r(e)||n(22,e),function n(r){if(!t(r))return r;var e,u=r[Q],c=o(r);if(u){if(!u.P&&(u.i<4||!b("ES5").K(u)))return u.t;u.I=!0,e=F(r,c),u.I=!1}else e=F(r,c);return i(e,(function(r,t){u&&a(u.t,r)===t||f(e,r,n(t))})),3===c?new Set(e):e}(e)}function F(n,r){switch(r){case 2:return new Map(n);case 3:return Array.from(n)}return l(n)}function N(){function t(n,r){var t=s[n];return t?t.enumerable=r:s[n]=t={configurable:!0,enumerable:r,get:function(){var r=this[Q];return"production"!=="development"&&f(r),en.get(r,n)},set:function(r){var t=this[Q];"production"!=="development"&&f(t),en.set(t,n,r)}},t}function e(n){for(var r=n.length-1;r>=0;r--){var t=n[r][Q];if(!t.P)switch(t.i){case 5:a(t)&&k(t);break;case 4:o(t)&&k(t)}}}function o(n){for(var r=n.t,t=n.k,e=nn(t),i=e.length-1;i>=0;i--){var o=e[i];if(o!==Q){var a=r[o];if(void 0===a&&!u(r,o))return!0;var f=t[o],s=f&&f[Q];if(s?s.t!==a:!c(f,a))return!0}}var v=!!r[Q];return e.length!==nn(r).length+(v?0:1)}function a(n){var r=n.k;if(r.length!==n.t.length)return!0;var t=Object.getOwnPropertyDescriptor(r,r.length-1);if(t&&!t.get)return!0;for(var e=0;e<r.length;e++)if(!r.hasOwnProperty(e))return!0;return!1}function f(r){r.O&&n(3,JSON.stringify(p(r)))}var s={};m("ES5",{J:function(n,r){var e=Array.isArray(n),i=function(n,r){if(n){for(var e=Array(r.length),i=0;i<r.length;i++)Object.defineProperty(e,""+i,t(i,!0));return e}var o=rn(r);delete o[Q];for(var u=nn(o),a=0;a<u.length;a++){var f=u[a];o[f]=t(f,n||!!o[f].enumerable)}return Object.create(Object.getPrototypeOf(r),o)}(e,n),o={i:e?5:4,A:r?r.A:_(),P:!1,I:!1,D:{},l:r,t:n,k:i,o:null,O:!1,C:!1};return Object.defineProperty(i,Q,{value:o,writable:!0}),i},S:function(n,t,o){o?r(t)&&t[Q].A===n&&e(n.p):(n.u&&function n(r){if(r&&"object"==typeof r){var t=r[Q];if(t){var e=t.t,o=t.k,f=t.D,c=t.i;if(4===c)i(o,(function(r){r!==Q&&(void 0!==e[r]||u(e,r)?f[r]||n(o[r]):(f[r]=!0,k(t)))})),i(e,(function(n){void 0!==o[n]||u(o,n)||(f[n]=!1,k(t))}));else if(5===c){if(a(t)&&(k(t),f.length=!0),o.length<e.length)for(var s=o.length;s<e.length;s++)f[s]=!1;else for(var v=e.length;v<o.length;v++)f[v]=!0;for(var p=Math.min(o.length,e.length),l=0;l<p;l++)o.hasOwnProperty(l)||(f[l]=!0),void 0===f[l]&&n(o[l])}}}}(n.p[0]),e(n.p))},K:function(n){return 4===n.i?o(n):a(n)}})}function T(){function e(n){if(!t(n))return n;if(Array.isArray(n))return n.map(e);if(s(n))return new Map(Array.from(n.entries()).map((function(n){return[n[0],e(n[1])]})));if(v(n))return new Set(Array.from(n).map(e));var r=Object.create(Object.getPrototypeOf(n));for(var i in n)r[i]=e(n[i]);return u(n,L)&&(r[L]=n[L]),r}function f(n){return r(n)?e(n):n}var c="add";m("Patches",{$:function(r,t){return t.forEach((function(t){for(var i=t.path,u=t.op,f=r,s=0;s<i.length-1;s++){var v=o(f),p=""+i[s];0!==v&&1!==v||"__proto__"!==p&&"constructor"!==p||n(24),"function"==typeof f&&"prototype"===p&&n(24),"object"!=typeof(f=a(f,p))&&n(15,i.join("/"))}var l=o(f),d=e(t.value),h=i[i.length-1];switch(u){case"replace":switch(l){case 2:return f.set(h,d);case 3:n(16);default:return f[h]=d}case c:switch(l){case 1:return"-"===h?f.push(d):f.splice(h,0,d);case 2:return f.set(h,d);case 3:return f.add(d);default:return f[h]=d}case"remove":switch(l){case 1:return f.splice(h,1);case 2:return f.delete(h);case 3:return f.delete(t.value);default:return delete f[h]}default:n(17,u)}})),r},R:function(n,r,t,e){switch(n.i){case 0:case 4:case 2:return function(n,r,t,e){var o=n.t,s=n.o;i(n.D,(function(n,i){var v=a(o,n),p=a(s,n),l=i?u(o,n)?"replace":c:"remove";if(v!==p||"replace"!==l){var d=r.concat(n);t.push("remove"===l?{op:l,path:d}:{op:l,path:d,value:p}),e.push(l===c?{op:"remove",path:d}:"remove"===l?{op:c,path:d,value:f(v)}:{op:"replace",path:d,value:f(v)})}}))}(n,r,t,e);case 5:case 1:return function(n,r,t,e){var i=n.t,o=n.D,u=n.o;if(u.length<i.length){var a=[u,i];i=a[0],u=a[1];var s=[e,t];t=s[0],e=s[1]}for(var v=0;v<i.length;v++)if(o[v]&&u[v]!==i[v]){var p=r.concat([v]);t.push({op:"replace",path:p,value:f(u[v])}),e.push({op:"replace",path:p,value:f(i[v])})}for(var l=i.length;l<u.length;l++){var d=r.concat([l]);t.push({op:c,path:d,value:f(u[l])})}i.length<u.length&&e.push({op:"replace",path:r.concat(["length"]),value:i.length})}(n,r,t,e);case 3:return function(n,r,t,e){var i=n.t,o=n.o,u=0;i.forEach((function(n){if(!o.has(n)){var i=r.concat([u]);t.push({op:"remove",path:i,value:n}),e.unshift({op:c,path:i,value:n})}u++})),u=0,o.forEach((function(n){if(!i.has(n)){var o=r.concat([u]);t.push({op:c,path:o,value:n}),e.unshift({op:"remove",path:o,value:n})}u++}))}(n,r,t,e)}},M:function(n,r,t,e){t.push({op:"replace",path:[],value:r===H?void 0:r}),e.push({op:"replace",path:[],value:n})}})}function C(){function r(n,r){function t(){this.constructor=n}a(n,r),n.prototype=(t.prototype=r.prototype,new t)}function e(n){n.o||(n.D=new Map,n.o=new Map(n.t))}function o(n){n.o||(n.o=new Set,n.t.forEach((function(r){if(t(r)){var e=R(n.A.h,r,n);n.p.set(r,e),n.o.add(e)}else n.o.add(r)})))}function u(r){r.O&&n(3,JSON.stringify(p(r)))}var a=function(n,r){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var t in r)r.hasOwnProperty(t)&&(n[t]=r[t])})(n,r)},f=function(){function n(n,r){return this[Q]={i:2,l:r,A:r?r.A:_(),P:!1,I:!1,o:void 0,D:void 0,t:n,k:this,C:!1,O:!1},this}r(n,Map);var o=n.prototype;return Object.defineProperty(o,"size",{get:function(){return p(this[Q]).size}}),o.has=function(n){return p(this[Q]).has(n)},o.set=function(n,r){var t=this[Q];return u(t),p(t).has(n)&&p(t).get(n)===r||(e(t),k(t),t.D.set(n,!0),t.o.set(n,r),t.D.set(n,!0)),this},o.delete=function(n){if(!this.has(n))return!1;var r=this[Q];return u(r),e(r),k(r),r.t.has(n)?r.D.set(n,!1):r.D.delete(n),r.o.delete(n),!0},o.clear=function(){var n=this[Q];u(n),p(n).size&&(e(n),k(n),n.D=new Map,i(n.t,(function(r){n.D.set(r,!1)})),n.o.clear())},o.forEach=function(n,r){var t=this;p(this[Q]).forEach((function(e,i){n.call(r,t.get(i),i,t)}))},o.get=function(n){var r=this[Q];u(r);var i=p(r).get(n);if(r.I||!t(i))return i;if(i!==r.t.get(n))return i;var o=R(r.A.h,i,r);return e(r),r.o.set(n,o),o},o.keys=function(){return p(this[Q]).keys()},o.values=function(){var n,r=this,t=this.keys();return(n={})[V]=function(){return r.values()},n.next=function(){var n=t.next();return n.done?n:{done:!1,value:r.get(n.value)}},n},o.entries=function(){var n,r=this,t=this.keys();return(n={})[V]=function(){return r.entries()},n.next=function(){var n=t.next();if(n.done)return n;var e=r.get(n.value);return{done:!1,value:[n.value,e]}},n},o[V]=function(){return this.entries()},n}(),c=function(){function n(n,r){return this[Q]={i:3,l:r,A:r?r.A:_(),P:!1,I:!1,o:void 0,t:n,k:this,p:new Map,O:!1,C:!1},this}r(n,Set);var t=n.prototype;return Object.defineProperty(t,"size",{get:function(){return p(this[Q]).size}}),t.has=function(n){var r=this[Q];return u(r),r.o?!!r.o.has(n)||!(!r.p.has(n)||!r.o.has(r.p.get(n))):r.t.has(n)},t.add=function(n){var r=this[Q];return u(r),this.has(n)||(o(r),k(r),r.o.add(n)),this},t.delete=function(n){if(!this.has(n))return!1;var r=this[Q];return u(r),o(r),k(r),r.o.delete(n)||!!r.p.has(n)&&r.o.delete(r.p.get(n))},t.clear=function(){var n=this[Q];u(n),p(n).size&&(o(n),k(n),n.o.clear())},t.values=function(){var n=this[Q];return u(n),o(n),n.o.values()},t.entries=function(){var n=this[Q];return u(n),o(n),n.o.entries()},t.keys=function(){return this.values()},t[V]=function(){return this.values()},t.forEach=function(n,r){for(var t=this.values(),e=t.next();!e.done;)n.call(r,e.value,e.value,this),e=t.next()},n}();m("MapSet",{N:function(n,r){return new f(n,r)},T:function(n,r){return new c(n,r)}})}function J(){N(),C(),T()}function K(n){return n}function $(n){return n}var G,U,W="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),X="undefined"!=typeof Map,q="undefined"!=typeof Set,B="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,H=W?Symbol.for("immer-nothing"):((G={})["immer-nothing"]=!0,G),L=W?Symbol.for("immer-draftable"):"__$immer_draftable",Q=W?Symbol.for("immer-state"):"__$immer_state",V="undefined"!=typeof Symbol&&Symbol.iterator||"@@iterator",Y={0:"Illegal state",1:"Immer drafts cannot have computed properties",2:"This object has been frozen and should not be mutated",3:function(n){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+n},4:"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",5:"Immer forbids circular references",6:"The first or second argument to `produce` must be a function",7:"The third argument to `produce` must be a function or undefined",8:"First argument to `createDraft` must be a plain object, an array, or an immerable object",9:"First argument to `finishDraft` must be a draft returned by `createDraft`",10:"The given draft is already finalized",11:"Object.defineProperty() cannot be used on an Immer draft",12:"Object.setPrototypeOf() cannot be used on an Immer draft",13:"Immer only supports deleting array indices",14:"Immer only supports setting array indices and the 'length' property",15:function(n){return"Cannot apply patch, path doesn't resolve: "+n},16:'Sets cannot have "replace" patches.',17:function(n){return"Unsupported patch operation: "+n},18:function(n){return"The plugin for '"+n+"' has not been loaded into Immer. To enable the plugin, import and call `enable"+n+"()` when initializing your application."},20:"Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available",21:function(n){return"produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '"+n+"'"},22:function(n){return"'current' expects a draft, got: "+n},23:function(n){return"'original' expects a draft, got: "+n},24:"Patching reserved attributes like __proto__, prototype and constructor is not allowed"},Z=""+Object.prototype.constructor,nn="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(n){return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n))}:Object.getOwnPropertyNames,rn=Object.getOwnPropertyDescriptors||function(n){var r={};return nn(n).forEach((function(t){r[t]=Object.getOwnPropertyDescriptor(n,t)})),r},tn={},en={get:function(n,r){if(r===Q)return n;var e=p(n);if(!u(e,r))return function(n,r,t){var e,i=I(r,t);return i?"value"in i?i.value:null===(e=i.get)||void 0===e?void 0:e.call(n.k):void 0}(n,e,r);var i=e[r];return n.I||!t(i)?i:i===z(n.t,r)?(E(n),n.o[r]=R(n.A.h,i,n)):i},has:function(n,r){return r in p(n)},ownKeys:function(n){return Reflect.ownKeys(p(n))},set:function(n,r,t){var e=I(p(n),r);if(null==e?void 0:e.set)return e.set.call(n.k,t),!0;if(!n.P){var i=z(p(n),r),o=null==i?void 0:i[Q];if(o&&o.t===t)return n.o[r]=t,n.D[r]=!1,!0;if(c(t,i)&&(void 0!==t||u(n.t,r)))return!0;E(n),k(n)}return n.o[r]===t&&"number"!=typeof t&&(void 0!==t||r in n.o)||(n.o[r]=t,n.D[r]=!0,!0)},deleteProperty:function(n,r){return void 0!==z(n.t,r)||r in n.t?(n.D[r]=!1,E(n),k(n)):delete n.D[r],n.o&&delete n.o[r],!0},getOwnPropertyDescriptor:function(n,r){var t=p(n),e=Reflect.getOwnPropertyDescriptor(t,r);return e?{writable:!0,configurable:1!==n.i||"length"!==r,enumerable:e.enumerable,value:t[r]}:e},defineProperty:function(){n(11)},getPrototypeOf:function(n){return Object.getPrototypeOf(n.t)},setPrototypeOf:function(){n(12)}},on={};i(en,(function(n,r){on[n]=function(){return arguments[0]=arguments[0][0],r.apply(this,arguments)}})),on.deleteProperty=function(r,t){return"production"!=="development"&&isNaN(parseInt(t))&&n(13),on.set.call(this,r,t,void 0)},on.set=function(r,t,e){return"production"!=="development"&&"length"!==t&&isNaN(parseInt(t))&&n(14),en.set.call(this,r[0],t,e,r[0])};var un=function(){function e(r){var e=this;this.g=B,this.F=!0,this.produce=function(r,i,o){if("function"==typeof r&&"function"!=typeof i){var u=i;i=r;var a=e;return function(n){var r=this;void 0===n&&(n=u);for(var t=arguments.length,e=Array(t>1?t-1:0),o=1;o<t;o++)e[o-1]=arguments[o];return a.produce(n,(function(n){var t;return(t=i).call.apply(t,[r,n].concat(e))}))}}var f;if("function"!=typeof i&&n(6),void 0!==o&&"function"!=typeof o&&n(7),t(r)){var c=w(e),s=R(e,r,void 0),v=!0;try{f=i(s),v=!1}finally{v?O(c):g(c)}return"undefined"!=typeof Promise&&f instanceof Promise?f.then((function(n){return j(c,o),P(n,c)}),(function(n){throw O(c),n})):(j(c,o),P(f,c))}if(!r||"object"!=typeof r){if(void 0===(f=i(r))&&(f=r),f===H&&(f=void 0),e.F&&d(f,!0),o){var p=[],l=[];b("Patches").M(r,f,p,l),o(p,l)}return f}n(21,r)},this.produceWithPatches=function(n,r){if("function"==typeof n)return function(r){for(var t=arguments.length,i=Array(t>1?t-1:0),o=1;o<t;o++)i[o-1]=arguments[o];return e.produceWithPatches(r,(function(r){return n.apply(void 0,[r].concat(i))}))};var t,i,o=e.produce(n,r,(function(n,r){t=n,i=r}));return"undefined"!=typeof Promise&&o instanceof Promise?o.then((function(n){return[n,t,i]})):[o,t,i]},"boolean"==typeof(null==r?void 0:r.useProxies)&&this.setUseProxies(r.useProxies),"boolean"==typeof(null==r?void 0:r.autoFreeze)&&this.setAutoFreeze(r.autoFreeze)}var i=e.prototype;return i.createDraft=function(e){t(e)||n(8),r(e)&&(e=D(e));var i=w(this),o=R(this,e,void 0);return o[Q].C=!0,g(i),o},i.finishDraft=function(r,t){var e=r&&r[Q];"production"!=="development"&&(e&&e.C||n(9),e.I&&n(10));var i=e.A;return j(i,t),P(void 0,i)},i.setAutoFreeze=function(n){this.F=n},i.setUseProxies=function(r){r&&!B&&n(20),this.g=r},i.applyPatches=function(n,t){var e;for(e=t.length-1;e>=0;e--){var i=t[e];if(0===i.path.length&&"replace"===i.op){n=i.value;break}}e>-1&&(t=t.slice(e+1));var o=b("Patches").$;return r(n)?o(n,t):this.produce(n,(function(n){return o(n,t)}))},e}(),an=new un,fn=an.produce,cn=an.produceWithPatches.bind(an),sn=an.setAutoFreeze.bind(an),vn=an.setUseProxies.bind(an),pn=an.applyPatches.bind(an),ln=an.createDraft.bind(an),dn=an.finishDraft.bind(an);/* unused harmony default export */ var _unused_webpack_default_export = (fn);
//# sourceMappingURL=immer.esm.js.map


/***/ }),

/***/ "./node_modules/is-hotkey/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * Constants.
 */

var IS_MAC = typeof window != 'undefined' && /Mac|iPod|iPhone|iPad/.test(window.navigator.platform);

var MODIFIERS = {
  alt: 'altKey',
  control: 'ctrlKey',
  meta: 'metaKey',
  shift: 'shiftKey'
};

var ALIASES = {
  add: '+',
  break: 'pause',
  cmd: 'meta',
  command: 'meta',
  ctl: 'control',
  ctrl: 'control',
  del: 'delete',
  down: 'arrowdown',
  esc: 'escape',
  ins: 'insert',
  left: 'arrowleft',
  mod: IS_MAC ? 'meta' : 'control',
  opt: 'alt',
  option: 'alt',
  return: 'enter',
  right: 'arrowright',
  space: ' ',
  spacebar: ' ',
  up: 'arrowup',
  win: 'meta',
  windows: 'meta'
};

var CODES = {
  backspace: 8,
  tab: 9,
  enter: 13,
  shift: 16,
  control: 17,
  alt: 18,
  pause: 19,
  capslock: 20,
  escape: 27,
  ' ': 32,
  pageup: 33,
  pagedown: 34,
  end: 35,
  home: 36,
  arrowleft: 37,
  arrowup: 38,
  arrowright: 39,
  arrowdown: 40,
  insert: 45,
  delete: 46,
  meta: 91,
  numlock: 144,
  scrolllock: 145,
  ';': 186,
  '=': 187,
  ',': 188,
  '-': 189,
  '.': 190,
  '/': 191,
  '`': 192,
  '[': 219,
  '\\': 220,
  ']': 221,
  '\'': 222
};

for (var f = 1; f < 20; f++) {
  CODES['f' + f] = 111 + f;
}

/**
 * Is hotkey?
 */

function isHotkey(hotkey, options, event) {
  if (options && !('byKey' in options)) {
    event = options;
    options = null;
  }

  if (!Array.isArray(hotkey)) {
    hotkey = [hotkey];
  }

  var array = hotkey.map(function (string) {
    return parseHotkey(string, options);
  });
  var check = function check(e) {
    return array.some(function (object) {
      return compareHotkey(object, e);
    });
  };
  var ret = event == null ? check : check(event);
  return ret;
}

function isCodeHotkey(hotkey, event) {
  return isHotkey(hotkey, event);
}

function isKeyHotkey(hotkey, event) {
  return isHotkey(hotkey, { byKey: true }, event);
}

/**
 * Parse.
 */

function parseHotkey(hotkey, options) {
  var byKey = options && options.byKey;
  var ret = {};

  // Special case to handle the `+` key since we use it as a separator.
  hotkey = hotkey.replace('++', '+add');
  var values = hotkey.split('+');
  var length = values.length;

  // Ensure that all the modifiers are set to false unless the hotkey has them.

  for (var k in MODIFIERS) {
    ret[MODIFIERS[k]] = false;
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = values[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var value = _step.value;

      var optional = value.endsWith('?') && value.length > 1;

      if (optional) {
        value = value.slice(0, -1);
      }

      var name = toKeyName(value);
      var modifier = MODIFIERS[name];

      if (value.length > 1 && !modifier && !ALIASES[value] && !CODES[name]) {
        throw new TypeError('Unknown modifier: "' + value + '"');
      }

      if (length === 1 || !modifier) {
        if (byKey) {
          ret.key = name;
        } else {
          ret.which = toKeyCode(value);
        }
      }

      if (modifier) {
        ret[modifier] = optional ? null : true;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return ret;
}

/**
 * Compare.
 */

function compareHotkey(object, event) {
  for (var key in object) {
    var expected = object[key];
    var actual = void 0;

    if (expected == null) {
      continue;
    }

    if (key === 'key' && event.key != null) {
      actual = event.key.toLowerCase();
    } else if (key === 'which') {
      actual = expected === 91 && event.which === 93 ? 91 : event.which;
    } else {
      actual = event[key];
    }

    if (actual == null && expected === false) {
      continue;
    }

    if (actual !== expected) {
      return false;
    }
  }

  return true;
}

/**
 * Utils.
 */

function toKeyCode(name) {
  name = toKeyName(name);
  var code = CODES[name] || name.toUpperCase().charCodeAt(0);
  return code;
}

function toKeyName(name) {
  name = name.toLowerCase();
  name = ALIASES[name] || name;
  return name;
}

/**
 * Export.
 */

exports.default = isHotkey;
exports.isHotkey = isHotkey;
exports.isCodeHotkey = isCodeHotkey;
exports.isKeyHotkey = isKeyHotkey;
exports.parseHotkey = parseHotkey;
exports.compareHotkey = compareHotkey;
exports.toKeyCode = toKeyCode;
exports.toKeyName = toKeyName;

/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__("./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__("./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__("./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_baseTrim.js":
/***/ (function(module, exports, __webpack_require__) {

var trimmedEndIndex = __webpack_require__("./node_modules/lodash/_trimmedEndIndex.js");

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

module.exports = baseTrim;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__("./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/_trimmedEndIndex.js":
/***/ (function(module, exports) {

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

module.exports = trimmedEndIndex;


/***/ }),

/***/ "./node_modules/lodash/debounce.js":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("./node_modules/lodash/isObject.js"),
    now = __webpack_require__("./node_modules/lodash/now.js"),
    toNumber = __webpack_require__("./node_modules/lodash/toNumber.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__("./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./node_modules/lodash/now.js":
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__("./node_modules/lodash/_root.js");

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),

/***/ "./node_modules/lodash/throttle.js":
/***/ (function(module, exports, __webpack_require__) {

var debounce = __webpack_require__("./node_modules/lodash/debounce.js"),
    isObject = __webpack_require__("./node_modules/lodash/isObject.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

module.exports = throttle;


/***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/***/ (function(module, exports, __webpack_require__) {

var baseTrim = __webpack_require__("./node_modules/lodash/_baseTrim.js"),
    isObject = __webpack_require__("./node_modules/lodash/isObject.js"),
    isSymbol = __webpack_require__("./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ "./node_modules/scroll-into-view-if-needed/es/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_compute_scroll_into_view__ = __webpack_require__("./node_modules/compute-scroll-into-view/dist/index.module.js");


function isOptionsObject(options) {
  return options === Object(options) && Object.keys(options).length !== 0;
}

function defaultBehavior(actions, behavior) {
  if (behavior === void 0) {
    behavior = 'auto';
  }

  var canSmoothScroll = ('scrollBehavior' in document.body.style);
  actions.forEach(function (_ref) {
    var el = _ref.el,
        top = _ref.top,
        left = _ref.left;

    if (el.scroll && canSmoothScroll) {
      el.scroll({
        top: top,
        left: left,
        behavior: behavior
      });
    } else {
      el.scrollTop = top;
      el.scrollLeft = left;
    }
  });
}

function getOptions(options) {
  if (options === false) {
    return {
      block: 'end',
      inline: 'nearest'
    };
  }

  if (isOptionsObject(options)) {
    return options;
  }

  return {
    block: 'start',
    inline: 'nearest'
  };
}

function scrollIntoView(target, options) {
  var isTargetAttached = target.isConnected || target.ownerDocument.documentElement.contains(target);

  if (isOptionsObject(options) && typeof options.behavior === 'function') {
    return options.behavior(isTargetAttached ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_compute_scroll_into_view__["a" /* default */])(target, options) : []);
  }

  if (!isTargetAttached) {
    return;
  }

  var computeOptions = getOptions(options);
  return defaultBehavior(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_compute_scroll_into_view__["a" /* default */])(target, computeOptions), computeOptions.behavior);
}

/* harmony default export */ __webpack_exports__["a"] = (scrollIntoView);

/***/ }),

/***/ "./node_modules/slate-history/dist/index.es.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HISTORY", function() { return HISTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "History", function() { return History; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryEditor", function() { return HistoryEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MERGING", function() { return MERGING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVING", function() { return SAVING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withHistory", function() { return withHistory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_is_plain_object__ = __webpack_require__("./node_modules/slate-history/node_modules/is-plain-object/dist/is-plain-object.mjs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_slate__ = __webpack_require__("./node_modules/slate/dist/index.es.js");



var History = {
  /**
   * Check if a value is a `History` object.
   */
  isHistory(value) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_is_plain_object__["a" /* isPlainObject */])(value) && Array.isArray(value.redos) && Array.isArray(value.undos) && (value.redos.length === 0 || __WEBPACK_IMPORTED_MODULE_1_slate__["Operation"].isOperationList(value.redos[0])) && (value.undos.length === 0 || __WEBPACK_IMPORTED_MODULE_1_slate__["Operation"].isOperationList(value.undos[0]));
  }

};

/**
 * Weakmaps for attaching state to the editor.
 */

var HISTORY = new WeakMap();
var SAVING = new WeakMap();
var MERGING = new WeakMap();
var HistoryEditor = {
  /**
   * Check if a value is a `HistoryEditor` object.
   */
  isHistoryEditor(value) {
    return History.isHistory(value.history) && __WEBPACK_IMPORTED_MODULE_1_slate__["Editor"].isEditor(value);
  },

  /**
   * Get the merge flag's current value.
   */
  isMerging(editor) {
    return MERGING.get(editor);
  },

  /**
   * Get the saving flag's current value.
   */
  isSaving(editor) {
    return SAVING.get(editor);
  },

  /**
   * Redo to the previous saved state.
   */
  redo(editor) {
    editor.redo();
  },

  /**
   * Undo to the previous saved state.
   */
  undo(editor) {
    editor.undo();
  },

  /**
   * Apply a series of changes inside a synchronous `fn`, without merging any of
   * the new operations into previous save point in the history.
   */
  withoutMerging(editor, fn) {
    var prev = HistoryEditor.isMerging(editor);
    MERGING.set(editor, false);
    fn();
    MERGING.set(editor, prev);
  },

  /**
   * Apply a series of changes inside a synchronous `fn`, without saving any of
   * their operations into the history.
   */
  withoutSaving(editor, fn) {
    var prev = HistoryEditor.isSaving(editor);
    SAVING.set(editor, false);
    fn();
    SAVING.set(editor, prev);
  }

};

/**
 * The `withHistory` plugin keeps track of the operation history of a Slate
 * editor as operations are applied to it, using undo and redo stacks.
 *
 * If you are using TypeScript, you must extend Slate's CustomTypes to use
 * this plugin.
 *
 * See https://docs.slatejs.org/concepts/11-typescript to learn how.
 */

var withHistory = editor => {
  var e = editor;
  var {
    apply
  } = e;
  e.history = {
    undos: [],
    redos: []
  };

  e.redo = () => {
    var {
      history
    } = e;
    var {
      redos
    } = history;

    if (redos.length > 0) {
      var batch = redos[redos.length - 1];
      HistoryEditor.withoutSaving(e, () => {
        __WEBPACK_IMPORTED_MODULE_1_slate__["Editor"].withoutNormalizing(e, () => {
          for (var op of batch) {
            e.apply(op);
          }
        });
      });
      history.redos.pop();
      history.undos.push(batch);
    }
  };

  e.undo = () => {
    var {
      history
    } = e;
    var {
      undos
    } = history;

    if (undos.length > 0) {
      var batch = undos[undos.length - 1];
      HistoryEditor.withoutSaving(e, () => {
        __WEBPACK_IMPORTED_MODULE_1_slate__["Editor"].withoutNormalizing(e, () => {
          var inverseOps = batch.map(__WEBPACK_IMPORTED_MODULE_1_slate__["Operation"].inverse).reverse();

          for (var op of inverseOps) {
            e.apply(op);
          }
        });
      });
      history.redos.push(batch);
      history.undos.pop();
    }
  };

  e.apply = op => {
    var {
      operations,
      history
    } = e;
    var {
      undos
    } = history;
    var lastBatch = undos[undos.length - 1];
    var lastOp = lastBatch && lastBatch[lastBatch.length - 1];
    var overwrite = shouldOverwrite(op, lastOp);
    var save = HistoryEditor.isSaving(e);
    var merge = HistoryEditor.isMerging(e);

    if (save == null) {
      save = shouldSave(op);
    }

    if (save) {
      if (merge == null) {
        if (lastBatch == null) {
          merge = false;
        } else if (operations.length !== 0) {
          merge = true;
        } else {
          merge = shouldMerge(op, lastOp) || overwrite;
        }
      }

      if (lastBatch && merge) {
        if (overwrite) {
          lastBatch.pop();
        }

        lastBatch.push(op);
      } else {
        var batch = [op];
        undos.push(batch);
      }

      while (undos.length > 100) {
        undos.shift();
      }

      if (shouldClear(op)) {
        history.redos = [];
      }
    }

    apply(op);
  };

  return e;
};
/**
 * Check whether to merge an operation into the previous operation.
 */

var shouldMerge = (op, prev) => {
  if (op.type === 'set_selection') {
    return true;
  }

  if (prev && op.type === 'insert_text' && prev.type === 'insert_text' && op.offset === prev.offset + prev.text.length && __WEBPACK_IMPORTED_MODULE_1_slate__["Path"].equals(op.path, prev.path)) {
    return true;
  }

  if (prev && op.type === 'remove_text' && prev.type === 'remove_text' && op.offset + op.text.length === prev.offset && __WEBPACK_IMPORTED_MODULE_1_slate__["Path"].equals(op.path, prev.path)) {
    return true;
  }

  return false;
};
/**
 * Check whether an operation needs to be saved to the history.
 */


var shouldSave = (op, prev) => {
  if (op.type === 'set_selection' && (op.properties == null || op.newProperties == null)) {
    return false;
  }

  return true;
};
/**
 * Check whether an operation should overwrite the previous one.
 */


var shouldOverwrite = (op, prev) => {
  if (prev && op.type === 'set_selection' && prev.type === 'set_selection') {
    return true;
  }

  return false;
};
/**
 * Check whether an operation should clear the redos stack.
 */


var shouldClear = op => {
  if (op.type === 'set_selection') {
    return false;
  }

  return true;
};


//# sourceMappingURL=index.es.js.map


/***/ }),

/***/ "./node_modules/slate-history/node_modules/is-plain-object/dist/is-plain-object.mjs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isPlainObject; });
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

function isObject(o) {
  return Object.prototype.toString.call(o) === '[object Object]';
}

function isPlainObject(o) {
  var ctor,prot;

  if (isObject(o) === false) return false;

  // If has modified constructor
  ctor = o.constructor;
  if (ctor === undefined) return true;

  // If has modified prototype
  prot = ctor.prototype;
  if (isObject(prot) === false) return false;

  // If constructor does not have an Object-specific method
  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  }

  // Most likely a plain Object
  return true;
}




/***/ }),

/***/ "./node_modules/slate-react/dist/index.es.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultElement", function() { return DefaultElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultLeaf", function() { return DefaultLeaf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultPlaceholder", function() { return DefaultPlaceholder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Editable", function() { return Editable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactEditor", function() { return ReactEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slate", function() { return Slate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEditor", function() { return useEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFocused", function() { return useFocused; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReadOnly", function() { return useReadOnly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSelected", function() { return useSelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSlate", function() { return useSlate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSlateSelection", function() { return useSlateSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSlateSelector", function() { return useSlateSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSlateStatic", function() { return useSlateStatic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSlateWithV", function() { return useSlateWithV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withReact", function() { return withReact; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_direction__ = __webpack_require__("./node_modules/direction/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_direction___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_direction__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_debounce__ = __webpack_require__("./node_modules/lodash/debounce.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_debounce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_debounce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_throttle__ = __webpack_require__("./node_modules/lodash/throttle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_throttle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_throttle__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_scroll_into_view_if_needed__ = __webpack_require__("./node_modules/scroll-into-view-if-needed/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_slate__ = __webpack_require__("./node_modules/slate/dist/index.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_is_hotkey__ = __webpack_require__("./node_modules/slate-react/node_modules/is-hotkey/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_is_hotkey___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_is_hotkey__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_dom__);









function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/**
 * An auto-incrementing identifier for keys.
 */
var n = 0;
/**
 * A class that keeps track of a key string. We use a full class here because we
 * want to be able to use them as keys in `WeakMap` objects.
 */

class Key {
  constructor() {
    this.id = "".concat(n++);
  }

}

/**
 * Two weak maps that allow us rebuild a path given a node. They are populated
 * at render time such that after a render occurs we can always backtrack.
 */
var NODE_TO_INDEX = new WeakMap();
var NODE_TO_PARENT = new WeakMap();
/**
 * Weak maps that allow us to go between Slate nodes and DOM nodes. These
 * are used to resolve DOM event-related logic into Slate actions.
 */

var EDITOR_TO_WINDOW = new WeakMap();
var EDITOR_TO_ELEMENT = new WeakMap();
var EDITOR_TO_PLACEHOLDER_ELEMENT = new WeakMap();
var ELEMENT_TO_NODE = new WeakMap();
var NODE_TO_ELEMENT = new WeakMap();
var NODE_TO_KEY = new WeakMap();
var EDITOR_TO_KEY_TO_ELEMENT = new WeakMap();
/**
 * Weak maps for storing editor-related state.
 */

var IS_READ_ONLY = new WeakMap();
var IS_FOCUSED = new WeakMap();
var IS_COMPOSING = new WeakMap();
var EDITOR_TO_USER_SELECTION = new WeakMap();
/**
 * Weak map for associating the context `onChange` context with the plugin.
 */

var EDITOR_TO_ON_CHANGE = new WeakMap();
/**
 * Weak maps for saving pending state on composition stage.
 */

var EDITOR_TO_SCHEDULE_FLUSH = new WeakMap();
var EDITOR_TO_PENDING_INSERTION_MARKS = new WeakMap();
var EDITOR_TO_USER_MARKS = new WeakMap();
/**
 * Android input handling specific weak-maps
 */

var EDITOR_TO_PENDING_DIFFS = new WeakMap();
var EDITOR_TO_PENDING_ACTION = new WeakMap();
var EDITOR_TO_PENDING_SELECTION = new WeakMap();
var EDITOR_TO_FORCE_RENDER = new WeakMap();
/**
 * Symbols.
 */

var PLACEHOLDER_SYMBOL = Symbol('placeholder');
var MARK_PLACEHOLDER_SYMBOL = Symbol('mark-placeholder');

/**
 * Types.
 */
var DOMText = globalThis.Text;
/**
 * Returns the host window of a DOM node
 */

var getDefaultView = value => {
  return value && value.ownerDocument && value.ownerDocument.defaultView || null;
};
/**
 * Check if a DOM node is a comment node.
 */

var isDOMComment = value => {
  return isDOMNode(value) && value.nodeType === 8;
};
/**
 * Check if a DOM node is an element node.
 */

var isDOMElement = value => {
  return isDOMNode(value) && value.nodeType === 1;
};
/**
 * Check if a value is a DOM node.
 */

var isDOMNode = value => {
  var window = getDefaultView(value);
  return !!window && value instanceof window.Node;
};
/**
 * Check if a value is a DOM selection.
 */

var isDOMSelection = value => {
  var window = value && value.anchorNode && getDefaultView(value.anchorNode);
  return !!window && value instanceof window.Selection;
};
/**
 * Check if a DOM node is an element node.
 */

var isDOMText = value => {
  return isDOMNode(value) && value.nodeType === 3;
};
/**
 * Checks whether a paste event is a plaintext-only event.
 */

var isPlainTextOnlyPaste = event => {
  return event.clipboardData && event.clipboardData.getData('text/plain') !== '' && event.clipboardData.types.length === 1;
};
/**
 * Normalize a DOM point so that it always refers to a text node.
 */

var normalizeDOMPoint = domPoint => {
  var [node, offset] = domPoint; // If it's an element node, its offset refers to the index of its children
  // including comment nodes, so try to find the right text child node.

  if (isDOMElement(node) && node.childNodes.length) {
    var isLast = offset === node.childNodes.length;
    var index = isLast ? offset - 1 : offset;
    [node, index] = getEditableChildAndIndex(node, index, isLast ? 'backward' : 'forward'); // If the editable child found is in front of input offset, we instead seek to its end

    isLast = index < offset; // If the node has children, traverse until we have a leaf node. Leaf nodes
    // can be either text nodes, or other void DOM nodes.

    while (isDOMElement(node) && node.childNodes.length) {
      var i = isLast ? node.childNodes.length - 1 : 0;
      node = getEditableChild(node, i, isLast ? 'backward' : 'forward');
    } // Determine the new offset inside the text node.


    offset = isLast && node.textContent != null ? node.textContent.length : 0;
  } // Return the node and offset.


  return [node, offset];
};
/**
 * Determines wether the active element is nested within a shadowRoot
 */

var hasShadowRoot = () => {
  return !!(window.document.activeElement && window.document.activeElement.shadowRoot);
};
/**
 * Get the nearest editable child and index at `index` in a `parent`, preferring
 * `direction`.
 */

var getEditableChildAndIndex = (parent, index, direction) => {
  var {
    childNodes
  } = parent;
  var child = childNodes[index];
  var i = index;
  var triedForward = false;
  var triedBackward = false; // While the child is a comment node, or an element node with no children,
  // keep iterating to find a sibling non-void, non-comment node.

  while (isDOMComment(child) || isDOMElement(child) && child.childNodes.length === 0 || isDOMElement(child) && child.getAttribute('contenteditable') === 'false') {
    if (triedForward && triedBackward) {
      break;
    }

    if (i >= childNodes.length) {
      triedForward = true;
      i = index - 1;
      direction = 'backward';
      continue;
    }

    if (i < 0) {
      triedBackward = true;
      i = index + 1;
      direction = 'forward';
      continue;
    }

    child = childNodes[i];
    index = i;
    i += direction === 'forward' ? 1 : -1;
  }

  return [child, index];
};
/**
 * Get the nearest editable child at `index` in a `parent`, preferring
 * `direction`.
 */

var getEditableChild = (parent, index, direction) => {
  var [child] = getEditableChildAndIndex(parent, index, direction);
  return child;
};
/**
 * Get a plaintext representation of the content of a node, accounting for block
 * elements which get a newline appended.
 *
 * The domNode must be attached to the DOM.
 */

var getPlainText = domNode => {
  var text = '';

  if (isDOMText(domNode) && domNode.nodeValue) {
    return domNode.nodeValue;
  }

  if (isDOMElement(domNode)) {
    for (var childNode of Array.from(domNode.childNodes)) {
      text += getPlainText(childNode);
    }

    var display = getComputedStyle(domNode).getPropertyValue('display');

    if (display === 'block' || display === 'list' || domNode.tagName === 'BR') {
      text += '\n';
    }
  }

  return text;
};
/**
 * Get x-slate-fragment attribute from data-slate-fragment
 */

var catchSlateFragment = /data-slate-fragment="(.+?)"/m;
var getSlateFragmentAttribute = dataTransfer => {
  var htmlData = dataTransfer.getData('text/html');
  var [, fragment] = htmlData.match(catchSlateFragment) || [];
  return fragment;
};
/**
 * Check whether a mutation originates from a editable element inside the editor.
 */

var isTrackedMutation = (editor, mutation, batch) => {
  var {
    target
  } = mutation;

  if (isDOMElement(target) && target.matches('[contentEditable="false"]')) {
    return false;
  }

  var {
    document
  } = ReactEditor.getWindow(editor);

  if (document.contains(target)) {
    return ReactEditor.hasDOMNode(editor, target, {
      editable: true
    });
  }

  var parentMutation = batch.find(_ref => {
    var {
      addedNodes,
      removedNodes
    } = _ref;

    for (var node of addedNodes) {
      if (node === target || node.contains(target)) {
        return true;
      }
    }

    for (var _node of removedNodes) {
      if (_node === target || _node.contains(target)) {
        return true;
      }
    }
  });

  if (!parentMutation || parentMutation === mutation) {
    return false;
  } // Target add/remove is tracked. Track the mutation if we track the parent mutation.


  return isTrackedMutation(editor, parentMutation, batch);
};

var IS_REACT_VERSION_17_OR_ABOVE = parseInt(__WEBPACK_IMPORTED_MODULE_3_react___default.a.version.split('.')[0], 10) >= 17;
var IS_IOS = typeof navigator !== 'undefined' && typeof window !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
var IS_APPLE = typeof navigator !== 'undefined' && /Mac OS X/.test(navigator.userAgent);
var IS_ANDROID = typeof navigator !== 'undefined' && /Android/.test(navigator.userAgent);
var IS_FIREFOX = typeof navigator !== 'undefined' && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent);
var IS_SAFARI = typeof navigator !== 'undefined' && /Version\/[\d\.]+.*Safari/.test(navigator.userAgent); // "modern" Edge was released at 79.x

var IS_EDGE_LEGACY = typeof navigator !== 'undefined' && /Edge?\/(?:[0-6][0-9]|[0-7][0-8])(?:\.)/i.test(navigator.userAgent);
var IS_CHROME = typeof navigator !== 'undefined' && /Chrome/i.test(navigator.userAgent); // Native `beforeInput` events don't work well with react on Chrome 75
// and older, Chrome 76+ can use `beforeInput` though.

var IS_CHROME_LEGACY = typeof navigator !== 'undefined' && /Chrome?\/(?:[0-7][0-5]|[0-6][0-9])(?:\.)/i.test(navigator.userAgent); // Firefox did not support `beforeInput` until `v87`.

var IS_FIREFOX_LEGACY = typeof navigator !== 'undefined' && /^(?!.*Seamonkey)(?=.*Firefox\/(?:[0-7][0-9]|[0-8][0-6])(?:\.)).*/i.test(navigator.userAgent); // qq browser

var IS_QQBROWSER = typeof navigator !== 'undefined' && /.*QQBrowser/.test(navigator.userAgent); // UC mobile browser

var IS_UC_MOBILE = typeof navigator !== 'undefined' && /.*UCBrowser/.test(navigator.userAgent); // Wechat browser

var IS_WECHATBROWSER = typeof navigator !== 'undefined' && /.*Wechat/.test(navigator.userAgent); // Check if DOM is available as React does internally.
// https://github.com/facebook/react/blob/master/packages/shared/ExecutionEnvironment.js

var CAN_USE_DOM = !!(typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined'); // COMPAT: Firefox/Edge Legacy don't support the `beforeinput` event
// Chrome Legacy doesn't support `beforeinput` correctly

var HAS_BEFORE_INPUT_SUPPORT = !IS_CHROME_LEGACY && !IS_EDGE_LEGACY && // globalThis is undefined in older browsers
typeof globalThis !== 'undefined' && globalThis.InputEvent && // @ts-ignore The `getTargetRanges` property isn't recognized.
typeof globalThis.InputEvent.prototype.getTargetRanges === 'function';

var ReactEditor = {
  /**
   * Check if the user is currently composing inside the editor.
   */
  isComposing(editor) {
    return !!IS_COMPOSING.get(editor);
  },

  /**
   * Return the host window of the current editor.
   */
  getWindow(editor) {
    var window = EDITOR_TO_WINDOW.get(editor);

    if (!window) {
      throw new Error('Unable to find a host window element for this editor');
    }

    return window;
  },

  /**
   * Find a key for a Slate node.
   */
  findKey(editor, node) {
    var key = NODE_TO_KEY.get(node);

    if (!key) {
      key = new Key();
      NODE_TO_KEY.set(node, key);
    }

    return key;
  },

  /**
   * Find the path of Slate node.
   */
  findPath(editor, node) {
    var path = [];
    var child = node;

    while (true) {
      var parent = NODE_TO_PARENT.get(child);

      if (parent == null) {
        if (__WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].isEditor(child)) {
          return path;
        } else {
          break;
        }
      }

      var i = NODE_TO_INDEX.get(child);

      if (i == null) {
        break;
      }

      path.unshift(i);
      child = parent;
    }

    throw new Error("Unable to find the path for Slate node: ".concat(__WEBPACK_IMPORTED_MODULE_5_slate__["Scrubber"].stringify(node)));
  },

  /**
   * Find the DOM node that implements DocumentOrShadowRoot for the editor.
   */
  findDocumentOrShadowRoot(editor) {
    var el = ReactEditor.toDOMNode(editor, editor);
    var root = el.getRootNode();

    if ((root instanceof Document || root instanceof ShadowRoot) && root.getSelection != null) {
      return root;
    }

    return el.ownerDocument;
  },

  /**
   * Check if the editor is focused.
   */
  isFocused(editor) {
    return !!IS_FOCUSED.get(editor);
  },

  /**
   * Check if the editor is in read-only mode.
   */
  isReadOnly(editor) {
    return !!IS_READ_ONLY.get(editor);
  },

  /**
   * Blur the editor.
   */
  blur(editor) {
    var el = ReactEditor.toDOMNode(editor, editor);
    var root = ReactEditor.findDocumentOrShadowRoot(editor);
    IS_FOCUSED.set(editor, false);

    if (root.activeElement === el) {
      el.blur();
    }
  },

  /**
   * Focus the editor.
   */
  focus(editor) {
    var el = ReactEditor.toDOMNode(editor, editor);
    var root = ReactEditor.findDocumentOrShadowRoot(editor);
    IS_FOCUSED.set(editor, true);

    if (root.activeElement !== el) {
      el.focus({
        preventScroll: true
      });
    }
  },

  /**
   * Deselect the editor.
   */
  deselect(editor) {
    var {
      selection
    } = editor;
    var root = ReactEditor.findDocumentOrShadowRoot(editor);
    var domSelection = root.getSelection();

    if (domSelection && domSelection.rangeCount > 0) {
      domSelection.removeAllRanges();
    }

    if (selection) {
      __WEBPACK_IMPORTED_MODULE_5_slate__["Transforms"].deselect(editor);
    }
  },

  /**
   * Check if a DOM node is within the editor.
   */
  hasDOMNode(editor, target) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var {
      editable = false
    } = options;
    var editorEl = ReactEditor.toDOMNode(editor, editor);
    var targetEl; // COMPAT: In Firefox, reading `target.nodeType` will throw an error if
    // target is originating from an internal "restricted" element (e.g. a
    // stepper arrow on a number input). (2018/05/04)
    // https://github.com/ianstormtaylor/slate/issues/1819

    try {
      targetEl = isDOMElement(target) ? target : target.parentElement;
    } catch (err) {
      if (!err.message.includes('Permission denied to access property "nodeType"')) {
        throw err;
      }
    }

    if (!targetEl) {
      return false;
    }

    return targetEl.closest("[data-slate-editor]") === editorEl && (!editable || targetEl.isContentEditable ? true : typeof targetEl.isContentEditable === 'boolean' && // isContentEditable exists only on HTMLElement, and on other nodes it will be undefined
    // this is the core logic that lets you know you got the right editor.selection instead of null when editor is contenteditable="false"(readOnly)
    targetEl.closest('[contenteditable="false"]') === editorEl || !!targetEl.getAttribute('data-slate-zero-width'));
  },

  /**
   * Insert data from a `DataTransfer` into the editor.
   */
  insertData(editor, data) {
    editor.insertData(data);
  },

  /**
   * Insert fragment data from a `DataTransfer` into the editor.
   */
  insertFragmentData(editor, data) {
    return editor.insertFragmentData(data);
  },

  /**
   * Insert text data from a `DataTransfer` into the editor.
   */
  insertTextData(editor, data) {
    return editor.insertTextData(data);
  },

  /**
   * Sets data from the currently selected fragment on a `DataTransfer`.
   */
  setFragmentData(editor, data, originEvent) {
    editor.setFragmentData(data, originEvent);
  },

  /**
   * Find the native DOM element from a Slate node.
   */
  toDOMNode(editor, node) {
    var KEY_TO_ELEMENT = EDITOR_TO_KEY_TO_ELEMENT.get(editor);
    var domNode = __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].isEditor(node) ? EDITOR_TO_ELEMENT.get(editor) : KEY_TO_ELEMENT === null || KEY_TO_ELEMENT === void 0 ? void 0 : KEY_TO_ELEMENT.get(ReactEditor.findKey(editor, node));

    if (!domNode) {
      throw new Error("Cannot resolve a DOM node from Slate node: ".concat(__WEBPACK_IMPORTED_MODULE_5_slate__["Scrubber"].stringify(node)));
    }

    return domNode;
  },

  /**
   * Find a native DOM selection point from a Slate point.
   */
  toDOMPoint(editor, point) {
    var [node] = __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].node(editor, point.path);
    var el = ReactEditor.toDOMNode(editor, node);
    var domPoint; // If we're inside a void node, force the offset to 0, otherwise the zero
    // width spacing character will result in an incorrect offset of 1

    if (__WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].void(editor, {
      at: point
    })) {
      point = {
        path: point.path,
        offset: 0
      };
    } // For each leaf, we need to isolate its content, which means filtering
    // to its direct text and zero-width spans. (We have to filter out any
    // other siblings that may have been rendered alongside them.)


    var selector = "[data-slate-string], [data-slate-zero-width]";
    var texts = Array.from(el.querySelectorAll(selector));
    var start = 0;

    for (var i = 0; i < texts.length; i++) {
      var text = texts[i];
      var domNode = text.childNodes[0];

      if (domNode == null || domNode.textContent == null) {
        continue;
      }

      var {
        length
      } = domNode.textContent;
      var attr = text.getAttribute('data-slate-length');
      var trueLength = attr == null ? length : parseInt(attr, 10);
      var end = start + trueLength; // Prefer putting the selection inside the mark placeholder to ensure
      // composed text is displayed with the correct marks.

      var nextText = texts[i + 1];

      if (point.offset === end && nextText !== null && nextText !== void 0 && nextText.hasAttribute('data-slate-mark-placeholder')) {
        var _nextText$textContent;

        var domText = nextText.childNodes[0];
        domPoint = [// COMPAT: If we don't explicity set the dom point to be on the actual
        // dom text element, chrome will put the selection behind the actual dom
        // text element, causing domRange.getBoundingClientRect() calls on a collapsed
        // selection to return incorrect zero values (https://bugs.chromium.org/p/chromium/issues/detail?id=435438)
        // which will cause issues when scrolling to it.
        domText instanceof DOMText ? domText : nextText, (_nextText$textContent = nextText.textContent) !== null && _nextText$textContent !== void 0 && _nextText$textContent.startsWith('\uFEFF') ? 1 : 0];
        break;
      }

      if (point.offset <= end) {
        var offset = Math.min(length, Math.max(0, point.offset - start));
        domPoint = [domNode, offset];
        break;
      }

      start = end;
    }

    if (!domPoint) {
      throw new Error("Cannot resolve a DOM point from Slate point: ".concat(__WEBPACK_IMPORTED_MODULE_5_slate__["Scrubber"].stringify(point)));
    }

    return domPoint;
  },

  /**
   * Find a native DOM range from a Slate `range`.
   *
   * Notice: the returned range will always be ordinal regardless of the direction of Slate `range` due to DOM API limit.
   *
   * there is no way to create a reverse DOM Range using Range.setStart/setEnd
   * according to https://dom.spec.whatwg.org/#concept-range-bp-set.
   */
  toDOMRange(editor, range) {
    var {
      anchor,
      focus
    } = range;
    var isBackward = __WEBPACK_IMPORTED_MODULE_5_slate__["Range"].isBackward(range);
    var domAnchor = ReactEditor.toDOMPoint(editor, anchor);
    var domFocus = __WEBPACK_IMPORTED_MODULE_5_slate__["Range"].isCollapsed(range) ? domAnchor : ReactEditor.toDOMPoint(editor, focus);
    var window = ReactEditor.getWindow(editor);
    var domRange = window.document.createRange();
    var [startNode, startOffset] = isBackward ? domFocus : domAnchor;
    var [endNode, endOffset] = isBackward ? domAnchor : domFocus; // A slate Point at zero-width Leaf always has an offset of 0 but a native DOM selection at
    // zero-width node has an offset of 1 so we have to check if we are in a zero-width node and
    // adjust the offset accordingly.

    var startEl = isDOMElement(startNode) ? startNode : startNode.parentElement;
    var isStartAtZeroWidth = !!startEl.getAttribute('data-slate-zero-width');
    var endEl = isDOMElement(endNode) ? endNode : endNode.parentElement;
    var isEndAtZeroWidth = !!endEl.getAttribute('data-slate-zero-width');
    domRange.setStart(startNode, isStartAtZeroWidth ? 1 : startOffset);
    domRange.setEnd(endNode, isEndAtZeroWidth ? 1 : endOffset);
    return domRange;
  },

  /**
   * Find a Slate node from a native DOM `element`.
   */
  toSlateNode(editor, domNode) {
    var domEl = isDOMElement(domNode) ? domNode : domNode.parentElement;

    if (domEl && !domEl.hasAttribute('data-slate-node')) {
      domEl = domEl.closest("[data-slate-node]");
    }

    var node = domEl ? ELEMENT_TO_NODE.get(domEl) : null;

    if (!node) {
      throw new Error("Cannot resolve a Slate node from DOM node: ".concat(domEl));
    }

    return node;
  },

  /**
   * Get the target range from a DOM `event`.
   */
  findEventRange(editor, event) {
    if ('nativeEvent' in event) {
      event = event.nativeEvent;
    }

    var {
      clientX: x,
      clientY: y,
      target
    } = event;

    if (x == null || y == null) {
      throw new Error("Cannot resolve a Slate range from a DOM event: ".concat(event));
    }

    var node = ReactEditor.toSlateNode(editor, event.target);
    var path = ReactEditor.findPath(editor, node); // If the drop target is inside a void node, move it into either the
    // next or previous node, depending on which side the `x` and `y`
    // coordinates are closest to.

    if (__WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].isVoid(editor, node)) {
      var rect = target.getBoundingClientRect();
      var isPrev = editor.isInline(node) ? x - rect.left < rect.left + rect.width - x : y - rect.top < rect.top + rect.height - y;
      var edge = __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].point(editor, path, {
        edge: isPrev ? 'start' : 'end'
      });
      var point = isPrev ? __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].before(editor, edge) : __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].after(editor, edge);

      if (point) {
        var _range = __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].range(editor, point);

        return _range;
      }
    } // Else resolve a range from the caret position where the drop occured.


    var domRange;
    var {
      document
    } = ReactEditor.getWindow(editor); // COMPAT: In Firefox, `caretRangeFromPoint` doesn't exist. (2016/07/25)

    if (document.caretRangeFromPoint) {
      domRange = document.caretRangeFromPoint(x, y);
    } else {
      var position = document.caretPositionFromPoint(x, y);

      if (position) {
        domRange = document.createRange();
        domRange.setStart(position.offsetNode, position.offset);
        domRange.setEnd(position.offsetNode, position.offset);
      }
    }

    if (!domRange) {
      throw new Error("Cannot resolve a Slate range from a DOM event: ".concat(event));
    } // Resolve a Slate range from the DOM range.


    var range = ReactEditor.toSlateRange(editor, domRange, {
      exactMatch: false,
      suppressThrow: false
    });
    return range;
  },

  /**
   * Find a Slate point from a DOM selection's `domNode` and `domOffset`.
   */
  toSlatePoint(editor, domPoint, options) {
    var {
      exactMatch,
      suppressThrow
    } = options;
    var [nearestNode, nearestOffset] = exactMatch ? domPoint : normalizeDOMPoint(domPoint);
    var parentNode = nearestNode.parentNode;
    var textNode = null;
    var offset = 0;

    if (parentNode) {
      var _domNode$textContent, _domNode$textContent2;

      var editorEl = ReactEditor.toDOMNode(editor, editor);
      var potentialVoidNode = parentNode.closest('[data-slate-void="true"]'); // Need to ensure that the closest void node is actually a void node
      // within this editor, and not a void node within some parent editor. This can happen
      // if this editor is within a void node of another editor ("nested editors", like in
      // the "Editable Voids" example on the docs site).

      var voidNode = potentialVoidNode && editorEl.contains(potentialVoidNode) ? potentialVoidNode : null;
      var leafNode = parentNode.closest('[data-slate-leaf]');
      var domNode = null; // Calculate how far into the text node the `nearestNode` is, so that we
      // can determine what the offset relative to the text node is.

      if (leafNode) {
        textNode = leafNode.closest('[data-slate-node="text"]');

        if (textNode) {
          var window = ReactEditor.getWindow(editor);
          var range = window.document.createRange();
          range.setStart(textNode, 0);
          range.setEnd(nearestNode, nearestOffset);
          var contents = range.cloneContents();
          var removals = [...Array.prototype.slice.call(contents.querySelectorAll('[data-slate-zero-width]')), ...Array.prototype.slice.call(contents.querySelectorAll('[contenteditable=false]'))];
          removals.forEach(el => {
            // COMPAT: While composing at the start of a text node, some keyboards put
            // the text content inside the zero width space.
            if (IS_ANDROID && !exactMatch && el.hasAttribute('data-slate-zero-width') && el.textContent.length > 0 && el.textContext !== '\uFEFF') {
              if (el.textContent.startsWith('\uFEFF')) {
                el.textContent = el.textContent.slice(1);
              }

              return;
            }

            el.parentNode.removeChild(el);
          }); // COMPAT: Edge has a bug where Range.prototype.toString() will
          // convert \n into \r\n. The bug causes a loop when slate-react
          // attempts to reposition its cursor to match the native position. Use
          // textContent.length instead.
          // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/10291116/

          offset = contents.textContent.length;
          domNode = textNode;
        }
      } else if (voidNode) {
        // For void nodes, the element with the offset key will be a cousin, not an
        // ancestor, so find it by going down from the nearest void parent and taking the
        // first one that isn't inside a nested editor.
        var leafNodes = voidNode.querySelectorAll('[data-slate-leaf]');

        for (var index = 0; index < leafNodes.length; index++) {
          var current = leafNodes[index];

          if (ReactEditor.hasDOMNode(editor, current)) {
            leafNode = current;
            break;
          }
        } // COMPAT: In read-only editors the leaf is not rendered.


        if (!leafNode) {
          offset = 1;
        } else {
          textNode = leafNode.closest('[data-slate-node="text"]');
          domNode = leafNode;
          offset = domNode.textContent.length;
          domNode.querySelectorAll('[data-slate-zero-width]').forEach(el => {
            offset -= el.textContent.length;
          });
        }
      }

      if (domNode && offset === domNode.textContent.length && // COMPAT: Android IMEs might remove the zero width space while composing,
      // and we don't add it for line-breaks.
      IS_ANDROID && domNode.getAttribute('data-slate-zero-width') === 'z' && (_domNode$textContent = domNode.textContent) !== null && _domNode$textContent !== void 0 && _domNode$textContent.startsWith('\uFEFF') && (parentNode.hasAttribute('data-slate-zero-width') || IS_FIREFOX && (_domNode$textContent2 = domNode.textContent) !== null && _domNode$textContent2 !== void 0 && _domNode$textContent2.endsWith('\n\n'))) {
        offset--;
      }
    }

    if (IS_ANDROID && !textNode && !exactMatch) {
      var node = parentNode.hasAttribute('data-slate-node') ? parentNode : parentNode.closest('[data-slate-node]');

      if (node && ReactEditor.hasDOMNode(editor, node, {
        editable: true
      })) {
        var _slateNode = ReactEditor.toSlateNode(editor, node);

        var {
          path: _path,
          offset: _offset
        } = __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].start(editor, ReactEditor.findPath(editor, _slateNode));

        if (!node.querySelector('[data-slate-leaf]')) {
          _offset = nearestOffset;
        }

        return {
          path: _path,
          offset: _offset
        };
      }
    }

    if (!textNode) {
      if (suppressThrow) {
        return null;
      }

      throw new Error("Cannot resolve a Slate point from DOM point: ".concat(domPoint));
    } // COMPAT: If someone is clicking from one Slate editor into another,
    // the select event fires twice, once for the old editor's `element`
    // first, and then afterwards for the correct `element`. (2017/03/03)


    var slateNode = ReactEditor.toSlateNode(editor, textNode);
    var path = ReactEditor.findPath(editor, slateNode);
    return {
      path,
      offset
    };
  },

  /**
   * Find a Slate range from a DOM range or selection.
   */
  toSlateRange(editor, domRange, options) {
    var {
      exactMatch,
      suppressThrow
    } = options;
    var el = isDOMSelection(domRange) ? domRange.anchorNode : domRange.startContainer;
    var anchorNode;
    var anchorOffset;
    var focusNode;
    var focusOffset;
    var isCollapsed;

    if (el) {
      if (isDOMSelection(domRange)) {
        anchorNode = domRange.anchorNode;
        anchorOffset = domRange.anchorOffset;
        focusNode = domRange.focusNode;
        focusOffset = domRange.focusOffset; // COMPAT: There's a bug in chrome that always returns `true` for
        // `isCollapsed` for a Selection that comes from a ShadowRoot.
        // (2020/08/08)
        // https://bugs.chromium.org/p/chromium/issues/detail?id=447523

        if (IS_CHROME && hasShadowRoot()) {
          isCollapsed = domRange.anchorNode === domRange.focusNode && domRange.anchorOffset === domRange.focusOffset;
        } else {
          isCollapsed = domRange.isCollapsed;
        }
      } else {
        anchorNode = domRange.startContainer;
        anchorOffset = domRange.startOffset;
        focusNode = domRange.endContainer;
        focusOffset = domRange.endOffset;
        isCollapsed = domRange.collapsed;
      }
    }

    if (anchorNode == null || focusNode == null || anchorOffset == null || focusOffset == null) {
      throw new Error("Cannot resolve a Slate range from DOM range: ".concat(domRange));
    }

    var anchor = ReactEditor.toSlatePoint(editor, [anchorNode, anchorOffset], {
      exactMatch,
      suppressThrow
    });

    if (!anchor) {
      return null;
    }

    var focus = isCollapsed ? anchor : ReactEditor.toSlatePoint(editor, [focusNode, focusOffset], {
      exactMatch,
      suppressThrow
    });

    if (!focus) {
      return null;
    }

    var range = {
      anchor: anchor,
      focus: focus
    }; // if the selection is a hanging range that ends in a void
    // and the DOM focus is an Element
    // (meaning that the selection ends before the element)
    // unhang the range to avoid mistakenly including the void

    if (__WEBPACK_IMPORTED_MODULE_5_slate__["Range"].isExpanded(range) && __WEBPACK_IMPORTED_MODULE_5_slate__["Range"].isForward(range) && isDOMElement(focusNode) && __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].void(editor, {
      at: range.focus,
      mode: 'highest'
    })) {
      range = __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].unhangRange(editor, range, {
        voids: true
      });
    }

    return range;
  },

  hasRange(editor, range) {
    var {
      anchor,
      focus
    } = range;
    return __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].hasPath(editor, anchor.path) && __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].hasPath(editor, focus.path);
  },

  /**
   * Experimental and android specific: Flush all pending diffs and cancel composition at the next possible time.
   */
  androidScheduleFlush(editor) {
    var _EDITOR_TO_SCHEDULE_F;

    (_EDITOR_TO_SCHEDULE_F = EDITOR_TO_SCHEDULE_FLUSH.get(editor)) === null || _EDITOR_TO_SCHEDULE_F === void 0 ? void 0 : _EDITOR_TO_SCHEDULE_F();
  },

  /**
   * Experimental and android specific: Get pending diffs
   */
  androidPendingDiffs(editor) {
    return EDITOR_TO_PENDING_DIFFS.get(editor);
  }

};

/**
 * Prevent warning on SSR by falling back to useEffect when DOM isn't available
 */

var useIsomorphicLayoutEffect = CAN_USE_DOM ? __WEBPACK_IMPORTED_MODULE_3_react__["useLayoutEffect"] : __WEBPACK_IMPORTED_MODULE_3_react__["useEffect"];

var _excluded$3 = ["anchor", "focus"],
    _excluded2$1 = ["anchor", "focus"];
var shallowCompare = (obj1, obj2) => Object.keys(obj1).length === Object.keys(obj2).length && Object.keys(obj1).every(key => obj2.hasOwnProperty(key) && obj1[key] === obj2[key]);
/**
 * Check if a list of decorator ranges are equal to another.
 *
 * PERF: this requires the two lists to also have the ranges inside them in the
 * same order, but this is an okay constraint for us since decorations are
 * kept in order, and the odd case where they aren't is okay to re-render for.
 */

var isDecoratorRangeListEqual = (list, another) => {
  if (list.length !== another.length) {
    return false;
  }

  for (var i = 0; i < list.length; i++) {
    var range = list[i];
    var other = another[i];

    var rangeOwnProps = _objectWithoutProperties(range, _excluded$3);

    var otherOwnProps = _objectWithoutProperties(other, _excluded2$1);

    if (!__WEBPACK_IMPORTED_MODULE_5_slate__["Range"].equals(range, other) || range[PLACEHOLDER_SYMBOL] !== other[PLACEHOLDER_SYMBOL] || !shallowCompare(rangeOwnProps, otherOwnProps)) {
      return false;
    }
  }

  return true;
};

/**
 * Leaf content strings.
 */

var String = props => {
  var {
    isLast,
    leaf,
    parent,
    text
  } = props;
  var editor = useSlateStatic();
  var path = ReactEditor.findPath(editor, text);
  var parentPath = __WEBPACK_IMPORTED_MODULE_5_slate__["Path"].parent(path);
  var isMarkPlaceholder = leaf[MARK_PLACEHOLDER_SYMBOL] === true; // COMPAT: Render text inside void nodes with a zero-width space.
  // So the node can contain selection but the text is not visible.

  if (editor.isVoid(parent)) {
    return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ZeroWidthString, {
      length: __WEBPACK_IMPORTED_MODULE_5_slate__["Node"].string(parent).length
    });
  } // COMPAT: If this is the last text node in an empty block, render a zero-
  // width space that will convert into a line break when copying and pasting
  // to support expected plain text.


  if (leaf.text === '' && parent.children[parent.children.length - 1] === text && !editor.isInline(parent) && __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].string(editor, parentPath) === '') {
    return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ZeroWidthString, {
      isLineBreak: true,
      isMarkPlaceholder: isMarkPlaceholder
    });
  } // COMPAT: If the text is empty, it's because it's on the edge of an inline
  // node, so we render a zero-width space so that the selection can be
  // inserted next to it still.


  if (leaf.text === '') {
    return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ZeroWidthString, {
      isMarkPlaceholder: isMarkPlaceholder
    });
  } // COMPAT: Browsers will collapse trailing new lines at the end of blocks,
  // so we need to add an extra trailing new lines to prevent that.


  if (isLast && leaf.text.slice(-1) === '\n') {
    return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(TextString, {
      isTrailing: true,
      text: leaf.text
    });
  }

  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(TextString, {
    text: leaf.text
  });
};
/**
 * Leaf strings with text in them.
 */


var TextString = props => {
  var {
    text,
    isTrailing = false
  } = props;
  var ref = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useRef"])(null);

  var getTextContent = () => {
    return "".concat(text !== null && text !== void 0 ? text : '').concat(isTrailing ? '\n' : '');
  }; // This is the actual text rendering boundary where we interface with the DOM
  // The text is not rendered as part of the virtual DOM, as since we handle basic character insertions natively,
  // updating the DOM is not a one way dataflow anymore. What we need here is not reconciliation and diffing
  // with previous version of the virtual DOM, but rather diffing with the actual DOM element, and replace the DOM <span> content
  // exactly if and only if its current content does not match our current virtual DOM.
  // Otherwise the DOM TextNode would always be replaced by React as the user types, which interferes with native text features,
  // eg makes native spellcheck opt out from checking the text node.
  // useLayoutEffect: updating our span before browser paint


  useIsomorphicLayoutEffect(() => {
    // null coalescing text to make sure we're not outputing "null" as a string in the extreme case it is nullish at runtime
    var textWithTrailing = getTextContent();

    if (ref.current && ref.current.textContent !== textWithTrailing) {
      ref.current.textContent = textWithTrailing;
    } // intentionally not specifying dependencies, so that this effect runs on every render
    // as this effectively replaces "specifying the text in the virtual DOM under the <span> below" on each render

  }); // Render text content immediately if it's the first-time render
  // Ensure that text content is rendered on server-side rendering

  if (!ref.current) {
    return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("span", {
      "data-slate-string": true,
      ref: ref
    }, getTextContent());
  } // the span is intentionally same on every render in virtual DOM, actual rendering happens in the layout effect above


  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("span", {
    "data-slate-string": true,
    ref: ref
  });
};
/**
 * Leaf strings without text, render as zero-width strings.
 */


var ZeroWidthString = props => {
  var {
    length = 0,
    isLineBreak = false,
    isMarkPlaceholder = false
  } = props;
  var attributes = {
    'data-slate-zero-width': isLineBreak ? 'n' : 'z',
    'data-slate-length': length
  };

  if (isMarkPlaceholder) {
    attributes['data-slate-mark-placeholder'] = true;
  }

  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("span", Object.assign({}, attributes), !IS_ANDROID || !isLineBreak ? '\uFEFF' : null, isLineBreak ? /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("br", null) : null);
};

/**
 * A React context for sharing the editor object.
 */

var EditorContext = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["createContext"])(null);
/**
 * Get the current editor object from the React context.
 */

var useSlateStatic = () => {
  var editor = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useContext"])(EditorContext);

  if (!editor) {
    throw new Error("The `useSlateStatic` hook must be used inside the <Slate> component's context.");
  }

  return editor;
};

/**
 * Individual leaves in a text node with unique formatting.
 */

var Leaf = props => {
  var {
    leaf,
    isLast,
    text,
    parent,
    renderPlaceholder,
    renderLeaf = props => /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(DefaultLeaf, Object.assign({}, props))
  } = props;
  var placeholderRef = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useRef"])(null);
  var editor = useSlateStatic();
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useEffect"])(() => {
    var placeholderEl = placeholderRef === null || placeholderRef === void 0 ? void 0 : placeholderRef.current;
    var editorEl = ReactEditor.toDOMNode(editor, editor);

    if (!placeholderEl || !editorEl) {
      return;
    }

    editorEl.style.minHeight = "".concat(placeholderEl.clientHeight, "px");
    EDITOR_TO_PLACEHOLDER_ELEMENT.set(editor, placeholderEl);
    return () => {
      editorEl.style.minHeight = 'auto';
      EDITOR_TO_PLACEHOLDER_ELEMENT.delete(editor);
    };
  }, [placeholderRef, leaf]);
  var children = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(String, {
    isLast: isLast,
    leaf: leaf,
    parent: parent,
    text: text
  });

  if (leaf[PLACEHOLDER_SYMBOL]) {
    var placeholderProps = {
      children: leaf.placeholder,
      attributes: {
        'data-slate-placeholder': true,
        style: {
          position: 'absolute',
          pointerEvents: 'none',
          width: '100%',
          maxWidth: '100%',
          display: 'block',
          opacity: '0.333',
          userSelect: 'none',
          textDecoration: 'none'
        },
        contentEditable: false,
        ref: placeholderRef
      }
    };
    children = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Fragment, null, renderPlaceholder(placeholderProps), children);
  } // COMPAT: Having the `data-` attributes on these leaf elements ensures that
  // in certain misbehaving browsers they aren't weirdly cloned/destroyed by
  // contenteditable behaviors. (2019/05/08)


  var attributes = {
    'data-slate-leaf': true
  };
  return renderLeaf({
    attributes,
    children,
    leaf,
    text
  });
};

var MemoizedLeaf = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.memo(Leaf, (prev, next) => {
  return next.parent === prev.parent && next.isLast === prev.isLast && next.renderLeaf === prev.renderLeaf && next.renderPlaceholder === prev.renderPlaceholder && next.text === prev.text && __WEBPACK_IMPORTED_MODULE_5_slate__["Text"].equals(next.leaf, prev.leaf) && next.leaf[PLACEHOLDER_SYMBOL] === prev.leaf[PLACEHOLDER_SYMBOL];
});
var DefaultLeaf = props => {
  var {
    attributes,
    children
  } = props;
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("span", Object.assign({}, attributes), children);
};

/**
 * Text.
 */

var Text = props => {
  var {
    decorations,
    isLast,
    parent,
    renderPlaceholder,
    renderLeaf,
    text
  } = props;
  var editor = useSlateStatic();
  var ref = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useRef"])(null);
  var leaves = __WEBPACK_IMPORTED_MODULE_5_slate__["Text"].decorations(text, decorations);
  var key = ReactEditor.findKey(editor, text);
  var children = [];

  for (var i = 0; i < leaves.length; i++) {
    var leaf = leaves[i];
    children.push( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(MemoizedLeaf, {
      isLast: isLast && i === leaves.length - 1,
      key: "".concat(key.id, "-").concat(i),
      renderPlaceholder: renderPlaceholder,
      leaf: leaf,
      text: text,
      parent: parent,
      renderLeaf: renderLeaf
    }));
  } // Update element-related weak maps with the DOM element ref.


  useIsomorphicLayoutEffect(() => {
    var KEY_TO_ELEMENT = EDITOR_TO_KEY_TO_ELEMENT.get(editor);

    if (ref.current) {
      KEY_TO_ELEMENT === null || KEY_TO_ELEMENT === void 0 ? void 0 : KEY_TO_ELEMENT.set(key, ref.current);
      NODE_TO_ELEMENT.set(text, ref.current);
      ELEMENT_TO_NODE.set(ref.current, text);
    } else {
      KEY_TO_ELEMENT === null || KEY_TO_ELEMENT === void 0 ? void 0 : KEY_TO_ELEMENT.delete(key);
      NODE_TO_ELEMENT.delete(text);
    }
  });
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("span", {
    "data-slate-node": "text",
    ref: ref
  }, children);
};

var MemoizedText = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.memo(Text, (prev, next) => {
  return next.parent === prev.parent && next.isLast === prev.isLast && next.renderLeaf === prev.renderLeaf && next.text === prev.text && isDecoratorRangeListEqual(next.decorations, prev.decorations);
});

/**
 * Element.
 */

var Element = props => {
  var {
    decorations,
    element,
    renderElement = p => /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(DefaultElement, Object.assign({}, p)),
    renderPlaceholder,
    renderLeaf,
    selection
  } = props;
  var editor = useSlateStatic();
  var readOnly = useReadOnly();
  var isInline = editor.isInline(element);
  var key = ReactEditor.findKey(editor, element);
  var ref = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useCallback"])(ref => {
    // Update element-related weak maps with the DOM element ref.
    var KEY_TO_ELEMENT = EDITOR_TO_KEY_TO_ELEMENT.get(editor);

    if (ref) {
      KEY_TO_ELEMENT === null || KEY_TO_ELEMENT === void 0 ? void 0 : KEY_TO_ELEMENT.set(key, ref);
      NODE_TO_ELEMENT.set(element, ref);
      ELEMENT_TO_NODE.set(ref, element);
    } else {
      KEY_TO_ELEMENT === null || KEY_TO_ELEMENT === void 0 ? void 0 : KEY_TO_ELEMENT.delete(key);
      NODE_TO_ELEMENT.delete(element);
    }
  }, [editor, key, element]);
  var children = useChildren({
    decorations,
    node: element,
    renderElement,
    renderPlaceholder,
    renderLeaf,
    selection
  }); // Attributes that the developer must mix into the element in their
  // custom node renderer component.

  var attributes = {
    'data-slate-node': 'element',
    ref
  };

  if (isInline) {
    attributes['data-slate-inline'] = true;
  } // If it's a block node with inline children, add the proper `dir` attribute
  // for text direction.


  if (!isInline && __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].hasInlines(editor, element)) {
    var text = __WEBPACK_IMPORTED_MODULE_5_slate__["Node"].string(element);
    var dir = __WEBPACK_IMPORTED_MODULE_0_direction___default()(text);

    if (dir === 'rtl') {
      attributes.dir = dir;
    }
  } // If it's a void node, wrap the children in extra void-specific elements.


  if (__WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].isVoid(editor, element)) {
    attributes['data-slate-void'] = true;

    if (!readOnly && isInline) {
      attributes.contentEditable = false;
    }

    var Tag = isInline ? 'span' : 'div';
    var [[_text]] = __WEBPACK_IMPORTED_MODULE_5_slate__["Node"].texts(element);
    children = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Tag, {
      "data-slate-spacer": true,
      style: {
        height: '0',
        color: 'transparent',
        outline: 'none',
        position: 'absolute'
      }
    }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(MemoizedText, {
      renderPlaceholder: renderPlaceholder,
      decorations: [],
      isLast: false,
      parent: element,
      text: _text
    }));
    NODE_TO_INDEX.set(_text, 0);
    NODE_TO_PARENT.set(_text, element);
  }

  return renderElement({
    attributes,
    children,
    element
  });
};

var MemoizedElement = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.memo(Element, (prev, next) => {
  return prev.element === next.element && prev.renderElement === next.renderElement && prev.renderLeaf === next.renderLeaf && isDecoratorRangeListEqual(prev.decorations, next.decorations) && (prev.selection === next.selection || !!prev.selection && !!next.selection && __WEBPACK_IMPORTED_MODULE_5_slate__["Range"].equals(prev.selection, next.selection));
});
/**
 * The default element renderer.
 */

var DefaultElement = props => {
  var {
    attributes,
    children,
    element
  } = props;
  var editor = useSlateStatic();
  var Tag = editor.isInline(element) ? 'span' : 'div';
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Tag, Object.assign({}, attributes, {
    style: {
      position: 'relative'
    }
  }), children);
};

/**
 * A React context for sharing the `decorate` prop of the editable.
 */

var DecorateContext = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["createContext"])(() => []);
/**
 * Get the current `decorate` prop of the editable.
 */

var useDecorate = () => {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useContext"])(DecorateContext);
};

/**
 * A React context for sharing the `selected` state of an element.
 */

var SelectedContext = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["createContext"])(false);
/**
 * Get the current `selected` state of an element.
 */

var useSelected = () => {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useContext"])(SelectedContext);
};

/**
 * Children.
 */

var useChildren = props => {
  var {
    decorations,
    node,
    renderElement,
    renderPlaceholder,
    renderLeaf,
    selection
  } = props;
  var decorate = useDecorate();
  var editor = useSlateStatic();
  var path = ReactEditor.findPath(editor, node);
  var children = [];
  var isLeafBlock = __WEBPACK_IMPORTED_MODULE_5_slate__["Element"].isElement(node) && !editor.isInline(node) && __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].hasInlines(editor, node);

  for (var i = 0; i < node.children.length; i++) {
    var p = path.concat(i);
    var n = node.children[i];
    var key = ReactEditor.findKey(editor, n);
    var range = __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].range(editor, p);
    var sel = selection && __WEBPACK_IMPORTED_MODULE_5_slate__["Range"].intersection(range, selection);
    var ds = decorate([n, p]);

    for (var dec of decorations) {
      var d = __WEBPACK_IMPORTED_MODULE_5_slate__["Range"].intersection(dec, range);

      if (d) {
        ds.push(d);
      }
    }

    if (__WEBPACK_IMPORTED_MODULE_5_slate__["Element"].isElement(n)) {
      children.push( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(SelectedContext.Provider, {
        key: "provider-".concat(key.id),
        value: !!sel
      }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(MemoizedElement, {
        decorations: ds,
        element: n,
        key: key.id,
        renderElement: renderElement,
        renderPlaceholder: renderPlaceholder,
        renderLeaf: renderLeaf,
        selection: sel
      })));
    } else {
      children.push( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(MemoizedText, {
        decorations: ds,
        key: key.id,
        isLast: isLeafBlock && i === node.children.length - 1,
        parent: node,
        renderPlaceholder: renderPlaceholder,
        renderLeaf: renderLeaf,
        text: n
      }));
    }

    NODE_TO_INDEX.set(n, i);
    NODE_TO_PARENT.set(n, node);
  }

  return children;
};

/**
 * A React context for sharing the `readOnly` state of the editor.
 */

var ReadOnlyContext = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["createContext"])(false);
/**
 * Get the current `readOnly` state of the editor.
 */

var useReadOnly = () => {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useContext"])(ReadOnlyContext);
};

var SlateContext = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["createContext"])(null);
/**
 * Get the current editor object from the React context.
 */

var useSlate = () => {
  var context = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useContext"])(SlateContext);

  if (!context) {
    throw new Error("The `useSlate` hook must be used inside the <Slate> component's context.");
  }

  var {
    editor
  } = context;
  return editor;
};
var useSlateWithV = () => {
  var context = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useContext"])(SlateContext);

  if (!context) {
    throw new Error("The `useSlate` hook must be used inside the <Slate> component's context.");
  }

  return context;
};

var TRIPLE_CLICK = 3;

/**
 * Hotkey mappings for each platform.
 */

var HOTKEYS = {
  bold: 'mod+b',
  compose: ['down', 'left', 'right', 'up', 'backspace', 'enter'],
  moveBackward: 'left',
  moveForward: 'right',
  moveWordBackward: 'ctrl+left',
  moveWordForward: 'ctrl+right',
  deleteBackward: 'shift?+backspace',
  deleteForward: 'shift?+delete',
  extendBackward: 'shift+left',
  extendForward: 'shift+right',
  italic: 'mod+i',
  insertSoftBreak: 'shift+enter',
  splitBlock: 'enter',
  undo: 'mod+z'
};
var APPLE_HOTKEYS = {
  moveLineBackward: 'opt+up',
  moveLineForward: 'opt+down',
  moveWordBackward: 'opt+left',
  moveWordForward: 'opt+right',
  deleteBackward: ['ctrl+backspace', 'ctrl+h'],
  deleteForward: ['ctrl+delete', 'ctrl+d'],
  deleteLineBackward: 'cmd+shift?+backspace',
  deleteLineForward: ['cmd+shift?+delete', 'ctrl+k'],
  deleteWordBackward: 'opt+shift?+backspace',
  deleteWordForward: 'opt+shift?+delete',
  extendLineBackward: 'opt+shift+up',
  extendLineForward: 'opt+shift+down',
  redo: 'cmd+shift+z',
  transposeCharacter: 'ctrl+t'
};
var WINDOWS_HOTKEYS = {
  deleteWordBackward: 'ctrl+shift?+backspace',
  deleteWordForward: 'ctrl+shift?+delete',
  redo: ['ctrl+y', 'ctrl+shift+z']
};
/**
 * Create a platform-aware hotkey checker.
 */

var create = key => {
  var generic = HOTKEYS[key];
  var apple = APPLE_HOTKEYS[key];
  var windows = WINDOWS_HOTKEYS[key];
  var isGeneric = generic && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_is_hotkey__["isKeyHotkey"])(generic);
  var isApple = apple && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_is_hotkey__["isKeyHotkey"])(apple);
  var isWindows = windows && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_is_hotkey__["isKeyHotkey"])(windows);
  return event => {
    if (isGeneric && isGeneric(event)) return true;
    if (IS_APPLE && isApple && isApple(event)) return true;
    if (!IS_APPLE && isWindows && isWindows(event)) return true;
    return false;
  };
};
/**
 * Hotkeys.
 */


var Hotkeys = {
  isBold: create('bold'),
  isCompose: create('compose'),
  isMoveBackward: create('moveBackward'),
  isMoveForward: create('moveForward'),
  isDeleteBackward: create('deleteBackward'),
  isDeleteForward: create('deleteForward'),
  isDeleteLineBackward: create('deleteLineBackward'),
  isDeleteLineForward: create('deleteLineForward'),
  isDeleteWordBackward: create('deleteWordBackward'),
  isDeleteWordForward: create('deleteWordForward'),
  isExtendBackward: create('extendBackward'),
  isExtendForward: create('extendForward'),
  isExtendLineBackward: create('extendLineBackward'),
  isExtendLineForward: create('extendLineForward'),
  isItalic: create('italic'),
  isMoveLineBackward: create('moveLineBackward'),
  isMoveLineForward: create('moveLineForward'),
  isMoveWordBackward: create('moveWordBackward'),
  isMoveWordForward: create('moveWordForward'),
  isRedo: create('redo'),
  isSoftBreak: create('insertSoftBreak'),
  isSplitBlock: create('splitBlock'),
  isTransposeCharacter: create('transposeCharacter'),
  isUndo: create('undo')
};

var createRestoreDomManager = (editor, receivedUserInput) => {
  var bufferedMutations = [];

  var clear = () => {
    bufferedMutations = [];
  };

  var registerMutations = mutations => {
    if (!receivedUserInput.current) {
      return;
    }

    var trackedMutations = mutations.filter(mutation => isTrackedMutation(editor, mutation, mutations));
    bufferedMutations.push(...trackedMutations);
  };

  function restoreDOM() {
    bufferedMutations.reverse().forEach(mutation => {
      if (mutation.type === 'characterData') {
        mutation.target.textContent = mutation.oldValue;
        return;
      }

      mutation.removedNodes.forEach(node => {
        mutation.target.insertBefore(node, mutation.nextSibling);
      });
      mutation.addedNodes.forEach(node => {
        mutation.target.removeChild(node);
      });
    }); // Clear buffered mutations to ensure we don't undo them twice

    clear();
  }

  return {
    registerMutations,
    restoreDOM,
    clear
  };
};

var MUTATION_OBSERVER_CONFIG$1 = {
  subtree: true,
  childList: true,
  characterData: true,
  characterDataOldValue: true
}; // We have to use a class component here since we rely on `getSnapshotBeforeUpdate` which has no FC equivalent
// to run code synchronously immediately before react commits the component update to the DOM.

class RestoreDOMComponent extends __WEBPACK_IMPORTED_MODULE_3_react__["Component"] {
  constructor() {
    super(...arguments);
    this.context = null;
    this.manager = null;
    this.mutationObserver = null;
  }

  observe() {
    var _this$mutationObserve;

    var {
      node
    } = this.props;

    if (!node.current) {
      throw new Error('Failed to attach MutationObserver, `node` is undefined');
    }

    (_this$mutationObserve = this.mutationObserver) === null || _this$mutationObserve === void 0 ? void 0 : _this$mutationObserve.observe(node.current, MUTATION_OBSERVER_CONFIG$1);
  }

  componentDidMount() {
    var {
      receivedUserInput
    } = this.props;
    var editor = this.context;
    this.manager = createRestoreDomManager(editor, receivedUserInput);
    this.mutationObserver = new MutationObserver(this.manager.registerMutations);
    this.observe();
  }

  getSnapshotBeforeUpdate() {
    var _this$mutationObserve2, _this$mutationObserve3, _this$manager2;

    var pendingMutations = (_this$mutationObserve2 = this.mutationObserver) === null || _this$mutationObserve2 === void 0 ? void 0 : _this$mutationObserve2.takeRecords();

    if (pendingMutations !== null && pendingMutations !== void 0 && pendingMutations.length) {
      var _this$manager;

      (_this$manager = this.manager) === null || _this$manager === void 0 ? void 0 : _this$manager.registerMutations(pendingMutations);
    }

    (_this$mutationObserve3 = this.mutationObserver) === null || _this$mutationObserve3 === void 0 ? void 0 : _this$mutationObserve3.disconnect();
    (_this$manager2 = this.manager) === null || _this$manager2 === void 0 ? void 0 : _this$manager2.restoreDOM();
    return null;
  }

  componentDidUpdate() {
    var _this$manager3;

    (_this$manager3 = this.manager) === null || _this$manager3 === void 0 ? void 0 : _this$manager3.clear();
    this.observe();
  }

  componentWillUnmount() {
    var _this$mutationObserve4;

    (_this$mutationObserve4 = this.mutationObserver) === null || _this$mutationObserve4 === void 0 ? void 0 : _this$mutationObserve4.disconnect();
  }

  render() {
    return this.props.children;
  }

}

RestoreDOMComponent.contextType = EditorContext;
var RestoreDOM = IS_ANDROID ? RestoreDOMComponent : _ref => {
  var {
    children
  } = _ref;
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Fragment, null, children);
};

/**
 * Check whether a text diff was applied in a way we can perform the pending action on /
 * recover the pending selection.
 */

function verifyDiffState(editor, textDiff) {
  var {
    path,
    diff
  } = textDiff;

  if (!__WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].hasPath(editor, path)) {
    return false;
  }

  var node = __WEBPACK_IMPORTED_MODULE_5_slate__["Node"].get(editor, path);

  if (!__WEBPACK_IMPORTED_MODULE_5_slate__["Text"].isText(node)) {
    return false;
  }

  if (diff.start !== node.text.length || diff.text.length === 0) {
    return node.text.slice(diff.start, diff.start + diff.text.length) === diff.text;
  }

  var nextPath = __WEBPACK_IMPORTED_MODULE_5_slate__["Path"].next(path);

  if (!__WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].hasPath(editor, nextPath)) {
    return false;
  }

  var nextNode = __WEBPACK_IMPORTED_MODULE_5_slate__["Node"].get(editor, nextPath);
  return __WEBPACK_IMPORTED_MODULE_5_slate__["Text"].isText(nextNode) && nextNode.text.startsWith(diff.text);
}

function applyStringDiff(text) {
  for (var _len = arguments.length, diffs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    diffs[_key - 1] = arguments[_key];
  }

  return diffs.reduce((text, diff) => text.slice(0, diff.start) + diff.text + text.slice(diff.end), text);
}

function longestCommonPrefixLength(str, another) {
  var length = Math.min(str.length, another.length);

  for (var i = 0; i < length; i++) {
    if (str.charAt(i) !== another.charAt(i)) {
      return i;
    }
  }

  return length;
}

function longestCommonSuffixLength(str, another, max) {
  var length = Math.min(str.length, another.length, max);

  for (var i = 0; i < length; i++) {
    if (str.charAt(str.length - i - 1) !== another.charAt(another.length - i - 1)) {
      return i;
    }
  }

  return length;
}
/**
 * Remove redundant changes from the diff so that it spans the minimal possible range
 */


function normalizeStringDiff(targetText, diff) {
  var {
    start,
    end,
    text
  } = diff;
  var removedText = targetText.slice(start, end);
  var prefixLength = longestCommonPrefixLength(removedText, text);
  var max = Math.min(removedText.length - prefixLength, text.length - prefixLength);
  var suffixLength = longestCommonSuffixLength(removedText, text, max);
  var normalized = {
    start: start + prefixLength,
    end: end - suffixLength,
    text: text.slice(prefixLength, text.length - suffixLength)
  };

  if (normalized.start === normalized.end && normalized.text.length === 0) {
    return null;
  }

  return normalized;
}
/**
 * Return a string diff that is equivalent to applying b after a spanning the range of
 * both changes
 */

function mergeStringDiffs(targetText, a, b) {
  var start = Math.min(a.start, b.start);
  var overlap = Math.max(0, Math.min(a.start + a.text.length, b.end) - b.start);
  var applied = applyStringDiff(targetText, a, b);
  var sliceEnd = Math.max(b.start + b.text.length, a.start + a.text.length + (a.start + a.text.length > b.start ? b.text.length : 0) - overlap);
  var text = applied.slice(start, sliceEnd);
  var end = Math.max(a.end, b.end - a.text.length + (a.end - a.start));
  return normalizeStringDiff(targetText, {
    start,
    end,
    text
  });
}
/**
 * Get the slate range the text diff spans.
 */

function targetRange(textDiff) {
  var {
    path,
    diff
  } = textDiff;
  return {
    anchor: {
      path,
      offset: diff.start
    },
    focus: {
      path,
      offset: diff.end
    }
  };
}
/**
 * Normalize a 'pending point' a.k.a a point based on the dom state before applying
 * the pending diffs. Since the pending diffs might have been inserted with different
 * marks we have to 'walk' the offset from the starting position to ensure we still
 * have a valid point inside the document
 */

function normalizePoint(editor, point) {
  var {
    path,
    offset
  } = point;

  if (!__WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].hasPath(editor, path)) {
    return null;
  }

  var leaf = __WEBPACK_IMPORTED_MODULE_5_slate__["Node"].get(editor, path);

  if (!__WEBPACK_IMPORTED_MODULE_5_slate__["Text"].isText(leaf)) {
    return null;
  }

  var parentBlock = __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].above(editor, {
    match: n => __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].isBlock(editor, n),
    at: path
  });

  if (!parentBlock) {
    return null;
  }

  while (offset > leaf.text.length) {
    var entry = __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].next(editor, {
      at: path,
      match: __WEBPACK_IMPORTED_MODULE_5_slate__["Text"].isText
    });

    if (!entry || !__WEBPACK_IMPORTED_MODULE_5_slate__["Path"].isDescendant(entry[1], parentBlock[1])) {
      return null;
    }

    offset -= leaf.text.length;
    leaf = entry[0];
    path = entry[1];
  }

  return {
    path,
    offset
  };
}
/**
 * Normalize a 'pending selection' to ensure it's valid in the current document state.
 */

function normalizeRange(editor, range) {
  var anchor = normalizePoint(editor, range.anchor);

  if (!anchor) {
    return null;
  }

  if (__WEBPACK_IMPORTED_MODULE_5_slate__["Range"].isCollapsed(range)) {
    return {
      anchor,
      focus: anchor
    };
  }

  var focus = normalizePoint(editor, range.focus);

  if (!focus) {
    return null;
  }

  return {
    anchor,
    focus
  };
}
function transformPendingPoint(editor, point, op) {
  var pendingDiffs = EDITOR_TO_PENDING_DIFFS.get(editor);
  var textDiff = pendingDiffs === null || pendingDiffs === void 0 ? void 0 : pendingDiffs.find(_ref => {
    var {
      path
    } = _ref;
    return __WEBPACK_IMPORTED_MODULE_5_slate__["Path"].equals(path, point.path);
  });

  if (!textDiff || point.offset <= textDiff.diff.start) {
    return __WEBPACK_IMPORTED_MODULE_5_slate__["Point"].transform(point, op, {
      affinity: 'backward'
    });
  }

  var {
    diff
  } = textDiff; // Point references location inside the diff => transform the point based on the location
  // the diff will be applied to and add the offset inside the diff.

  if (point.offset <= diff.start + diff.text.length) {
    var _anchor = {
      path: point.path,
      offset: diff.start
    };

    var _transformed = __WEBPACK_IMPORTED_MODULE_5_slate__["Point"].transform(_anchor, op, {
      affinity: 'backward'
    });

    if (!_transformed) {
      return null;
    }

    return {
      path: _transformed.path,
      offset: _transformed.offset + point.offset - diff.start
    };
  } // Point references location after the diff


  var anchor = {
    path: point.path,
    offset: point.offset - diff.text.length + diff.end - diff.start
  };
  var transformed = __WEBPACK_IMPORTED_MODULE_5_slate__["Point"].transform(anchor, op, {
    affinity: 'backward'
  });

  if (!transformed) {
    return null;
  }

  if (op.type === 'split_node' && __WEBPACK_IMPORTED_MODULE_5_slate__["Path"].equals(op.path, point.path) && anchor.offset < op.position && diff.start < op.position) {
    return transformed;
  }

  return {
    path: transformed.path,
    offset: transformed.offset + diff.text.length - diff.end + diff.start
  };
}
function transformPendingRange(editor, range, op) {
  var anchor = transformPendingPoint(editor, range.anchor, op);

  if (!anchor) {
    return null;
  }

  if (__WEBPACK_IMPORTED_MODULE_5_slate__["Range"].isCollapsed(range)) {
    return {
      anchor,
      focus: anchor
    };
  }

  var focus = transformPendingPoint(editor, range.focus, op);

  if (!focus) {
    return null;
  }

  return {
    anchor,
    focus
  };
}
function transformTextDiff(textDiff, op) {
  var {
    path,
    diff,
    id
  } = textDiff;

  switch (op.type) {
    case 'insert_text':
      {
        if (!__WEBPACK_IMPORTED_MODULE_5_slate__["Path"].equals(op.path, path) || op.offset >= diff.end) {
          return textDiff;
        }

        if (op.offset <= diff.start) {
          return {
            diff: {
              start: op.text.length + diff.start,
              end: op.text.length + diff.end,
              text: diff.text
            },
            id,
            path
          };
        }

        return {
          diff: {
            start: diff.start,
            end: diff.end + op.text.length,
            text: diff.text
          },
          id,
          path
        };
      }

    case 'remove_text':
      {
        if (!__WEBPACK_IMPORTED_MODULE_5_slate__["Path"].equals(op.path, path) || op.offset >= diff.end) {
          return textDiff;
        }

        if (op.offset + op.text.length <= diff.start) {
          return {
            diff: {
              start: diff.start - op.text.length,
              end: diff.end - op.text.length,
              text: diff.text
            },
            id,
            path
          };
        }

        return {
          diff: {
            start: diff.start,
            end: diff.end - op.text.length,
            text: diff.text
          },
          id,
          path
        };
      }

    case 'split_node':
      {
        if (!__WEBPACK_IMPORTED_MODULE_5_slate__["Path"].equals(op.path, path) || op.position >= diff.end) {
          return {
            diff,
            id,
            path: __WEBPACK_IMPORTED_MODULE_5_slate__["Path"].transform(path, op, {
              affinity: 'backward'
            })
          };
        }

        if (op.position > diff.start) {
          return {
            diff: {
              start: diff.start,
              end: Math.min(op.position, diff.end),
              text: diff.text
            },
            id,
            path
          };
        }

        return {
          diff: {
            start: diff.start - op.position,
            end: diff.end - op.position,
            text: diff.text
          },
          id,
          path: __WEBPACK_IMPORTED_MODULE_5_slate__["Path"].transform(path, op, {
            affinity: 'forward'
          })
        };
      }

    case 'merge_node':
      {
        if (!__WEBPACK_IMPORTED_MODULE_5_slate__["Path"].equals(op.path, path)) {
          return {
            diff,
            id,
            path: __WEBPACK_IMPORTED_MODULE_5_slate__["Path"].transform(path, op)
          };
        }

        return {
          diff: {
            start: diff.start + op.position,
            end: diff.end + op.position,
            text: diff.text
          },
          id,
          path: __WEBPACK_IMPORTED_MODULE_5_slate__["Path"].transform(path, op)
        };
      }
  }

  var newPath = __WEBPACK_IMPORTED_MODULE_5_slate__["Path"].transform(path, op);

  if (!newPath) {
    return null;
  }

  return {
    diff,
    path: newPath,
    id
  };
}

function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
// When using keyboard English association function, conpositionEnd triggered too fast, resulting in after `insertText` still maintain association state.

var RESOLVE_DELAY = 25; // Time with no user interaction before the current user action is considered as done.

var FLUSH_DELAY = 200; // Replace with `const debug = console.log` to debug

var debug = function debug() {};

function createAndroidInputManager(_ref) {
  var {
    editor,
    scheduleOnDOMSelectionChange,
    onDOMSelectionChange
  } = _ref;
  var flushing = false;
  var compositionEndTimeoutId = null;
  var flushTimeoutId = null;
  var actionTimeoutId = null;
  var idCounter = 0;
  var insertPositionHint = false;

  var applyPendingSelection = () => {
    var pendingSelection = EDITOR_TO_PENDING_SELECTION.get(editor);
    EDITOR_TO_PENDING_SELECTION.delete(editor);

    if (pendingSelection) {
      var {
        selection
      } = editor;
      var normalized = normalizeRange(editor, pendingSelection);

      if (normalized && (!selection || !__WEBPACK_IMPORTED_MODULE_5_slate__["Range"].equals(normalized, selection))) {
        __WEBPACK_IMPORTED_MODULE_5_slate__["Transforms"].select(editor, normalized);
      }
    }
  };

  var performAction = () => {
    var action = EDITOR_TO_PENDING_ACTION.get(editor);
    EDITOR_TO_PENDING_ACTION.delete(editor);

    if (!action) {
      return;
    }

    if (action.at) {
      var target = __WEBPACK_IMPORTED_MODULE_5_slate__["Point"].isPoint(action.at) ? normalizePoint(editor, action.at) : normalizeRange(editor, action.at);

      if (!target) {
        return;
      }

      var _targetRange = __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].range(editor, target);

      if (!editor.selection || !__WEBPACK_IMPORTED_MODULE_5_slate__["Range"].equals(editor.selection, _targetRange)) {
        __WEBPACK_IMPORTED_MODULE_5_slate__["Transforms"].select(editor, target);
      }
    }

    action.run();
  };

  var flush = () => {
    var _EDITOR_TO_PENDING_DI;

    if (flushTimeoutId) {
      clearTimeout(flushTimeoutId);
      flushTimeoutId = null;
    }

    if (actionTimeoutId) {
      clearTimeout(actionTimeoutId);
      actionTimeoutId = null;
    }

    if (!hasPendingDiffs() && !hasPendingAction()) {
      applyPendingSelection();
      return;
    }

    if (!flushing) {
      flushing = true;
      setTimeout(() => flushing = false);
    }

    if (hasPendingAction()) {
      flushing = 'action';
    }

    var selectionRef = editor.selection && __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].rangeRef(editor, editor.selection, {
      affinity: 'forward'
    });
    EDITOR_TO_USER_MARKS.set(editor, editor.marks);
    debug('flush', EDITOR_TO_PENDING_ACTION.get(editor), EDITOR_TO_PENDING_DIFFS.get(editor));
    var scheduleSelectionChange = !!((_EDITOR_TO_PENDING_DI = EDITOR_TO_PENDING_DIFFS.get(editor)) !== null && _EDITOR_TO_PENDING_DI !== void 0 && _EDITOR_TO_PENDING_DI.length);
    var diff;

    while (diff = (_EDITOR_TO_PENDING_DI2 = EDITOR_TO_PENDING_DIFFS.get(editor)) === null || _EDITOR_TO_PENDING_DI2 === void 0 ? void 0 : _EDITOR_TO_PENDING_DI2[0]) {
      var _EDITOR_TO_PENDING_DI2, _EDITOR_TO_PENDING_DI3;

      var pendingMarks = EDITOR_TO_PENDING_INSERTION_MARKS.get(editor);

      if (pendingMarks !== undefined) {
        EDITOR_TO_PENDING_INSERTION_MARKS.delete(editor);
        editor.marks = pendingMarks;
      }

      if (pendingMarks && insertPositionHint === false) {
        insertPositionHint = null;
      }

      var range = targetRange(diff);

      if (!editor.selection || !__WEBPACK_IMPORTED_MODULE_5_slate__["Range"].equals(editor.selection, range)) {
        __WEBPACK_IMPORTED_MODULE_5_slate__["Transforms"].select(editor, range);
      }

      if (diff.diff.text) {
        __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].insertText(editor, diff.diff.text);
      } else {
        __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].deleteFragment(editor);
      } // Remove diff only after we have applied it to account for it when transforming
      // pending ranges.


      EDITOR_TO_PENDING_DIFFS.set(editor, (_EDITOR_TO_PENDING_DI3 = EDITOR_TO_PENDING_DIFFS.get(editor)) === null || _EDITOR_TO_PENDING_DI3 === void 0 ? void 0 : _EDITOR_TO_PENDING_DI3.filter(_ref2 => {
        var {
          id
        } = _ref2;
        return id !== diff.id;
      }));

      if (!verifyDiffState(editor, diff)) {
        scheduleSelectionChange = false;
        EDITOR_TO_PENDING_ACTION.delete(editor);
        EDITOR_TO_USER_MARKS.delete(editor);
        flushing = 'action'; // Ensure we don't restore the pending user (dom) selection
        // since the document and dom state do not match.

        EDITOR_TO_PENDING_SELECTION.delete(editor);
        scheduleOnDOMSelectionChange.cancel();
        onDOMSelectionChange.cancel();
        selectionRef === null || selectionRef === void 0 ? void 0 : selectionRef.unref();
      }
    }

    var selection = selectionRef === null || selectionRef === void 0 ? void 0 : selectionRef.unref();

    if (selection && !EDITOR_TO_PENDING_SELECTION.get(editor) && (!editor.selection || !__WEBPACK_IMPORTED_MODULE_5_slate__["Range"].equals(selection, editor.selection))) {
      __WEBPACK_IMPORTED_MODULE_5_slate__["Transforms"].select(editor, selection);
    }

    if (hasPendingAction()) {
      performAction();
      return;
    } // COMPAT: The selectionChange event is fired after the action is performed,
    // so we have to manually schedule it to ensure we don't 'throw away' the selection
    // while rendering if we have pending changes.


    if (scheduleSelectionChange) {
      scheduleOnDOMSelectionChange();
    }

    scheduleOnDOMSelectionChange.flush();
    onDOMSelectionChange.flush();
    applyPendingSelection();
    var userMarks = EDITOR_TO_USER_MARKS.get(editor);
    EDITOR_TO_USER_MARKS.delete(editor);

    if (userMarks !== undefined) {
      editor.marks = userMarks;
      editor.onChange();
    }
  };

  var handleCompositionEnd = _event => {
    if (compositionEndTimeoutId) {
      clearTimeout(compositionEndTimeoutId);
    }

    compositionEndTimeoutId = setTimeout(() => {
      IS_COMPOSING.set(editor, false);
      flush();
    }, RESOLVE_DELAY);
  };

  var handleCompositionStart = _event => {
    IS_COMPOSING.set(editor, true);

    if (compositionEndTimeoutId) {
      clearTimeout(compositionEndTimeoutId);
      compositionEndTimeoutId = null;
    }
  };

  var updatePlaceholderVisibility = function updatePlaceholderVisibility() {
    var forceHide = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var placeholderElement = EDITOR_TO_PLACEHOLDER_ELEMENT.get(editor);

    if (!placeholderElement) {
      return;
    }

    if (hasPendingDiffs() || forceHide) {
      placeholderElement.style.display = 'none';
      return;
    }

    placeholderElement.style.removeProperty('display');
  };

  var storeDiff = (path, diff) => {
    var _EDITOR_TO_PENDING_DI4;
    var pendingDiffs = (_EDITOR_TO_PENDING_DI4 = EDITOR_TO_PENDING_DIFFS.get(editor)) !== null && _EDITOR_TO_PENDING_DI4 !== void 0 ? _EDITOR_TO_PENDING_DI4 : [];
    EDITOR_TO_PENDING_DIFFS.set(editor, pendingDiffs);
    var target = __WEBPACK_IMPORTED_MODULE_5_slate__["Node"].leaf(editor, path);
    var idx = pendingDiffs.findIndex(change => __WEBPACK_IMPORTED_MODULE_5_slate__["Path"].equals(change.path, path));

    if (idx < 0) {
      var normalized = normalizeStringDiff(target.text, diff);

      if (normalized) {
        pendingDiffs.push({
          path,
          diff,
          id: idCounter++
        });
      }

      updatePlaceholderVisibility();
      return;
    }

    var merged = mergeStringDiffs(target.text, pendingDiffs[idx].diff, diff);

    if (!merged) {
      pendingDiffs.splice(idx, 1);
      updatePlaceholderVisibility();
      return;
    }

    pendingDiffs[idx] = _objectSpread$3(_objectSpread$3({}, pendingDiffs[idx]), {}, {
      diff: merged
    });
  };

  var scheduleAction = function scheduleAction(run) {
    var {
      at
    } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    insertPositionHint = false;
    EDITOR_TO_PENDING_SELECTION.delete(editor);
    scheduleOnDOMSelectionChange.cancel();
    onDOMSelectionChange.cancel();

    if (hasPendingAction()) {
      flush();
    }

    EDITOR_TO_PENDING_ACTION.set(editor, {
      at,
      run
    }); // COMPAT: When deleting before a non-contenteditable element chrome only fires a beforeinput,
    // (no input) and doesn't perform any dom mutations. Without a flush timeout we would never flush
    // in this case and thus never actually perform the action.

    actionTimeoutId = setTimeout(flush);
  };

  var handleDOMBeforeInput = event => {
    var _targetRange2;

    if (flushTimeoutId) {
      clearTimeout(flushTimeoutId);
      flushTimeoutId = null;
    }

    var {
      inputType: type
    } = event;
    var targetRange = null;
    var data = event.dataTransfer || event.data || undefined;

    if (insertPositionHint !== false && type !== 'insertText' && type !== 'insertCompositionText') {
      insertPositionHint = false;
    }

    var [nativeTargetRange] = event.getTargetRanges();

    if (nativeTargetRange) {
      targetRange = ReactEditor.toSlateRange(editor, nativeTargetRange, {
        exactMatch: false,
        suppressThrow: true
      });
    } // COMPAT: SelectionChange event is fired after the action is performed, so we
    // have to manually get the selection here to ensure it's up-to-date.


    var window = ReactEditor.getWindow(editor);
    var domSelection = window.getSelection();

    if (!targetRange && domSelection) {
      nativeTargetRange = domSelection;
      targetRange = ReactEditor.toSlateRange(editor, domSelection, {
        exactMatch: false,
        suppressThrow: true
      });
    }

    targetRange = (_targetRange2 = targetRange) !== null && _targetRange2 !== void 0 ? _targetRange2 : editor.selection;

    if (!targetRange) {
      return;
    }

    if (__WEBPACK_IMPORTED_MODULE_5_slate__["Range"].isExpanded(targetRange) && type.startsWith('delete')) {
      var [start, end] = __WEBPACK_IMPORTED_MODULE_5_slate__["Range"].edges(targetRange);
      var leaf = __WEBPACK_IMPORTED_MODULE_5_slate__["Node"].leaf(editor, start.path);

      if (leaf.text.length === start.offset && end.offset === 0) {
        var next = __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].next(editor, {
          at: start.path,
          match: __WEBPACK_IMPORTED_MODULE_5_slate__["Text"].isText
        });

        if (next && __WEBPACK_IMPORTED_MODULE_5_slate__["Path"].equals(next[1], end.path)) {
          targetRange = {
            anchor: end,
            focus: end
          };
        }
      }
    }

    if (__WEBPACK_IMPORTED_MODULE_5_slate__["Range"].isExpanded(targetRange) && type.startsWith('delete')) {
      if (__WEBPACK_IMPORTED_MODULE_5_slate__["Path"].equals(targetRange.anchor.path, targetRange.focus.path)) {
        var [_start, _end] = __WEBPACK_IMPORTED_MODULE_5_slate__["Range"].edges(targetRange);
        return storeDiff(targetRange.anchor.path, {
          text: '',
          end: _end.offset,
          start: _start.offset
        });
      }

      var direction = type.endsWith('Backward') ? 'backward' : 'forward';
      return scheduleAction(() => __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].deleteFragment(editor, {
        direction
      }), {
        at: targetRange
      });
    }

    switch (type) {
      case 'deleteByComposition':
      case 'deleteByCut':
      case 'deleteByDrag':
        {
          return scheduleAction(() => __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].deleteFragment(editor), {
            at: targetRange
          });
        }

      case 'deleteContent':
      case 'deleteContentForward':
        {
          var {
            anchor
          } = targetRange;

          if (__WEBPACK_IMPORTED_MODULE_5_slate__["Range"].isCollapsed(targetRange)) {
            var targetNode = __WEBPACK_IMPORTED_MODULE_5_slate__["Node"].leaf(editor, anchor.path);

            if (anchor.offset < targetNode.text.length) {
              return storeDiff(anchor.path, {
                text: '',
                start: anchor.offset,
                end: anchor.offset + 1
              });
            }
          }

          return scheduleAction(() => __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].deleteForward(editor), {
            at: targetRange
          });
        }

      case 'deleteContentBackward':
        {
          var _nativeTargetRange;

          var {
            anchor: _anchor
          } = targetRange; // If we have a mismatch between the native and slate selection being collapsed
          // we are most likely deleting a zero-width placeholder and thus should perform it
          // as an action to ensure correct behavior (mostly happens with mark placeholders)

          var nativeCollapsed = isDOMSelection(nativeTargetRange) ? nativeTargetRange.isCollapsed : !!((_nativeTargetRange = nativeTargetRange) !== null && _nativeTargetRange !== void 0 && _nativeTargetRange.collapsed);

          if (nativeCollapsed && __WEBPACK_IMPORTED_MODULE_5_slate__["Range"].isCollapsed(targetRange) && _anchor.offset > 0) {
            return storeDiff(_anchor.path, {
              text: '',
              start: _anchor.offset - 1,
              end: _anchor.offset
            });
          }

          return scheduleAction(() => __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].deleteBackward(editor), {
            at: targetRange
          });
        }

      case 'deleteEntireSoftLine':
        {
          return scheduleAction(() => {
            __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].deleteBackward(editor, {
              unit: 'line'
            });
            __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].deleteForward(editor, {
              unit: 'line'
            });
          }, {
            at: targetRange
          });
        }

      case 'deleteHardLineBackward':
        {
          return scheduleAction(() => __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].deleteBackward(editor, {
            unit: 'block'
          }), {
            at: targetRange
          });
        }

      case 'deleteSoftLineBackward':
        {
          return scheduleAction(() => __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].deleteBackward(editor, {
            unit: 'line'
          }), {
            at: targetRange
          });
        }

      case 'deleteHardLineForward':
        {
          return scheduleAction(() => __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].deleteForward(editor, {
            unit: 'block'
          }), {
            at: targetRange
          });
        }

      case 'deleteSoftLineForward':
        {
          return scheduleAction(() => __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].deleteForward(editor, {
            unit: 'line'
          }), {
            at: targetRange
          });
        }

      case 'deleteWordBackward':
        {
          return scheduleAction(() => __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].deleteBackward(editor, {
            unit: 'word'
          }), {
            at: targetRange
          });
        }

      case 'deleteWordForward':
        {
          return scheduleAction(() => __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].deleteForward(editor, {
            unit: 'word'
          }), {
            at: targetRange
          });
        }

      case 'insertLineBreak':
        {
          return scheduleAction(() => __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].insertSoftBreak(editor), {
            at: targetRange
          });
        }

      case 'insertParagraph':
        {
          return scheduleAction(() => __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].insertBreak(editor), {
            at: targetRange
          });
        }

      case 'insertCompositionText':
      case 'deleteCompositionText':
      case 'insertFromComposition':
      case 'insertFromDrop':
      case 'insertFromPaste':
      case 'insertFromYank':
      case 'insertReplacementText':
      case 'insertText':
        {
          if ((data === null || data === void 0 ? void 0 : data.constructor.name) === 'DataTransfer') {
            return scheduleAction(() => ReactEditor.insertData(editor, data), {
              at: targetRange
            });
          }

          if (typeof data === 'string' && data.includes('\n')) {
            return scheduleAction(() => __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].insertSoftBreak(editor), {
              at: __WEBPACK_IMPORTED_MODULE_5_slate__["Range"].end(targetRange)
            });
          }

          var text = data !== null && data !== void 0 ? data : ''; // COMPAT: If we are writing inside a placeholder, the ime inserts the text inside
          // the placeholder itself and thus includes the zero-width space inside edit events.

          if (EDITOR_TO_PENDING_INSERTION_MARKS.get(editor)) {
            text = text.replace('\uFEFF', '');
          }

          if (__WEBPACK_IMPORTED_MODULE_5_slate__["Path"].equals(targetRange.anchor.path, targetRange.focus.path)) {
            var [_start2, _end2] = __WEBPACK_IMPORTED_MODULE_5_slate__["Range"].edges(targetRange);
            var diff = {
              start: _start2.offset,
              end: _end2.offset,
              text
            }; // COMPAT: Swiftkey has a weird bug where the target range of the 2nd word
            // inserted after a mark placeholder is inserted with an anchor offset off by 1.
            // So writing 'some text' will result in 'some ttext'. Luckily all 'normal' insert
            // text events are fired with the correct target ranges, only the final 'insertComposition'
            // isn't, so we can adjust the target range start offset if we are confident this is the
            // swiftkey insert causing the issue.

            if (text && insertPositionHint && type === 'insertCompositionText') {
              var hintPosition = insertPositionHint.start + insertPositionHint.text.search(/\S|$/);
              var diffPosition = diff.start + diff.text.search(/\S|$/);

              if (diffPosition === hintPosition + 1 && diff.end === insertPositionHint.start + insertPositionHint.text.length) {
                diff.start -= 1;
                insertPositionHint = null;
                scheduleFlush();
              } else {
                insertPositionHint = false;
              }
            } else if (type === 'insertText') {
              if (insertPositionHint === null) {
                insertPositionHint = diff;
              } else if (insertPositionHint && __WEBPACK_IMPORTED_MODULE_5_slate__["Range"].isCollapsed(targetRange) && insertPositionHint.end + insertPositionHint.text.length === _start2.offset) {
                insertPositionHint = _objectSpread$3(_objectSpread$3({}, insertPositionHint), {}, {
                  text: insertPositionHint.text + text
                });
              } else {
                insertPositionHint = false;
              }
            } else {
              insertPositionHint = false;
            }

            storeDiff(_start2.path, diff);
            return;
          }

          return scheduleAction(() => __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].insertText(editor, text), {
            at: targetRange
          });
        }
    }
  };

  var hasPendingAction = () => {
    return !!EDITOR_TO_PENDING_ACTION.get(editor);
  };

  var hasPendingDiffs = () => {
    var _EDITOR_TO_PENDING_DI5;

    return !!((_EDITOR_TO_PENDING_DI5 = EDITOR_TO_PENDING_DIFFS.get(editor)) !== null && _EDITOR_TO_PENDING_DI5 !== void 0 && _EDITOR_TO_PENDING_DI5.length);
  };

  var hasPendingChanges = () => {
    return hasPendingAction() || hasPendingDiffs();
  };

  var isFlushing = () => {
    return flushing;
  };

  var handleUserSelect = range => {
    EDITOR_TO_PENDING_SELECTION.set(editor, range);

    if (flushTimeoutId) {
      clearTimeout(flushTimeoutId);
      flushTimeoutId = null;
    }

    var {
      selection
    } = editor;

    if (!range) {
      return;
    }

    var pathChanged = !selection || !__WEBPACK_IMPORTED_MODULE_5_slate__["Path"].equals(selection.anchor.path, range.anchor.path);
    var parentPathChanged = !selection || !__WEBPACK_IMPORTED_MODULE_5_slate__["Path"].equals(selection.anchor.path.slice(0, -1), range.anchor.path.slice(0, -1));

    if (pathChanged && insertPositionHint || parentPathChanged) {
      insertPositionHint = false;
    }

    if (pathChanged || !hasPendingDiffs()) {
      flushTimeoutId = setTimeout(flush, FLUSH_DELAY);
    }
  };

  var handleInput = () => {
    if (hasPendingAction() || !hasPendingDiffs()) {
      flush();
    }
  };

  var handleKeyDown = _ => {
    // COMPAT: Swiftkey closes the keyboard when typing inside a empty node
    // directly next to a non-contenteditable element (= the placeholder).
    // The only event fired soon enough for us to allow hiding the placeholder
    // without swiftkey picking it up is the keydown event, so we have to hide it
    // here. See https://github.com/ianstormtaylor/slate/pull/4988#issuecomment-1201050535
    if (!hasPendingDiffs()) {
      updatePlaceholderVisibility(true);
      setTimeout(updatePlaceholderVisibility);
    }
  };

  var scheduleFlush = () => {
    if (!hasPendingAction()) {
      actionTimeoutId = setTimeout(flush);
    }
  };

  var handleDomMutations = mutations => {
    if (hasPendingDiffs() || hasPendingAction()) {
      return;
    }

    if (mutations.some(mutation => isTrackedMutation(editor, mutation, mutations))) {
      var _EDITOR_TO_FORCE_REND;

      // Cause a re-render to restore the dom state if we encounter tracked mutations without
      // a corresponding pending action.
      (_EDITOR_TO_FORCE_REND = EDITOR_TO_FORCE_RENDER.get(editor)) === null || _EDITOR_TO_FORCE_REND === void 0 ? void 0 : _EDITOR_TO_FORCE_REND();
    }
  };

  return {
    flush,
    scheduleFlush,
    hasPendingDiffs,
    hasPendingAction,
    hasPendingChanges,
    isFlushing,
    handleUserSelect,
    handleCompositionEnd,
    handleCompositionStart,
    handleDOMBeforeInput,
    handleKeyDown,
    handleDomMutations,
    handleInput
  };
}

function useIsMounted() {
  var isMountedRef = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useRef"])(false);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useEffect"])(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  return isMountedRef.current;
}

function useMutationObserver(node, callback, options) {
  var [mutationObserver] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useState"])(() => new MutationObserver(callback));
  useIsomorphicLayoutEffect(() => {
    // Discard mutations caused during render phase. This works due to react calling
    // useLayoutEffect synchronously after the render phase before the next tick.
    mutationObserver.takeRecords();
  });
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useEffect"])(() => {
    if (!node.current) {
      throw new Error('Failed to attach MutationObserver, `node` is undefined');
    }

    mutationObserver.observe(node.current, options);
    return () => mutationObserver.disconnect();
  }, []);
}

var _excluded$2 = ["node"];

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var MUTATION_OBSERVER_CONFIG = {
  subtree: true,
  childList: true,
  characterData: true
};
function useAndroidInputManager(_ref) {
  var {
    node
  } = _ref,
      options = _objectWithoutProperties(_ref, _excluded$2);

  if (!IS_ANDROID) {
    return null;
  }

  var editor = useSlateStatic();
  var isMounted = useIsMounted();
  var [inputManager] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useState"])(() => createAndroidInputManager(_objectSpread$2({
    editor
  }, options)));
  useMutationObserver(node, inputManager.handleDomMutations, MUTATION_OBSERVER_CONFIG);
  EDITOR_TO_SCHEDULE_FLUSH.set(editor, inputManager.scheduleFlush);

  if (isMounted) {
    inputManager.flush();
  }

  return inputManager;
}

function useTrackUserInput() {
  var editor = useSlateStatic();
  var receivedUserInput = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useRef"])(false);
  var animationFrameIdRef = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useRef"])(0);
  var onUserInput = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useCallback"])(() => {
    if (receivedUserInput.current) {
      return;
    }

    receivedUserInput.current = true;
    var window = ReactEditor.getWindow(editor);
    window.cancelAnimationFrame(animationFrameIdRef.current);
    animationFrameIdRef.current = window.requestAnimationFrame(() => {
      receivedUserInput.current = false;
    });
  }, []);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useEffect"])(() => () => cancelAnimationFrame(animationFrameIdRef.current), []);
  return {
    receivedUserInput,
    onUserInput
  };
}

var _excluded$1 = ["autoFocus", "decorate", "onDOMBeforeInput", "placeholder", "readOnly", "renderElement", "renderLeaf", "renderPlaceholder", "scrollSelectionIntoView", "style", "as"],
    _excluded2 = ["text"];

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Children = props => /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Fragment, null, useChildren(props));
/**
 * Editable.
 */


var Editable = props => {
  var {
    autoFocus,
    decorate = defaultDecorate,
    onDOMBeforeInput: propsOnDOMBeforeInput,
    placeholder,
    readOnly = false,
    renderElement,
    renderLeaf,
    renderPlaceholder = props => /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(DefaultPlaceholder, Object.assign({}, props)),
    scrollSelectionIntoView = defaultScrollSelectionIntoView,
    style = {},
    as: Component = 'div'
  } = props,
      attributes = _objectWithoutProperties(props, _excluded$1);

  var editor = useSlate(); // Rerender editor when composition status changed

  var [isComposing, setIsComposing] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useState"])(false);
  var ref = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useRef"])(null);
  var deferredOperations = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useRef"])([]);
  var {
    onUserInput,
    receivedUserInput
  } = useTrackUserInput();
  var [, forceRender] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useReducer"])(s => s + 1, 0);
  EDITOR_TO_FORCE_RENDER.set(editor, forceRender); // Update internal state on each render.

  IS_READ_ONLY.set(editor, readOnly); // Keep track of some state for the event handler logic.

  var state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useMemo"])(() => ({
    isDraggingInternally: false,
    isUpdatingSelection: false,
    latestElement: null,
    hasMarkPlaceholder: false
  }), []); // The autoFocus TextareaHTMLAttribute doesn't do anything on a div, so it
  // needs to be manually focused.

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useEffect"])(() => {
    if (ref.current && autoFocus) {
      ref.current.focus();
    }
  }, [autoFocus]); // Listen on the native `selectionchange` event to be able to update any time
  // the selection changes. This is required because React's `onSelect` is leaky
  // and non-standard so it doesn't fire until after a selection has been
  // released. This causes issues in situations where another change happens
  // while a selection is being dragged.

  var onDOMSelectionChange = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useCallback"])(__WEBPACK_IMPORTED_MODULE_2_lodash_throttle___default()(() => {
    if ((IS_ANDROID || !ReactEditor.isComposing(editor)) && (!state.isUpdatingSelection || androidInputManager !== null && androidInputManager !== void 0 && androidInputManager.isFlushing()) && !state.isDraggingInternally) {
      var root = ReactEditor.findDocumentOrShadowRoot(editor);
      var {
        activeElement
      } = root;
      var el = ReactEditor.toDOMNode(editor, editor);
      var domSelection = root.getSelection();

      if (activeElement === el) {
        state.latestElement = activeElement;
        IS_FOCUSED.set(editor, true);
      } else {
        IS_FOCUSED.delete(editor);
      }

      if (!domSelection) {
        return __WEBPACK_IMPORTED_MODULE_5_slate__["Transforms"].deselect(editor);
      }

      var {
        anchorNode,
        focusNode
      } = domSelection;
      var anchorNodeSelectable = hasEditableTarget(editor, anchorNode) || isTargetInsideNonReadonlyVoid(editor, anchorNode);
      var focusNodeSelectable = hasEditableTarget(editor, focusNode) || isTargetInsideNonReadonlyVoid(editor, focusNode);

      if (anchorNodeSelectable && focusNodeSelectable) {
        var range = ReactEditor.toSlateRange(editor, domSelection, {
          exactMatch: false,
          suppressThrow: true
        });

        if (range) {
          if (!ReactEditor.isComposing(editor) && !(androidInputManager !== null && androidInputManager !== void 0 && androidInputManager.hasPendingChanges()) && !(androidInputManager !== null && androidInputManager !== void 0 && androidInputManager.isFlushing())) {
            __WEBPACK_IMPORTED_MODULE_5_slate__["Transforms"].select(editor, range);
          } else {
            androidInputManager === null || androidInputManager === void 0 ? void 0 : androidInputManager.handleUserSelect(range);
          }
        }
      } // Deselect the editor if the dom selection is not selectable in readonly mode


      if (readOnly && (!anchorNodeSelectable || !focusNodeSelectable)) {
        __WEBPACK_IMPORTED_MODULE_5_slate__["Transforms"].deselect(editor);
      }
    }
  }, 100), [readOnly]);
  var scheduleOnDOMSelectionChange = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useMemo"])(() => __WEBPACK_IMPORTED_MODULE_1_lodash_debounce___default()(onDOMSelectionChange, 0), [onDOMSelectionChange]);
  var androidInputManager = useAndroidInputManager({
    node: ref,
    onDOMSelectionChange,
    scheduleOnDOMSelectionChange
  });
  useIsomorphicLayoutEffect(() => {
    // Update element-related weak maps with the DOM element ref.
    var window;

    if (ref.current && (window = getDefaultView(ref.current))) {
      EDITOR_TO_WINDOW.set(editor, window);
      EDITOR_TO_ELEMENT.set(editor, ref.current);
      NODE_TO_ELEMENT.set(editor, ref.current);
      ELEMENT_TO_NODE.set(ref.current, editor);
    } else {
      NODE_TO_ELEMENT.delete(editor);
    } // Make sure the DOM selection state is in sync.


    var {
      selection
    } = editor;
    var root = ReactEditor.findDocumentOrShadowRoot(editor);
    var domSelection = root.getSelection();

    if (!domSelection || !ReactEditor.isFocused(editor) || androidInputManager !== null && androidInputManager !== void 0 && androidInputManager.hasPendingAction()) {
      return;
    }

    var setDomSelection = forceChange => {
      var hasDomSelection = domSelection.type !== 'None'; // If the DOM selection is properly unset, we're done.

      if (!selection && !hasDomSelection) {
        return;
      } // verify that the dom selection is in the editor


      var editorElement = EDITOR_TO_ELEMENT.get(editor);
      var hasDomSelectionInEditor = false;

      if (editorElement.contains(domSelection.anchorNode) && editorElement.contains(domSelection.focusNode)) {
        hasDomSelectionInEditor = true;
      } // If the DOM selection is in the editor and the editor selection is already correct, we're done.


      if (hasDomSelection && hasDomSelectionInEditor && selection && !forceChange) {
        var slateRange = ReactEditor.toSlateRange(editor, domSelection, {
          exactMatch: true,
          // domSelection is not necessarily a valid Slate range
          // (e.g. when clicking on contentEditable:false element)
          suppressThrow: true
        });

        if (slateRange && __WEBPACK_IMPORTED_MODULE_5_slate__["Range"].equals(slateRange, selection)) {
          var _anchorNode$parentEle;

          if (!state.hasMarkPlaceholder) {
            return;
          } // Ensure selection is inside the mark placeholder


          var {
            anchorNode
          } = domSelection;

          if (anchorNode !== null && anchorNode !== void 0 && (_anchorNode$parentEle = anchorNode.parentElement) !== null && _anchorNode$parentEle !== void 0 && _anchorNode$parentEle.hasAttribute('data-slate-mark-placeholder')) {
            return;
          }
        }
      } // when <Editable/> is being controlled through external value
      // then its children might just change - DOM responds to it on its own
      // but Slate's value is not being updated through any operation
      // and thus it doesn't transform selection on its own


      if (selection && !ReactEditor.hasRange(editor, selection)) {
        editor.selection = ReactEditor.toSlateRange(editor, domSelection, {
          exactMatch: false,
          suppressThrow: true
        });
        return;
      } // Otherwise the DOM selection is out of sync, so update it.


      state.isUpdatingSelection = true;
      var newDomRange = selection && ReactEditor.toDOMRange(editor, selection);

      if (newDomRange) {
        if (__WEBPACK_IMPORTED_MODULE_5_slate__["Range"].isBackward(selection)) {
          domSelection.setBaseAndExtent(newDomRange.endContainer, newDomRange.endOffset, newDomRange.startContainer, newDomRange.startOffset);
        } else {
          domSelection.setBaseAndExtent(newDomRange.startContainer, newDomRange.startOffset, newDomRange.endContainer, newDomRange.endOffset);
        }

        scrollSelectionIntoView(editor, newDomRange);
      } else {
        domSelection.removeAllRanges();
      }

      return newDomRange;
    };

    var newDomRange = setDomSelection();
    var ensureSelection = (androidInputManager === null || androidInputManager === void 0 ? void 0 : androidInputManager.isFlushing()) === 'action';

    if (!IS_ANDROID || !ensureSelection) {
      setTimeout(() => {
        // COMPAT: In Firefox, it's not enough to create a range, you also need
        // to focus the contenteditable element too. (2016/11/16)
        if (newDomRange && IS_FIREFOX) {
          var el = ReactEditor.toDOMNode(editor, editor);
          el.focus();
        }

        state.isUpdatingSelection = false;
      });
      return;
    }

    var timeoutId = null;
    var animationFrameId = requestAnimationFrame(() => {
      if (ensureSelection) {
        var ensureDomSelection = forceChange => {
          try {
            var el = ReactEditor.toDOMNode(editor, editor);
            el.focus();
            setDomSelection(forceChange);
          } catch (e) {// Ignore, dom and state might be out of sync
          }
        }; // Compat: Android IMEs try to force their selection by manually re-applying it even after we set it.
        // This essentially would make setting the slate selection during an update meaningless, so we force it
        // again here. We can't only do it in the setTimeout after the animation frame since that would cause a
        // visible flicker.


        ensureDomSelection();
        timeoutId = setTimeout(() => {
          // COMPAT: While setting the selection in an animation frame visually correctly sets the selection,
          // it doesn't update GBoards spellchecker state. We have to manually trigger a selection change after
          // the animation frame to ensure it displays the correct state.
          ensureDomSelection(true);
          state.isUpdatingSelection = false;
        });
      }
    });
    return () => {
      cancelAnimationFrame(animationFrameId);

      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }); // Listen on the native `beforeinput` event to get real "Level 2" events. This
  // is required because React's `beforeinput` is fake and never really attaches
  // to the real event sadly. (2019/11/01)
  // https://github.com/facebook/react/issues/11211

  var onDOMBeforeInput = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useCallback"])(event => {
    onUserInput();

    if (!readOnly && hasEditableTarget(editor, event.target) && !isDOMEventHandled(event, propsOnDOMBeforeInput)) {
      var _EDITOR_TO_USER_SELEC;

      // COMPAT: BeforeInput events aren't cancelable on android, so we have to handle them differently using the android input manager.
      if (androidInputManager) {
        return androidInputManager.handleDOMBeforeInput(event);
      } // Some IMEs/Chrome extensions like e.g. Grammarly set the selection immediately before
      // triggering a `beforeinput` expecting the change to be applied to the immediately before
      // set selection.


      scheduleOnDOMSelectionChange.flush();
      onDOMSelectionChange.flush();
      var {
        selection
      } = editor;
      var {
        inputType: type
      } = event;
      var data = event.dataTransfer || event.data || undefined;
      var isCompositionChange = type === 'insertCompositionText' || type === 'deleteCompositionText'; // COMPAT: use composition change events as a hint to where we should insert
      // composition text if we aren't composing to work around https://github.com/ianstormtaylor/slate/issues/5038

      if (isCompositionChange && ReactEditor.isComposing(editor)) {
        return;
      }

      var native = false;

      if (type === 'insertText' && selection && __WEBPACK_IMPORTED_MODULE_5_slate__["Range"].isCollapsed(selection) && // Only use native character insertion for single characters a-z or space for now.
      // Long-press events (hold a + press 4 = ä) to choose a special character otherwise
      // causes duplicate inserts.
      event.data && event.data.length === 1 && /[a-z ]/i.test(event.data) && // Chrome has issues correctly editing the start of nodes: https://bugs.chromium.org/p/chromium/issues/detail?id=1249405
      // When there is an inline element, e.g. a link, and you select
      // right after it (the start of the next node).
      selection.anchor.offset !== 0) {
        var _node$parentElement, _window$getComputedSt;

        native = true; // Skip native if there are marks, as
        // `insertText` will insert a node, not just text.

        if (editor.marks) {
          native = false;
        } // Chrome also has issues correctly editing the end of anchor elements: https://bugs.chromium.org/p/chromium/issues/detail?id=1259100
        // Therefore we don't allow native events to insert text at the end of anchor nodes.


        var {
          anchor
        } = selection;
        var [node, offset] = ReactEditor.toDOMPoint(editor, anchor);
        var anchorNode = (_node$parentElement = node.parentElement) === null || _node$parentElement === void 0 ? void 0 : _node$parentElement.closest('a');
        var window = ReactEditor.getWindow(editor);

        if (native && anchorNode && ReactEditor.hasDOMNode(editor, anchorNode)) {
          var _lastText$textContent;

          // Find the last text node inside the anchor.
          var lastText = window === null || window === void 0 ? void 0 : window.document.createTreeWalker(anchorNode, NodeFilter.SHOW_TEXT).lastChild();

          if (lastText === node && ((_lastText$textContent = lastText.textContent) === null || _lastText$textContent === void 0 ? void 0 : _lastText$textContent.length) === offset) {
            native = false;
          }
        } // Chrome has issues with the presence of tab characters inside elements with whiteSpace = 'pre'
        // causing abnormal insert behavior: https://bugs.chromium.org/p/chromium/issues/detail?id=1219139


        if (native && node.parentElement && (window === null || window === void 0 ? void 0 : (_window$getComputedSt = window.getComputedStyle(node.parentElement)) === null || _window$getComputedSt === void 0 ? void 0 : _window$getComputedSt.whiteSpace) === 'pre') {
          var block = __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].above(editor, {
            at: anchor.path,
            match: n => __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].isBlock(editor, n)
          });

          if (block && __WEBPACK_IMPORTED_MODULE_5_slate__["Node"].string(block[0]).includes('\t')) {
            native = false;
          }
        }
      } // COMPAT: For the deleting forward/backward input types we don't want
      // to change the selection because it is the range that will be deleted,
      // and those commands determine that for themselves.


      if (!type.startsWith('delete') || type.startsWith('deleteBy')) {
        var [targetRange] = event.getTargetRanges();

        if (targetRange) {
          var range = ReactEditor.toSlateRange(editor, targetRange, {
            exactMatch: false,
            suppressThrow: false
          });

          if (!selection || !__WEBPACK_IMPORTED_MODULE_5_slate__["Range"].equals(selection, range)) {
            native = false;
            var selectionRef = !isCompositionChange && editor.selection && __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].rangeRef(editor, editor.selection);
            __WEBPACK_IMPORTED_MODULE_5_slate__["Transforms"].select(editor, range);

            if (selectionRef) {
              EDITOR_TO_USER_SELECTION.set(editor, selectionRef);
            }
          }
        }
      } // Composition change types occur while a user is composing text and can't be
      // cancelled. Let them through and wait for the composition to end.


      if (isCompositionChange) {
        return;
      }

      if (!native) {
        event.preventDefault();
      } // COMPAT: If the selection is expanded, even if the command seems like
      // a delete forward/backward command it should delete the selection.


      if (selection && __WEBPACK_IMPORTED_MODULE_5_slate__["Range"].isExpanded(selection) && type.startsWith('delete')) {
        var direction = type.endsWith('Backward') ? 'backward' : 'forward';
        __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].deleteFragment(editor, {
          direction
        });
        return;
      }

      switch (type) {
        case 'deleteByComposition':
        case 'deleteByCut':
        case 'deleteByDrag':
          {
            __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].deleteFragment(editor);
            break;
          }

        case 'deleteContent':
        case 'deleteContentForward':
          {
            __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].deleteForward(editor);
            break;
          }

        case 'deleteContentBackward':
          {
            __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].deleteBackward(editor);
            break;
          }

        case 'deleteEntireSoftLine':
          {
            __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].deleteBackward(editor, {
              unit: 'line'
            });
            __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].deleteForward(editor, {
              unit: 'line'
            });
            break;
          }

        case 'deleteHardLineBackward':
          {
            __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].deleteBackward(editor, {
              unit: 'block'
            });
            break;
          }

        case 'deleteSoftLineBackward':
          {
            __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].deleteBackward(editor, {
              unit: 'line'
            });
            break;
          }

        case 'deleteHardLineForward':
          {
            __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].deleteForward(editor, {
              unit: 'block'
            });
            break;
          }

        case 'deleteSoftLineForward':
          {
            __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].deleteForward(editor, {
              unit: 'line'
            });
            break;
          }

        case 'deleteWordBackward':
          {
            __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].deleteBackward(editor, {
              unit: 'word'
            });
            break;
          }

        case 'deleteWordForward':
          {
            __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].deleteForward(editor, {
              unit: 'word'
            });
            break;
          }

        case 'insertLineBreak':
          __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].insertSoftBreak(editor);
          break;

        case 'insertParagraph':
          {
            __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].insertBreak(editor);
            break;
          }

        case 'insertFromComposition':
        case 'insertFromDrop':
        case 'insertFromPaste':
        case 'insertFromYank':
        case 'insertReplacementText':
        case 'insertText':
          {
            if (type === 'insertFromComposition') {
              // COMPAT: in Safari, `compositionend` is dispatched after the
              // `beforeinput` for "insertFromComposition". But if we wait for it
              // then we will abort because we're still composing and the selection
              // won't be updated properly.
              // https://www.w3.org/TR/input-events-2/
              if (ReactEditor.isComposing(editor)) {
                setIsComposing(false);
                IS_COMPOSING.set(editor, false);
              }
            } // use a weak comparison instead of 'instanceof' to allow
            // programmatic access of paste events coming from external windows
            // like cypress where cy.window does not work realibly


            if ((data === null || data === void 0 ? void 0 : data.constructor.name) === 'DataTransfer') {
              ReactEditor.insertData(editor, data);
            } else if (typeof data === 'string') {
              // Only insertText operations use the native functionality, for now.
              // Potentially expand to single character deletes, as well.
              if (native) {
                deferredOperations.current.push(() => __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].insertText(editor, data));
              } else {
                __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].insertText(editor, data);
              }
            }

            break;
          }
      } // Restore the actual user section if nothing manually set it.


      var toRestore = (_EDITOR_TO_USER_SELEC = EDITOR_TO_USER_SELECTION.get(editor)) === null || _EDITOR_TO_USER_SELEC === void 0 ? void 0 : _EDITOR_TO_USER_SELEC.unref();
      EDITOR_TO_USER_SELECTION.delete(editor);

      if (toRestore && (!editor.selection || !__WEBPACK_IMPORTED_MODULE_5_slate__["Range"].equals(editor.selection, toRestore))) {
        __WEBPACK_IMPORTED_MODULE_5_slate__["Transforms"].select(editor, toRestore);
      }
    }
  }, [readOnly, propsOnDOMBeforeInput]); // Attach a native DOM event handler for `beforeinput` events, because React's
  // built-in `onBeforeInput` is actually a leaky polyfill that doesn't expose
  // real `beforeinput` events sadly... (2019/11/04)
  // https://github.com/facebook/react/issues/11211

  useIsomorphicLayoutEffect(() => {
    if (ref.current && HAS_BEFORE_INPUT_SUPPORT) {
      // @ts-ignore The `beforeinput` event isn't recognized.
      ref.current.addEventListener('beforeinput', onDOMBeforeInput);
    }

    return () => {
      if (ref.current && HAS_BEFORE_INPUT_SUPPORT) {
        // @ts-ignore The `beforeinput` event isn't recognized.
        ref.current.removeEventListener('beforeinput', onDOMBeforeInput);
      }
    };
  }, [onDOMBeforeInput]); // Attach a native DOM event handler for `selectionchange`, because React's
  // built-in `onSelect` handler doesn't fire for all selection changes. It's a
  // leaky polyfill that only fires on keypresses or clicks. Instead, we want to
  // fire for any change to the selection inside the editor. (2019/11/04)
  // https://github.com/facebook/react/issues/5785

  useIsomorphicLayoutEffect(() => {
    var window = ReactEditor.getWindow(editor);
    window.document.addEventListener('selectionchange', scheduleOnDOMSelectionChange);
    return () => {
      window.document.removeEventListener('selectionchange', scheduleOnDOMSelectionChange);
    };
  }, [scheduleOnDOMSelectionChange]);
  var decorations = decorate([editor, []]);

  if (placeholder && editor.children.length === 1 && Array.from(__WEBPACK_IMPORTED_MODULE_5_slate__["Node"].texts(editor)).length === 1 && __WEBPACK_IMPORTED_MODULE_5_slate__["Node"].string(editor) === '' && !isComposing) {
    var start = __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].start(editor, []);
    decorations.push({
      [PLACEHOLDER_SYMBOL]: true,
      placeholder,
      anchor: start,
      focus: start
    });
  }

  var {
    marks
  } = editor;
  state.hasMarkPlaceholder = false;

  if (editor.selection && __WEBPACK_IMPORTED_MODULE_5_slate__["Range"].isCollapsed(editor.selection) && marks) {
    var {
      anchor
    } = editor.selection;
    var leaf = __WEBPACK_IMPORTED_MODULE_5_slate__["Node"].leaf(editor, anchor.path);

    var rest = _objectWithoutProperties(leaf, _excluded2); // While marks isn't a 'complete' text, we can still use loose Text.equals
    // here which only compares marks anyway.


    if (!__WEBPACK_IMPORTED_MODULE_5_slate__["Text"].equals(leaf, marks, {
      loose: true
    })) {
      state.hasMarkPlaceholder = true;
      var unset = Object.fromEntries(Object.keys(rest).map(mark => [mark, null]));
      decorations.push(_objectSpread$1(_objectSpread$1(_objectSpread$1({
        [MARK_PLACEHOLDER_SYMBOL]: true
      }, unset), marks), {}, {
        anchor,
        focus: anchor
      }));
    }
  } // Update EDITOR_TO_MARK_PLACEHOLDER_MARKS in setTimeout useEffect to ensure we don't set it
  // before we receive the composition end event.


  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useEffect"])(() => {
    setTimeout(() => {
      var {
        selection
      } = editor;

      if (selection) {
        var {
          anchor: _anchor
        } = selection;

        var _text = __WEBPACK_IMPORTED_MODULE_5_slate__["Node"].leaf(editor, _anchor.path); // While marks isn't a 'complete' text, we can still use loose Text.equals
        // here which only compares marks anyway.


        if (marks && !__WEBPACK_IMPORTED_MODULE_5_slate__["Text"].equals(_text, marks, {
          loose: true
        })) {
          EDITOR_TO_PENDING_INSERTION_MARKS.set(editor, marks);
          return;
        }
      }

      EDITOR_TO_PENDING_INSERTION_MARKS.delete(editor);
    });
  });
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ReadOnlyContext.Provider, {
    value: readOnly
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(DecorateContext.Provider, {
    value: decorate
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(RestoreDOM, {
    node: ref,
    receivedUserInput: receivedUserInput
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Component, Object.assign({
    role: readOnly ? undefined : 'textbox',
    "aria-multiline": readOnly ? undefined : true
  }, attributes, {
    // COMPAT: Certain browsers don't support the `beforeinput` event, so we'd
    // have to use hacks to make these replacement-based features work.
    // For SSR situations HAS_BEFORE_INPUT_SUPPORT is false and results in prop
    // mismatch warning app moves to browser. Pass-through consumer props when
    // not CAN_USE_DOM (SSR) and default to falsy value
    spellCheck: HAS_BEFORE_INPUT_SUPPORT || !CAN_USE_DOM ? attributes.spellCheck : false,
    autoCorrect: HAS_BEFORE_INPUT_SUPPORT || !CAN_USE_DOM ? attributes.autoCorrect : 'false',
    autoCapitalize: HAS_BEFORE_INPUT_SUPPORT || !CAN_USE_DOM ? attributes.autoCapitalize : 'false',
    "data-slate-editor": true,
    "data-slate-node": "value",
    // explicitly set this
    contentEditable: !readOnly,
    // in some cases, a decoration needs access to the range / selection to decorate a text node,
    // then you will select the whole text node when you select part the of text
    // this magic zIndex="-1" will fix it
    zindex: -1,
    suppressContentEditableWarning: true,
    ref: ref,
    style: _objectSpread$1({
      // Allow positioning relative to the editable element.
      position: 'relative',
      // Prevent the default outline styles.
      outline: 'none',
      // Preserve adjacent whitespace and new lines.
      whiteSpace: 'pre-wrap',
      // Allow words to break if they are too long.
      wordWrap: 'break-word'
    }, style),
    onBeforeInput: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useCallback"])(event => {
      // COMPAT: Certain browsers don't support the `beforeinput` event, so we
      // fall back to React's leaky polyfill instead just for it. It
      // only works for the `insertText` input type.
      if (!HAS_BEFORE_INPUT_SUPPORT && !readOnly && !isEventHandled(event, attributes.onBeforeInput) && hasEditableTarget(editor, event.target)) {
        event.preventDefault();

        if (!ReactEditor.isComposing(editor)) {
          var _text2 = event.data;
          __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].insertText(editor, _text2);
        }
      }
    }, [readOnly]),
    onInput: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useCallback"])(event => {
      if (androidInputManager) {
        androidInputManager.handleInput();
        return;
      } // Flush native operations, as native events will have propogated
      // and we can correctly compare DOM text values in components
      // to stop rendering, so that browser functions like autocorrect
      // and spellcheck work as expected.


      for (var op of deferredOperations.current) {
        op();
      }

      deferredOperations.current = [];
    }, []),
    onBlur: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useCallback"])(event => {
      if (readOnly || state.isUpdatingSelection || !hasEditableTarget(editor, event.target) || isEventHandled(event, attributes.onBlur)) {
        return;
      } // COMPAT: If the current `activeElement` is still the previous
      // one, this is due to the window being blurred when the tab
      // itself becomes unfocused, so we want to abort early to allow to
      // editor to stay focused when the tab becomes focused again.


      var root = ReactEditor.findDocumentOrShadowRoot(editor);

      if (state.latestElement === root.activeElement) {
        return;
      }

      var {
        relatedTarget
      } = event;
      var el = ReactEditor.toDOMNode(editor, editor); // COMPAT: The event should be ignored if the focus is returning
      // to the editor from an embedded editable element (eg. an <input>
      // element inside a void node).

      if (relatedTarget === el) {
        return;
      } // COMPAT: The event should be ignored if the focus is moving from
      // the editor to inside a void node's spacer element.


      if (isDOMElement(relatedTarget) && relatedTarget.hasAttribute('data-slate-spacer')) {
        return;
      } // COMPAT: The event should be ignored if the focus is moving to a
      // non- editable section of an element that isn't a void node (eg.
      // a list item of the check list example).


      if (relatedTarget != null && isDOMNode(relatedTarget) && ReactEditor.hasDOMNode(editor, relatedTarget)) {
        var node = ReactEditor.toSlateNode(editor, relatedTarget);

        if (__WEBPACK_IMPORTED_MODULE_5_slate__["Element"].isElement(node) && !editor.isVoid(node)) {
          return;
        }
      } // COMPAT: Safari doesn't always remove the selection even if the content-
      // editable element no longer has focus. Refer to:
      // https://stackoverflow.com/questions/12353247/force-contenteditable-div-to-stop-accepting-input-after-it-loses-focus-under-web


      if (IS_SAFARI) {
        var domSelection = root.getSelection();
        domSelection === null || domSelection === void 0 ? void 0 : domSelection.removeAllRanges();
      }

      IS_FOCUSED.delete(editor);
    }, [readOnly, attributes.onBlur]),
    onClick: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useCallback"])(event => {
      if (hasTarget(editor, event.target) && !isEventHandled(event, attributes.onClick) && isDOMNode(event.target)) {
        var node = ReactEditor.toSlateNode(editor, event.target);
        var path = ReactEditor.findPath(editor, node); // At this time, the Slate document may be arbitrarily different,
        // because onClick handlers can change the document before we get here.
        // Therefore we must check that this path actually exists,
        // and that it still refers to the same node.

        if (!__WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].hasPath(editor, path) || __WEBPACK_IMPORTED_MODULE_5_slate__["Node"].get(editor, path) !== node) {
          return;
        }

        if (event.detail === TRIPLE_CLICK && path.length >= 1) {
          var blockPath = path;

          if (!__WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].isBlock(editor, node)) {
            var _block$;

            var block = __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].above(editor, {
              match: n => __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].isBlock(editor, n),
              at: path
            });
            blockPath = (_block$ = block === null || block === void 0 ? void 0 : block[1]) !== null && _block$ !== void 0 ? _block$ : path.slice(0, 1);
          }

          var range = __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].range(editor, blockPath);
          __WEBPACK_IMPORTED_MODULE_5_slate__["Transforms"].select(editor, range);
          return;
        }

        if (readOnly) {
          return;
        }

        var _start = __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].start(editor, path);

        var end = __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].end(editor, path);
        var startVoid = __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].void(editor, {
          at: _start
        });
        var endVoid = __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].void(editor, {
          at: end
        });

        if (startVoid && endVoid && __WEBPACK_IMPORTED_MODULE_5_slate__["Path"].equals(startVoid[1], endVoid[1])) {
          var _range = __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].range(editor, _start);

          __WEBPACK_IMPORTED_MODULE_5_slate__["Transforms"].select(editor, _range);
        }
      }
    }, [readOnly, attributes.onClick]),
    onCompositionEnd: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useCallback"])(event => {
      if (hasEditableTarget(editor, event.target)) {
        if (ReactEditor.isComposing(editor)) {
          setIsComposing(false);
          IS_COMPOSING.set(editor, false);
        }

        androidInputManager === null || androidInputManager === void 0 ? void 0 : androidInputManager.handleCompositionEnd(event);

        if (isEventHandled(event, attributes.onCompositionEnd) || IS_ANDROID) {
          return;
        } // COMPAT: In Chrome, `beforeinput` events for compositions
        // aren't correct and never fire the "insertFromComposition"
        // type that we need. So instead, insert whenever a composition
        // ends since it will already have been committed to the DOM.


        if (!IS_SAFARI && !IS_FIREFOX_LEGACY && !IS_IOS && !IS_QQBROWSER && !IS_WECHATBROWSER && !IS_UC_MOBILE && event.data) {
          var placeholderMarks = EDITOR_TO_PENDING_INSERTION_MARKS.get(editor);
          EDITOR_TO_PENDING_INSERTION_MARKS.delete(editor); // Ensure we insert text with the marks the user was actually seeing

          if (placeholderMarks !== undefined) {
            EDITOR_TO_USER_MARKS.set(editor, editor.marks);
            editor.marks = placeholderMarks;
          }

          __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].insertText(editor, event.data);
          var userMarks = EDITOR_TO_USER_MARKS.get(editor);
          EDITOR_TO_USER_MARKS.delete(editor);

          if (userMarks !== undefined) {
            editor.marks = userMarks;
          }
        }
      }
    }, [attributes.onCompositionEnd]),
    onCompositionUpdate: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useCallback"])(event => {
      if (hasEditableTarget(editor, event.target) && !isEventHandled(event, attributes.onCompositionUpdate)) {
        if (!ReactEditor.isComposing(editor)) {
          setIsComposing(true);
          IS_COMPOSING.set(editor, true);
        }
      }
    }, [attributes.onCompositionUpdate]),
    onCompositionStart: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useCallback"])(event => {
      if (hasEditableTarget(editor, event.target)) {
        androidInputManager === null || androidInputManager === void 0 ? void 0 : androidInputManager.handleCompositionStart(event);

        if (isEventHandled(event, attributes.onCompositionStart) || IS_ANDROID) {
          return;
        }

        setIsComposing(true);
        var {
          selection
        } = editor;

        if (selection) {
          if (__WEBPACK_IMPORTED_MODULE_5_slate__["Range"].isExpanded(selection)) {
            __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].deleteFragment(editor);
            return;
          }

          var inline = __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].above(editor, {
            match: n => __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].isInline(editor, n),
            mode: 'highest'
          });

          if (inline) {
            var [, inlinePath] = inline;

            if (__WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].isEnd(editor, selection.anchor, inlinePath)) {
              var point = __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].after(editor, inlinePath);
              __WEBPACK_IMPORTED_MODULE_5_slate__["Transforms"].setSelection(editor, {
                anchor: point,
                focus: point
              });
            }
          }
        }
      }
    }, [attributes.onCompositionStart]),
    onCopy: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useCallback"])(event => {
      if (hasEditableTarget(editor, event.target) && !isEventHandled(event, attributes.onCopy)) {
        event.preventDefault();
        ReactEditor.setFragmentData(editor, event.clipboardData, 'copy');
      }
    }, [attributes.onCopy]),
    onCut: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useCallback"])(event => {
      if (!readOnly && hasEditableTarget(editor, event.target) && !isEventHandled(event, attributes.onCut)) {
        event.preventDefault();
        ReactEditor.setFragmentData(editor, event.clipboardData, 'cut');
        var {
          selection
        } = editor;

        if (selection) {
          if (__WEBPACK_IMPORTED_MODULE_5_slate__["Range"].isExpanded(selection)) {
            __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].deleteFragment(editor);
          } else {
            var node = __WEBPACK_IMPORTED_MODULE_5_slate__["Node"].parent(editor, selection.anchor.path);

            if (__WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].isVoid(editor, node)) {
              __WEBPACK_IMPORTED_MODULE_5_slate__["Transforms"].delete(editor);
            }
          }
        }
      }
    }, [readOnly, attributes.onCut]),
    onDragOver: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useCallback"])(event => {
      if (hasTarget(editor, event.target) && !isEventHandled(event, attributes.onDragOver)) {
        // Only when the target is void, call `preventDefault` to signal
        // that drops are allowed. Editable content is droppable by
        // default, and calling `preventDefault` hides the cursor.
        var node = ReactEditor.toSlateNode(editor, event.target);

        if (__WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].isVoid(editor, node)) {
          event.preventDefault();
        }
      }
    }, [attributes.onDragOver]),
    onDragStart: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useCallback"])(event => {
      if (!readOnly && hasTarget(editor, event.target) && !isEventHandled(event, attributes.onDragStart)) {
        var node = ReactEditor.toSlateNode(editor, event.target);
        var path = ReactEditor.findPath(editor, node);
        var voidMatch = __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].isVoid(editor, node) || __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].void(editor, {
          at: path,
          voids: true
        }); // If starting a drag on a void node, make sure it is selected
        // so that it shows up in the selection's fragment.

        if (voidMatch) {
          var range = __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].range(editor, path);
          __WEBPACK_IMPORTED_MODULE_5_slate__["Transforms"].select(editor, range);
        }

        state.isDraggingInternally = true;
        ReactEditor.setFragmentData(editor, event.dataTransfer, 'drag');
      }
    }, [readOnly, attributes.onDragStart]),
    onDrop: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useCallback"])(event => {
      if (!readOnly && hasTarget(editor, event.target) && !isEventHandled(event, attributes.onDrop)) {
        event.preventDefault(); // Keep a reference to the dragged range before updating selection

        var draggedRange = editor.selection; // Find the range where the drop happened

        var range = ReactEditor.findEventRange(editor, event);
        var data = event.dataTransfer;
        __WEBPACK_IMPORTED_MODULE_5_slate__["Transforms"].select(editor, range);

        if (state.isDraggingInternally) {
          if (draggedRange && !__WEBPACK_IMPORTED_MODULE_5_slate__["Range"].equals(draggedRange, range) && !__WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].void(editor, {
            at: range,
            voids: true
          })) {
            __WEBPACK_IMPORTED_MODULE_5_slate__["Transforms"].delete(editor, {
              at: draggedRange
            });
          }
        }

        ReactEditor.insertData(editor, data); // When dragging from another source into the editor, it's possible
        // that the current editor does not have focus.

        if (!ReactEditor.isFocused(editor)) {
          ReactEditor.focus(editor);
        }
      }

      state.isDraggingInternally = false;
    }, [readOnly, attributes.onDrop]),
    onDragEnd: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useCallback"])(event => {
      if (!readOnly && state.isDraggingInternally && attributes.onDragEnd && hasTarget(editor, event.target)) {
        attributes.onDragEnd(event);
      } // When dropping on a different droppable element than the current editor,
      // `onDrop` is not called. So we need to clean up in `onDragEnd` instead.
      // Note: `onDragEnd` is only called when `onDrop` is not called


      state.isDraggingInternally = false;
    }, [readOnly, attributes.onDragEnd]),
    onFocus: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useCallback"])(event => {
      if (!readOnly && !state.isUpdatingSelection && hasEditableTarget(editor, event.target) && !isEventHandled(event, attributes.onFocus)) {
        var el = ReactEditor.toDOMNode(editor, editor);
        var root = ReactEditor.findDocumentOrShadowRoot(editor);
        state.latestElement = root.activeElement; // COMPAT: If the editor has nested editable elements, the focus
        // can go to them. In Firefox, this must be prevented because it
        // results in issues with keyboard navigation. (2017/03/30)

        if (IS_FIREFOX && event.target !== el) {
          el.focus();
          return;
        }

        IS_FOCUSED.set(editor, true);
      }
    }, [readOnly, attributes.onFocus]),
    onKeyDown: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useCallback"])(event => {
      if (!readOnly && hasEditableTarget(editor, event.target)) {
        androidInputManager === null || androidInputManager === void 0 ? void 0 : androidInputManager.handleKeyDown(event);
        var {
          nativeEvent
        } = event; // COMPAT: The composition end event isn't fired reliably in all browsers,
        // so we sometimes might end up stuck in a composition state even though we
        // aren't composing any more.

        if (ReactEditor.isComposing(editor) && nativeEvent.isComposing === false) {
          IS_COMPOSING.set(editor, false);
          setIsComposing(false);
        }

        if (isEventHandled(event, attributes.onKeyDown) || ReactEditor.isComposing(editor)) {
          return;
        }

        var {
          selection
        } = editor;
        var element = editor.children[selection !== null ? selection.focus.path[0] : 0];
        var isRTL = __WEBPACK_IMPORTED_MODULE_0_direction___default()(__WEBPACK_IMPORTED_MODULE_5_slate__["Node"].string(element)) === 'rtl'; // COMPAT: Since we prevent the default behavior on
        // `beforeinput` events, the browser doesn't think there's ever
        // any history stack to undo or redo, so we have to manage these
        // hotkeys ourselves. (2019/11/06)

        if (Hotkeys.isRedo(nativeEvent)) {
          event.preventDefault();
          var maybeHistoryEditor = editor;

          if (typeof maybeHistoryEditor.redo === 'function') {
            maybeHistoryEditor.redo();
          }

          return;
        }

        if (Hotkeys.isUndo(nativeEvent)) {
          event.preventDefault();
          var _maybeHistoryEditor = editor;

          if (typeof _maybeHistoryEditor.undo === 'function') {
            _maybeHistoryEditor.undo();
          }

          return;
        } // COMPAT: Certain browsers don't handle the selection updates
        // properly. In Chrome, the selection isn't properly extended.
        // And in Firefox, the selection isn't properly collapsed.
        // (2017/10/17)


        if (Hotkeys.isMoveLineBackward(nativeEvent)) {
          event.preventDefault();
          __WEBPACK_IMPORTED_MODULE_5_slate__["Transforms"].move(editor, {
            unit: 'line',
            reverse: true
          });
          return;
        }

        if (Hotkeys.isMoveLineForward(nativeEvent)) {
          event.preventDefault();
          __WEBPACK_IMPORTED_MODULE_5_slate__["Transforms"].move(editor, {
            unit: 'line'
          });
          return;
        }

        if (Hotkeys.isExtendLineBackward(nativeEvent)) {
          event.preventDefault();
          __WEBPACK_IMPORTED_MODULE_5_slate__["Transforms"].move(editor, {
            unit: 'line',
            edge: 'focus',
            reverse: true
          });
          return;
        }

        if (Hotkeys.isExtendLineForward(nativeEvent)) {
          event.preventDefault();
          __WEBPACK_IMPORTED_MODULE_5_slate__["Transforms"].move(editor, {
            unit: 'line',
            edge: 'focus'
          });
          return;
        } // COMPAT: If a void node is selected, or a zero-width text node
        // adjacent to an inline is selected, we need to handle these
        // hotkeys manually because browsers won't be able to skip over
        // the void node with the zero-width space not being an empty
        // string.


        if (Hotkeys.isMoveBackward(nativeEvent)) {
          event.preventDefault();

          if (selection && __WEBPACK_IMPORTED_MODULE_5_slate__["Range"].isCollapsed(selection)) {
            __WEBPACK_IMPORTED_MODULE_5_slate__["Transforms"].move(editor, {
              reverse: !isRTL
            });
          } else {
            __WEBPACK_IMPORTED_MODULE_5_slate__["Transforms"].collapse(editor, {
              edge: 'start'
            });
          }

          return;
        }

        if (Hotkeys.isMoveForward(nativeEvent)) {
          event.preventDefault();

          if (selection && __WEBPACK_IMPORTED_MODULE_5_slate__["Range"].isCollapsed(selection)) {
            __WEBPACK_IMPORTED_MODULE_5_slate__["Transforms"].move(editor, {
              reverse: isRTL
            });
          } else {
            __WEBPACK_IMPORTED_MODULE_5_slate__["Transforms"].collapse(editor, {
              edge: 'end'
            });
          }

          return;
        }

        if (Hotkeys.isMoveWordBackward(nativeEvent)) {
          event.preventDefault();

          if (selection && __WEBPACK_IMPORTED_MODULE_5_slate__["Range"].isExpanded(selection)) {
            __WEBPACK_IMPORTED_MODULE_5_slate__["Transforms"].collapse(editor, {
              edge: 'focus'
            });
          }

          __WEBPACK_IMPORTED_MODULE_5_slate__["Transforms"].move(editor, {
            unit: 'word',
            reverse: !isRTL
          });
          return;
        }

        if (Hotkeys.isMoveWordForward(nativeEvent)) {
          event.preventDefault();

          if (selection && __WEBPACK_IMPORTED_MODULE_5_slate__["Range"].isExpanded(selection)) {
            __WEBPACK_IMPORTED_MODULE_5_slate__["Transforms"].collapse(editor, {
              edge: 'focus'
            });
          }

          __WEBPACK_IMPORTED_MODULE_5_slate__["Transforms"].move(editor, {
            unit: 'word',
            reverse: isRTL
          });
          return;
        } // COMPAT: Certain browsers don't support the `beforeinput` event, so we
        // fall back to guessing at the input intention for hotkeys.
        // COMPAT: In iOS, some of these hotkeys are handled in the


        if (!HAS_BEFORE_INPUT_SUPPORT) {
          // We don't have a core behavior for these, but they change the
          // DOM if we don't prevent them, so we have to.
          if (Hotkeys.isBold(nativeEvent) || Hotkeys.isItalic(nativeEvent) || Hotkeys.isTransposeCharacter(nativeEvent)) {
            event.preventDefault();
            return;
          }

          if (Hotkeys.isSoftBreak(nativeEvent)) {
            event.preventDefault();
            __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].insertSoftBreak(editor);
            return;
          }

          if (Hotkeys.isSplitBlock(nativeEvent)) {
            event.preventDefault();
            __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].insertBreak(editor);
            return;
          }

          if (Hotkeys.isDeleteBackward(nativeEvent)) {
            event.preventDefault();

            if (selection && __WEBPACK_IMPORTED_MODULE_5_slate__["Range"].isExpanded(selection)) {
              __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].deleteFragment(editor, {
                direction: 'backward'
              });
            } else {
              __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].deleteBackward(editor);
            }

            return;
          }

          if (Hotkeys.isDeleteForward(nativeEvent)) {
            event.preventDefault();

            if (selection && __WEBPACK_IMPORTED_MODULE_5_slate__["Range"].isExpanded(selection)) {
              __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].deleteFragment(editor, {
                direction: 'forward'
              });
            } else {
              __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].deleteForward(editor);
            }

            return;
          }

          if (Hotkeys.isDeleteLineBackward(nativeEvent)) {
            event.preventDefault();

            if (selection && __WEBPACK_IMPORTED_MODULE_5_slate__["Range"].isExpanded(selection)) {
              __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].deleteFragment(editor, {
                direction: 'backward'
              });
            } else {
              __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].deleteBackward(editor, {
                unit: 'line'
              });
            }

            return;
          }

          if (Hotkeys.isDeleteLineForward(nativeEvent)) {
            event.preventDefault();

            if (selection && __WEBPACK_IMPORTED_MODULE_5_slate__["Range"].isExpanded(selection)) {
              __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].deleteFragment(editor, {
                direction: 'forward'
              });
            } else {
              __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].deleteForward(editor, {
                unit: 'line'
              });
            }

            return;
          }

          if (Hotkeys.isDeleteWordBackward(nativeEvent)) {
            event.preventDefault();

            if (selection && __WEBPACK_IMPORTED_MODULE_5_slate__["Range"].isExpanded(selection)) {
              __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].deleteFragment(editor, {
                direction: 'backward'
              });
            } else {
              __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].deleteBackward(editor, {
                unit: 'word'
              });
            }

            return;
          }

          if (Hotkeys.isDeleteWordForward(nativeEvent)) {
            event.preventDefault();

            if (selection && __WEBPACK_IMPORTED_MODULE_5_slate__["Range"].isExpanded(selection)) {
              __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].deleteFragment(editor, {
                direction: 'forward'
              });
            } else {
              __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].deleteForward(editor, {
                unit: 'word'
              });
            }

            return;
          }
        } else {
          if (IS_CHROME || IS_SAFARI) {
            // COMPAT: Chrome and Safari support `beforeinput` event but do not fire
            // an event when deleting backwards in a selected void inline node
            if (selection && (Hotkeys.isDeleteBackward(nativeEvent) || Hotkeys.isDeleteForward(nativeEvent)) && __WEBPACK_IMPORTED_MODULE_5_slate__["Range"].isCollapsed(selection)) {
              var currentNode = __WEBPACK_IMPORTED_MODULE_5_slate__["Node"].parent(editor, selection.anchor.path);

              if (__WEBPACK_IMPORTED_MODULE_5_slate__["Element"].isElement(currentNode) && __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].isVoid(editor, currentNode) && (__WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].isInline(editor, currentNode) || __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].isBlock(editor, currentNode))) {
                event.preventDefault();
                __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].deleteBackward(editor, {
                  unit: 'block'
                });
                return;
              }
            }
          }
        }
      }
    }, [readOnly, attributes.onKeyDown]),
    onPaste: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useCallback"])(event => {
      if (!readOnly && hasEditableTarget(editor, event.target) && !isEventHandled(event, attributes.onPaste)) {
        // COMPAT: Certain browsers don't support the `beforeinput` event, so we
        // fall back to React's `onPaste` here instead.
        // COMPAT: Firefox, Chrome and Safari don't emit `beforeinput` events
        // when "paste without formatting" is used, so fallback. (2020/02/20)
        if (!HAS_BEFORE_INPUT_SUPPORT || isPlainTextOnlyPaste(event.nativeEvent)) {
          event.preventDefault();
          ReactEditor.insertData(editor, event.clipboardData);
        }
      }
    }, [readOnly, attributes.onPaste])
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Children, {
    decorations: decorations,
    node: editor,
    renderElement: renderElement,
    renderPlaceholder: renderPlaceholder,
    renderLeaf: renderLeaf,
    selection: editor.selection
  })))));
};
/**
 * The default placeholder element
 */

var DefaultPlaceholder = _ref => {
  var {
    attributes,
    children
  } = _ref;
  return (
    /*#__PURE__*/
    // COMPAT: Artificially add a line-break to the end on the placeholder element
    // to prevent Android IMEs to pick up its content in autocorrect and to auto-capitalize the first letter
    __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("span", Object.assign({}, attributes), children, IS_ANDROID && /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("br", null))
  );
};
/**
 * A default memoized decorate function.
 */

var defaultDecorate = () => [];
/**
 * A default implement to scroll dom range into view.
 */

var defaultScrollSelectionIntoView = (editor, domRange) => {
  // This was affecting the selection of multiple blocks and dragging behavior,
  // so enabled only if the selection has been collapsed.
  if (!editor.selection || editor.selection && __WEBPACK_IMPORTED_MODULE_5_slate__["Range"].isCollapsed(editor.selection)) {
    var leafEl = domRange.startContainer.parentElement;
    leafEl.getBoundingClientRect = domRange.getBoundingClientRect.bind(domRange);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_scroll_into_view_if_needed__["a" /* default */])(leafEl, {
      scrollMode: 'if-needed'
    }); // @ts-expect-error an unorthodox delete D:

    delete leafEl.getBoundingClientRect;
  }
};
/**
 * Check if the target is in the editor.
 */


var hasTarget = (editor, target) => {
  return isDOMNode(target) && ReactEditor.hasDOMNode(editor, target);
};
/**
 * Check if the target is editable and in the editor.
 */

var hasEditableTarget = (editor, target) => {
  return isDOMNode(target) && ReactEditor.hasDOMNode(editor, target, {
    editable: true
  });
};
/**
 * Check if the target is inside void and in an non-readonly editor.
 */

var isTargetInsideNonReadonlyVoid = (editor, target) => {
  if (IS_READ_ONLY.get(editor)) return false;
  var slateNode = hasTarget(editor, target) && ReactEditor.toSlateNode(editor, target);
  return __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].isVoid(editor, slateNode);
};
/**
 * Check if an event is overrided by a handler.
 */

var isEventHandled = (event, handler) => {
  if (!handler) {
    return false;
  } // The custom event handler may return a boolean to specify whether the event
  // shall be treated as being handled or not.


  var shouldTreatEventAsHandled = handler(event);

  if (shouldTreatEventAsHandled != null) {
    return shouldTreatEventAsHandled;
  }

  return event.isDefaultPrevented() || event.isPropagationStopped();
};
/**
 * Check if a DOM event is overrided by a handler.
 */

var isDOMEventHandled = (event, handler) => {
  if (!handler) {
    return false;
  } // The custom event handler may return a boolean to specify whether the event
  // shall be treated as being handled or not.


  var shouldTreatEventAsHandled = handler(event);

  if (shouldTreatEventAsHandled != null) {
    return shouldTreatEventAsHandled;
  }

  return event.defaultPrevented;
};

/**
 * A React context for sharing the `focused` state of the editor.
 */

var FocusedContext = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["createContext"])(false);
/**
 * Get the current `focused` state of the editor.
 */

var useFocused = () => {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useContext"])(FocusedContext);
};

function isError(error) {
  return error instanceof Error;
}
/**
 * A React context for sharing the editor selector context in a way to control rerenders
 */


var SlateSelectorContext = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["createContext"])({});

var refEquality = (a, b) => a === b;
/**
 * use redux style selectors to prevent rerendering on every keystroke.
 * Bear in mind rerendering can only prevented if the returned value is a value type or for reference types (e.g. objects and arrays) add a custom equality function.
 *
 * Example:
 * ```
 *  const isSelectionActive = useSlateSelector(editor => Boolean(editor.selection));
 * ```
 */


function useSlateSelector(selector) {
  var equalityFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : refEquality;
  var [, forceRender] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useReducer"])(s => s + 1, 0);
  var context = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useContext"])(SlateSelectorContext);

  if (!context) {
    throw new Error("The `useSlateSelector` hook must be used inside the <Slate> component's context.");
  }

  var {
    getSlate,
    addEventListener
  } = context;
  var latestSubscriptionCallbackError = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useRef"])();
  var latestSelector = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useRef"])(() => null);
  var latestSelectedState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useRef"])(null);
  var selectedState;

  try {
    if (selector !== latestSelector.current || latestSubscriptionCallbackError.current) {
      selectedState = selector(getSlate());
    } else {
      selectedState = latestSelectedState.current;
    }
  } catch (err) {
    if (latestSubscriptionCallbackError.current && isError(err)) {
      err.message += "\nThe error may be correlated with this previous error:\n".concat(latestSubscriptionCallbackError.current.stack, "\n\n");
    }

    throw err;
  }

  useIsomorphicLayoutEffect(() => {
    latestSelector.current = selector;
    latestSelectedState.current = selectedState;
    latestSubscriptionCallbackError.current = undefined;
  });
  useIsomorphicLayoutEffect(() => {
    function checkForUpdates() {
      try {
        var newSelectedState = latestSelector.current(getSlate());

        if (equalityFn(newSelectedState, latestSelectedState.current)) {
          return;
        }

        latestSelectedState.current = newSelectedState;
      } catch (err) {
        // we ignore all errors here, since when the component
        // is re-rendered, the selectors are called again, and
        // will throw again, if neither props nor store state
        // changed
        latestSubscriptionCallbackError.current = err;
      }

      forceRender();
    }

    var unsubscribe = addEventListener(checkForUpdates);
    checkForUpdates();
    return () => unsubscribe();
  }, // don't rerender on equalityFn change since we want to be able to define it inline
  [addEventListener, getSlate]);
  return selectedState;
}
/**
 * Create selector context with editor updating on every editor change
 */

function getSelectorContext(editor) {
  var eventListeners = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useRef"])([]).current;
  var slateRef = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useRef"])({
    editor
  }).current;
  var onChange = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useCallback"])(editor => {
    slateRef.editor = editor;
    eventListeners.forEach(listener => listener(editor));
  }, []);
  var selectorContext = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useMemo"])(() => {
    return {
      getSlate: () => slateRef.editor,
      addEventListener: callback => {
        eventListeners.push(callback);
        return () => {
          eventListeners.splice(eventListeners.indexOf(callback), 1);
        };
      }
    };
  }, [eventListeners, slateRef]);
  return {
    selectorContext,
    onChange
  };
}

var _excluded = ["editor", "children", "onChange", "value"];
/**
 * A wrapper around the provider to handle `onChange` events, because the editor
 * is a mutable singleton so it won't ever register as "changed" otherwise.
 */

var Slate = props => {
  var {
    editor,
    children,
    onChange,
    value
  } = props,
      rest = _objectWithoutProperties(props, _excluded);

  var unmountRef = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useRef"])(false);
  var [context, setContext] = __WEBPACK_IMPORTED_MODULE_3_react___default.a.useState(() => {
    if (!__WEBPACK_IMPORTED_MODULE_5_slate__["Node"].isNodeList(value)) {
      throw new Error("[Slate] value is invalid! Expected a list of elements" + "but got: ".concat(__WEBPACK_IMPORTED_MODULE_5_slate__["Scrubber"].stringify(value)));
    }

    if (!__WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].isEditor(editor)) {
      throw new Error("[Slate] editor is invalid! you passed:" + "".concat(__WEBPACK_IMPORTED_MODULE_5_slate__["Scrubber"].stringify(editor)));
    }

    editor.children = value;
    Object.assign(editor, rest);
    return {
      v: 0,
      editor
    };
  });
  var {
    selectorContext,
    onChange: handleSelectorChange
  } = getSelectorContext(editor);
  var onContextChange = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useCallback"])(() => {
    if (onChange) {
      onChange(editor.children);
    }

    setContext(prevContext => ({
      v: prevContext.v + 1,
      editor
    }));
    handleSelectorChange(editor);
  }, [onChange]);
  EDITOR_TO_ON_CHANGE.set(editor, onContextChange);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useEffect"])(() => {
    return () => {
      EDITOR_TO_ON_CHANGE.set(editor, () => {});
      unmountRef.current = true;
    };
  }, []);
  var [isFocused, setIsFocused] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useState"])(ReactEditor.isFocused(editor));
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useEffect"])(() => {
    setIsFocused(ReactEditor.isFocused(editor));
  });
  useIsomorphicLayoutEffect(() => {
    var fn = () => setIsFocused(ReactEditor.isFocused(editor));

    if (IS_REACT_VERSION_17_OR_ABOVE) {
      // In React >= 17 onFocus and onBlur listen to the focusin and focusout events during the bubbling phase.
      // Therefore in order for <Editable />'s handlers to run first, which is necessary for ReactEditor.isFocused(editor)
      // to return the correct value, we have to listen to the focusin and focusout events without useCapture here.
      document.addEventListener('focusin', fn);
      document.addEventListener('focusout', fn);
      return () => {
        document.removeEventListener('focusin', fn);
        document.removeEventListener('focusout', fn);
      };
    } else {
      document.addEventListener('focus', fn, true);
      document.addEventListener('blur', fn, true);
      return () => {
        document.removeEventListener('focus', fn, true);
        document.removeEventListener('blur', fn, true);
      };
    }
  }, []);
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(SlateSelectorContext.Provider, {
    value: selectorContext
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(SlateContext.Provider, {
    value: context
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(EditorContext.Provider, {
    value: context.editor
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(FocusedContext.Provider, {
    value: isFocused
  }, children))));
};

/**
 * Get the current editor object from the React context.
 * @deprecated Use useSlateStatic instead.
 */

var useEditor = () => {
  var editor = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useContext"])(EditorContext);

  if (!editor) {
    throw new Error("The `useEditor` hook must be used inside the <Slate> component's context.");
  }

  return editor;
};

/**
 * Get the current slate selection.
 * Only triggers a rerender when the selection actually changes
 */

var useSlateSelection = () => {
  return useSlateSelector(editor => editor.selection, isSelectionEqual);
};

var isSelectionEqual = (a, b) => {
  if (!a && !b) return true;
  if (!a || !b) return false;
  return __WEBPACK_IMPORTED_MODULE_5_slate__["Range"].equals(a, b);
};

/**
 * Utilities for single-line deletion
 */

var doRectsIntersect = (rect, compareRect) => {
  var middle = (compareRect.top + compareRect.bottom) / 2;
  return rect.top <= middle && rect.bottom >= middle;
};

var areRangesSameLine = (editor, range1, range2) => {
  var rect1 = ReactEditor.toDOMRange(editor, range1).getBoundingClientRect();
  var rect2 = ReactEditor.toDOMRange(editor, range2).getBoundingClientRect();
  return doRectsIntersect(rect1, rect2) && doRectsIntersect(rect2, rect1);
};
/**
 * A helper utility that returns the end portion of a `Range`
 * which is located on a single line.
 *
 * @param {Editor} editor The editor object to compare against
 * @param {Range} parentRange The parent range to compare against
 * @returns {Range} A valid portion of the parentRange which is one a single line
 */


var findCurrentLineRange = (editor, parentRange) => {
  var parentRangeBoundary = __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].range(editor, __WEBPACK_IMPORTED_MODULE_5_slate__["Range"].end(parentRange));
  var positions = Array.from(__WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].positions(editor, {
    at: parentRange
  }));
  var left = 0;
  var right = positions.length;
  var middle = Math.floor(right / 2);

  if (areRangesSameLine(editor, __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].range(editor, positions[left]), parentRangeBoundary)) {
    return __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].range(editor, positions[left], parentRangeBoundary);
  }

  if (positions.length < 2) {
    return __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].range(editor, positions[positions.length - 1], parentRangeBoundary);
  }

  while (middle !== positions.length && middle !== left) {
    if (areRangesSameLine(editor, __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].range(editor, positions[middle]), parentRangeBoundary)) {
      right = middle;
    } else {
      left = middle;
    }

    middle = Math.floor((left + right) / 2);
  }

  return __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].range(editor, positions[right], parentRangeBoundary);
};

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
/**
 * `withReact` adds React and DOM specific behaviors to the editor.
 *
 * If you are using TypeScript, you must extend Slate's CustomTypes to use
 * this plugin.
 *
 * See https://docs.slatejs.org/concepts/11-typescript to learn how.
 */

var withReact = editor => {
  var e = editor;
  var {
    apply,
    onChange,
    deleteBackward,
    addMark,
    removeMark
  } = e; // The WeakMap which maps a key to a specific HTMLElement must be scoped to the editor instance to
  // avoid collisions between editors in the DOM that share the same value.

  EDITOR_TO_KEY_TO_ELEMENT.set(e, new WeakMap());

  e.addMark = (key, value) => {
    var _EDITOR_TO_SCHEDULE_F, _EDITOR_TO_PENDING_DI;

    (_EDITOR_TO_SCHEDULE_F = EDITOR_TO_SCHEDULE_FLUSH.get(e)) === null || _EDITOR_TO_SCHEDULE_F === void 0 ? void 0 : _EDITOR_TO_SCHEDULE_F();

    if (!EDITOR_TO_PENDING_INSERTION_MARKS.get(e) && (_EDITOR_TO_PENDING_DI = EDITOR_TO_PENDING_DIFFS.get(e)) !== null && _EDITOR_TO_PENDING_DI !== void 0 && _EDITOR_TO_PENDING_DI.length) {
      // Ensure the current pending diffs originating from changes before the addMark
      // are applied with the current formatting
      EDITOR_TO_PENDING_INSERTION_MARKS.set(e, null);
    }

    EDITOR_TO_USER_MARKS.delete(e);
    addMark(key, value);
  };

  e.removeMark = key => {
    var _EDITOR_TO_PENDING_DI2;

    if (!EDITOR_TO_PENDING_INSERTION_MARKS.get(e) && (_EDITOR_TO_PENDING_DI2 = EDITOR_TO_PENDING_DIFFS.get(e)) !== null && _EDITOR_TO_PENDING_DI2 !== void 0 && _EDITOR_TO_PENDING_DI2.length) {
      // Ensure the current pending diffs originating from changes before the addMark
      // are applied with the current formatting
      EDITOR_TO_PENDING_INSERTION_MARKS.set(e, null);
    }

    EDITOR_TO_USER_MARKS.delete(e);
    removeMark(key);
  };

  e.deleteBackward = unit => {
    if (unit !== 'line') {
      return deleteBackward(unit);
    }

    if (e.selection && __WEBPACK_IMPORTED_MODULE_5_slate__["Range"].isCollapsed(e.selection)) {
      var parentBlockEntry = __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].above(e, {
        match: n => __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].isBlock(e, n),
        at: e.selection
      });

      if (parentBlockEntry) {
        var [, parentBlockPath] = parentBlockEntry;
        var parentElementRange = __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].range(e, parentBlockPath, e.selection.anchor);
        var currentLineRange = findCurrentLineRange(e, parentElementRange);

        if (!__WEBPACK_IMPORTED_MODULE_5_slate__["Range"].isCollapsed(currentLineRange)) {
          __WEBPACK_IMPORTED_MODULE_5_slate__["Transforms"].delete(e, {
            at: currentLineRange
          });
        }
      }
    }
  }; // This attempts to reset the NODE_TO_KEY entry to the correct value
  // as apply() changes the object reference and hence invalidates the NODE_TO_KEY entry


  e.apply = op => {
    var matches = [];
    var pendingDiffs = EDITOR_TO_PENDING_DIFFS.get(e);

    if (pendingDiffs !== null && pendingDiffs !== void 0 && pendingDiffs.length) {
      var transformed = pendingDiffs.map(textDiff => transformTextDiff(textDiff, op)).filter(Boolean);
      EDITOR_TO_PENDING_DIFFS.set(e, transformed);
    }

    var pendingSelection = EDITOR_TO_PENDING_SELECTION.get(e);

    if (pendingSelection) {
      EDITOR_TO_PENDING_SELECTION.set(e, transformPendingRange(e, pendingSelection, op));
    }

    var pendingAction = EDITOR_TO_PENDING_ACTION.get(e);

    if (pendingAction !== null && pendingAction !== void 0 && pendingAction.at) {
      var at = __WEBPACK_IMPORTED_MODULE_5_slate__["Point"].isPoint(pendingAction === null || pendingAction === void 0 ? void 0 : pendingAction.at) ? transformPendingPoint(e, pendingAction.at, op) : transformPendingRange(e, pendingAction.at, op);
      EDITOR_TO_PENDING_ACTION.set(e, at ? _objectSpread(_objectSpread({}, pendingAction), {}, {
        at
      }) : null);
    }

    switch (op.type) {
      case 'insert_text':
      case 'remove_text':
      case 'set_node':
      case 'split_node':
        {
          matches.push(...getMatches(e, op.path));
          break;
        }

      case 'set_selection':
        {
          var _EDITOR_TO_USER_SELEC;

          // Selection was manually set, don't restore the user selection after the change.
          (_EDITOR_TO_USER_SELEC = EDITOR_TO_USER_SELECTION.get(e)) === null || _EDITOR_TO_USER_SELEC === void 0 ? void 0 : _EDITOR_TO_USER_SELEC.unref();
          EDITOR_TO_USER_SELECTION.delete(e);
          break;
        }

      case 'insert_node':
      case 'remove_node':
        {
          matches.push(...getMatches(e, __WEBPACK_IMPORTED_MODULE_5_slate__["Path"].parent(op.path)));
          break;
        }

      case 'merge_node':
        {
          var prevPath = __WEBPACK_IMPORTED_MODULE_5_slate__["Path"].previous(op.path);
          matches.push(...getMatches(e, prevPath));
          break;
        }

      case 'move_node':
        {
          var commonPath = __WEBPACK_IMPORTED_MODULE_5_slate__["Path"].common(__WEBPACK_IMPORTED_MODULE_5_slate__["Path"].parent(op.path), __WEBPACK_IMPORTED_MODULE_5_slate__["Path"].parent(op.newPath));
          matches.push(...getMatches(e, commonPath));
          break;
        }
    }

    apply(op);

    for (var [path, key] of matches) {
      var [node] = __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].node(e, path);
      NODE_TO_KEY.set(node, key);
    }
  };

  e.setFragmentData = data => {
    var {
      selection
    } = e;

    if (!selection) {
      return;
    }

    var [start, end] = __WEBPACK_IMPORTED_MODULE_5_slate__["Range"].edges(selection);
    var startVoid = __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].void(e, {
      at: start.path
    });
    var endVoid = __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].void(e, {
      at: end.path
    });

    if (__WEBPACK_IMPORTED_MODULE_5_slate__["Range"].isCollapsed(selection) && !startVoid) {
      return;
    } // Create a fake selection so that we can add a Base64-encoded copy of the
    // fragment to the HTML, to decode on future pastes.


    var domRange = ReactEditor.toDOMRange(e, selection);
    var contents = domRange.cloneContents();
    var attach = contents.childNodes[0]; // Make sure attach is non-empty, since empty nodes will not get copied.

    contents.childNodes.forEach(node => {
      if (node.textContent && node.textContent.trim() !== '') {
        attach = node;
      }
    }); // COMPAT: If the end node is a void node, we need to move the end of the
    // range from the void node's spacer span, to the end of the void node's
    // content, since the spacer is before void's content in the DOM.

    if (endVoid) {
      var [voidNode] = endVoid;
      var r = domRange.cloneRange();
      var domNode = ReactEditor.toDOMNode(e, voidNode);
      r.setEndAfter(domNode);
      contents = r.cloneContents();
    } // COMPAT: If the start node is a void node, we need to attach the encoded
    // fragment to the void node's content node instead of the spacer, because
    // attaching it to empty `<div>/<span>` nodes will end up having it erased by
    // most browsers. (2018/04/27)


    if (startVoid) {
      attach = contents.querySelector('[data-slate-spacer]');
    } // Remove any zero-width space spans from the cloned DOM so that they don't
    // show up elsewhere when pasted.


    Array.from(contents.querySelectorAll('[data-slate-zero-width]')).forEach(zw => {
      var isNewline = zw.getAttribute('data-slate-zero-width') === 'n';
      zw.textContent = isNewline ? '\n' : '';
    }); // Set a `data-slate-fragment` attribute on a non-empty node, so it shows up
    // in the HTML, and can be used for intra-Slate pasting. If it's a text
    // node, wrap it in a `<span>` so we have something to set an attribute on.

    if (isDOMText(attach)) {
      var span = attach.ownerDocument.createElement('span'); // COMPAT: In Chrome and Safari, if we don't add the `white-space` style
      // then leading and trailing spaces will be ignored. (2017/09/21)

      span.style.whiteSpace = 'pre';
      span.appendChild(attach);
      contents.appendChild(span);
      attach = span;
    }

    var fragment = e.getFragment();
    var string = JSON.stringify(fragment);
    var encoded = window.btoa(encodeURIComponent(string));
    attach.setAttribute('data-slate-fragment', encoded);
    data.setData('application/x-slate-fragment', encoded); // Add the content to a <div> so that we can get its inner HTML.

    var div = contents.ownerDocument.createElement('div');
    div.appendChild(contents);
    div.setAttribute('hidden', 'true');
    contents.ownerDocument.body.appendChild(div);
    data.setData('text/html', div.innerHTML);
    data.setData('text/plain', getPlainText(div));
    contents.ownerDocument.body.removeChild(div);
    return data;
  };

  e.insertData = data => {
    if (!e.insertFragmentData(data)) {
      e.insertTextData(data);
    }
  };

  e.insertFragmentData = data => {
    /**
     * Checking copied fragment from application/x-slate-fragment or data-slate-fragment
     */
    var fragment = data.getData('application/x-slate-fragment') || getSlateFragmentAttribute(data);

    if (fragment) {
      var decoded = decodeURIComponent(window.atob(fragment));
      var parsed = JSON.parse(decoded);
      e.insertFragment(parsed);
      return true;
    }

    return false;
  };

  e.insertTextData = data => {
    var text = data.getData('text/plain');

    if (text) {
      var lines = text.split(/\r\n|\r|\n/);
      var split = false;

      for (var line of lines) {
        if (split) {
          __WEBPACK_IMPORTED_MODULE_5_slate__["Transforms"].splitNodes(e, {
            always: true
          });
        }

        e.insertText(line);
        split = true;
      }

      return true;
    }

    return false;
  };

  e.onChange = () => {
    // COMPAT: React doesn't batch `setState` hook calls, which means that the
    // children and selection can get out of sync for one render pass. So we
    // have to use this unstable API to ensure it batches them. (2019/12/03)
    // https://github.com/facebook/react/issues/14259#issuecomment-439702367
    __WEBPACK_IMPORTED_MODULE_7_react_dom___default.a.unstable_batchedUpdates(() => {
      var onContextChange = EDITOR_TO_ON_CHANGE.get(e);

      if (onContextChange) {
        onContextChange();
      }

      onChange();
    });
  };

  return e;
};

var getMatches = (e, path) => {
  var matches = [];

  for (var [n, p] of __WEBPACK_IMPORTED_MODULE_5_slate__["Editor"].levels(e, {
    at: path
  })) {
    var key = ReactEditor.findKey(e, n);
    matches.push([p, key]);
  }

  return matches;
};


//# sourceMappingURL=index.es.js.map


/***/ }),

/***/ "./node_modules/slate-react/node_modules/is-hotkey/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * Constants.
 */

var IS_MAC = typeof window != 'undefined' && /Mac|iPod|iPhone|iPad/.test(window.navigator.platform);

var MODIFIERS = {
  alt: 'altKey',
  control: 'ctrlKey',
  meta: 'metaKey',
  shift: 'shiftKey'
};

var ALIASES = {
  add: '+',
  break: 'pause',
  cmd: 'meta',
  command: 'meta',
  ctl: 'control',
  ctrl: 'control',
  del: 'delete',
  down: 'arrowdown',
  esc: 'escape',
  ins: 'insert',
  left: 'arrowleft',
  mod: IS_MAC ? 'meta' : 'control',
  opt: 'alt',
  option: 'alt',
  return: 'enter',
  right: 'arrowright',
  space: ' ',
  spacebar: ' ',
  up: 'arrowup',
  win: 'meta',
  windows: 'meta'
};

var CODES = {
  backspace: 8,
  tab: 9,
  enter: 13,
  shift: 16,
  control: 17,
  alt: 18,
  pause: 19,
  capslock: 20,
  escape: 27,
  ' ': 32,
  pageup: 33,
  pagedown: 34,
  end: 35,
  home: 36,
  arrowleft: 37,
  arrowup: 38,
  arrowright: 39,
  arrowdown: 40,
  insert: 45,
  delete: 46,
  meta: 91,
  numlock: 144,
  scrolllock: 145,
  ';': 186,
  '=': 187,
  ',': 188,
  '-': 189,
  '.': 190,
  '/': 191,
  '`': 192,
  '[': 219,
  '\\': 220,
  ']': 221,
  '\'': 222
};

for (var f = 1; f < 20; f++) {
  CODES['f' + f] = 111 + f;
}

/**
 * Is hotkey?
 */

function isHotkey(hotkey, options, event) {
  if (options && !('byKey' in options)) {
    event = options;
    options = null;
  }

  if (!Array.isArray(hotkey)) {
    hotkey = [hotkey];
  }

  var array = hotkey.map(function (string) {
    return parseHotkey(string, options);
  });
  var check = function check(e) {
    return array.some(function (object) {
      return compareHotkey(object, e);
    });
  };
  var ret = event == null ? check : check(event);
  return ret;
}

function isCodeHotkey(hotkey, event) {
  return isHotkey(hotkey, event);
}

function isKeyHotkey(hotkey, event) {
  return isHotkey(hotkey, { byKey: true }, event);
}

/**
 * Parse.
 */

function parseHotkey(hotkey, options) {
  var byKey = options && options.byKey;
  var ret = {};

  // Special case to handle the `+` key since we use it as a separator.
  hotkey = hotkey.replace('++', '+add');
  var values = hotkey.split('+');
  var length = values.length;

  // Ensure that all the modifiers are set to false unless the hotkey has them.

  for (var k in MODIFIERS) {
    ret[MODIFIERS[k]] = false;
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = values[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var value = _step.value;

      var optional = value.endsWith('?') && value.length > 1;

      if (optional) {
        value = value.slice(0, -1);
      }

      var name = toKeyName(value);
      var modifier = MODIFIERS[name];

      if (length === 1 || !modifier) {
        if (byKey) {
          ret.key = name;
        } else {
          ret.which = toKeyCode(value);
        }
      }

      if (modifier) {
        ret[modifier] = optional ? null : true;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return ret;
}

/**
 * Compare.
 */

function compareHotkey(object, event) {
  for (var key in object) {
    var expected = object[key];
    var actual = void 0;

    if (expected == null) {
      continue;
    }

    if (key === 'key' && event.key != null) {
      actual = event.key.toLowerCase();
    } else if (key === 'which') {
      actual = expected === 91 && event.which === 93 ? 91 : event.which;
    } else {
      actual = event[key];
    }

    if (actual == null && expected === false) {
      continue;
    }

    if (actual !== expected) {
      return false;
    }
  }

  return true;
}

/**
 * Utils.
 */

function toKeyCode(name) {
  name = toKeyName(name);
  var code = CODES[name] || name.toUpperCase().charCodeAt(0);
  return code;
}

function toKeyName(name) {
  name = name.toLowerCase();
  name = ALIASES[name] || name;
  return name;
}

/**
 * Export.
 */

exports.default = isHotkey;
exports.isHotkey = isHotkey;
exports.isCodeHotkey = isCodeHotkey;
exports.isKeyHotkey = isKeyHotkey;
exports.parseHotkey = parseHotkey;
exports.compareHotkey = compareHotkey;
exports.toKeyCode = toKeyCode;
exports.toKeyName = toKeyName;

/***/ }),

/***/ "./node_modules/slate/dist/index.es.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Editor", function() { return Editor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Element", function() { return Element; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Location", function() { return Location; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Node", function() { return Node; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Operation", function() { return Operation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Path", function() { return Path; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PathRef", function() { return PathRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Point", function() { return Point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointRef", function() { return PointRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Range", function() { return Range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeRef", function() { return RangeRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scrubber", function() { return Scrubber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Span", function() { return Span; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transforms", function() { return Transforms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEditor", function() { return createEditor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_is_plain_object__ = __webpack_require__("./node_modules/slate/node_modules/is-plain-object/dist/is-plain-object.mjs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immer__ = __webpack_require__("./node_modules/immer/dist/immer.esm.js");



function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var DIRTY_PATHS = new WeakMap();
var DIRTY_PATH_KEYS = new WeakMap();
var FLUSHING = new WeakMap();
var NORMALIZING = new WeakMap();
var PATH_REFS = new WeakMap();
var POINT_REFS = new WeakMap();
var RANGE_REFS = new WeakMap();

function ownKeys$9(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$9(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$9(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$9(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
/**
 * Create a new Slate `Editor` object.
 */

var createEditor = () => {
  var editor = {
    children: [],
    operations: [],
    selection: null,
    marks: null,
    isInline: () => false,
    isVoid: () => false,
    onChange: () => {},
    apply: op => {
      for (var ref of Editor.pathRefs(editor)) {
        PathRef.transform(ref, op);
      }

      for (var _ref of Editor.pointRefs(editor)) {
        PointRef.transform(_ref, op);
      }

      for (var _ref2 of Editor.rangeRefs(editor)) {
        RangeRef.transform(_ref2, op);
      }

      var oldDirtyPaths = DIRTY_PATHS.get(editor) || [];
      var oldDirtyPathKeys = DIRTY_PATH_KEYS.get(editor) || new Set();
      var dirtyPaths;
      var dirtyPathKeys;

      var add = path => {
        if (path) {
          var key = path.join(',');

          if (!dirtyPathKeys.has(key)) {
            dirtyPathKeys.add(key);
            dirtyPaths.push(path);
          }
        }
      };

      if (Path.operationCanTransformPath(op)) {
        dirtyPaths = [];
        dirtyPathKeys = new Set();

        for (var path of oldDirtyPaths) {
          var newPath = Path.transform(path, op);
          add(newPath);
        }
      } else {
        dirtyPaths = oldDirtyPaths;
        dirtyPathKeys = oldDirtyPathKeys;
      }

      var newDirtyPaths = editor.getDirtyPaths(op);

      for (var _path of newDirtyPaths) {
        add(_path);
      }

      DIRTY_PATHS.set(editor, dirtyPaths);
      DIRTY_PATH_KEYS.set(editor, dirtyPathKeys);
      Transforms.transform(editor, op);
      editor.operations.push(op);
      Editor.normalize(editor); // Clear any formats applied to the cursor if the selection changes.

      if (op.type === 'set_selection') {
        editor.marks = null;
      }

      if (!FLUSHING.get(editor)) {
        FLUSHING.set(editor, true);
        Promise.resolve().then(() => {
          FLUSHING.set(editor, false);
          editor.onChange();
          editor.operations = [];
        });
      }
    },
    addMark: (key, value) => {
      var {
        selection
      } = editor;

      if (selection) {
        if (Range.isExpanded(selection)) {
          Transforms.setNodes(editor, {
            [key]: value
          }, {
            match: Text.isText,
            split: true
          });
        } else {
          var marks = _objectSpread$9(_objectSpread$9({}, Editor.marks(editor) || {}), {}, {
            [key]: value
          });

          editor.marks = marks;

          if (!FLUSHING.get(editor)) {
            editor.onChange();
          }
        }
      }
    },
    deleteBackward: unit => {
      var {
        selection
      } = editor;

      if (selection && Range.isCollapsed(selection)) {
        Transforms.delete(editor, {
          unit,
          reverse: true
        });
      }
    },
    deleteForward: unit => {
      var {
        selection
      } = editor;

      if (selection && Range.isCollapsed(selection)) {
        Transforms.delete(editor, {
          unit
        });
      }
    },
    deleteFragment: direction => {
      var {
        selection
      } = editor;

      if (selection && Range.isExpanded(selection)) {
        Transforms.delete(editor, {
          reverse: direction === 'backward'
        });
      }
    },
    getFragment: () => {
      var {
        selection
      } = editor;

      if (selection) {
        return Node.fragment(editor, selection);
      }

      return [];
    },
    insertBreak: () => {
      Transforms.splitNodes(editor, {
        always: true
      });
    },
    insertSoftBreak: () => {
      Transforms.splitNodes(editor, {
        always: true
      });
    },
    insertFragment: fragment => {
      Transforms.insertFragment(editor, fragment);
    },
    insertNode: node => {
      Transforms.insertNodes(editor, node);
    },
    insertText: text => {
      var {
        selection,
        marks
      } = editor;

      if (selection) {
        if (marks) {
          var node = _objectSpread$9({
            text
          }, marks);

          Transforms.insertNodes(editor, node);
        } else {
          Transforms.insertText(editor, text);
        }

        editor.marks = null;
      }
    },
    normalizeNode: entry => {
      var [node, path] = entry; // There are no core normalizations for text nodes.

      if (Text.isText(node)) {
        return;
      } // Ensure that block and inline nodes have at least one text child.


      if (Element.isElement(node) && node.children.length === 0) {
        var child = {
          text: ''
        };
        Transforms.insertNodes(editor, child, {
          at: path.concat(0),
          voids: true
        });
        return;
      } // Determine whether the node should have block or inline children.


      var shouldHaveInlines = Editor.isEditor(node) ? false : Element.isElement(node) && (editor.isInline(node) || node.children.length === 0 || Text.isText(node.children[0]) || editor.isInline(node.children[0])); // Since we'll be applying operations while iterating, keep track of an
      // index that accounts for any added/removed nodes.

      var n = 0;

      for (var i = 0; i < node.children.length; i++, n++) {
        var currentNode = Node.get(editor, path);
        if (Text.isText(currentNode)) continue;
        var _child = node.children[i];
        var prev = currentNode.children[n - 1];
        var isLast = i === node.children.length - 1;
        var isInlineOrText = Text.isText(_child) || Element.isElement(_child) && editor.isInline(_child); // Only allow block nodes in the top-level children and parent blocks
        // that only contain block nodes. Similarly, only allow inline nodes in
        // other inline nodes, or parent blocks that only contain inlines and
        // text.

        if (isInlineOrText !== shouldHaveInlines) {
          Transforms.removeNodes(editor, {
            at: path.concat(n),
            voids: true
          });
          n--;
        } else if (Element.isElement(_child)) {
          // Ensure that inline nodes are surrounded by text nodes.
          if (editor.isInline(_child)) {
            if (prev == null || !Text.isText(prev)) {
              var newChild = {
                text: ''
              };
              Transforms.insertNodes(editor, newChild, {
                at: path.concat(n),
                voids: true
              });
              n++;
            } else if (isLast) {
              var _newChild = {
                text: ''
              };
              Transforms.insertNodes(editor, _newChild, {
                at: path.concat(n + 1),
                voids: true
              });
              n++;
            }
          }
        } else {
          // Merge adjacent text nodes that are empty or match.
          if (prev != null && Text.isText(prev)) {
            if (Text.equals(_child, prev, {
              loose: true
            })) {
              Transforms.mergeNodes(editor, {
                at: path.concat(n),
                voids: true
              });
              n--;
            } else if (prev.text === '') {
              Transforms.removeNodes(editor, {
                at: path.concat(n - 1),
                voids: true
              });
              n--;
            } else if (_child.text === '') {
              Transforms.removeNodes(editor, {
                at: path.concat(n),
                voids: true
              });
              n--;
            }
          }
        }
      }
    },
    removeMark: key => {
      var {
        selection
      } = editor;

      if (selection) {
        if (Range.isExpanded(selection)) {
          Transforms.unsetNodes(editor, key, {
            match: Text.isText,
            split: true
          });
        } else {
          var marks = _objectSpread$9({}, Editor.marks(editor) || {});

          delete marks[key];
          editor.marks = marks;

          if (!FLUSHING.get(editor)) {
            editor.onChange();
          }
        }
      }
    },

    /**
     * Get the "dirty" paths generated from an operation.
     */
    getDirtyPaths: op => {
      switch (op.type) {
        case 'insert_text':
        case 'remove_text':
        case 'set_node':
          {
            var {
              path
            } = op;
            return Path.levels(path);
          }

        case 'insert_node':
          {
            var {
              node,
              path: _path2
            } = op;
            var levels = Path.levels(_path2);
            var descendants = Text.isText(node) ? [] : Array.from(Node.nodes(node), _ref3 => {
              var [, p] = _ref3;
              return _path2.concat(p);
            });
            return [...levels, ...descendants];
          }

        case 'merge_node':
          {
            var {
              path: _path3
            } = op;
            var ancestors = Path.ancestors(_path3);
            var previousPath = Path.previous(_path3);
            return [...ancestors, previousPath];
          }

        case 'move_node':
          {
            var {
              path: _path4,
              newPath
            } = op;

            if (Path.equals(_path4, newPath)) {
              return [];
            }

            var oldAncestors = [];
            var newAncestors = [];

            for (var ancestor of Path.ancestors(_path4)) {
              var p = Path.transform(ancestor, op);
              oldAncestors.push(p);
            }

            for (var _ancestor of Path.ancestors(newPath)) {
              var _p = Path.transform(_ancestor, op);

              newAncestors.push(_p);
            }

            var newParent = newAncestors[newAncestors.length - 1];
            var newIndex = newPath[newPath.length - 1];
            var resultPath = newParent.concat(newIndex);
            return [...oldAncestors, ...newAncestors, resultPath];
          }

        case 'remove_node':
          {
            var {
              path: _path5
            } = op;

            var _ancestors = Path.ancestors(_path5);

            return [..._ancestors];
          }

        case 'split_node':
          {
            var {
              path: _path6
            } = op;

            var _levels = Path.levels(_path6);

            var nextPath = Path.next(_path6);
            return [..._levels, nextPath];
          }

        default:
          {
            return [];
          }
      }
    }
  };
  return editor;
};

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

// Character (grapheme cluster) boundaries are determined according to
// the default grapheme cluster boundary specification, extended grapheme clusters variant[1].
//
// References:
//
// [1] https://www.unicode.org/reports/tr29/#Default_Grapheme_Cluster_Table
// [2] https://www.unicode.org/Public/UCD/latest/ucd/auxiliary/GraphemeBreakProperty.txt
// [3] https://www.unicode.org/Public/UCD/latest/ucd/auxiliary/GraphemeBreakTest.html
// [4] https://www.unicode.org/Public/UCD/latest/ucd/auxiliary/GraphemeBreakTest.txt

/**
 * Get the distance to the end of the first character in a string of text.
 */
var getCharacterDistance = function getCharacterDistance(str) {
  var isRTL = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var isLTR = !isRTL;
  var codepoints = isRTL ? codepointsIteratorRTL(str) : str;
  var left = CodepointType.None;
  var right = CodepointType.None;
  var distance = 0; // Evaluation of these conditions are deferred.

  var gb11 = null; // Is GB11 applicable?

  var gb12Or13 = null; // Is GB12 or GB13 applicable?

  for (var char of codepoints) {
    var code = char.codePointAt(0);
    if (!code) break;
    var type = getCodepointType(char, code);
    [left, right] = isLTR ? [right, type] : [type, left];

    if (intersects(left, CodepointType.ZWJ) && intersects(right, CodepointType.ExtPict)) {
      if (isLTR) {
        gb11 = endsWithEmojiZWJ(str.substring(0, distance));
      } else {
        gb11 = endsWithEmojiZWJ(str.substring(0, str.length - distance));
      }

      if (!gb11) break;
    }

    if (intersects(left, CodepointType.RI) && intersects(right, CodepointType.RI)) {
      if (gb12Or13 !== null) {
        gb12Or13 = !gb12Or13;
      } else {
        if (isLTR) {
          gb12Or13 = true;
        } else {
          gb12Or13 = endsWithOddNumberOfRIs(str.substring(0, str.length - distance));
        }
      }

      if (!gb12Or13) break;
    }

    if (left !== CodepointType.None && right !== CodepointType.None && isBoundaryPair(left, right)) {
      break;
    }

    distance += char.length;
  }

  return distance || 1;
};
var SPACE = /\s/;
var PUNCTUATION = /[\u0021-\u0023\u0025-\u002A\u002C-\u002F\u003A\u003B\u003F\u0040\u005B-\u005D\u005F\u007B\u007D\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E3B\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/;
var CHAMELEON = /['\u2018\u2019]/;
/**
 * Get the distance to the end of the first word in a string of text.
 */

var getWordDistance = function getWordDistance(text) {
  var isRTL = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var dist = 0;
  var started = false;

  while (text.length > 0) {
    var charDist = getCharacterDistance(text, isRTL);
    var [char, remaining] = splitByCharacterDistance(text, charDist, isRTL);

    if (isWordCharacter(char, remaining, isRTL)) {
      started = true;
      dist += charDist;
    } else if (!started) {
      dist += charDist;
    } else {
      break;
    }

    text = remaining;
  }

  return dist;
};
/**
 * Split a string in two parts at a given distance starting from the end when
 * `isRTL` is set to `true`.
 */

var splitByCharacterDistance = (str, dist, isRTL) => {
  if (isRTL) {
    var at = str.length - dist;
    return [str.slice(at, str.length), str.slice(0, at)];
  }

  return [str.slice(0, dist), str.slice(dist)];
};
/**
 * Check if a character is a word character. The `remaining` argument is used
 * because sometimes you must read subsequent characters to truly determine it.
 */

var isWordCharacter = function isWordCharacter(char, remaining) {
  var isRTL = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (SPACE.test(char)) {
    return false;
  } // Chameleons count as word characters as long as they're in a word, so
  // recurse to see if the next one is a word character or not.


  if (CHAMELEON.test(char)) {
    var charDist = getCharacterDistance(remaining, isRTL);
    var [nextChar, nextRemaining] = splitByCharacterDistance(remaining, charDist, isRTL);

    if (isWordCharacter(nextChar, nextRemaining, isRTL)) {
      return true;
    }
  }

  if (PUNCTUATION.test(char)) {
    return false;
  }

  return true;
};
/**
 * Iterate on codepoints from right to left.
 */


var codepointsIteratorRTL = function* codepointsIteratorRTL(str) {
  var end = str.length - 1;

  for (var i = 0; i < str.length; i++) {
    var char1 = str.charAt(end - i);

    if (isLowSurrogate(char1.charCodeAt(0))) {
      var char2 = str.charAt(end - i - 1);

      if (isHighSurrogate(char2.charCodeAt(0))) {
        yield char2 + char1;
        i++;
        continue;
      }
    }

    yield char1;
  }
};
/**
 * Is `charCode` a high surrogate.
 *
 * https://en.wikipedia.org/wiki/Universal_Character_Set_characters#Surrogates
 */

var isHighSurrogate = charCode => {
  return charCode >= 0xd800 && charCode <= 0xdbff;
};
/**
 * Is `charCode` a low surrogate.
 *
 * https://en.wikipedia.org/wiki/Universal_Character_Set_characters#Surrogates
 */


var isLowSurrogate = charCode => {
  return charCode >= 0xdc00 && charCode <= 0xdfff;
};

var CodepointType;

(function (CodepointType) {
  CodepointType[CodepointType["None"] = 0] = "None";
  CodepointType[CodepointType["Extend"] = 1] = "Extend";
  CodepointType[CodepointType["ZWJ"] = 2] = "ZWJ";
  CodepointType[CodepointType["RI"] = 4] = "RI";
  CodepointType[CodepointType["Prepend"] = 8] = "Prepend";
  CodepointType[CodepointType["SpacingMark"] = 16] = "SpacingMark";
  CodepointType[CodepointType["L"] = 32] = "L";
  CodepointType[CodepointType["V"] = 64] = "V";
  CodepointType[CodepointType["T"] = 128] = "T";
  CodepointType[CodepointType["LV"] = 256] = "LV";
  CodepointType[CodepointType["LVT"] = 512] = "LVT";
  CodepointType[CodepointType["ExtPict"] = 1024] = "ExtPict";
  CodepointType[CodepointType["Any"] = 2048] = "Any";
})(CodepointType || (CodepointType = {}));

var reExtend = /^(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1AC0\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])$/;
var rePrepend = /^(?:[\u0600-\u0605\u06DD\u070F\u0890\u0891\u08E2\u0D4E]|\uD804[\uDCBD\uDCCD\uDDC2\uDDC3]|\uD806[\uDD3F\uDD41\uDE3A\uDE84-\uDE89]|\uD807\uDD46)$/;
var reSpacingMark = /^(?:[\u0903\u093B\u093E-\u0940\u0949-\u094C\u094E\u094F\u0982\u0983\u09BF\u09C0\u09C7\u09C8\u09CB\u09CC\u0A03\u0A3E-\u0A40\u0A83\u0ABE-\u0AC0\u0AC9\u0ACB\u0ACC\u0B02\u0B03\u0B40\u0B47\u0B48\u0B4B\u0B4C\u0BBF\u0BC1\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0C01-\u0C03\u0C41-\u0C44\u0C82\u0C83\u0CBE\u0CC0\u0CC1\u0CC3\u0CC4\u0CC7\u0CC8\u0CCA\u0CCB\u0D02\u0D03\u0D3F\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D82\u0D83\u0DD0\u0DD1\u0DD8-\u0DDE\u0DF2\u0DF3\u0E33\u0EB3\u0F3E\u0F3F\u0F7F\u1031\u103B\u103C\u1056\u1057\u1084\u1715\u1734\u17B6\u17BE-\u17C5\u17C7\u17C8\u1923-\u1926\u1929-\u192B\u1930\u1931\u1933-\u1938\u1A19\u1A1A\u1A55\u1A57\u1A6D-\u1A72\u1B04\u1B3B\u1B3D-\u1B41\u1B43\u1B44\u1B82\u1BA1\u1BA6\u1BA7\u1BAA\u1BE7\u1BEA-\u1BEC\u1BEE\u1BF2\u1BF3\u1C24-\u1C2B\u1C34\u1C35\u1CE1\u1CF7\uA823\uA824\uA827\uA880\uA881\uA8B4-\uA8C3\uA952\uA953\uA983\uA9B4\uA9B5\uA9BA\uA9BB\uA9BE-\uA9C0\uAA2F\uAA30\uAA33\uAA34\uAA4D\uAAEB\uAAEE\uAAEF\uAAF5\uABE3\uABE4\uABE6\uABE7\uABE9\uABEA\uABEC]|\uD804[\uDC00\uDC02\uDC82\uDCB0-\uDCB2\uDCB7\uDCB8\uDD2C\uDD45\uDD46\uDD82\uDDB3-\uDDB5\uDDBF\uDDC0\uDDCE\uDE2C-\uDE2E\uDE32\uDE33\uDE35\uDEE0-\uDEE2\uDF02\uDF03\uDF3F\uDF41-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF62\uDF63]|\uD805[\uDC35-\uDC37\uDC40\uDC41\uDC45\uDCB1\uDCB2\uDCB9\uDCBB\uDCBC\uDCBE\uDCC1\uDDB0\uDDB1\uDDB8-\uDDBB\uDDBE\uDE30-\uDE32\uDE3B\uDE3C\uDE3E\uDEAC\uDEAE\uDEAF\uDEB6\uDF26]|\uD806[\uDC2C-\uDC2E\uDC38\uDD31-\uDD35\uDD37\uDD38\uDD3D\uDD40\uDD42\uDDD1-\uDDD3\uDDDC-\uDDDF\uDDE4\uDE39\uDE57\uDE58\uDE97]|\uD807[\uDC2F\uDC3E\uDCA9\uDCB1\uDCB4\uDD8A-\uDD8E\uDD93\uDD94\uDD96\uDEF5\uDEF6]|\uD81B[\uDF51-\uDF87\uDFF0\uDFF1]|\uD834[\uDD66\uDD6D])$/;
var reL = /^[\u1100-\u115F\uA960-\uA97C]$/;
var reV = /^[\u1160-\u11A7\uD7B0-\uD7C6]$/;
var reT = /^[\u11A8-\u11FF\uD7CB-\uD7FB]$/;
var reLV = /^[\uAC00\uAC1C\uAC38\uAC54\uAC70\uAC8C\uACA8\uACC4\uACE0\uACFC\uAD18\uAD34\uAD50\uAD6C\uAD88\uADA4\uADC0\uADDC\uADF8\uAE14\uAE30\uAE4C\uAE68\uAE84\uAEA0\uAEBC\uAED8\uAEF4\uAF10\uAF2C\uAF48\uAF64\uAF80\uAF9C\uAFB8\uAFD4\uAFF0\uB00C\uB028\uB044\uB060\uB07C\uB098\uB0B4\uB0D0\uB0EC\uB108\uB124\uB140\uB15C\uB178\uB194\uB1B0\uB1CC\uB1E8\uB204\uB220\uB23C\uB258\uB274\uB290\uB2AC\uB2C8\uB2E4\uB300\uB31C\uB338\uB354\uB370\uB38C\uB3A8\uB3C4\uB3E0\uB3FC\uB418\uB434\uB450\uB46C\uB488\uB4A4\uB4C0\uB4DC\uB4F8\uB514\uB530\uB54C\uB568\uB584\uB5A0\uB5BC\uB5D8\uB5F4\uB610\uB62C\uB648\uB664\uB680\uB69C\uB6B8\uB6D4\uB6F0\uB70C\uB728\uB744\uB760\uB77C\uB798\uB7B4\uB7D0\uB7EC\uB808\uB824\uB840\uB85C\uB878\uB894\uB8B0\uB8CC\uB8E8\uB904\uB920\uB93C\uB958\uB974\uB990\uB9AC\uB9C8\uB9E4\uBA00\uBA1C\uBA38\uBA54\uBA70\uBA8C\uBAA8\uBAC4\uBAE0\uBAFC\uBB18\uBB34\uBB50\uBB6C\uBB88\uBBA4\uBBC0\uBBDC\uBBF8\uBC14\uBC30\uBC4C\uBC68\uBC84\uBCA0\uBCBC\uBCD8\uBCF4\uBD10\uBD2C\uBD48\uBD64\uBD80\uBD9C\uBDB8\uBDD4\uBDF0\uBE0C\uBE28\uBE44\uBE60\uBE7C\uBE98\uBEB4\uBED0\uBEEC\uBF08\uBF24\uBF40\uBF5C\uBF78\uBF94\uBFB0\uBFCC\uBFE8\uC004\uC020\uC03C\uC058\uC074\uC090\uC0AC\uC0C8\uC0E4\uC100\uC11C\uC138\uC154\uC170\uC18C\uC1A8\uC1C4\uC1E0\uC1FC\uC218\uC234\uC250\uC26C\uC288\uC2A4\uC2C0\uC2DC\uC2F8\uC314\uC330\uC34C\uC368\uC384\uC3A0\uC3BC\uC3D8\uC3F4\uC410\uC42C\uC448\uC464\uC480\uC49C\uC4B8\uC4D4\uC4F0\uC50C\uC528\uC544\uC560\uC57C\uC598\uC5B4\uC5D0\uC5EC\uC608\uC624\uC640\uC65C\uC678\uC694\uC6B0\uC6CC\uC6E8\uC704\uC720\uC73C\uC758\uC774\uC790\uC7AC\uC7C8\uC7E4\uC800\uC81C\uC838\uC854\uC870\uC88C\uC8A8\uC8C4\uC8E0\uC8FC\uC918\uC934\uC950\uC96C\uC988\uC9A4\uC9C0\uC9DC\uC9F8\uCA14\uCA30\uCA4C\uCA68\uCA84\uCAA0\uCABC\uCAD8\uCAF4\uCB10\uCB2C\uCB48\uCB64\uCB80\uCB9C\uCBB8\uCBD4\uCBF0\uCC0C\uCC28\uCC44\uCC60\uCC7C\uCC98\uCCB4\uCCD0\uCCEC\uCD08\uCD24\uCD40\uCD5C\uCD78\uCD94\uCDB0\uCDCC\uCDE8\uCE04\uCE20\uCE3C\uCE58\uCE74\uCE90\uCEAC\uCEC8\uCEE4\uCF00\uCF1C\uCF38\uCF54\uCF70\uCF8C\uCFA8\uCFC4\uCFE0\uCFFC\uD018\uD034\uD050\uD06C\uD088\uD0A4\uD0C0\uD0DC\uD0F8\uD114\uD130\uD14C\uD168\uD184\uD1A0\uD1BC\uD1D8\uD1F4\uD210\uD22C\uD248\uD264\uD280\uD29C\uD2B8\uD2D4\uD2F0\uD30C\uD328\uD344\uD360\uD37C\uD398\uD3B4\uD3D0\uD3EC\uD408\uD424\uD440\uD45C\uD478\uD494\uD4B0\uD4CC\uD4E8\uD504\uD520\uD53C\uD558\uD574\uD590\uD5AC\uD5C8\uD5E4\uD600\uD61C\uD638\uD654\uD670\uD68C\uD6A8\uD6C4\uD6E0\uD6FC\uD718\uD734\uD750\uD76C\uD788]$/;
var reLVT = /^[\uAC01-\uAC1B\uAC1D-\uAC37\uAC39-\uAC53\uAC55-\uAC6F\uAC71-\uAC8B\uAC8D-\uACA7\uACA9-\uACC3\uACC5-\uACDF\uACE1-\uACFB\uACFD-\uAD17\uAD19-\uAD33\uAD35-\uAD4F\uAD51-\uAD6B\uAD6D-\uAD87\uAD89-\uADA3\uADA5-\uADBF\uADC1-\uADDB\uADDD-\uADF7\uADF9-\uAE13\uAE15-\uAE2F\uAE31-\uAE4B\uAE4D-\uAE67\uAE69-\uAE83\uAE85-\uAE9F\uAEA1-\uAEBB\uAEBD-\uAED7\uAED9-\uAEF3\uAEF5-\uAF0F\uAF11-\uAF2B\uAF2D-\uAF47\uAF49-\uAF63\uAF65-\uAF7F\uAF81-\uAF9B\uAF9D-\uAFB7\uAFB9-\uAFD3\uAFD5-\uAFEF\uAFF1-\uB00B\uB00D-\uB027\uB029-\uB043\uB045-\uB05F\uB061-\uB07B\uB07D-\uB097\uB099-\uB0B3\uB0B5-\uB0CF\uB0D1-\uB0EB\uB0ED-\uB107\uB109-\uB123\uB125-\uB13F\uB141-\uB15B\uB15D-\uB177\uB179-\uB193\uB195-\uB1AF\uB1B1-\uB1CB\uB1CD-\uB1E7\uB1E9-\uB203\uB205-\uB21F\uB221-\uB23B\uB23D-\uB257\uB259-\uB273\uB275-\uB28F\uB291-\uB2AB\uB2AD-\uB2C7\uB2C9-\uB2E3\uB2E5-\uB2FF\uB301-\uB31B\uB31D-\uB337\uB339-\uB353\uB355-\uB36F\uB371-\uB38B\uB38D-\uB3A7\uB3A9-\uB3C3\uB3C5-\uB3DF\uB3E1-\uB3FB\uB3FD-\uB417\uB419-\uB433\uB435-\uB44F\uB451-\uB46B\uB46D-\uB487\uB489-\uB4A3\uB4A5-\uB4BF\uB4C1-\uB4DB\uB4DD-\uB4F7\uB4F9-\uB513\uB515-\uB52F\uB531-\uB54B\uB54D-\uB567\uB569-\uB583\uB585-\uB59F\uB5A1-\uB5BB\uB5BD-\uB5D7\uB5D9-\uB5F3\uB5F5-\uB60F\uB611-\uB62B\uB62D-\uB647\uB649-\uB663\uB665-\uB67F\uB681-\uB69B\uB69D-\uB6B7\uB6B9-\uB6D3\uB6D5-\uB6EF\uB6F1-\uB70B\uB70D-\uB727\uB729-\uB743\uB745-\uB75F\uB761-\uB77B\uB77D-\uB797\uB799-\uB7B3\uB7B5-\uB7CF\uB7D1-\uB7EB\uB7ED-\uB807\uB809-\uB823\uB825-\uB83F\uB841-\uB85B\uB85D-\uB877\uB879-\uB893\uB895-\uB8AF\uB8B1-\uB8CB\uB8CD-\uB8E7\uB8E9-\uB903\uB905-\uB91F\uB921-\uB93B\uB93D-\uB957\uB959-\uB973\uB975-\uB98F\uB991-\uB9AB\uB9AD-\uB9C7\uB9C9-\uB9E3\uB9E5-\uB9FF\uBA01-\uBA1B\uBA1D-\uBA37\uBA39-\uBA53\uBA55-\uBA6F\uBA71-\uBA8B\uBA8D-\uBAA7\uBAA9-\uBAC3\uBAC5-\uBADF\uBAE1-\uBAFB\uBAFD-\uBB17\uBB19-\uBB33\uBB35-\uBB4F\uBB51-\uBB6B\uBB6D-\uBB87\uBB89-\uBBA3\uBBA5-\uBBBF\uBBC1-\uBBDB\uBBDD-\uBBF7\uBBF9-\uBC13\uBC15-\uBC2F\uBC31-\uBC4B\uBC4D-\uBC67\uBC69-\uBC83\uBC85-\uBC9F\uBCA1-\uBCBB\uBCBD-\uBCD7\uBCD9-\uBCF3\uBCF5-\uBD0F\uBD11-\uBD2B\uBD2D-\uBD47\uBD49-\uBD63\uBD65-\uBD7F\uBD81-\uBD9B\uBD9D-\uBDB7\uBDB9-\uBDD3\uBDD5-\uBDEF\uBDF1-\uBE0B\uBE0D-\uBE27\uBE29-\uBE43\uBE45-\uBE5F\uBE61-\uBE7B\uBE7D-\uBE97\uBE99-\uBEB3\uBEB5-\uBECF\uBED1-\uBEEB\uBEED-\uBF07\uBF09-\uBF23\uBF25-\uBF3F\uBF41-\uBF5B\uBF5D-\uBF77\uBF79-\uBF93\uBF95-\uBFAF\uBFB1-\uBFCB\uBFCD-\uBFE7\uBFE9-\uC003\uC005-\uC01F\uC021-\uC03B\uC03D-\uC057\uC059-\uC073\uC075-\uC08F\uC091-\uC0AB\uC0AD-\uC0C7\uC0C9-\uC0E3\uC0E5-\uC0FF\uC101-\uC11B\uC11D-\uC137\uC139-\uC153\uC155-\uC16F\uC171-\uC18B\uC18D-\uC1A7\uC1A9-\uC1C3\uC1C5-\uC1DF\uC1E1-\uC1FB\uC1FD-\uC217\uC219-\uC233\uC235-\uC24F\uC251-\uC26B\uC26D-\uC287\uC289-\uC2A3\uC2A5-\uC2BF\uC2C1-\uC2DB\uC2DD-\uC2F7\uC2F9-\uC313\uC315-\uC32F\uC331-\uC34B\uC34D-\uC367\uC369-\uC383\uC385-\uC39F\uC3A1-\uC3BB\uC3BD-\uC3D7\uC3D9-\uC3F3\uC3F5-\uC40F\uC411-\uC42B\uC42D-\uC447\uC449-\uC463\uC465-\uC47F\uC481-\uC49B\uC49D-\uC4B7\uC4B9-\uC4D3\uC4D5-\uC4EF\uC4F1-\uC50B\uC50D-\uC527\uC529-\uC543\uC545-\uC55F\uC561-\uC57B\uC57D-\uC597\uC599-\uC5B3\uC5B5-\uC5CF\uC5D1-\uC5EB\uC5ED-\uC607\uC609-\uC623\uC625-\uC63F\uC641-\uC65B\uC65D-\uC677\uC679-\uC693\uC695-\uC6AF\uC6B1-\uC6CB\uC6CD-\uC6E7\uC6E9-\uC703\uC705-\uC71F\uC721-\uC73B\uC73D-\uC757\uC759-\uC773\uC775-\uC78F\uC791-\uC7AB\uC7AD-\uC7C7\uC7C9-\uC7E3\uC7E5-\uC7FF\uC801-\uC81B\uC81D-\uC837\uC839-\uC853\uC855-\uC86F\uC871-\uC88B\uC88D-\uC8A7\uC8A9-\uC8C3\uC8C5-\uC8DF\uC8E1-\uC8FB\uC8FD-\uC917\uC919-\uC933\uC935-\uC94F\uC951-\uC96B\uC96D-\uC987\uC989-\uC9A3\uC9A5-\uC9BF\uC9C1-\uC9DB\uC9DD-\uC9F7\uC9F9-\uCA13\uCA15-\uCA2F\uCA31-\uCA4B\uCA4D-\uCA67\uCA69-\uCA83\uCA85-\uCA9F\uCAA1-\uCABB\uCABD-\uCAD7\uCAD9-\uCAF3\uCAF5-\uCB0F\uCB11-\uCB2B\uCB2D-\uCB47\uCB49-\uCB63\uCB65-\uCB7F\uCB81-\uCB9B\uCB9D-\uCBB7\uCBB9-\uCBD3\uCBD5-\uCBEF\uCBF1-\uCC0B\uCC0D-\uCC27\uCC29-\uCC43\uCC45-\uCC5F\uCC61-\uCC7B\uCC7D-\uCC97\uCC99-\uCCB3\uCCB5-\uCCCF\uCCD1-\uCCEB\uCCED-\uCD07\uCD09-\uCD23\uCD25-\uCD3F\uCD41-\uCD5B\uCD5D-\uCD77\uCD79-\uCD93\uCD95-\uCDAF\uCDB1-\uCDCB\uCDCD-\uCDE7\uCDE9-\uCE03\uCE05-\uCE1F\uCE21-\uCE3B\uCE3D-\uCE57\uCE59-\uCE73\uCE75-\uCE8F\uCE91-\uCEAB\uCEAD-\uCEC7\uCEC9-\uCEE3\uCEE5-\uCEFF\uCF01-\uCF1B\uCF1D-\uCF37\uCF39-\uCF53\uCF55-\uCF6F\uCF71-\uCF8B\uCF8D-\uCFA7\uCFA9-\uCFC3\uCFC5-\uCFDF\uCFE1-\uCFFB\uCFFD-\uD017\uD019-\uD033\uD035-\uD04F\uD051-\uD06B\uD06D-\uD087\uD089-\uD0A3\uD0A5-\uD0BF\uD0C1-\uD0DB\uD0DD-\uD0F7\uD0F9-\uD113\uD115-\uD12F\uD131-\uD14B\uD14D-\uD167\uD169-\uD183\uD185-\uD19F\uD1A1-\uD1BB\uD1BD-\uD1D7\uD1D9-\uD1F3\uD1F5-\uD20F\uD211-\uD22B\uD22D-\uD247\uD249-\uD263\uD265-\uD27F\uD281-\uD29B\uD29D-\uD2B7\uD2B9-\uD2D3\uD2D5-\uD2EF\uD2F1-\uD30B\uD30D-\uD327\uD329-\uD343\uD345-\uD35F\uD361-\uD37B\uD37D-\uD397\uD399-\uD3B3\uD3B5-\uD3CF\uD3D1-\uD3EB\uD3ED-\uD407\uD409-\uD423\uD425-\uD43F\uD441-\uD45B\uD45D-\uD477\uD479-\uD493\uD495-\uD4AF\uD4B1-\uD4CB\uD4CD-\uD4E7\uD4E9-\uD503\uD505-\uD51F\uD521-\uD53B\uD53D-\uD557\uD559-\uD573\uD575-\uD58F\uD591-\uD5AB\uD5AD-\uD5C7\uD5C9-\uD5E3\uD5E5-\uD5FF\uD601-\uD61B\uD61D-\uD637\uD639-\uD653\uD655-\uD66F\uD671-\uD68B\uD68D-\uD6A7\uD6A9-\uD6C3\uD6C5-\uD6DF\uD6E1-\uD6FB\uD6FD-\uD717\uD719-\uD733\uD735-\uD74F\uD751-\uD76B\uD76D-\uD787\uD789-\uD7A3]$/;
var reExtPict = /^(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])$/;

var getCodepointType = (char, code) => {
  var type = CodepointType.Any;

  if (char.search(reExtend) !== -1) {
    type |= CodepointType.Extend;
  }

  if (code === 0x200d) {
    type |= CodepointType.ZWJ;
  }

  if (code >= 0x1f1e6 && code <= 0x1f1ff) {
    type |= CodepointType.RI;
  }

  if (char.search(rePrepend) !== -1) {
    type |= CodepointType.Prepend;
  }

  if (char.search(reSpacingMark) !== -1) {
    type |= CodepointType.SpacingMark;
  }

  if (char.search(reL) !== -1) {
    type |= CodepointType.L;
  }

  if (char.search(reV) !== -1) {
    type |= CodepointType.V;
  }

  if (char.search(reT) !== -1) {
    type |= CodepointType.T;
  }

  if (char.search(reLV) !== -1) {
    type |= CodepointType.LV;
  }

  if (char.search(reLVT) !== -1) {
    type |= CodepointType.LVT;
  }

  if (char.search(reExtPict) !== -1) {
    type |= CodepointType.ExtPict;
  }

  return type;
};

function intersects(x, y) {
  return (x & y) !== 0;
}

var NonBoundaryPairs = [// GB6
[CodepointType.L, CodepointType.L | CodepointType.V | CodepointType.LV | CodepointType.LVT], // GB7
[CodepointType.LV | CodepointType.V, CodepointType.V | CodepointType.T], // GB8
[CodepointType.LVT | CodepointType.T, CodepointType.T], // GB9
[CodepointType.Any, CodepointType.Extend | CodepointType.ZWJ], // GB9a
[CodepointType.Any, CodepointType.SpacingMark], // GB9b
[CodepointType.Prepend, CodepointType.Any], // GB11
[CodepointType.ZWJ, CodepointType.ExtPict], // GB12 and GB13
[CodepointType.RI, CodepointType.RI]];

function isBoundaryPair(left, right) {
  return NonBoundaryPairs.findIndex(r => intersects(left, r[0]) && intersects(right, r[1])) === -1;
}

var endingEmojiZWJ = /(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1AC0\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])*\u200D$/;

var endsWithEmojiZWJ = str => {
  return str.search(endingEmojiZWJ) !== -1;
};

var endingRIs = /(?:\uD83C[\uDDE6-\uDDFF])+$/g;

var endsWithOddNumberOfRIs = str => {
  var match = str.match(endingRIs);

  if (match === null) {
    return false;
  } else {
    // A RI is represented by a surrogate pair.
    var numRIs = match[0].length / 2;
    return numRIs % 2 === 1;
  }
};

/**
 * Shared the function with isElementType utility
 */

var isElement = value => {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_is_plain_object__["a" /* isPlainObject */])(value) && Node.isNodeList(value.children) && !Editor.isEditor(value);
}; // eslint-disable-next-line no-redeclare


var Element = {
  /**
   * Check if a value implements the 'Ancestor' interface.
   */
  isAncestor(value) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_is_plain_object__["a" /* isPlainObject */])(value) && Node.isNodeList(value.children);
  },

  /**
   * Check if a value implements the `Element` interface.
   */
  isElement,

  /**
   * Check if a value is an array of `Element` objects.
   */
  isElementList(value) {
    return Array.isArray(value) && value.every(val => Element.isElement(val));
  },

  /**
   * Check if a set of props is a partial of Element.
   */
  isElementProps(props) {
    return props.children !== undefined;
  },

  /**
   * Check if a value implements the `Element` interface and has elementKey with selected value.
   * Default it check to `type` key value
   */
  isElementType: function isElementType(value, elementVal) {
    var elementKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'type';
    return isElement(value) && value[elementKey] === elementVal;
  },

  /**
   * Check if an element matches set of properties.
   *
   * Note: this checks custom properties, and it does not ensure that any
   * children are equivalent.
   */
  matches(element, props) {
    for (var key in props) {
      if (key === 'children') {
        continue;
      }

      if (element[key] !== props[key]) {
        return false;
      }
    }

    return true;
  }

};

var _excluded$4 = ["text"],
    _excluded2$3 = ["text"];

function ownKeys$8(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$8(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$8(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$8(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var IS_EDITOR_CACHE = new WeakMap(); // eslint-disable-next-line no-redeclare

var Editor = {
  /**
   * Get the ancestor above a location in the document.
   */
  above(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var {
      voids = false,
      mode = 'lowest',
      at = editor.selection,
      match
    } = options;

    if (!at) {
      return;
    }

    var path = Editor.path(editor, at);
    var reverse = mode === 'lowest';

    for (var [n, p] of Editor.levels(editor, {
      at: path,
      voids,
      match,
      reverse
    })) {
      if (!Text.isText(n) && !Path.equals(path, p)) {
        return [n, p];
      }
    }
  },

  /**
   * Add a custom property to the leaf text nodes in the current selection.
   *
   * If the selection is currently collapsed, the marks will be added to the
   * `editor.marks` property instead, and applied when text is inserted next.
   */
  addMark(editor, key, value) {
    editor.addMark(key, value);
  },

  /**
   * Get the point after a location.
   */
  after(editor, at) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var anchor = Editor.point(editor, at, {
      edge: 'end'
    });
    var focus = Editor.end(editor, []);
    var range = {
      anchor,
      focus
    };
    var {
      distance = 1
    } = options;
    var d = 0;
    var target;

    for (var p of Editor.positions(editor, _objectSpread$8(_objectSpread$8({}, options), {}, {
      at: range
    }))) {
      if (d > distance) {
        break;
      }

      if (d !== 0) {
        target = p;
      }

      d++;
    }

    return target;
  },

  /**
   * Get the point before a location.
   */
  before(editor, at) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var anchor = Editor.start(editor, []);
    var focus = Editor.point(editor, at, {
      edge: 'start'
    });
    var range = {
      anchor,
      focus
    };
    var {
      distance = 1
    } = options;
    var d = 0;
    var target;

    for (var p of Editor.positions(editor, _objectSpread$8(_objectSpread$8({}, options), {}, {
      at: range,
      reverse: true
    }))) {
      if (d > distance) {
        break;
      }

      if (d !== 0) {
        target = p;
      }

      d++;
    }

    return target;
  },

  /**
   * Delete content in the editor backward from the current selection.
   */
  deleteBackward(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var {
      unit = 'character'
    } = options;
    editor.deleteBackward(unit);
  },

  /**
   * Delete content in the editor forward from the current selection.
   */
  deleteForward(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var {
      unit = 'character'
    } = options;
    editor.deleteForward(unit);
  },

  /**
   * Delete the content in the current selection.
   */
  deleteFragment(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var {
      direction = 'forward'
    } = options;
    editor.deleteFragment(direction);
  },

  /**
   * Get the start and end points of a location.
   */
  edges(editor, at) {
    return [Editor.start(editor, at), Editor.end(editor, at)];
  },

  /**
   * Get the end point of a location.
   */
  end(editor, at) {
    return Editor.point(editor, at, {
      edge: 'end'
    });
  },

  /**
   * Get the first node at a location.
   */
  first(editor, at) {
    var path = Editor.path(editor, at, {
      edge: 'start'
    });
    return Editor.node(editor, path);
  },

  /**
   * Get the fragment at a location.
   */
  fragment(editor, at) {
    var range = Editor.range(editor, at);
    var fragment = Node.fragment(editor, range);
    return fragment;
  },

  /**
   * Check if a node has block children.
   */
  hasBlocks(editor, element) {
    return element.children.some(n => Editor.isBlock(editor, n));
  },

  /**
   * Check if a node has inline and text children.
   */
  hasInlines(editor, element) {
    return element.children.some(n => Text.isText(n) || Editor.isInline(editor, n));
  },

  /**
   * Check if a node has text children.
   */
  hasTexts(editor, element) {
    return element.children.every(n => Text.isText(n));
  },

  /**
   * Insert a block break at the current selection.
   *
   * If the selection is currently expanded, it will be deleted first.
   */
  insertBreak(editor) {
    editor.insertBreak();
  },

  /**
   * Insert a soft break at the current selection.
   *
   * If the selection is currently expanded, it will be deleted first.
   */
  insertSoftBreak(editor) {
    editor.insertSoftBreak();
  },

  /**
   * Insert a fragment at the current selection.
   *
   * If the selection is currently expanded, it will be deleted first.
   */
  insertFragment(editor, fragment) {
    editor.insertFragment(fragment);
  },

  /**
   * Insert a node at the current selection.
   *
   * If the selection is currently expanded, it will be deleted first.
   */
  insertNode(editor, node) {
    editor.insertNode(node);
  },

  /**
   * Insert text at the current selection.
   *
   * If the selection is currently expanded, it will be deleted first.
   */
  insertText(editor, text) {
    editor.insertText(text);
  },

  /**
   * Check if a value is a block `Element` object.
   */
  isBlock(editor, value) {
    return Element.isElement(value) && !editor.isInline(value);
  },

  /**
   * Check if a value is an `Editor` object.
   */
  isEditor(value) {
    var cachedIsEditor = IS_EDITOR_CACHE.get(value);

    if (cachedIsEditor !== undefined) {
      return cachedIsEditor;
    }

    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_is_plain_object__["a" /* isPlainObject */])(value)) {
      return false;
    }

    var isEditor = typeof value.addMark === 'function' && typeof value.apply === 'function' && typeof value.deleteBackward === 'function' && typeof value.deleteForward === 'function' && typeof value.deleteFragment === 'function' && typeof value.insertBreak === 'function' && typeof value.insertSoftBreak === 'function' && typeof value.insertFragment === 'function' && typeof value.insertNode === 'function' && typeof value.insertText === 'function' && typeof value.isInline === 'function' && typeof value.isVoid === 'function' && typeof value.normalizeNode === 'function' && typeof value.onChange === 'function' && typeof value.removeMark === 'function' && typeof value.getDirtyPaths === 'function' && (value.marks === null || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_is_plain_object__["a" /* isPlainObject */])(value.marks)) && (value.selection === null || Range.isRange(value.selection)) && Node.isNodeList(value.children) && Operation.isOperationList(value.operations);
    IS_EDITOR_CACHE.set(value, isEditor);
    return isEditor;
  },

  /**
   * Check if a point is the end point of a location.
   */
  isEnd(editor, point, at) {
    var end = Editor.end(editor, at);
    return Point.equals(point, end);
  },

  /**
   * Check if a point is an edge of a location.
   */
  isEdge(editor, point, at) {
    return Editor.isStart(editor, point, at) || Editor.isEnd(editor, point, at);
  },

  /**
   * Check if an element is empty, accounting for void nodes.
   */
  isEmpty(editor, element) {
    var {
      children
    } = element;
    var [first] = children;
    return children.length === 0 || children.length === 1 && Text.isText(first) && first.text === '' && !editor.isVoid(element);
  },

  /**
   * Check if a value is an inline `Element` object.
   */
  isInline(editor, value) {
    return Element.isElement(value) && editor.isInline(value);
  },

  /**
   * Check if the editor is currently normalizing after each operation.
   */
  isNormalizing(editor) {
    var isNormalizing = NORMALIZING.get(editor);
    return isNormalizing === undefined ? true : isNormalizing;
  },

  /**
   * Check if a point is the start point of a location.
   */
  isStart(editor, point, at) {
    // PERF: If the offset isn't `0` we know it's not the start.
    if (point.offset !== 0) {
      return false;
    }

    var start = Editor.start(editor, at);
    return Point.equals(point, start);
  },

  /**
   * Check if a value is a void `Element` object.
   */
  isVoid(editor, value) {
    return Element.isElement(value) && editor.isVoid(value);
  },

  /**
   * Get the last node at a location.
   */
  last(editor, at) {
    var path = Editor.path(editor, at, {
      edge: 'end'
    });
    return Editor.node(editor, path);
  },

  /**
   * Get the leaf text node at a location.
   */
  leaf(editor, at) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var path = Editor.path(editor, at, options);
    var node = Node.leaf(editor, path);
    return [node, path];
  },

  /**
   * Iterate through all of the levels at a location.
   */
  *levels(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var {
      at = editor.selection,
      reverse = false,
      voids = false
    } = options;
    var {
      match
    } = options;

    if (match == null) {
      match = () => true;
    }

    if (!at) {
      return;
    }

    var levels = [];
    var path = Editor.path(editor, at);

    for (var [n, p] of Node.levels(editor, path)) {
      if (!match(n, p)) {
        continue;
      }

      levels.push([n, p]);

      if (!voids && Editor.isVoid(editor, n)) {
        break;
      }
    }

    if (reverse) {
      levels.reverse();
    }

    yield* levels;
  },

  /**
   * Get the marks that would be added to text at the current selection.
   */
  marks(editor) {
    var {
      marks,
      selection
    } = editor;

    if (!selection) {
      return null;
    }

    if (marks) {
      return marks;
    }

    if (Range.isExpanded(selection)) {
      var [match] = Editor.nodes(editor, {
        match: Text.isText
      });

      if (match) {
        var [_node] = match;

        var _rest = _objectWithoutProperties(_node, _excluded$4);

        return _rest;
      } else {
        return {};
      }
    }

    var {
      anchor
    } = selection;
    var {
      path
    } = anchor;
    var [node] = Editor.leaf(editor, path);

    if (anchor.offset === 0) {
      var prev = Editor.previous(editor, {
        at: path,
        match: Text.isText
      });
      var block = Editor.above(editor, {
        match: n => Editor.isBlock(editor, n)
      });

      if (prev && block) {
        var [prevNode, prevPath] = prev;
        var [, blockPath] = block;

        if (Path.isAncestor(blockPath, prevPath)) {
          node = prevNode;
        }
      }
    }

    var rest = _objectWithoutProperties(node, _excluded2$3);

    return rest;
  },

  /**
   * Get the matching node in the branch of the document after a location.
   */
  next(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var {
      mode = 'lowest',
      voids = false
    } = options;
    var {
      match,
      at = editor.selection
    } = options;

    if (!at) {
      return;
    }

    var pointAfterLocation = Editor.after(editor, at, {
      voids
    });
    if (!pointAfterLocation) return;
    var [, to] = Editor.last(editor, []);
    var span = [pointAfterLocation.path, to];

    if (Path.isPath(at) && at.length === 0) {
      throw new Error("Cannot get the next node from the root node!");
    }

    if (match == null) {
      if (Path.isPath(at)) {
        var [parent] = Editor.parent(editor, at);

        match = n => parent.children.includes(n);
      } else {
        match = () => true;
      }
    }

    var [next] = Editor.nodes(editor, {
      at: span,
      match,
      mode,
      voids
    });
    return next;
  },

  /**
   * Get the node at a location.
   */
  node(editor, at) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var path = Editor.path(editor, at, options);
    var node = Node.get(editor, path);
    return [node, path];
  },

  /**
   * Iterate through all of the nodes in the Editor.
   */
  *nodes(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var {
      at = editor.selection,
      mode = 'all',
      universal = false,
      reverse = false,
      voids = false
    } = options;
    var {
      match
    } = options;

    if (!match) {
      match = () => true;
    }

    if (!at) {
      return;
    }

    var from;
    var to;

    if (Span.isSpan(at)) {
      from = at[0];
      to = at[1];
    } else {
      var first = Editor.path(editor, at, {
        edge: 'start'
      });
      var last = Editor.path(editor, at, {
        edge: 'end'
      });
      from = reverse ? last : first;
      to = reverse ? first : last;
    }

    var nodeEntries = Node.nodes(editor, {
      reverse,
      from,
      to,
      pass: _ref => {
        var [n] = _ref;
        return voids ? false : Editor.isVoid(editor, n);
      }
    });
    var matches = [];
    var hit;

    for (var [node, path] of nodeEntries) {
      var isLower = hit && Path.compare(path, hit[1]) === 0; // In highest mode any node lower than the last hit is not a match.

      if (mode === 'highest' && isLower) {
        continue;
      }

      if (!match(node, path)) {
        // If we've arrived at a leaf text node that is not lower than the last
        // hit, then we've found a branch that doesn't include a match, which
        // means the match is not universal.
        if (universal && !isLower && Text.isText(node)) {
          return;
        } else {
          continue;
        }
      } // If there's a match and it's lower than the last, update the hit.


      if (mode === 'lowest' && isLower) {
        hit = [node, path];
        continue;
      } // In lowest mode we emit the last hit, once it's guaranteed lowest.


      var emit = mode === 'lowest' ? hit : [node, path];

      if (emit) {
        if (universal) {
          matches.push(emit);
        } else {
          yield emit;
        }
      }

      hit = [node, path];
    } // Since lowest is always emitting one behind, catch up at the end.


    if (mode === 'lowest' && hit) {
      if (universal) {
        matches.push(hit);
      } else {
        yield hit;
      }
    } // Universal defers to ensure that the match occurs in every branch, so we
    // yield all of the matches after iterating.


    if (universal) {
      yield* matches;
    }
  },

  /**
   * Normalize any dirty objects in the editor.
   */
  normalize(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var {
      force = false
    } = options;

    var getDirtyPaths = editor => {
      return DIRTY_PATHS.get(editor) || [];
    };

    var getDirtyPathKeys = editor => {
      return DIRTY_PATH_KEYS.get(editor) || new Set();
    };

    var popDirtyPath = editor => {
      var path = getDirtyPaths(editor).pop();
      var key = path.join(',');
      getDirtyPathKeys(editor).delete(key);
      return path;
    };

    if (!Editor.isNormalizing(editor)) {
      return;
    }

    if (force) {
      var allPaths = Array.from(Node.nodes(editor), _ref2 => {
        var [, p] = _ref2;
        return p;
      });
      var allPathKeys = new Set(allPaths.map(p => p.join(',')));
      DIRTY_PATHS.set(editor, allPaths);
      DIRTY_PATH_KEYS.set(editor, allPathKeys);
    }

    if (getDirtyPaths(editor).length === 0) {
      return;
    }

    Editor.withoutNormalizing(editor, () => {
      /*
        Fix dirty elements with no children.
        editor.normalizeNode() does fix this, but some normalization fixes also require it to work.
        Running an initial pass avoids the catch-22 race condition.
      */
      for (var dirtyPath of getDirtyPaths(editor)) {
        if (Node.has(editor, dirtyPath)) {
          var entry = Editor.node(editor, dirtyPath);
          var [node, _] = entry;
          /*
            The default normalizer inserts an empty text node in this scenario, but it can be customised.
            So there is some risk here.
                       As long as the normalizer only inserts child nodes for this case it is safe to do in any order;
            by definition adding children to an empty node can't cause other paths to change.
          */

          if (Element.isElement(node) && node.children.length === 0) {
            editor.normalizeNode(entry);
          }
        }
      }

      var max = getDirtyPaths(editor).length * 42; // HACK: better way?

      var m = 0;

      while (getDirtyPaths(editor).length !== 0) {
        if (m > max) {
          throw new Error("\n            Could not completely normalize the editor after ".concat(max, " iterations! This is usually due to incorrect normalization logic that leaves a node in an invalid state.\n          "));
        }

        var _dirtyPath = popDirtyPath(editor); // If the node doesn't exist in the tree, it does not need to be normalized.


        if (Node.has(editor, _dirtyPath)) {
          var _entry = Editor.node(editor, _dirtyPath);

          editor.normalizeNode(_entry);
        }

        m++;
      }
    });
  },

  /**
   * Get the parent node of a location.
   */
  parent(editor, at) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var path = Editor.path(editor, at, options);
    var parentPath = Path.parent(path);
    var entry = Editor.node(editor, parentPath);
    return entry;
  },

  /**
   * Get the path of a location.
   */
  path(editor, at) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var {
      depth,
      edge
    } = options;

    if (Path.isPath(at)) {
      if (edge === 'start') {
        var [, firstPath] = Node.first(editor, at);
        at = firstPath;
      } else if (edge === 'end') {
        var [, lastPath] = Node.last(editor, at);
        at = lastPath;
      }
    }

    if (Range.isRange(at)) {
      if (edge === 'start') {
        at = Range.start(at);
      } else if (edge === 'end') {
        at = Range.end(at);
      } else {
        at = Path.common(at.anchor.path, at.focus.path);
      }
    }

    if (Point.isPoint(at)) {
      at = at.path;
    }

    if (depth != null) {
      at = at.slice(0, depth);
    }

    return at;
  },

  hasPath(editor, path) {
    return Node.has(editor, path);
  },

  /**
   * Create a mutable ref for a `Path` object, which will stay in sync as new
   * operations are applied to the editor.
   */
  pathRef(editor, path) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var {
      affinity = 'forward'
    } = options;
    var ref = {
      current: path,
      affinity,

      unref() {
        var {
          current
        } = ref;
        var pathRefs = Editor.pathRefs(editor);
        pathRefs.delete(ref);
        ref.current = null;
        return current;
      }

    };
    var refs = Editor.pathRefs(editor);
    refs.add(ref);
    return ref;
  },

  /**
   * Get the set of currently tracked path refs of the editor.
   */
  pathRefs(editor) {
    var refs = PATH_REFS.get(editor);

    if (!refs) {
      refs = new Set();
      PATH_REFS.set(editor, refs);
    }

    return refs;
  },

  /**
   * Get the start or end point of a location.
   */
  point(editor, at) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var {
      edge = 'start'
    } = options;

    if (Path.isPath(at)) {
      var path;

      if (edge === 'end') {
        var [, lastPath] = Node.last(editor, at);
        path = lastPath;
      } else {
        var [, firstPath] = Node.first(editor, at);
        path = firstPath;
      }

      var node = Node.get(editor, path);

      if (!Text.isText(node)) {
        throw new Error("Cannot get the ".concat(edge, " point in the node at path [").concat(at, "] because it has no ").concat(edge, " text node."));
      }

      return {
        path,
        offset: edge === 'end' ? node.text.length : 0
      };
    }

    if (Range.isRange(at)) {
      var [start, end] = Range.edges(at);
      return edge === 'start' ? start : end;
    }

    return at;
  },

  /**
   * Create a mutable ref for a `Point` object, which will stay in sync as new
   * operations are applied to the editor.
   */
  pointRef(editor, point) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var {
      affinity = 'forward'
    } = options;
    var ref = {
      current: point,
      affinity,

      unref() {
        var {
          current
        } = ref;
        var pointRefs = Editor.pointRefs(editor);
        pointRefs.delete(ref);
        ref.current = null;
        return current;
      }

    };
    var refs = Editor.pointRefs(editor);
    refs.add(ref);
    return ref;
  },

  /**
   * Get the set of currently tracked point refs of the editor.
   */
  pointRefs(editor) {
    var refs = POINT_REFS.get(editor);

    if (!refs) {
      refs = new Set();
      POINT_REFS.set(editor, refs);
    }

    return refs;
  },

  /**
   * Return all the positions in `at` range where a `Point` can be placed.
   *
   * By default, moves forward by individual offsets at a time, but
   * the `unit` option can be used to to move by character, word, line, or block.
   *
   * The `reverse` option can be used to change iteration direction.
   *
   * Note: By default void nodes are treated as a single point and iteration
   * will not happen inside their content unless you pass in true for the
   * `voids` option, then iteration will occur.
   */
  *positions(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var {
      at = editor.selection,
      unit = 'offset',
      reverse = false,
      voids = false
    } = options;

    if (!at) {
      return;
    }
    /**
     * Algorithm notes:
     *
     * Each step `distance` is dynamic depending on the underlying text
     * and the `unit` specified.  Each step, e.g., a line or word, may
     * span multiple text nodes, so we iterate through the text both on
     * two levels in step-sync:
     *
     * `leafText` stores the text on a text leaf level, and is advanced
     * through using the counters `leafTextOffset` and `leafTextRemaining`.
     *
     * `blockText` stores the text on a block level, and is shortened
     * by `distance` every time it is advanced.
     *
     * We only maintain a window of one blockText and one leafText because
     * a block node always appears before all of its leaf nodes.
     */


    var range = Editor.range(editor, at);
    var [start, end] = Range.edges(range);
    var first = reverse ? end : start;
    var isNewBlock = false;
    var blockText = '';
    var distance = 0; // Distance for leafText to catch up to blockText.

    var leafTextRemaining = 0;
    var leafTextOffset = 0; // Iterate through all nodes in range, grabbing entire textual content
    // of block nodes in blockText, and text nodes in leafText.
    // Exploits the fact that nodes are sequenced in such a way that we first
    // encounter the block node, then all of its text nodes, so when iterating
    // through the blockText and leafText we just need to remember a window of
    // one block node and leaf node, respectively.

    for (var [node, path] of Editor.nodes(editor, {
      at,
      reverse,
      voids
    })) {
      /*
       * ELEMENT NODE - Yield position(s) for voids, collect blockText for blocks
       */
      if (Element.isElement(node)) {
        // Void nodes are a special case, so by default we will always
        // yield their first point. If the `voids` option is set to true,
        // then we will iterate over their content.
        if (!voids && editor.isVoid(node)) {
          yield Editor.start(editor, path);
          continue;
        } // Inline element nodes are ignored as they don't themselves
        // contribute to `blockText` or `leafText` - their parent and
        // children do.


        if (editor.isInline(node)) continue; // Block element node - set `blockText` to its text content.

        if (Editor.hasInlines(editor, node)) {
          // We always exhaust block nodes before encountering a new one:
          //   console.assert(blockText === '',
          //     `blockText='${blockText}' - `+
          //     `not exhausted before new block node`, path)
          // Ensure range considered is capped to `range`, in the
          // start/end edge cases where block extends beyond range.
          // Equivalent to this, but presumably more performant:
          //   blockRange = Editor.range(editor, ...Editor.edges(editor, path))
          //   blockRange = Range.intersection(range, blockRange) // intersect
          //   blockText = Editor.string(editor, blockRange, { voids })
          var e = Path.isAncestor(path, end.path) ? end : Editor.end(editor, path);
          var s = Path.isAncestor(path, start.path) ? start : Editor.start(editor, path);
          blockText = Editor.string(editor, {
            anchor: s,
            focus: e
          }, {
            voids
          });
          isNewBlock = true;
        }
      }
      /*
       * TEXT LEAF NODE - Iterate through text content, yielding
       * positions every `distance` offset according to `unit`.
       */


      if (Text.isText(node)) {
        var isFirst = Path.equals(path, first.path); // Proof that we always exhaust text nodes before encountering a new one:
        //   console.assert(leafTextRemaining <= 0,
        //     `leafTextRemaining=${leafTextRemaining} - `+
        //     `not exhausted before new leaf text node`, path)
        // Reset `leafText` counters for new text node.

        if (isFirst) {
          leafTextRemaining = reverse ? first.offset : node.text.length - first.offset;
          leafTextOffset = first.offset; // Works for reverse too.
        } else {
          leafTextRemaining = node.text.length;
          leafTextOffset = reverse ? leafTextRemaining : 0;
        } // Yield position at the start of node (potentially).


        if (isFirst || isNewBlock || unit === 'offset') {
          yield {
            path,
            offset: leafTextOffset
          };
          isNewBlock = false;
        } // Yield positions every (dynamically calculated) `distance` offset.


        while (true) {
          // If `leafText` has caught up with `blockText` (distance=0),
          // and if blockText is exhausted, break to get another block node,
          // otherwise advance blockText forward by the new `distance`.
          if (distance === 0) {
            if (blockText === '') break;
            distance = calcDistance(blockText, unit, reverse); // Split the string at the previously found distance and use the
            // remaining string for the next iteration.

            blockText = splitByCharacterDistance(blockText, distance, reverse)[1];
          } // Advance `leafText` by the current `distance`.


          leafTextOffset = reverse ? leafTextOffset - distance : leafTextOffset + distance;
          leafTextRemaining = leafTextRemaining - distance; // If `leafText` is exhausted, break to get a new leaf node
          // and set distance to the overflow amount, so we'll (maybe)
          // catch up to blockText in the next leaf text node.

          if (leafTextRemaining < 0) {
            distance = -leafTextRemaining;
            break;
          } // Successfully walked `distance` offsets through `leafText`
          // to catch up with `blockText`, so we can reset `distance`
          // and yield this position in this node.


          distance = 0;
          yield {
            path,
            offset: leafTextOffset
          };
        }
      }
    } // Proof that upon completion, we've exahusted both leaf and block text:
    //   console.assert(leafTextRemaining <= 0, "leafText wasn't exhausted")
    //   console.assert(blockText === '', "blockText wasn't exhausted")
    // Helper:
    // Return the distance in offsets for a step of size `unit` on given string.


    function calcDistance(text, unit, reverse) {
      if (unit === 'character') {
        return getCharacterDistance(text, reverse);
      } else if (unit === 'word') {
        return getWordDistance(text, reverse);
      } else if (unit === 'line' || unit === 'block') {
        return text.length;
      }

      return 1;
    }
  },

  /**
   * Get the matching node in the branch of the document before a location.
   */
  previous(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var {
      mode = 'lowest',
      voids = false
    } = options;
    var {
      match,
      at = editor.selection
    } = options;

    if (!at) {
      return;
    }

    var pointBeforeLocation = Editor.before(editor, at, {
      voids
    });

    if (!pointBeforeLocation) {
      return;
    }

    var [, to] = Editor.first(editor, []); // The search location is from the start of the document to the path of
    // the point before the location passed in

    var span = [pointBeforeLocation.path, to];

    if (Path.isPath(at) && at.length === 0) {
      throw new Error("Cannot get the previous node from the root node!");
    }

    if (match == null) {
      if (Path.isPath(at)) {
        var [parent] = Editor.parent(editor, at);

        match = n => parent.children.includes(n);
      } else {
        match = () => true;
      }
    }

    var [previous] = Editor.nodes(editor, {
      reverse: true,
      at: span,
      match,
      mode,
      voids
    });
    return previous;
  },

  /**
   * Get a range of a location.
   */
  range(editor, at, to) {
    if (Range.isRange(at) && !to) {
      return at;
    }

    var start = Editor.start(editor, at);
    var end = Editor.end(editor, to || at);
    return {
      anchor: start,
      focus: end
    };
  },

  /**
   * Create a mutable ref for a `Range` object, which will stay in sync as new
   * operations are applied to the editor.
   */
  rangeRef(editor, range) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var {
      affinity = 'forward'
    } = options;
    var ref = {
      current: range,
      affinity,

      unref() {
        var {
          current
        } = ref;
        var rangeRefs = Editor.rangeRefs(editor);
        rangeRefs.delete(ref);
        ref.current = null;
        return current;
      }

    };
    var refs = Editor.rangeRefs(editor);
    refs.add(ref);
    return ref;
  },

  /**
   * Get the set of currently tracked range refs of the editor.
   */
  rangeRefs(editor) {
    var refs = RANGE_REFS.get(editor);

    if (!refs) {
      refs = new Set();
      RANGE_REFS.set(editor, refs);
    }

    return refs;
  },

  /**
   * Remove a custom property from all of the leaf text nodes in the current
   * selection.
   *
   * If the selection is currently collapsed, the removal will be stored on
   * `editor.marks` and applied to the text inserted next.
   */
  removeMark(editor, key) {
    editor.removeMark(key);
  },

  /**
   * Manually set if the editor should currently be normalizing.
   *
   * Note: Using this incorrectly can leave the editor in an invalid state.
   *
   */
  setNormalizing(editor, isNormalizing) {
    NORMALIZING.set(editor, isNormalizing);
  },

  /**
   * Get the start point of a location.
   */
  start(editor, at) {
    return Editor.point(editor, at, {
      edge: 'start'
    });
  },

  /**
   * Get the text string content of a location.
   *
   * Note: by default the text of void nodes is considered to be an empty
   * string, regardless of content, unless you pass in true for the voids option
   */
  string(editor, at) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var {
      voids = false
    } = options;
    var range = Editor.range(editor, at);
    var [start, end] = Range.edges(range);
    var text = '';

    for (var [node, path] of Editor.nodes(editor, {
      at: range,
      match: Text.isText,
      voids
    })) {
      var t = node.text;

      if (Path.equals(path, end.path)) {
        t = t.slice(0, end.offset);
      }

      if (Path.equals(path, start.path)) {
        t = t.slice(start.offset);
      }

      text += t;
    }

    return text;
  },

  /**
   * Convert a range into a non-hanging one.
   */
  unhangRange(editor, range) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var {
      voids = false
    } = options;
    var [start, end] = Range.edges(range); // PERF: exit early if we can guarantee that the range isn't hanging.

    if (start.offset !== 0 || end.offset !== 0 || Range.isCollapsed(range)) {
      return range;
    }

    var endBlock = Editor.above(editor, {
      at: end,
      match: n => Editor.isBlock(editor, n)
    });
    var blockPath = endBlock ? endBlock[1] : [];
    var first = Editor.start(editor, start);
    var before = {
      anchor: first,
      focus: end
    };
    var skip = true;

    for (var [node, path] of Editor.nodes(editor, {
      at: before,
      match: Text.isText,
      reverse: true,
      voids
    })) {
      if (skip) {
        skip = false;
        continue;
      }

      if (node.text !== '' || Path.isBefore(path, blockPath)) {
        end = {
          path,
          offset: node.text.length
        };
        break;
      }
    }

    return {
      anchor: start,
      focus: end
    };
  },

  /**
   * Match a void node in the current branch of the editor.
   */
  void(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return Editor.above(editor, _objectSpread$8(_objectSpread$8({}, options), {}, {
      match: n => Editor.isVoid(editor, n)
    }));
  },

  /**
   * Call a function, deferring normalization until after it completes.
   */
  withoutNormalizing(editor, fn) {
    var value = Editor.isNormalizing(editor);
    Editor.setNormalizing(editor, false);

    try {
      fn();
    } finally {
      Editor.setNormalizing(editor, value);
    }

    Editor.normalize(editor);
  }

};

var Location = {
  /**
   * Check if a value implements the `Location` interface.
   */
  isLocation(value) {
    return Path.isPath(value) || Point.isPoint(value) || Range.isRange(value);
  }

}; // eslint-disable-next-line no-redeclare

var Span = {
  /**
   * Check if a value implements the `Span` interface.
   */
  isSpan(value) {
    return Array.isArray(value) && value.length === 2 && value.every(Path.isPath);
  }

};

var _excluded$3 = ["children"],
    _excluded2$2 = ["text"];
var IS_NODE_LIST_CACHE = new WeakMap(); // eslint-disable-next-line no-redeclare

var Node = {
  /**
   * Get the node at a specific path, asserting that it's an ancestor node.
   */
  ancestor(root, path) {
    var node = Node.get(root, path);

    if (Text.isText(node)) {
      throw new Error("Cannot get the ancestor node at path [".concat(path, "] because it refers to a text node instead: ").concat(Scrubber.stringify(node)));
    }

    return node;
  },

  /**
   * Return a generator of all the ancestor nodes above a specific path.
   *
   * By default the order is top-down, from highest to lowest ancestor in
   * the tree, but you can pass the `reverse: true` option to go bottom-up.
   */
  *ancestors(root, path) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    for (var p of Path.ancestors(path, options)) {
      var n = Node.ancestor(root, p);
      var entry = [n, p];
      yield entry;
    }
  },

  /**
   * Get the child of a node at a specific index.
   */
  child(root, index) {
    if (Text.isText(root)) {
      throw new Error("Cannot get the child of a text node: ".concat(Scrubber.stringify(root)));
    }

    var c = root.children[index];

    if (c == null) {
      throw new Error("Cannot get child at index `".concat(index, "` in node: ").concat(Scrubber.stringify(root)));
    }

    return c;
  },

  /**
   * Iterate over the children of a node at a specific path.
   */
  *children(root, path) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var {
      reverse = false
    } = options;
    var ancestor = Node.ancestor(root, path);
    var {
      children
    } = ancestor;
    var index = reverse ? children.length - 1 : 0;

    while (reverse ? index >= 0 : index < children.length) {
      var child = Node.child(ancestor, index);
      var childPath = path.concat(index);
      yield [child, childPath];
      index = reverse ? index - 1 : index + 1;
    }
  },

  /**
   * Get an entry for the common ancesetor node of two paths.
   */
  common(root, path, another) {
    var p = Path.common(path, another);
    var n = Node.get(root, p);
    return [n, p];
  },

  /**
   * Get the node at a specific path, asserting that it's a descendant node.
   */
  descendant(root, path) {
    var node = Node.get(root, path);

    if (Editor.isEditor(node)) {
      throw new Error("Cannot get the descendant node at path [".concat(path, "] because it refers to the root editor node instead: ").concat(Scrubber.stringify(node)));
    }

    return node;
  },

  /**
   * Return a generator of all the descendant node entries inside a root node.
   */
  *descendants(root) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    for (var [node, path] of Node.nodes(root, options)) {
      if (path.length !== 0) {
        // NOTE: we have to coerce here because checking the path's length does
        // guarantee that `node` is not a `Editor`, but TypeScript doesn't know.
        yield [node, path];
      }
    }
  },

  /**
   * Return a generator of all the element nodes inside a root node. Each iteration
   * will return an `ElementEntry` tuple consisting of `[Element, Path]`. If the
   * root node is an element it will be included in the iteration as well.
   */
  *elements(root) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    for (var [node, path] of Node.nodes(root, options)) {
      if (Element.isElement(node)) {
        yield [node, path];
      }
    }
  },

  /**
   * Extract props from a Node.
   */
  extractProps(node) {
    if (Element.isAncestor(node)) {
      var properties = _objectWithoutProperties(node, _excluded$3);

      return properties;
    } else {
      var properties = _objectWithoutProperties(node, _excluded2$2);

      return properties;
    }
  },

  /**
   * Get the first node entry in a root node from a path.
   */
  first(root, path) {
    var p = path.slice();
    var n = Node.get(root, p);

    while (n) {
      if (Text.isText(n) || n.children.length === 0) {
        break;
      } else {
        n = n.children[0];
        p.push(0);
      }
    }

    return [n, p];
  },

  /**
   * Get the sliced fragment represented by a range inside a root node.
   */
  fragment(root, range) {
    if (Text.isText(root)) {
      throw new Error("Cannot get a fragment starting from a root text node: ".concat(Scrubber.stringify(root)));
    }

    var newRoot = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_immer__["a" /* produce */])({
      children: root.children
    }, r => {
      var [start, end] = Range.edges(range);
      var nodeEntries = Node.nodes(r, {
        reverse: true,
        pass: _ref => {
          var [, path] = _ref;
          return !Range.includes(range, path);
        }
      });

      for (var [, path] of nodeEntries) {
        if (!Range.includes(range, path)) {
          var parent = Node.parent(r, path);
          var index = path[path.length - 1];
          parent.children.splice(index, 1);
        }

        if (Path.equals(path, end.path)) {
          var leaf = Node.leaf(r, path);
          leaf.text = leaf.text.slice(0, end.offset);
        }

        if (Path.equals(path, start.path)) {
          var _leaf = Node.leaf(r, path);

          _leaf.text = _leaf.text.slice(start.offset);
        }
      }

      if (Editor.isEditor(r)) {
        r.selection = null;
      }
    });
    return newRoot.children;
  },

  /**
   * Get the descendant node referred to by a specific path. If the path is an
   * empty array, it refers to the root node itself.
   */
  get(root, path) {
    var node = root;

    for (var i = 0; i < path.length; i++) {
      var p = path[i];

      if (Text.isText(node) || !node.children[p]) {
        throw new Error("Cannot find a descendant at path [".concat(path, "] in node: ").concat(Scrubber.stringify(root)));
      }

      node = node.children[p];
    }

    return node;
  },

  /**
   * Check if a descendant node exists at a specific path.
   */
  has(root, path) {
    var node = root;

    for (var i = 0; i < path.length; i++) {
      var p = path[i];

      if (Text.isText(node) || !node.children[p]) {
        return false;
      }

      node = node.children[p];
    }

    return true;
  },

  /**
   * Check if a value implements the `Node` interface.
   */
  isNode(value) {
    return Text.isText(value) || Element.isElement(value) || Editor.isEditor(value);
  },

  /**
   * Check if a value is a list of `Node` objects.
   */
  isNodeList(value) {
    if (!Array.isArray(value)) {
      return false;
    }

    var cachedResult = IS_NODE_LIST_CACHE.get(value);

    if (cachedResult !== undefined) {
      return cachedResult;
    }

    var isNodeList = value.every(val => Node.isNode(val));
    IS_NODE_LIST_CACHE.set(value, isNodeList);
    return isNodeList;
  },

  /**
   * Get the last node entry in a root node from a path.
   */
  last(root, path) {
    var p = path.slice();
    var n = Node.get(root, p);

    while (n) {
      if (Text.isText(n) || n.children.length === 0) {
        break;
      } else {
        var i = n.children.length - 1;
        n = n.children[i];
        p.push(i);
      }
    }

    return [n, p];
  },

  /**
   * Get the node at a specific path, ensuring it's a leaf text node.
   */
  leaf(root, path) {
    var node = Node.get(root, path);

    if (!Text.isText(node)) {
      throw new Error("Cannot get the leaf node at path [".concat(path, "] because it refers to a non-leaf node: ").concat(Scrubber.stringify(node)));
    }

    return node;
  },

  /**
   * Return a generator of the in a branch of the tree, from a specific path.
   *
   * By default the order is top-down, from highest to lowest node in the tree,
   * but you can pass the `reverse: true` option to go bottom-up.
   */
  *levels(root, path) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    for (var p of Path.levels(path, options)) {
      var n = Node.get(root, p);
      yield [n, p];
    }
  },

  /**
   * Check if a node matches a set of props.
   */
  matches(node, props) {
    return Element.isElement(node) && Element.isElementProps(props) && Element.matches(node, props) || Text.isText(node) && Text.isTextProps(props) && Text.matches(node, props);
  },

  /**
   * Return a generator of all the node entries of a root node. Each entry is
   * returned as a `[Node, Path]` tuple, with the path referring to the node's
   * position inside the root node.
   */
  *nodes(root) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var {
      pass,
      reverse = false
    } = options;
    var {
      from = [],
      to
    } = options;
    var visited = new Set();
    var p = [];
    var n = root;

    while (true) {
      if (to && (reverse ? Path.isBefore(p, to) : Path.isAfter(p, to))) {
        break;
      }

      if (!visited.has(n)) {
        yield [n, p];
      } // If we're allowed to go downward and we haven't descended yet, do.


      if (!visited.has(n) && !Text.isText(n) && n.children.length !== 0 && (pass == null || pass([n, p]) === false)) {
        visited.add(n);
        var nextIndex = reverse ? n.children.length - 1 : 0;

        if (Path.isAncestor(p, from)) {
          nextIndex = from[p.length];
        }

        p = p.concat(nextIndex);
        n = Node.get(root, p);
        continue;
      } // If we're at the root and we can't go down, we're done.


      if (p.length === 0) {
        break;
      } // If we're going forward...


      if (!reverse) {
        var newPath = Path.next(p);

        if (Node.has(root, newPath)) {
          p = newPath;
          n = Node.get(root, p);
          continue;
        }
      } // If we're going backward...


      if (reverse && p[p.length - 1] !== 0) {
        var _newPath = Path.previous(p);

        p = _newPath;
        n = Node.get(root, p);
        continue;
      } // Otherwise we're going upward...


      p = Path.parent(p);
      n = Node.get(root, p);
      visited.add(n);
    }
  },

  /**
   * Get the parent of a node at a specific path.
   */
  parent(root, path) {
    var parentPath = Path.parent(path);
    var p = Node.get(root, parentPath);

    if (Text.isText(p)) {
      throw new Error("Cannot get the parent of path [".concat(path, "] because it does not exist in the root."));
    }

    return p;
  },

  /**
   * Get the concatenated text string of a node's content.
   *
   * Note that this will not include spaces or line breaks between block nodes.
   * It is not a user-facing string, but a string for performing offset-related
   * computations for a node.
   */
  string(node) {
    if (Text.isText(node)) {
      return node.text;
    } else {
      return node.children.map(Node.string).join('');
    }
  },

  /**
   * Return a generator of all leaf text nodes in a root node.
   */
  *texts(root) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    for (var [node, path] of Node.nodes(root, options)) {
      if (Text.isText(node)) {
        yield [node, path];
      }
    }
  }

};

function ownKeys$7(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$7(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$7(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$7(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Operation = {
  /**
   * Check of a value is a `NodeOperation` object.
   */
  isNodeOperation(value) {
    return Operation.isOperation(value) && value.type.endsWith('_node');
  },

  /**
   * Check of a value is an `Operation` object.
   */
  isOperation(value) {
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_is_plain_object__["a" /* isPlainObject */])(value)) {
      return false;
    }

    switch (value.type) {
      case 'insert_node':
        return Path.isPath(value.path) && Node.isNode(value.node);

      case 'insert_text':
        return typeof value.offset === 'number' && typeof value.text === 'string' && Path.isPath(value.path);

      case 'merge_node':
        return typeof value.position === 'number' && Path.isPath(value.path) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_is_plain_object__["a" /* isPlainObject */])(value.properties);

      case 'move_node':
        return Path.isPath(value.path) && Path.isPath(value.newPath);

      case 'remove_node':
        return Path.isPath(value.path) && Node.isNode(value.node);

      case 'remove_text':
        return typeof value.offset === 'number' && typeof value.text === 'string' && Path.isPath(value.path);

      case 'set_node':
        return Path.isPath(value.path) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_is_plain_object__["a" /* isPlainObject */])(value.properties) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_is_plain_object__["a" /* isPlainObject */])(value.newProperties);

      case 'set_selection':
        return value.properties === null && Range.isRange(value.newProperties) || value.newProperties === null && Range.isRange(value.properties) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_is_plain_object__["a" /* isPlainObject */])(value.properties) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_is_plain_object__["a" /* isPlainObject */])(value.newProperties);

      case 'split_node':
        return Path.isPath(value.path) && typeof value.position === 'number' && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_is_plain_object__["a" /* isPlainObject */])(value.properties);

      default:
        return false;
    }
  },

  /**
   * Check if a value is a list of `Operation` objects.
   */
  isOperationList(value) {
    return Array.isArray(value) && value.every(val => Operation.isOperation(val));
  },

  /**
   * Check of a value is a `SelectionOperation` object.
   */
  isSelectionOperation(value) {
    return Operation.isOperation(value) && value.type.endsWith('_selection');
  },

  /**
   * Check of a value is a `TextOperation` object.
   */
  isTextOperation(value) {
    return Operation.isOperation(value) && value.type.endsWith('_text');
  },

  /**
   * Invert an operation, returning a new operation that will exactly undo the
   * original when applied.
   */
  inverse(op) {
    switch (op.type) {
      case 'insert_node':
        {
          return _objectSpread$7(_objectSpread$7({}, op), {}, {
            type: 'remove_node'
          });
        }

      case 'insert_text':
        {
          return _objectSpread$7(_objectSpread$7({}, op), {}, {
            type: 'remove_text'
          });
        }

      case 'merge_node':
        {
          return _objectSpread$7(_objectSpread$7({}, op), {}, {
            type: 'split_node',
            path: Path.previous(op.path)
          });
        }

      case 'move_node':
        {
          var {
            newPath,
            path
          } = op; // PERF: in this case the move operation is a no-op anyways.

          if (Path.equals(newPath, path)) {
            return op;
          } // If the move happens completely within a single parent the path and
          // newPath are stable with respect to each other.


          if (Path.isSibling(path, newPath)) {
            return _objectSpread$7(_objectSpread$7({}, op), {}, {
              path: newPath,
              newPath: path
            });
          } // If the move does not happen within a single parent it is possible
          // for the move to impact the true path to the location where the node
          // was removed from and where it was inserted. We have to adjust for this
          // and find the original path. We can accomplish this (only in non-sibling)
          // moves by looking at the impact of the move operation on the node
          // after the original move path.


          var inversePath = Path.transform(path, op);
          var inverseNewPath = Path.transform(Path.next(path), op);
          return _objectSpread$7(_objectSpread$7({}, op), {}, {
            path: inversePath,
            newPath: inverseNewPath
          });
        }

      case 'remove_node':
        {
          return _objectSpread$7(_objectSpread$7({}, op), {}, {
            type: 'insert_node'
          });
        }

      case 'remove_text':
        {
          return _objectSpread$7(_objectSpread$7({}, op), {}, {
            type: 'insert_text'
          });
        }

      case 'set_node':
        {
          var {
            properties,
            newProperties
          } = op;
          return _objectSpread$7(_objectSpread$7({}, op), {}, {
            properties: newProperties,
            newProperties: properties
          });
        }

      case 'set_selection':
        {
          var {
            properties: _properties,
            newProperties: _newProperties
          } = op;

          if (_properties == null) {
            return _objectSpread$7(_objectSpread$7({}, op), {}, {
              properties: _newProperties,
              newProperties: null
            });
          } else if (_newProperties == null) {
            return _objectSpread$7(_objectSpread$7({}, op), {}, {
              properties: null,
              newProperties: _properties
            });
          } else {
            return _objectSpread$7(_objectSpread$7({}, op), {}, {
              properties: _newProperties,
              newProperties: _properties
            });
          }
        }

      case 'split_node':
        {
          return _objectSpread$7(_objectSpread$7({}, op), {}, {
            type: 'merge_node',
            path: Path.next(op.path)
          });
        }
    }
  }

};

// eslint-disable-next-line no-redeclare
var Path = {
  /**
   * Get a list of ancestor paths for a given path.
   *
   * The paths are sorted from shallowest to deepest ancestor. However, if the
   * `reverse: true` option is passed, they are reversed.
   */
  ancestors(path) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var {
      reverse = false
    } = options;
    var paths = Path.levels(path, options);

    if (reverse) {
      paths = paths.slice(1);
    } else {
      paths = paths.slice(0, -1);
    }

    return paths;
  },

  /**
   * Get the common ancestor path of two paths.
   */
  common(path, another) {
    var common = [];

    for (var i = 0; i < path.length && i < another.length; i++) {
      var av = path[i];
      var bv = another[i];

      if (av !== bv) {
        break;
      }

      common.push(av);
    }

    return common;
  },

  /**
   * Compare a path to another, returning an integer indicating whether the path
   * was before, at, or after the other.
   *
   * Note: Two paths of unequal length can still receive a `0` result if one is
   * directly above or below the other. If you want exact matching, use
   * [[Path.equals]] instead.
   */
  compare(path, another) {
    var min = Math.min(path.length, another.length);

    for (var i = 0; i < min; i++) {
      if (path[i] < another[i]) return -1;
      if (path[i] > another[i]) return 1;
    }

    return 0;
  },

  /**
   * Check if a path ends after one of the indexes in another.
   */
  endsAfter(path, another) {
    var i = path.length - 1;
    var as = path.slice(0, i);
    var bs = another.slice(0, i);
    var av = path[i];
    var bv = another[i];
    return Path.equals(as, bs) && av > bv;
  },

  /**
   * Check if a path ends at one of the indexes in another.
   */
  endsAt(path, another) {
    var i = path.length;
    var as = path.slice(0, i);
    var bs = another.slice(0, i);
    return Path.equals(as, bs);
  },

  /**
   * Check if a path ends before one of the indexes in another.
   */
  endsBefore(path, another) {
    var i = path.length - 1;
    var as = path.slice(0, i);
    var bs = another.slice(0, i);
    var av = path[i];
    var bv = another[i];
    return Path.equals(as, bs) && av < bv;
  },

  /**
   * Check if a path is exactly equal to another.
   */
  equals(path, another) {
    return path.length === another.length && path.every((n, i) => n === another[i]);
  },

  /**
   * Check if the path of previous sibling node exists
   */
  hasPrevious(path) {
    return path[path.length - 1] > 0;
  },

  /**
   * Check if a path is after another.
   */
  isAfter(path, another) {
    return Path.compare(path, another) === 1;
  },

  /**
   * Check if a path is an ancestor of another.
   */
  isAncestor(path, another) {
    return path.length < another.length && Path.compare(path, another) === 0;
  },

  /**
   * Check if a path is before another.
   */
  isBefore(path, another) {
    return Path.compare(path, another) === -1;
  },

  /**
   * Check if a path is a child of another.
   */
  isChild(path, another) {
    return path.length === another.length + 1 && Path.compare(path, another) === 0;
  },

  /**
   * Check if a path is equal to or an ancestor of another.
   */
  isCommon(path, another) {
    return path.length <= another.length && Path.compare(path, another) === 0;
  },

  /**
   * Check if a path is a descendant of another.
   */
  isDescendant(path, another) {
    return path.length > another.length && Path.compare(path, another) === 0;
  },

  /**
   * Check if a path is the parent of another.
   */
  isParent(path, another) {
    return path.length + 1 === another.length && Path.compare(path, another) === 0;
  },

  /**
   * Check is a value implements the `Path` interface.
   */
  isPath(value) {
    return Array.isArray(value) && (value.length === 0 || typeof value[0] === 'number');
  },

  /**
   * Check if a path is a sibling of another.
   */
  isSibling(path, another) {
    if (path.length !== another.length) {
      return false;
    }

    var as = path.slice(0, -1);
    var bs = another.slice(0, -1);
    var al = path[path.length - 1];
    var bl = another[another.length - 1];
    return al !== bl && Path.equals(as, bs);
  },

  /**
   * Get a list of paths at every level down to a path. Note: this is the same
   * as `Path.ancestors`, but including the path itself.
   *
   * The paths are sorted from shallowest to deepest. However, if the `reverse:
   * true` option is passed, they are reversed.
   */
  levels(path) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var {
      reverse = false
    } = options;
    var list = [];

    for (var i = 0; i <= path.length; i++) {
      list.push(path.slice(0, i));
    }

    if (reverse) {
      list.reverse();
    }

    return list;
  },

  /**
   * Given a path, get the path to the next sibling node.
   */
  next(path) {
    if (path.length === 0) {
      throw new Error("Cannot get the next path of a root path [".concat(path, "], because it has no next index."));
    }

    var last = path[path.length - 1];
    return path.slice(0, -1).concat(last + 1);
  },

  /**
   * Returns whether this operation can affect paths or not. Used as an
   * optimization when updating dirty paths during normalization
   *
   * NOTE: This *must* be kept in sync with the implementation of 'transform'
   * below
   */
  operationCanTransformPath(operation) {
    switch (operation.type) {
      case 'insert_node':
      case 'remove_node':
      case 'merge_node':
      case 'split_node':
      case 'move_node':
        return true;

      default:
        return false;
    }
  },

  /**
   * Given a path, return a new path referring to the parent node above it.
   */
  parent(path) {
    if (path.length === 0) {
      throw new Error("Cannot get the parent path of the root path [".concat(path, "]."));
    }

    return path.slice(0, -1);
  },

  /**
   * Given a path, get the path to the previous sibling node.
   */
  previous(path) {
    if (path.length === 0) {
      throw new Error("Cannot get the previous path of a root path [".concat(path, "], because it has no previous index."));
    }

    var last = path[path.length - 1];

    if (last <= 0) {
      throw new Error("Cannot get the previous path of a first child path [".concat(path, "] because it would result in a negative index."));
    }

    return path.slice(0, -1).concat(last - 1);
  },

  /**
   * Get a path relative to an ancestor.
   */
  relative(path, ancestor) {
    if (!Path.isAncestor(ancestor, path) && !Path.equals(path, ancestor)) {
      throw new Error("Cannot get the relative path of [".concat(path, "] inside ancestor [").concat(ancestor, "], because it is not above or equal to the path."));
    }

    return path.slice(ancestor.length);
  },

  /**
   * Transform a path by an operation.
   */
  transform(path, operation) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    if (!path) return null; // PERF: use destructing instead of immer

    var p = [...path];
    var {
      affinity = 'forward'
    } = options; // PERF: Exit early if the operation is guaranteed not to have an effect.

    if (path.length === 0) {
      return p;
    }

    switch (operation.type) {
      case 'insert_node':
        {
          var {
            path: op
          } = operation;

          if (Path.equals(op, p) || Path.endsBefore(op, p) || Path.isAncestor(op, p)) {
            p[op.length - 1] += 1;
          }

          break;
        }

      case 'remove_node':
        {
          var {
            path: _op
          } = operation;

          if (Path.equals(_op, p) || Path.isAncestor(_op, p)) {
            return null;
          } else if (Path.endsBefore(_op, p)) {
            p[_op.length - 1] -= 1;
          }

          break;
        }

      case 'merge_node':
        {
          var {
            path: _op2,
            position
          } = operation;

          if (Path.equals(_op2, p) || Path.endsBefore(_op2, p)) {
            p[_op2.length - 1] -= 1;
          } else if (Path.isAncestor(_op2, p)) {
            p[_op2.length - 1] -= 1;
            p[_op2.length] += position;
          }

          break;
        }

      case 'split_node':
        {
          var {
            path: _op3,
            position: _position
          } = operation;

          if (Path.equals(_op3, p)) {
            if (affinity === 'forward') {
              p[p.length - 1] += 1;
            } else if (affinity === 'backward') ; else {
              return null;
            }
          } else if (Path.endsBefore(_op3, p)) {
            p[_op3.length - 1] += 1;
          } else if (Path.isAncestor(_op3, p) && path[_op3.length] >= _position) {
            p[_op3.length - 1] += 1;
            p[_op3.length] -= _position;
          }

          break;
        }

      case 'move_node':
        {
          var {
            path: _op4,
            newPath: onp
          } = operation; // If the old and new path are the same, it's a no-op.

          if (Path.equals(_op4, onp)) {
            return p;
          }

          if (Path.isAncestor(_op4, p) || Path.equals(_op4, p)) {
            var copy = onp.slice();

            if (Path.endsBefore(_op4, onp) && _op4.length < onp.length) {
              copy[_op4.length - 1] -= 1;
            }

            return copy.concat(p.slice(_op4.length));
          } else if (Path.isSibling(_op4, onp) && (Path.isAncestor(onp, p) || Path.equals(onp, p))) {
            if (Path.endsBefore(_op4, p)) {
              p[_op4.length - 1] -= 1;
            } else {
              p[_op4.length - 1] += 1;
            }
          } else if (Path.endsBefore(onp, p) || Path.equals(onp, p) || Path.isAncestor(onp, p)) {
            if (Path.endsBefore(_op4, p)) {
              p[_op4.length - 1] -= 1;
            }

            p[onp.length - 1] += 1;
          } else if (Path.endsBefore(_op4, p)) {
            if (Path.equals(onp, p)) {
              p[onp.length - 1] += 1;
            }

            p[_op4.length - 1] -= 1;
          }

          break;
        }
    }

    return p;
  }

};

var PathRef = {
  /**
   * Transform the path ref's current value by an operation.
   */
  transform(ref, op) {
    var {
      current,
      affinity
    } = ref;

    if (current == null) {
      return;
    }

    var path = Path.transform(current, op, {
      affinity
    });
    ref.current = path;

    if (path == null) {
      ref.unref();
    }
  }

};

function ownKeys$6(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$6(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$6(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$6(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Point = {
  /**
   * Compare a point to another, returning an integer indicating whether the
   * point was before, at, or after the other.
   */
  compare(point, another) {
    var result = Path.compare(point.path, another.path);

    if (result === 0) {
      if (point.offset < another.offset) return -1;
      if (point.offset > another.offset) return 1;
      return 0;
    }

    return result;
  },

  /**
   * Check if a point is after another.
   */
  isAfter(point, another) {
    return Point.compare(point, another) === 1;
  },

  /**
   * Check if a point is before another.
   */
  isBefore(point, another) {
    return Point.compare(point, another) === -1;
  },

  /**
   * Check if a point is exactly equal to another.
   */
  equals(point, another) {
    // PERF: ensure the offsets are equal first since they are cheaper to check.
    return point.offset === another.offset && Path.equals(point.path, another.path);
  },

  /**
   * Check if a value implements the `Point` interface.
   */
  isPoint(value) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_is_plain_object__["a" /* isPlainObject */])(value) && typeof value.offset === 'number' && Path.isPath(value.path);
  },

  /**
   * Transform a point by an operation.
   */
  transform(point, op) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_immer__["a" /* produce */])(point, p => {
      if (p === null) {
        return null;
      }

      var {
        affinity = 'forward'
      } = options;
      var {
        path,
        offset
      } = p;

      switch (op.type) {
        case 'insert_node':
        case 'move_node':
          {
            p.path = Path.transform(path, op, options);
            break;
          }

        case 'insert_text':
          {
            if (Path.equals(op.path, path) && (op.offset < offset || op.offset === offset && affinity === 'forward')) {
              p.offset += op.text.length;
            }

            break;
          }

        case 'merge_node':
          {
            if (Path.equals(op.path, path)) {
              p.offset += op.position;
            }

            p.path = Path.transform(path, op, options);
            break;
          }

        case 'remove_text':
          {
            if (Path.equals(op.path, path) && op.offset <= offset) {
              p.offset -= Math.min(offset - op.offset, op.text.length);
            }

            break;
          }

        case 'remove_node':
          {
            if (Path.equals(op.path, path) || Path.isAncestor(op.path, path)) {
              return null;
            }

            p.path = Path.transform(path, op, options);
            break;
          }

        case 'split_node':
          {
            if (Path.equals(op.path, path)) {
              if (op.position === offset && affinity == null) {
                return null;
              } else if (op.position < offset || op.position === offset && affinity === 'forward') {
                p.offset -= op.position;
                p.path = Path.transform(path, op, _objectSpread$6(_objectSpread$6({}, options), {}, {
                  affinity: 'forward'
                }));
              }
            } else {
              p.path = Path.transform(path, op, options);
            }

            break;
          }
      }
    });
  }

};

var PointRef = {
  /**
   * Transform the point ref's current value by an operation.
   */
  transform(ref, op) {
    var {
      current,
      affinity
    } = ref;

    if (current == null) {
      return;
    }

    var point = Point.transform(current, op, {
      affinity
    });
    ref.current = point;

    if (point == null) {
      ref.unref();
    }
  }

};

var _excluded$2 = ["anchor", "focus"];

function ownKeys$5(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$5(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$5(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Range = {
  /**
   * Get the start and end points of a range, in the order in which they appear
   * in the document.
   */
  edges(range) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var {
      reverse = false
    } = options;
    var {
      anchor,
      focus
    } = range;
    return Range.isBackward(range) === reverse ? [anchor, focus] : [focus, anchor];
  },

  /**
   * Get the end point of a range.
   */
  end(range) {
    var [, end] = Range.edges(range);
    return end;
  },

  /**
   * Check if a range is exactly equal to another.
   */
  equals(range, another) {
    return Point.equals(range.anchor, another.anchor) && Point.equals(range.focus, another.focus);
  },

  /**
   * Check if a range includes a path, a point or part of another range.
   */
  includes(range, target) {
    if (Range.isRange(target)) {
      if (Range.includes(range, target.anchor) || Range.includes(range, target.focus)) {
        return true;
      }

      var [rs, re] = Range.edges(range);
      var [ts, te] = Range.edges(target);
      return Point.isBefore(rs, ts) && Point.isAfter(re, te);
    }

    var [start, end] = Range.edges(range);
    var isAfterStart = false;
    var isBeforeEnd = false;

    if (Point.isPoint(target)) {
      isAfterStart = Point.compare(target, start) >= 0;
      isBeforeEnd = Point.compare(target, end) <= 0;
    } else {
      isAfterStart = Path.compare(target, start.path) >= 0;
      isBeforeEnd = Path.compare(target, end.path) <= 0;
    }

    return isAfterStart && isBeforeEnd;
  },

  /**
   * Get the intersection of a range with another.
   */
  intersection(range, another) {
    var rest = _objectWithoutProperties(range, _excluded$2);

    var [s1, e1] = Range.edges(range);
    var [s2, e2] = Range.edges(another);
    var start = Point.isBefore(s1, s2) ? s2 : s1;
    var end = Point.isBefore(e1, e2) ? e1 : e2;

    if (Point.isBefore(end, start)) {
      return null;
    } else {
      return _objectSpread$5({
        anchor: start,
        focus: end
      }, rest);
    }
  },

  /**
   * Check if a range is backward, meaning that its anchor point appears in the
   * document _after_ its focus point.
   */
  isBackward(range) {
    var {
      anchor,
      focus
    } = range;
    return Point.isAfter(anchor, focus);
  },

  /**
   * Check if a range is collapsed, meaning that both its anchor and focus
   * points refer to the exact same position in the document.
   */
  isCollapsed(range) {
    var {
      anchor,
      focus
    } = range;
    return Point.equals(anchor, focus);
  },

  /**
   * Check if a range is expanded.
   *
   * This is the opposite of [[Range.isCollapsed]] and is provided for legibility.
   */
  isExpanded(range) {
    return !Range.isCollapsed(range);
  },

  /**
   * Check if a range is forward.
   *
   * This is the opposite of [[Range.isBackward]] and is provided for legibility.
   */
  isForward(range) {
    return !Range.isBackward(range);
  },

  /**
   * Check if a value implements the [[Range]] interface.
   */
  isRange(value) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_is_plain_object__["a" /* isPlainObject */])(value) && Point.isPoint(value.anchor) && Point.isPoint(value.focus);
  },

  /**
   * Iterate through all of the point entries in a range.
   */
  *points(range) {
    yield [range.anchor, 'anchor'];
    yield [range.focus, 'focus'];
  },

  /**
   * Get the start point of a range.
   */
  start(range) {
    var [start] = Range.edges(range);
    return start;
  },

  /**
   * Transform a range by an operation.
   */
  transform(range, op) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_immer__["a" /* produce */])(range, r => {
      if (r === null) {
        return null;
      }

      var {
        affinity = 'inward'
      } = options;
      var affinityAnchor;
      var affinityFocus;

      if (affinity === 'inward') {
        // If the range is collapsed, make sure to use the same affinity to
        // avoid the two points passing each other and expanding in the opposite
        // direction
        var isCollapsed = Range.isCollapsed(r);

        if (Range.isForward(r)) {
          affinityAnchor = 'forward';
          affinityFocus = isCollapsed ? affinityAnchor : 'backward';
        } else {
          affinityAnchor = 'backward';
          affinityFocus = isCollapsed ? affinityAnchor : 'forward';
        }
      } else if (affinity === 'outward') {
        if (Range.isForward(r)) {
          affinityAnchor = 'backward';
          affinityFocus = 'forward';
        } else {
          affinityAnchor = 'forward';
          affinityFocus = 'backward';
        }
      } else {
        affinityAnchor = affinity;
        affinityFocus = affinity;
      }

      var anchor = Point.transform(r.anchor, op, {
        affinity: affinityAnchor
      });
      var focus = Point.transform(r.focus, op, {
        affinity: affinityFocus
      });

      if (!anchor || !focus) {
        return null;
      }

      r.anchor = anchor;
      r.focus = focus;
    });
  }

};

var RangeRef = {
  /**
   * Transform the range ref's current value by an operation.
   */
  transform(ref, op) {
    var {
      current,
      affinity
    } = ref;

    if (current == null) {
      return;
    }

    var path = Range.transform(current, op, {
      affinity
    });
    ref.current = path;

    if (path == null) {
      ref.unref();
    }
  }

};

var _scrubber = undefined;
/**
 * This interface implements a stringify() function, which is used by Slate
 * internally when generating exceptions containing end user data. Developers
 * using Slate may call Scrubber.setScrubber() to alter the behavior of this
 * stringify() function.
 *
 * For example, to prevent the cleartext logging of 'text' fields within Nodes:
 *
 *    import { Scrubber } from 'slate';
 *    Scrubber.setScrubber((key, val) => {
 *      if (key === 'text') return '...scrubbed...'
 *      return val
 *    });
 *
 */
// eslint-disable-next-line no-redeclare

var Scrubber = {
  setScrubber(scrubber) {
    _scrubber = scrubber;
  },

  stringify(value) {
    return JSON.stringify(value, _scrubber);
  }

};

/*
  Custom deep equal comparison for Slate nodes.

  We don't need general purpose deep equality;
  Slate only supports plain values, Arrays, and nested objects.
  Complex values nested inside Arrays are not supported.

  Slate objects are designed to be serialised, so
  missing keys are deliberately normalised to undefined.
 */

var isDeepEqual = (node, another) => {
  for (var key in node) {
    var a = node[key];
    var b = another[key];

    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_is_plain_object__["a" /* isPlainObject */])(a) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_is_plain_object__["a" /* isPlainObject */])(b)) {
      if (!isDeepEqual(a, b)) return false;
    } else if (Array.isArray(a) && Array.isArray(b)) {
      if (a.length !== b.length) return false;

      for (var i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
      }
    } else if (a !== b) {
      return false;
    }
  }
  /*
    Deep object equality is only necessary in one direction; in the reverse direction
    we are only looking for keys that are missing.
    As above, undefined keys are normalised to missing.
  */


  for (var _key in another) {
    if (node[_key] === undefined && another[_key] !== undefined) {
      return false;
    }
  }

  return true;
};

var _excluded$1 = ["text"],
    _excluded2$1 = ["anchor", "focus"];

function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$4(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$4(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Text = {
  /**
   * Check if two text nodes are equal.
   *
   * When loose is set, the text is not compared. This is
   * used to check whether sibling text nodes can be merged.
   */
  equals(text, another) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var {
      loose = false
    } = options;

    function omitText(obj) {
      var rest = _objectWithoutProperties(obj, _excluded$1);

      return rest;
    }

    return isDeepEqual(loose ? omitText(text) : text, loose ? omitText(another) : another);
  },

  /**
   * Check if a value implements the `Text` interface.
   */
  isText(value) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_is_plain_object__["a" /* isPlainObject */])(value) && typeof value.text === 'string';
  },

  /**
   * Check if a value is a list of `Text` objects.
   */
  isTextList(value) {
    return Array.isArray(value) && value.every(val => Text.isText(val));
  },

  /**
   * Check if some props are a partial of Text.
   */
  isTextProps(props) {
    return props.text !== undefined;
  },

  /**
   * Check if an text matches set of properties.
   *
   * Note: this is for matching custom properties, and it does not ensure that
   * the `text` property are two nodes equal.
   */
  matches(text, props) {
    for (var key in props) {
      if (key === 'text') {
        continue;
      }

      if (!text.hasOwnProperty(key) || text[key] !== props[key]) {
        return false;
      }
    }

    return true;
  },

  /**
   * Get the leaves for a text node given decorations.
   */
  decorations(node, decorations) {
    var leaves = [_objectSpread$4({}, node)];

    for (var dec of decorations) {
      var rest = _objectWithoutProperties(dec, _excluded2$1);

      var [start, end] = Range.edges(dec);
      var next = [];
      var leafEnd = 0;
      var decorationStart = start.offset;
      var decorationEnd = end.offset;

      for (var leaf of leaves) {
        var {
          length
        } = leaf.text;
        var leafStart = leafEnd;
        leafEnd += length; // If the range encompasses the entire leaf, add the range.

        if (decorationStart <= leafStart && leafEnd <= decorationEnd) {
          Object.assign(leaf, rest);
          next.push(leaf);
          continue;
        } // If the range expanded and match the leaf, or starts after, or ends before it, continue.


        if (decorationStart !== decorationEnd && (decorationStart === leafEnd || decorationEnd === leafStart) || decorationStart > leafEnd || decorationEnd < leafStart || decorationEnd === leafStart && leafStart !== 0) {
          next.push(leaf);
          continue;
        } // Otherwise we need to split the leaf, at the start, end, or both,
        // and add the range to the middle intersecting section. Do the end
        // split first since we don't need to update the offset that way.


        var middle = leaf;
        var before = void 0;
        var after = void 0;

        if (decorationEnd < leafEnd) {
          var off = decorationEnd - leafStart;
          after = _objectSpread$4(_objectSpread$4({}, middle), {}, {
            text: middle.text.slice(off)
          });
          middle = _objectSpread$4(_objectSpread$4({}, middle), {}, {
            text: middle.text.slice(0, off)
          });
        }

        if (decorationStart > leafStart) {
          var _off = decorationStart - leafStart;

          before = _objectSpread$4(_objectSpread$4({}, middle), {}, {
            text: middle.text.slice(0, _off)
          });
          middle = _objectSpread$4(_objectSpread$4({}, middle), {}, {
            text: middle.text.slice(_off)
          });
        }

        Object.assign(middle, rest);

        if (before) {
          next.push(before);
        }

        next.push(middle);

        if (after) {
          next.push(after);
        }
      }

      leaves = next;
    }

    return leaves;
  }

};

function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var applyToDraft = (editor, selection, op) => {
  switch (op.type) {
    case 'insert_node':
      {
        var {
          path,
          node
        } = op;
        var parent = Node.parent(editor, path);
        var index = path[path.length - 1];

        if (index > parent.children.length) {
          throw new Error("Cannot apply an \"insert_node\" operation at path [".concat(path, "] because the destination is past the end of the node."));
        }

        parent.children.splice(index, 0, node);

        if (selection) {
          for (var [point, key] of Range.points(selection)) {
            selection[key] = Point.transform(point, op);
          }
        }

        break;
      }

    case 'insert_text':
      {
        var {
          path: _path,
          offset,
          text
        } = op;
        if (text.length === 0) break;

        var _node = Node.leaf(editor, _path);

        var before = _node.text.slice(0, offset);

        var after = _node.text.slice(offset);

        _node.text = before + text + after;

        if (selection) {
          for (var [_point, _key] of Range.points(selection)) {
            selection[_key] = Point.transform(_point, op);
          }
        }

        break;
      }

    case 'merge_node':
      {
        var {
          path: _path2
        } = op;

        var _node2 = Node.get(editor, _path2);

        var prevPath = Path.previous(_path2);
        var prev = Node.get(editor, prevPath);

        var _parent = Node.parent(editor, _path2);

        var _index = _path2[_path2.length - 1];

        if (Text.isText(_node2) && Text.isText(prev)) {
          prev.text += _node2.text;
        } else if (!Text.isText(_node2) && !Text.isText(prev)) {
          prev.children.push(..._node2.children);
        } else {
          throw new Error("Cannot apply a \"merge_node\" operation at path [".concat(_path2, "] to nodes of different interfaces: ").concat(Scrubber.stringify(_node2), " ").concat(Scrubber.stringify(prev)));
        }

        _parent.children.splice(_index, 1);

        if (selection) {
          for (var [_point2, _key2] of Range.points(selection)) {
            selection[_key2] = Point.transform(_point2, op);
          }
        }

        break;
      }

    case 'move_node':
      {
        var {
          path: _path3,
          newPath
        } = op;

        if (Path.isAncestor(_path3, newPath)) {
          throw new Error("Cannot move a path [".concat(_path3, "] to new path [").concat(newPath, "] because the destination is inside itself."));
        }

        var _node3 = Node.get(editor, _path3);

        var _parent2 = Node.parent(editor, _path3);

        var _index2 = _path3[_path3.length - 1]; // This is tricky, but since the `path` and `newPath` both refer to
        // the same snapshot in time, there's a mismatch. After either
        // removing the original position, the second step's path can be out
        // of date. So instead of using the `op.newPath` directly, we
        // transform `op.path` to ascertain what the `newPath` would be after
        // the operation was applied.

        _parent2.children.splice(_index2, 1);

        var truePath = Path.transform(_path3, op);
        var newParent = Node.get(editor, Path.parent(truePath));
        var newIndex = truePath[truePath.length - 1];
        newParent.children.splice(newIndex, 0, _node3);

        if (selection) {
          for (var [_point3, _key3] of Range.points(selection)) {
            selection[_key3] = Point.transform(_point3, op);
          }
        }

        break;
      }

    case 'remove_node':
      {
        var {
          path: _path4
        } = op;
        var _index3 = _path4[_path4.length - 1];

        var _parent3 = Node.parent(editor, _path4);

        _parent3.children.splice(_index3, 1); // Transform all of the points in the value, but if the point was in the
        // node that was removed we need to update the range or remove it.


        if (selection) {
          for (var [_point4, _key4] of Range.points(selection)) {
            var result = Point.transform(_point4, op);

            if (selection != null && result != null) {
              selection[_key4] = result;
            } else {
              var _prev = void 0;

              var next = void 0;

              for (var [n, p] of Node.texts(editor)) {
                if (Path.compare(p, _path4) === -1) {
                  _prev = [n, p];
                } else {
                  next = [n, p];
                  break;
                }
              }

              var preferNext = false;

              if (_prev && next) {
                if (Path.equals(next[1], _path4)) {
                  preferNext = !Path.hasPrevious(next[1]);
                } else {
                  preferNext = Path.common(_prev[1], _path4).length < Path.common(next[1], _path4).length;
                }
              }

              if (_prev && !preferNext) {
                _point4.path = _prev[1];
                _point4.offset = _prev[0].text.length;
              } else if (next) {
                _point4.path = next[1];
                _point4.offset = 0;
              } else {
                selection = null;
              }
            }
          }
        }

        break;
      }

    case 'remove_text':
      {
        var {
          path: _path5,
          offset: _offset,
          text: _text
        } = op;
        if (_text.length === 0) break;

        var _node4 = Node.leaf(editor, _path5);

        var _before = _node4.text.slice(0, _offset);

        var _after = _node4.text.slice(_offset + _text.length);

        _node4.text = _before + _after;

        if (selection) {
          for (var [_point5, _key5] of Range.points(selection)) {
            selection[_key5] = Point.transform(_point5, op);
          }
        }

        break;
      }

    case 'set_node':
      {
        var {
          path: _path6,
          properties,
          newProperties
        } = op;

        if (_path6.length === 0) {
          throw new Error("Cannot set properties on the root node!");
        }

        var _node5 = Node.get(editor, _path6);

        for (var _key6 in newProperties) {
          if (_key6 === 'children' || _key6 === 'text') {
            throw new Error("Cannot set the \"".concat(_key6, "\" property of nodes!"));
          }

          var value = newProperties[_key6];

          if (value == null) {
            delete _node5[_key6];
          } else {
            _node5[_key6] = value;
          }
        } // properties that were previously defined, but are now missing, must be deleted


        for (var _key7 in properties) {
          if (!newProperties.hasOwnProperty(_key7)) {
            delete _node5[_key7];
          }
        }

        break;
      }

    case 'set_selection':
      {
        var {
          newProperties: _newProperties
        } = op;

        if (_newProperties == null) {
          selection = _newProperties;
        } else {
          if (selection == null) {
            if (!Range.isRange(_newProperties)) {
              throw new Error("Cannot apply an incomplete \"set_selection\" operation properties ".concat(Scrubber.stringify(_newProperties), " when there is no current selection."));
            }

            selection = _objectSpread$3({}, _newProperties);
          }

          for (var _key8 in _newProperties) {
            var _value = _newProperties[_key8];

            if (_value == null) {
              if (_key8 === 'anchor' || _key8 === 'focus') {
                throw new Error("Cannot remove the \"".concat(_key8, "\" selection property"));
              }

              delete selection[_key8];
            } else {
              selection[_key8] = _value;
            }
          }
        }

        break;
      }

    case 'split_node':
      {
        var {
          path: _path7,
          position,
          properties: _properties
        } = op;

        if (_path7.length === 0) {
          throw new Error("Cannot apply a \"split_node\" operation at path [".concat(_path7, "] because the root node cannot be split."));
        }

        var _node6 = Node.get(editor, _path7);

        var _parent4 = Node.parent(editor, _path7);

        var _index4 = _path7[_path7.length - 1];
        var newNode;

        if (Text.isText(_node6)) {
          var _before2 = _node6.text.slice(0, position);

          var _after2 = _node6.text.slice(position);

          _node6.text = _before2;
          newNode = _objectSpread$3(_objectSpread$3({}, _properties), {}, {
            text: _after2
          });
        } else {
          var _before3 = _node6.children.slice(0, position);

          var _after3 = _node6.children.slice(position);

          _node6.children = _before3;
          newNode = _objectSpread$3(_objectSpread$3({}, _properties), {}, {
            children: _after3
          });
        }

        _parent4.children.splice(_index4 + 1, 0, newNode);

        if (selection) {
          for (var [_point6, _key9] of Range.points(selection)) {
            selection[_key9] = Point.transform(_point6, op);
          }
        }

        break;
      }
  }

  return selection;
}; // eslint-disable-next-line no-redeclare


var GeneralTransforms = {
  /**
   * Transform the editor by an operation.
   */
  transform(editor, op) {
    editor.children = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_immer__["b" /* createDraft */])(editor.children);
    var selection = editor.selection && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_immer__["b" /* createDraft */])(editor.selection);

    try {
      selection = applyToDraft(editor, selection, op);
    } finally {
      editor.children = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_immer__["c" /* finishDraft */])(editor.children);

      if (selection) {
        editor.selection = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_immer__["d" /* isDraft */])(selection) ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_immer__["c" /* finishDraft */])(selection) : selection;
      } else {
        editor.selection = null;
      }
    }
  }

};

var _excluded = ["text"],
    _excluded2 = ["children"];

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var NodeTransforms = {
  /**
   * Insert nodes at a specific location in the Editor.
   */
  insertNodes(editor, nodes) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    Editor.withoutNormalizing(editor, () => {
      var {
        hanging = false,
        voids = false,
        mode = 'lowest'
      } = options;
      var {
        at,
        match,
        select
      } = options;

      if (Node.isNode(nodes)) {
        nodes = [nodes];
      }

      if (nodes.length === 0) {
        return;
      }

      var [node] = nodes; // By default, use the selection as the target location. But if there is
      // no selection, insert at the end of the document since that is such a
      // common use case when inserting from a non-selected state.

      if (!at) {
        if (editor.selection) {
          at = editor.selection;
        } else if (editor.children.length > 0) {
          at = Editor.end(editor, []);
        } else {
          at = [0];
        }

        select = true;
      }

      if (select == null) {
        select = false;
      }

      if (Range.isRange(at)) {
        if (!hanging) {
          at = Editor.unhangRange(editor, at);
        }

        if (Range.isCollapsed(at)) {
          at = at.anchor;
        } else {
          var [, end] = Range.edges(at);
          var pointRef = Editor.pointRef(editor, end);
          Transforms.delete(editor, {
            at
          });
          at = pointRef.unref();
        }
      }

      if (Point.isPoint(at)) {
        if (match == null) {
          if (Text.isText(node)) {
            match = n => Text.isText(n);
          } else if (editor.isInline(node)) {
            match = n => Text.isText(n) || Editor.isInline(editor, n);
          } else {
            match = n => Editor.isBlock(editor, n);
          }
        }

        var [entry] = Editor.nodes(editor, {
          at: at.path,
          match,
          mode,
          voids
        });

        if (entry) {
          var [, _matchPath] = entry;
          var pathRef = Editor.pathRef(editor, _matchPath);
          var isAtEnd = Editor.isEnd(editor, at, _matchPath);
          Transforms.splitNodes(editor, {
            at,
            match,
            mode,
            voids
          });
          var path = pathRef.unref();
          at = isAtEnd ? Path.next(path) : path;
        } else {
          return;
        }
      }

      var parentPath = Path.parent(at);
      var index = at[at.length - 1];

      if (!voids && Editor.void(editor, {
        at: parentPath
      })) {
        return;
      }

      for (var _node of nodes) {
        var _path = parentPath.concat(index);

        index++;
        editor.apply({
          type: 'insert_node',
          path: _path,
          node: _node
        });
        at = Path.next(at);
      }

      at = Path.previous(at);

      if (select) {
        var point = Editor.end(editor, at);

        if (point) {
          Transforms.select(editor, point);
        }
      }
    });
  },

  /**
   * Lift nodes at a specific location upwards in the document tree, splitting
   * their parent in two if necessary.
   */
  liftNodes(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    Editor.withoutNormalizing(editor, () => {
      var {
        at = editor.selection,
        mode = 'lowest',
        voids = false
      } = options;
      var {
        match
      } = options;

      if (match == null) {
        match = Path.isPath(at) ? matchPath(editor, at) : n => Editor.isBlock(editor, n);
      }

      if (!at) {
        return;
      }

      var matches = Editor.nodes(editor, {
        at,
        match,
        mode,
        voids
      });
      var pathRefs = Array.from(matches, _ref => {
        var [, p] = _ref;
        return Editor.pathRef(editor, p);
      });

      for (var pathRef of pathRefs) {
        var path = pathRef.unref();

        if (path.length < 2) {
          throw new Error("Cannot lift node at a path [".concat(path, "] because it has a depth of less than `2`."));
        }

        var parentNodeEntry = Editor.node(editor, Path.parent(path));
        var [parent, parentPath] = parentNodeEntry;
        var index = path[path.length - 1];
        var {
          length
        } = parent.children;

        if (length === 1) {
          var toPath = Path.next(parentPath);
          Transforms.moveNodes(editor, {
            at: path,
            to: toPath,
            voids
          });
          Transforms.removeNodes(editor, {
            at: parentPath,
            voids
          });
        } else if (index === 0) {
          Transforms.moveNodes(editor, {
            at: path,
            to: parentPath,
            voids
          });
        } else if (index === length - 1) {
          var _toPath = Path.next(parentPath);

          Transforms.moveNodes(editor, {
            at: path,
            to: _toPath,
            voids
          });
        } else {
          var splitPath = Path.next(path);

          var _toPath2 = Path.next(parentPath);

          Transforms.splitNodes(editor, {
            at: splitPath,
            voids
          });
          Transforms.moveNodes(editor, {
            at: path,
            to: _toPath2,
            voids
          });
        }
      }
    });
  },

  /**
   * Merge a node at a location with the previous node of the same depth,
   * removing any empty containing nodes after the merge if necessary.
   */
  mergeNodes(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    Editor.withoutNormalizing(editor, () => {
      var {
        match,
        at = editor.selection
      } = options;
      var {
        hanging = false,
        voids = false,
        mode = 'lowest'
      } = options;

      if (!at) {
        return;
      }

      if (match == null) {
        if (Path.isPath(at)) {
          var [parent] = Editor.parent(editor, at);

          match = n => parent.children.includes(n);
        } else {
          match = n => Editor.isBlock(editor, n);
        }
      }

      if (!hanging && Range.isRange(at)) {
        at = Editor.unhangRange(editor, at);
      }

      if (Range.isRange(at)) {
        if (Range.isCollapsed(at)) {
          at = at.anchor;
        } else {
          var [, end] = Range.edges(at);
          var pointRef = Editor.pointRef(editor, end);
          Transforms.delete(editor, {
            at
          });
          at = pointRef.unref();

          if (options.at == null) {
            Transforms.select(editor, at);
          }
        }
      }

      var [current] = Editor.nodes(editor, {
        at,
        match,
        voids,
        mode
      });
      var prev = Editor.previous(editor, {
        at,
        match,
        voids,
        mode
      });

      if (!current || !prev) {
        return;
      }

      var [node, path] = current;
      var [prevNode, prevPath] = prev;

      if (path.length === 0 || prevPath.length === 0) {
        return;
      }

      var newPath = Path.next(prevPath);
      var commonPath = Path.common(path, prevPath);
      var isPreviousSibling = Path.isSibling(path, prevPath);
      var levels = Array.from(Editor.levels(editor, {
        at: path
      }), _ref2 => {
        var [n] = _ref2;
        return n;
      }).slice(commonPath.length).slice(0, -1); // Determine if the merge will leave an ancestor of the path empty as a
      // result, in which case we'll want to remove it after merging.

      var emptyAncestor = Editor.above(editor, {
        at: path,
        mode: 'highest',
        match: n => levels.includes(n) && hasSingleChildNest(editor, n)
      });
      var emptyRef = emptyAncestor && Editor.pathRef(editor, emptyAncestor[1]);
      var properties;
      var position; // Ensure that the nodes are equivalent, and figure out what the position
      // and extra properties of the merge will be.

      if (Text.isText(node) && Text.isText(prevNode)) {
        var rest = _objectWithoutProperties(node, _excluded);

        position = prevNode.text.length;
        properties = rest;
      } else if (Element.isElement(node) && Element.isElement(prevNode)) {
        var rest = _objectWithoutProperties(node, _excluded2);

        position = prevNode.children.length;
        properties = rest;
      } else {
        throw new Error("Cannot merge the node at path [".concat(path, "] with the previous sibling because it is not the same kind: ").concat(Scrubber.stringify(node), " ").concat(Scrubber.stringify(prevNode)));
      } // If the node isn't already the next sibling of the previous node, move
      // it so that it is before merging.


      if (!isPreviousSibling) {
        Transforms.moveNodes(editor, {
          at: path,
          to: newPath,
          voids
        });
      } // If there was going to be an empty ancestor of the node that was merged,
      // we remove it from the tree.


      if (emptyRef) {
        Transforms.removeNodes(editor, {
          at: emptyRef.current,
          voids
        });
      } // If the target node that we're merging with is empty, remove it instead
      // of merging the two. This is a common rich text editor behavior to
      // prevent losing formatting when deleting entire nodes when you have a
      // hanging selection.
      // if prevNode is first child in parent,don't remove it.


      if (Element.isElement(prevNode) && Editor.isEmpty(editor, prevNode) || Text.isText(prevNode) && prevNode.text === '' && prevPath[prevPath.length - 1] !== 0) {
        Transforms.removeNodes(editor, {
          at: prevPath,
          voids
        });
      } else {
        editor.apply({
          type: 'merge_node',
          path: newPath,
          position,
          properties
        });
      }

      if (emptyRef) {
        emptyRef.unref();
      }
    });
  },

  /**
   * Move the nodes at a location to a new location.
   */
  moveNodes(editor, options) {
    Editor.withoutNormalizing(editor, () => {
      var {
        to,
        at = editor.selection,
        mode = 'lowest',
        voids = false
      } = options;
      var {
        match
      } = options;

      if (!at) {
        return;
      }

      if (match == null) {
        match = Path.isPath(at) ? matchPath(editor, at) : n => Editor.isBlock(editor, n);
      }

      var toRef = Editor.pathRef(editor, to);
      var targets = Editor.nodes(editor, {
        at,
        match,
        mode,
        voids
      });
      var pathRefs = Array.from(targets, _ref3 => {
        var [, p] = _ref3;
        return Editor.pathRef(editor, p);
      });

      for (var pathRef of pathRefs) {
        var path = pathRef.unref();
        var newPath = toRef.current;

        if (path.length !== 0) {
          editor.apply({
            type: 'move_node',
            path,
            newPath
          });
        }

        if (toRef.current && Path.isSibling(newPath, path) && Path.isAfter(newPath, path)) {
          // When performing a sibling move to a later index, the path at the destination is shifted
          // to before the insertion point instead of after. To ensure our group of nodes are inserted
          // in the correct order we increment toRef to account for that
          toRef.current = Path.next(toRef.current);
        }
      }

      toRef.unref();
    });
  },

  /**
   * Remove the nodes at a specific location in the document.
   */
  removeNodes(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    Editor.withoutNormalizing(editor, () => {
      var {
        hanging = false,
        voids = false,
        mode = 'lowest'
      } = options;
      var {
        at = editor.selection,
        match
      } = options;

      if (!at) {
        return;
      }

      if (match == null) {
        match = Path.isPath(at) ? matchPath(editor, at) : n => Editor.isBlock(editor, n);
      }

      if (!hanging && Range.isRange(at)) {
        at = Editor.unhangRange(editor, at);
      }

      var depths = Editor.nodes(editor, {
        at,
        match,
        mode,
        voids
      });
      var pathRefs = Array.from(depths, _ref4 => {
        var [, p] = _ref4;
        return Editor.pathRef(editor, p);
      });

      for (var pathRef of pathRefs) {
        var path = pathRef.unref();

        if (path) {
          var [node] = Editor.node(editor, path);
          editor.apply({
            type: 'remove_node',
            path,
            node
          });
        }
      }
    });
  },

  /**
   * Set new properties on the nodes at a location.
   */
  setNodes(editor, props) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    Editor.withoutNormalizing(editor, () => {
      var {
        match,
        at = editor.selection,
        compare,
        merge
      } = options;
      var {
        hanging = false,
        mode = 'lowest',
        split = false,
        voids = false
      } = options;

      if (!at) {
        return;
      }

      if (match == null) {
        match = Path.isPath(at) ? matchPath(editor, at) : n => Editor.isBlock(editor, n);
      }

      if (!hanging && Range.isRange(at)) {
        at = Editor.unhangRange(editor, at);
      }

      if (split && Range.isRange(at)) {
        if (Range.isCollapsed(at) && Editor.leaf(editor, at.anchor)[0].text.length > 0) {
          // If the range is collapsed in a non-empty node and 'split' is true, there's nothing to
          // set that won't get normalized away
          return;
        }

        var rangeRef = Editor.rangeRef(editor, at, {
          affinity: 'inward'
        });
        var [start, end] = Range.edges(at);
        var splitMode = mode === 'lowest' ? 'lowest' : 'highest';
        var endAtEndOfNode = Editor.isEnd(editor, end, end.path);
        Transforms.splitNodes(editor, {
          at: end,
          match,
          mode: splitMode,
          voids,
          always: !endAtEndOfNode
        });
        var startAtStartOfNode = Editor.isStart(editor, start, start.path);
        Transforms.splitNodes(editor, {
          at: start,
          match,
          mode: splitMode,
          voids,
          always: !startAtStartOfNode
        });
        at = rangeRef.unref();

        if (options.at == null) {
          Transforms.select(editor, at);
        }
      }

      if (!compare) {
        compare = (prop, nodeProp) => prop !== nodeProp;
      }

      for (var [node, path] of Editor.nodes(editor, {
        at,
        match,
        mode,
        voids
      })) {
        var properties = {};
        var newProperties = {}; // You can't set properties on the editor node.

        if (path.length === 0) {
          continue;
        }

        var hasChanges = false;

        for (var k in props) {
          if (k === 'children' || k === 'text') {
            continue;
          }

          if (compare(props[k], node[k])) {
            hasChanges = true; // Omit new properties from the old properties list

            if (node.hasOwnProperty(k)) properties[k] = node[k]; // Omit properties that have been removed from the new properties list

            if (merge) {
              if (props[k] != null) newProperties[k] = merge(node[k], props[k]);
            } else {
              if (props[k] != null) newProperties[k] = props[k];
            }
          }
        }

        if (hasChanges) {
          editor.apply({
            type: 'set_node',
            path,
            properties,
            newProperties
          });
        }
      }
    });
  },

  /**
   * Split the nodes at a specific location.
   */
  splitNodes(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    Editor.withoutNormalizing(editor, () => {
      var {
        mode = 'lowest',
        voids = false
      } = options;
      var {
        match,
        at = editor.selection,
        height = 0,
        always = false
      } = options;

      if (match == null) {
        match = n => Editor.isBlock(editor, n);
      }

      if (Range.isRange(at)) {
        at = deleteRange(editor, at);
      } // If the target is a path, the default height-skipping and position
      // counters need to account for us potentially splitting at a non-leaf.


      if (Path.isPath(at)) {
        var path = at;
        var point = Editor.point(editor, path);
        var [parent] = Editor.parent(editor, path);

        match = n => n === parent;

        height = point.path.length - path.length + 1;
        at = point;
        always = true;
      }

      if (!at) {
        return;
      }

      var beforeRef = Editor.pointRef(editor, at, {
        affinity: 'backward'
      });
      var afterRef;

      try {
        var [highest] = Editor.nodes(editor, {
          at,
          match,
          mode,
          voids
        });

        if (!highest) {
          return;
        }

        var voidMatch = Editor.void(editor, {
          at,
          mode: 'highest'
        });
        var nudge = 0;

        if (!voids && voidMatch) {
          var [voidNode, voidPath] = voidMatch;

          if (Element.isElement(voidNode) && editor.isInline(voidNode)) {
            var after = Editor.after(editor, voidPath);

            if (!after) {
              var text = {
                text: ''
              };
              var afterPath = Path.next(voidPath);
              Transforms.insertNodes(editor, text, {
                at: afterPath,
                voids
              });
              after = Editor.point(editor, afterPath);
            }

            at = after;
            always = true;
          }

          var siblingHeight = at.path.length - voidPath.length;
          height = siblingHeight + 1;
          always = true;
        }

        afterRef = Editor.pointRef(editor, at);
        var depth = at.path.length - height;
        var [, highestPath] = highest;
        var lowestPath = at.path.slice(0, depth);
        var position = height === 0 ? at.offset : at.path[depth] + nudge;

        for (var [node, _path2] of Editor.levels(editor, {
          at: lowestPath,
          reverse: true,
          voids
        })) {
          var split = false;

          if (_path2.length < highestPath.length || _path2.length === 0 || !voids && Editor.isVoid(editor, node)) {
            break;
          }

          var _point = beforeRef.current;
          var isEnd = Editor.isEnd(editor, _point, _path2);

          if (always || !beforeRef || !Editor.isEdge(editor, _point, _path2)) {
            split = true;
            var properties = Node.extractProps(node);
            editor.apply({
              type: 'split_node',
              path: _path2,
              position,
              properties
            });
          }

          position = _path2[_path2.length - 1] + (split || isEnd ? 1 : 0);
        }

        if (options.at == null) {
          var _point2 = afterRef.current || Editor.end(editor, []);

          Transforms.select(editor, _point2);
        }
      } finally {
        var _afterRef;

        beforeRef.unref();
        (_afterRef = afterRef) === null || _afterRef === void 0 ? void 0 : _afterRef.unref();
      }
    });
  },

  /**
   * Unset properties on the nodes at a location.
   */
  unsetNodes(editor, props) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    if (!Array.isArray(props)) {
      props = [props];
    }

    var obj = {};

    for (var key of props) {
      obj[key] = null;
    }

    Transforms.setNodes(editor, obj, options);
  },

  /**
   * Unwrap the nodes at a location from a parent node, splitting the parent if
   * necessary to ensure that only the content in the range is unwrapped.
   */
  unwrapNodes(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    Editor.withoutNormalizing(editor, () => {
      var {
        mode = 'lowest',
        split = false,
        voids = false
      } = options;
      var {
        at = editor.selection,
        match
      } = options;

      if (!at) {
        return;
      }

      if (match == null) {
        match = Path.isPath(at) ? matchPath(editor, at) : n => Editor.isBlock(editor, n);
      }

      if (Path.isPath(at)) {
        at = Editor.range(editor, at);
      }

      var rangeRef = Range.isRange(at) ? Editor.rangeRef(editor, at) : null;
      var matches = Editor.nodes(editor, {
        at,
        match,
        mode,
        voids
      });
      var pathRefs = Array.from(matches, _ref5 => {
        var [, p] = _ref5;
        return Editor.pathRef(editor, p);
      } // unwrapNode will call liftNode which does not support splitting the node when nested.
      // If we do not reverse the order and call it from top to the bottom, it will remove all blocks
      // that wrap target node. So we reverse the order.
      ).reverse();

      var _loop = function _loop(pathRef) {
        var path = pathRef.unref();
        var [node] = Editor.node(editor, path);
        var range = Editor.range(editor, path);

        if (split && rangeRef) {
          range = Range.intersection(rangeRef.current, range);
        }

        Transforms.liftNodes(editor, {
          at: range,
          match: n => Element.isAncestor(node) && node.children.includes(n),
          voids
        });
      };

      for (var pathRef of pathRefs) {
        _loop(pathRef);
      }

      if (rangeRef) {
        rangeRef.unref();
      }
    });
  },

  /**
   * Wrap the nodes at a location in a new container node, splitting the edges
   * of the range first to ensure that only the content in the range is wrapped.
   */
  wrapNodes(editor, element) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    Editor.withoutNormalizing(editor, () => {
      var {
        mode = 'lowest',
        split = false,
        voids = false
      } = options;
      var {
        match,
        at = editor.selection
      } = options;

      if (!at) {
        return;
      }

      if (match == null) {
        if (Path.isPath(at)) {
          match = matchPath(editor, at);
        } else if (editor.isInline(element)) {
          match = n => Editor.isInline(editor, n) || Text.isText(n);
        } else {
          match = n => Editor.isBlock(editor, n);
        }
      }

      if (split && Range.isRange(at)) {
        var [start, end] = Range.edges(at);
        var rangeRef = Editor.rangeRef(editor, at, {
          affinity: 'inward'
        });
        Transforms.splitNodes(editor, {
          at: end,
          match,
          voids
        });
        Transforms.splitNodes(editor, {
          at: start,
          match,
          voids
        });
        at = rangeRef.unref();

        if (options.at == null) {
          Transforms.select(editor, at);
        }
      }

      var roots = Array.from(Editor.nodes(editor, {
        at,
        match: editor.isInline(element) ? n => Editor.isBlock(editor, n) : n => Editor.isEditor(n),
        mode: 'lowest',
        voids
      }));

      for (var [, rootPath] of roots) {
        var a = Range.isRange(at) ? Range.intersection(at, Editor.range(editor, rootPath)) : at;

        if (!a) {
          continue;
        }

        var matches = Array.from(Editor.nodes(editor, {
          at: a,
          match,
          mode,
          voids
        }));

        if (matches.length > 0) {
          var _ret = function () {
            var [first] = matches;
            var last = matches[matches.length - 1];
            var [, firstPath] = first;
            var [, lastPath] = last;

            if (firstPath.length === 0 && lastPath.length === 0) {
              // if there's no matching parent - usually means the node is an editor - don't do anything
              return "continue";
            }

            var commonPath = Path.equals(firstPath, lastPath) ? Path.parent(firstPath) : Path.common(firstPath, lastPath);
            var range = Editor.range(editor, firstPath, lastPath);
            var commonNodeEntry = Editor.node(editor, commonPath);
            var [commonNode] = commonNodeEntry;
            var depth = commonPath.length + 1;
            var wrapperPath = Path.next(lastPath.slice(0, depth));

            var wrapper = _objectSpread$2(_objectSpread$2({}, element), {}, {
              children: []
            });

            Transforms.insertNodes(editor, wrapper, {
              at: wrapperPath,
              voids
            });
            Transforms.moveNodes(editor, {
              at: range,
              match: n => Element.isAncestor(commonNode) && commonNode.children.includes(n),
              to: wrapperPath.concat(0),
              voids
            });
          }();

          if (_ret === "continue") continue;
        }
      }
    });
  }

};

var hasSingleChildNest = (editor, node) => {
  if (Element.isElement(node)) {
    var element = node;

    if (Editor.isVoid(editor, node)) {
      return true;
    } else if (element.children.length === 1) {
      return hasSingleChildNest(editor, element.children[0]);
    } else {
      return false;
    }
  } else if (Editor.isEditor(node)) {
    return false;
  } else {
    return true;
  }
};
/**
 * Convert a range into a point by deleting it's content.
 */


var deleteRange = (editor, range) => {
  if (Range.isCollapsed(range)) {
    return range.anchor;
  } else {
    var [, end] = Range.edges(range);
    var pointRef = Editor.pointRef(editor, end);
    Transforms.delete(editor, {
      at: range
    });
    return pointRef.unref();
  }
};

var matchPath = (editor, path) => {
  var [node] = Editor.node(editor, path);
  return n => n === node;
};

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var SelectionTransforms = {
  /**
   * Collapse the selection.
   */
  collapse(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var {
      edge = 'anchor'
    } = options;
    var {
      selection
    } = editor;

    if (!selection) {
      return;
    } else if (edge === 'anchor') {
      Transforms.select(editor, selection.anchor);
    } else if (edge === 'focus') {
      Transforms.select(editor, selection.focus);
    } else if (edge === 'start') {
      var [start] = Range.edges(selection);
      Transforms.select(editor, start);
    } else if (edge === 'end') {
      var [, end] = Range.edges(selection);
      Transforms.select(editor, end);
    }
  },

  /**
   * Unset the selection.
   */
  deselect(editor) {
    var {
      selection
    } = editor;

    if (selection) {
      editor.apply({
        type: 'set_selection',
        properties: selection,
        newProperties: null
      });
    }
  },

  /**
   * Move the selection's point forward or backward.
   */
  move(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var {
      selection
    } = editor;
    var {
      distance = 1,
      unit = 'character',
      reverse = false
    } = options;
    var {
      edge = null
    } = options;

    if (!selection) {
      return;
    }

    if (edge === 'start') {
      edge = Range.isBackward(selection) ? 'focus' : 'anchor';
    }

    if (edge === 'end') {
      edge = Range.isBackward(selection) ? 'anchor' : 'focus';
    }

    var {
      anchor,
      focus
    } = selection;
    var opts = {
      distance,
      unit
    };
    var props = {};

    if (edge == null || edge === 'anchor') {
      var point = reverse ? Editor.before(editor, anchor, opts) : Editor.after(editor, anchor, opts);

      if (point) {
        props.anchor = point;
      }
    }

    if (edge == null || edge === 'focus') {
      var _point = reverse ? Editor.before(editor, focus, opts) : Editor.after(editor, focus, opts);

      if (_point) {
        props.focus = _point;
      }
    }

    Transforms.setSelection(editor, props);
  },

  /**
   * Set the selection to a new value.
   */
  select(editor, target) {
    var {
      selection
    } = editor;
    target = Editor.range(editor, target);

    if (selection) {
      Transforms.setSelection(editor, target);
      return;
    }

    if (!Range.isRange(target)) {
      throw new Error("When setting the selection and the current selection is `null` you must provide at least an `anchor` and `focus`, but you passed: ".concat(Scrubber.stringify(target)));
    }

    editor.apply({
      type: 'set_selection',
      properties: selection,
      newProperties: target
    });
  },

  /**
   * Set new properties on one of the selection's points.
   */
  setPoint(editor, props) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var {
      selection
    } = editor;
    var {
      edge = 'both'
    } = options;

    if (!selection) {
      return;
    }

    if (edge === 'start') {
      edge = Range.isBackward(selection) ? 'focus' : 'anchor';
    }

    if (edge === 'end') {
      edge = Range.isBackward(selection) ? 'anchor' : 'focus';
    }

    var {
      anchor,
      focus
    } = selection;
    var point = edge === 'anchor' ? anchor : focus;
    Transforms.setSelection(editor, {
      [edge === 'anchor' ? 'anchor' : 'focus']: _objectSpread$1(_objectSpread$1({}, point), props)
    });
  },

  /**
   * Set new properties on the selection.
   */
  setSelection(editor, props) {
    var {
      selection
    } = editor;
    var oldProps = {};
    var newProps = {};

    if (!selection) {
      return;
    }

    for (var k in props) {
      if (k === 'anchor' && props.anchor != null && !Point.equals(props.anchor, selection.anchor) || k === 'focus' && props.focus != null && !Point.equals(props.focus, selection.focus) || k !== 'anchor' && k !== 'focus' && props[k] !== selection[k]) {
        oldProps[k] = selection[k];
        newProps[k] = props[k];
      }
    }

    if (Object.keys(oldProps).length > 0) {
      editor.apply({
        type: 'set_selection',
        properties: oldProps,
        newProperties: newProps
      });
    }
  }

};

var TextTransforms = {
  /**
   * Delete content in the editor.
   */
  delete(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    Editor.withoutNormalizing(editor, () => {
      var {
        reverse = false,
        unit = 'character',
        distance = 1,
        voids = false
      } = options;
      var {
        at = editor.selection,
        hanging = false
      } = options;

      if (!at) {
        return;
      }

      var isCollapsed = false;

      if (Range.isRange(at) && Range.isCollapsed(at)) {
        isCollapsed = true;
        at = at.anchor;
      }

      if (Point.isPoint(at)) {
        var furthestVoid = Editor.void(editor, {
          at,
          mode: 'highest'
        });

        if (!voids && furthestVoid) {
          var [, voidPath] = furthestVoid;
          at = voidPath;
        } else {
          var opts = {
            unit,
            distance
          };
          var target = reverse ? Editor.before(editor, at, opts) || Editor.start(editor, []) : Editor.after(editor, at, opts) || Editor.end(editor, []);
          at = {
            anchor: at,
            focus: target
          };
          hanging = true;
        }
      }

      if (Path.isPath(at)) {
        Transforms.removeNodes(editor, {
          at,
          voids
        });
        return;
      }

      if (Range.isCollapsed(at)) {
        return;
      }

      if (!hanging) {
        var [, _end] = Range.edges(at);
        var endOfDoc = Editor.end(editor, []);

        if (!Point.equals(_end, endOfDoc)) {
          at = Editor.unhangRange(editor, at, {
            voids
          });
        }
      }

      var [start, end] = Range.edges(at);
      var startBlock = Editor.above(editor, {
        match: n => Editor.isBlock(editor, n),
        at: start,
        voids
      });
      var endBlock = Editor.above(editor, {
        match: n => Editor.isBlock(editor, n),
        at: end,
        voids
      });
      var isAcrossBlocks = startBlock && endBlock && !Path.equals(startBlock[1], endBlock[1]);
      var isSingleText = Path.equals(start.path, end.path);
      var startVoid = voids ? null : Editor.void(editor, {
        at: start,
        mode: 'highest'
      });
      var endVoid = voids ? null : Editor.void(editor, {
        at: end,
        mode: 'highest'
      }); // If the start or end points are inside an inline void, nudge them out.

      if (startVoid) {
        var before = Editor.before(editor, start);

        if (before && startBlock && Path.isAncestor(startBlock[1], before.path)) {
          start = before;
        }
      }

      if (endVoid) {
        var after = Editor.after(editor, end);

        if (after && endBlock && Path.isAncestor(endBlock[1], after.path)) {
          end = after;
        }
      } // Get the highest nodes that are completely inside the range, as well as
      // the start and end nodes.


      var matches = [];
      var lastPath;

      for (var entry of Editor.nodes(editor, {
        at,
        voids
      })) {
        var [node, path] = entry;

        if (lastPath && Path.compare(path, lastPath) === 0) {
          continue;
        }

        if (!voids && Editor.isVoid(editor, node) || !Path.isCommon(path, start.path) && !Path.isCommon(path, end.path)) {
          matches.push(entry);
          lastPath = path;
        }
      }

      var pathRefs = Array.from(matches, _ref => {
        var [, p] = _ref;
        return Editor.pathRef(editor, p);
      });
      var startRef = Editor.pointRef(editor, start);
      var endRef = Editor.pointRef(editor, end);
      var removedText = '';

      if (!isSingleText && !startVoid) {
        var _point = startRef.current;
        var [_node] = Editor.leaf(editor, _point);
        var {
          path: _path
        } = _point;
        var {
          offset
        } = start;

        var text = _node.text.slice(offset);

        if (text.length > 0) {
          editor.apply({
            type: 'remove_text',
            path: _path,
            offset,
            text
          });
          removedText = text;
        }
      }

      pathRefs.reverse().map(r => r.unref()).filter(r => r !== null).forEach(p => Transforms.removeNodes(editor, {
        at: p,
        voids
      }));

      if (!endVoid) {
        var _point2 = endRef.current;
        var [_node2] = Editor.leaf(editor, _point2);
        var {
          path: _path2
        } = _point2;

        var _offset = isSingleText ? start.offset : 0;

        var _text = _node2.text.slice(_offset, end.offset);

        if (_text.length > 0) {
          editor.apply({
            type: 'remove_text',
            path: _path2,
            offset: _offset,
            text: _text
          });
          removedText = _text;
        }
      }

      if (!isSingleText && isAcrossBlocks && endRef.current && startRef.current) {
        Transforms.mergeNodes(editor, {
          at: endRef.current,
          hanging: true,
          voids
        });
      } // For Thai script, deleting N character(s) backward should delete
      // N code point(s) instead of an entire grapheme cluster.
      // Therefore, the remaining code points should be inserted back.


      if (isCollapsed && reverse && unit === 'character' && removedText.length > 1 && removedText.match(/[\u0E00-\u0E7F]+/)) {
        Transforms.insertText(editor, removedText.slice(0, removedText.length - distance));
      }

      var startUnref = startRef.unref();
      var endUnref = endRef.unref();
      var point = reverse ? startUnref || endUnref : endUnref || startUnref;

      if (options.at == null && point) {
        Transforms.select(editor, point);
      }
    });
  },

  /**
   * Insert a fragment at a specific location in the editor.
   */
  insertFragment(editor, fragment) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    Editor.withoutNormalizing(editor, () => {
      var {
        hanging = false,
        voids = false
      } = options;
      var {
        at = editor.selection
      } = options;

      if (!fragment.length) {
        return;
      }

      if (!at) {
        return;
      } else if (Range.isRange(at)) {
        if (!hanging) {
          at = Editor.unhangRange(editor, at);
        }

        if (Range.isCollapsed(at)) {
          at = at.anchor;
        } else {
          var [, end] = Range.edges(at);

          if (!voids && Editor.void(editor, {
            at: end
          })) {
            return;
          }

          var pointRef = Editor.pointRef(editor, end);
          Transforms.delete(editor, {
            at
          });
          at = pointRef.unref();
        }
      } else if (Path.isPath(at)) {
        at = Editor.start(editor, at);
      }

      if (!voids && Editor.void(editor, {
        at
      })) {
        return;
      } // If the insert point is at the edge of an inline node, move it outside
      // instead since it will need to be split otherwise.


      var inlineElementMatch = Editor.above(editor, {
        at,
        match: n => Editor.isInline(editor, n),
        mode: 'highest',
        voids
      });

      if (inlineElementMatch) {
        var [, _inlinePath] = inlineElementMatch;

        if (Editor.isEnd(editor, at, _inlinePath)) {
          var after = Editor.after(editor, _inlinePath);
          at = after;
        } else if (Editor.isStart(editor, at, _inlinePath)) {
          var before = Editor.before(editor, _inlinePath);
          at = before;
        }
      }

      var blockMatch = Editor.above(editor, {
        match: n => Editor.isBlock(editor, n),
        at,
        voids
      });
      var [, blockPath] = blockMatch;
      var isBlockStart = Editor.isStart(editor, at, blockPath);
      var isBlockEnd = Editor.isEnd(editor, at, blockPath);
      var isBlockEmpty = isBlockStart && isBlockEnd;
      var mergeStart = !isBlockStart || isBlockStart && isBlockEnd;
      var mergeEnd = !isBlockEnd;
      var [, firstPath] = Node.first({
        children: fragment
      }, []);
      var [, lastPath] = Node.last({
        children: fragment
      }, []);
      var matches = [];

      var matcher = _ref2 => {
        var [n, p] = _ref2;
        var isRoot = p.length === 0;

        if (isRoot) {
          return false;
        }

        if (isBlockEmpty) {
          return true;
        }

        if (mergeStart && Path.isAncestor(p, firstPath) && Element.isElement(n) && !editor.isVoid(n) && !editor.isInline(n)) {
          return false;
        }

        if (mergeEnd && Path.isAncestor(p, lastPath) && Element.isElement(n) && !editor.isVoid(n) && !editor.isInline(n)) {
          return false;
        }

        return true;
      };

      for (var entry of Node.nodes({
        children: fragment
      }, {
        pass: matcher
      })) {
        if (matcher(entry)) {
          matches.push(entry);
        }
      }

      var starts = [];
      var middles = [];
      var ends = [];
      var starting = true;
      var hasBlocks = false;

      for (var [node] of matches) {
        if (Element.isElement(node) && !editor.isInline(node)) {
          starting = false;
          hasBlocks = true;
          middles.push(node);
        } else if (starting) {
          starts.push(node);
        } else {
          ends.push(node);
        }
      }

      var [inlineMatch] = Editor.nodes(editor, {
        at,
        match: n => Text.isText(n) || Editor.isInline(editor, n),
        mode: 'highest',
        voids
      });
      var [, inlinePath] = inlineMatch;
      var isInlineStart = Editor.isStart(editor, at, inlinePath);
      var isInlineEnd = Editor.isEnd(editor, at, inlinePath);
      var middleRef = Editor.pathRef(editor, isBlockEnd && !ends.length ? Path.next(blockPath) : blockPath);
      var endRef = Editor.pathRef(editor, isInlineEnd ? Path.next(inlinePath) : inlinePath);
      Transforms.splitNodes(editor, {
        at,
        match: n => hasBlocks ? Editor.isBlock(editor, n) : Text.isText(n) || Editor.isInline(editor, n),
        mode: hasBlocks ? 'lowest' : 'highest',
        always: hasBlocks && (!isBlockStart || starts.length > 0) && (!isBlockEnd || ends.length > 0),
        voids
      });
      var startRef = Editor.pathRef(editor, !isInlineStart || isInlineStart && isInlineEnd ? Path.next(inlinePath) : inlinePath);
      Transforms.insertNodes(editor, starts, {
        at: startRef.current,
        match: n => Text.isText(n) || Editor.isInline(editor, n),
        mode: 'highest',
        voids
      });

      if (isBlockEmpty && !starts.length && middles.length && !ends.length) {
        Transforms.delete(editor, {
          at: blockPath,
          voids
        });
      }

      Transforms.insertNodes(editor, middles, {
        at: middleRef.current,
        match: n => Editor.isBlock(editor, n),
        mode: 'lowest',
        voids
      });
      Transforms.insertNodes(editor, ends, {
        at: endRef.current,
        match: n => Text.isText(n) || Editor.isInline(editor, n),
        mode: 'highest',
        voids
      });

      if (!options.at) {
        var path;

        if (ends.length > 0 && endRef.current) {
          path = Path.previous(endRef.current);
        } else if (middles.length > 0 && middleRef.current) {
          path = Path.previous(middleRef.current);
        } else if (startRef.current) {
          path = Path.previous(startRef.current);
        }

        if (path) {
          var _end2 = Editor.end(editor, path);

          Transforms.select(editor, _end2);
        }
      }

      startRef.unref();
      middleRef.unref();
      endRef.unref();
    });
  },

  /**
   * Insert a string of text in the Editor.
   */
  insertText(editor, text) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    Editor.withoutNormalizing(editor, () => {
      var {
        voids = false
      } = options;
      var {
        at = editor.selection
      } = options;

      if (!at) {
        return;
      }

      if (Path.isPath(at)) {
        at = Editor.range(editor, at);
      }

      if (Range.isRange(at)) {
        if (Range.isCollapsed(at)) {
          at = at.anchor;
        } else {
          var end = Range.end(at);

          if (!voids && Editor.void(editor, {
            at: end
          })) {
            return;
          }

          var start = Range.start(at);
          var startRef = Editor.pointRef(editor, start);
          var endRef = Editor.pointRef(editor, end);
          Transforms.delete(editor, {
            at,
            voids
          });
          var startPoint = startRef.unref();
          var endPoint = endRef.unref();
          at = startPoint || endPoint;
          Transforms.setSelection(editor, {
            anchor: at,
            focus: at
          });
        }
      }

      if (!voids && Editor.void(editor, {
        at
      })) {
        return;
      }

      var {
        path,
        offset
      } = at;
      if (text.length > 0) editor.apply({
        type: 'insert_text',
        path,
        offset,
        text
      });
    });
  }

};

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var Transforms = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, GeneralTransforms), NodeTransforms), SelectionTransforms), TextTransforms);


//# sourceMappingURL=index.es.js.map


/***/ }),

/***/ "./node_modules/slate/node_modules/is-plain-object/dist/is-plain-object.mjs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isPlainObject; });
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

function isObject(o) {
  return Object.prototype.toString.call(o) === '[object Object]';
}

function isPlainObject(o) {
  var ctor,prot;

  if (isObject(o) === false) return false;

  // If has modified constructor
  ctor = o.constructor;
  if (ctor === undefined) return true;

  // If has modified prototype
  prot = ctor.prototype;
  if (isObject(prot) === false) return false;

  // If constructor does not have an Object-specific method
  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  }

  // Most likely a plain Object
  return true;
}




/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 0:
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = Reactstrap;

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = Injector;

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = ReactDom;

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = Button;

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = FieldHolder;

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = Tip;

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = i18n;

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map