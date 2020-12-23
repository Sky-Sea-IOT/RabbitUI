import './styles/index.less';

import Alert from './components/alert';

export default {
  Alert,
};

const _Alert = new Alert();
_Alert.config('#username').onClose(() => {
  alert(1);
});
