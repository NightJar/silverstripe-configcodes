import Injector from 'lib/Injector';
import RichCodeTextInput from 'components/RichCodeTextInput';

export default () => {
  Injector.component.registerMany({
    ShortcodableTextField: RichCodeTextInput,
  });
};
