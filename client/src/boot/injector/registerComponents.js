import Injector from 'admin/lib/Injector.js';
import RichInput from 'components/RichInput.jsx';

export default () => {
  Injector.component.registerMany({
    ShortcodableTextField: RichInput,
  });
};
