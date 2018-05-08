import PropTypes from 'prop-types';
import styled from 'styled-components';
import { retrieveTheme } from '@zendesk/garden-react-theming';
import { FauxInput } from '@zendesk/garden-react-textfields';

import { version } from '../../package.json';
const COMPONENT_ID = 'select.select_view';
const VALIDATION = {
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error'
};

const SelectView = styled(FauxInput).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': version,
  select: true
})`
  cursor: default;

  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

SelectView.propTypes = {
  inputRef: PropTypes.func,
  /** Allows flush spacing of Tab elements */
  tagLayout: PropTypes.bool,
  /** Applies flex layout to support MediaFigure components */
  mediaLayout: PropTypes.bool,
  small: PropTypes.bool,
  /** Removes all borders and styling */
  bare: PropTypes.bool,
  disabled: PropTypes.bool,
  focused: PropTypes.bool,
  hovered: PropTypes.bool,
  /** Displays select open state */
  open: PropTypes.bool,
  validation: PropTypes.oneOf([VALIDATION.SUCCESS, VALIDATION.WARNING, VALIDATION.ERROR])
};

/** @component */
export default SelectView;