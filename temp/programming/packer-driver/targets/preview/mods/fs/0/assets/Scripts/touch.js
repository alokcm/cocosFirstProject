System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, _dec, _class, _crd, ccclass, property, Touch;

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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

      ccclass = _decorator.ccclass;
      property = _decorator.property;
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

      _export("Touch", Touch = (_dec = ccclass('Touch'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Touch, _Component);

        function Touch() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = Touch.prototype;

        // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;
        _proto.start = function start() {// [3]
        };

        _proto.ontouchstart = function ontouchstart(touch, event) {
          console.log('touch started');
          console.log('Location : ' + touch.getLocation().x + ' ' + touch.getLocation().y);
        };

        _proto.onTouchAndMove = function onTouchAndMove(touch, event) {
          console.log('touch and move');
          console.log('Location : ' + touch.getLocation().x + ' ' + touch.getLocation().y);
        };

        _proto.onTouchCancel = function onTouchCancel(touch, event) {
          console.log('touch and cancel');
          console.log('Location : ' + touch.getLocation().x + ' ' + touch.getLocation().y);
        };

        _proto.onLoad = function onLoad() {
          this.node.on(Node.EventType.TOUCH_START, this.ontouchstart, this);
          this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchAndMove, this);
          this.node.on(Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        return Touch;
      }(Component)) || _class));
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