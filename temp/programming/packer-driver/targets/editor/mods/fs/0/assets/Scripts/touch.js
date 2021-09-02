System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, _dec, _class, _crd, ccclass, property, Touch;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "885e7Gec/pK0ZF6tgjuK7w5", "touch", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = Touch
       * DateTime = Thu Sep 02 2021 16:22:41 GMT+0530 (India Standard Time)
       * Author = alokraj0024
       * FileBasename = touch.ts
       * FileBasenameNoExtension = touch
       * URL = db://assets/Scripts/touch.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       *
       */

      _export("Touch", Touch = (_dec = ccclass('Touch'), _dec(_class = class Touch extends Component {
        // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;
        start() {// [3]
        }

        ontouchstart(touch, event) {
          console.log('touch started');
          console.log('Location : ' + touch.getLocation().x + ' ' + touch.getLocation().y);
        }

        onTouchAndMove(touch, event) {
          console.log('touch and move');
          console.log('Location : ' + touch.getLocation().x + ' ' + touch.getLocation().y);
        }

        onTouchCancel(touch, event) {
          console.log('touch and cancel');
          console.log('Location : ' + touch.getLocation().x + ' ' + touch.getLocation().y);
        }

        onLoad() {
          this.node.on(Node.EventType.TOUCH_START, this.ontouchstart, this);
          this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchAndMove, this);
          this.node.on(Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.3/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.3/manual/en/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.3/manual/en/scripting/life-cycle-callbacks.html
       */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=touch.js.map