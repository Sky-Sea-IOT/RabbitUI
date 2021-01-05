import { Alert } from './components/alert';
import { Avatar } from './components/avatar';
import { Button } from './components/button';
import { LoadingBar } from './components/loading-bar';
import { Message } from './components/message';
import { Notice } from './components/notice';
import { Progress } from './components/progress';
import { Switch } from './components/switch';
import { Timeline } from './components/timeline';

//! 打包的时候这里要解除封印
// import './styles/index.less';

const components = {
  Alert,
  Avatar,
  Button,
  LoadingBar,
  Message,
  Notice,
  Progress,
  Switch,
  Timeline,
};

const Rabbit = {
  ...components,
};

export default Rabbit;
