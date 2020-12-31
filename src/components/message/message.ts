class Message {
  VERSION: string;
  prefixCls: string;
  components: any;

  constructor() {
    this.VERSION = 'v1.0';
    this.prefixCls = 'rab-message';
    this.components = [];
  }

  private _createInstance() {}
}

export default Message;
