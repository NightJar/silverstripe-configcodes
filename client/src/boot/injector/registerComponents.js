import Injector from 'lib/Injector';
import { RichInput } from 'components/RichInput';

export default () => {
  Injector.component.registerMany({
    ShortcodableTextField: RichInput,
  });
};
