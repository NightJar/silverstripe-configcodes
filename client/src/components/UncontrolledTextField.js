import withFieldHolder from 'admin/components/FieldHolder/FieldHolder';
import withNoInvalidation from 'components/higher-order/withNoInvalidation';
import { Input } from 'reactstrap'; // eslint-disable-line import/no-extraneous-dependencies

export default withFieldHolder(withNoInvalidation(Input));
