import withFieldHolder from 'admin/components/FieldHolder/FieldHolder';
import withNoInvalidation from 'components/higher-order/withNoInvalidation';
import { Component as BaseTextField } from 'admin/components/TextField/TextField';

export default withFieldHolder(withNoInvalidation(BaseTextField));
