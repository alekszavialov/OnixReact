import PropTypes from 'prop-types';

import '../../../scss/components/layout/page/page.scss';

export default function PageView({ childrens }) {
  return { ...childrens };
}

PageView.propTypes = {
  childrens: PropTypes.node.isRequired
};
