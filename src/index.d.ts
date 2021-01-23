import Alert from './components/alert';
import Avatar from './components/avatar';
import Badge from './components/badge';
import Button from './components/button';
import Card from './components/card';
import Divider from './components/divider';
import Poptip from './components/poptip';
import Progress from './components/progress';
import Steps from './components/steps';
import Switch from './components/switch';
import Time from './components/time';
import Timeline from './components/timeline';
import Tooltip from './components/tooltip';
import './styles/index.less';
declare const Rabbit: {
    Alert: typeof Alert;
    Avatar: typeof Avatar;
    Badge: typeof Badge;
    Button: typeof Button;
    Card: typeof Card;
    Divider: typeof Divider;
    Loading: import("./components/loading-bar/loading-bar").default;
    Message: import("./components/message/message").default;
    Notice: import("./components/notice/notice").default;
    Poptip: typeof Poptip;
    Progress: typeof Progress;
    Steps: typeof Steps;
    Switch: typeof Switch;
    Time: typeof Time;
    Timeline: typeof Timeline;
    Tooltip: typeof Tooltip;
};
export default Rabbit;
