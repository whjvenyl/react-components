/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import CalloutStyles from '@zendeskgarden/css-callouts';
import { retrieveTheme } from '@zendeskgarden/react-theming';

import { version } from '../../package.json';
const COMPONENT_ID = 'notifications.close';

/**
 * Used to close a Notification. Supports all `<button>` props
 */
const Close = styled.button.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': version,
  className: props =>
    classNames(CalloutStyles['c-callout__close'], {
      // State
      [CalloutStyles['is-focused']]: props.focused,
      [CalloutStyles['is-hovered']]: props.hovered
    })
})`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

Close.propTypes = {
  focused: PropTypes.bool,
  hovered: PropTypes.bool
};

/** @component */
export default Close;
