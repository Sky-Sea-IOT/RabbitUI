import Alert from './components/alert';
import Avatar from './components/avatar';
import Badge from './components/badge';
import Button from './components/button';
import Card from './components/card';
import Divider from './components/divider';
import Drawer from './components/drawer';
import Loading from './components/loading-bar';
import Message from './components/message';
import Modal from './components/modal';
import Notice from './components/notice';
import Poptip from './components/poptip';
import Progress from './components/progress';
import Spin from './components/spin';
import Steps from './components/steps';
import Switch from './components/switch';
import Time from './components/time';
import Timeline from './components/timeline';
import Tooltip from './components/tooltip';

//! 整个项目完成后以下代码都要注释或删除
//! 打包的时候这里要解除封印
// import './styles/index.less';

// @ts-ignore
// 需要将 Rabbit 导出为全局变量 ，解决打包后无法调用的问题
export default window.Rabbit = {
    Alert,
    Avatar,
    Badge,
    Button,
    Card,
    Divider,
    Drawer,
    Loading,
    Message,
    Modal,
    Notice,
    Poptip,
    Progress,
    Spin,
    Steps,
    Switch,
    Time,
    Timeline,
    Tooltip
};
