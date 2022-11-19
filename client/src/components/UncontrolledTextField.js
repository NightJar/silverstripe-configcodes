import withFieldHolder from 'admin/components/FieldHolder/FieldHolder';
import withNoInvalidation from 'components/higher-order/withNoInvalidation';
import { Input } from 'reactstrap';

export default withFieldHolder(withNoInvalidation(Input));
