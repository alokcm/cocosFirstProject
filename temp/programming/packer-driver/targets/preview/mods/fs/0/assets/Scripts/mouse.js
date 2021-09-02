System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, _dec, _class, _crd, ccclass, property, Mouse;

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

      _cclegacy._RF.push({}, "9b243DgKXFKdou7TRyQm0/k", "mouse", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;
      /**
       * Predefined variables
       * Name = Mouse
       * DateTime = Thu Sep 02 2021 15:30:35 GMT+0530 (India Standard Time)
       * Author = alokraj0024
       * FileBasename = mouse.ts
       * FileBasenameNoExtension = mouse
       * URL = db://assets/Scripts/mouse.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       *
       */

      _export("Mouse", Mouse = (_dec = ccclass('Mouse'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Mouse, _Component);

        function Mouse() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = Mouse.prototype;

        // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;
        _proto.start = function start() {// [3]
        };

        _proto.onLoad = function onLoad() {
          this.node.on(Node.EventType.MOUSE_DOWN, function (event) {
            console.log('the bush has been pressed');
            this.enabled = false;
          }.bind(this));
          this.node.on(Node.EventType.MOUSE_UP, function (event) {
            console.log('the bush has been released');
            this.enabled = false;
          }.bind(this));
          this.node.on(Node.EventType.MOUSE_WHEEL, function (event) {
            console.log('scroll is pressed');
            this.enabled = false;
          }.bind(this));
          this.node.on(Node.EventType.MOUSE_ENTER, function (event) {
            console.log('the mouse is on the bush but not yet clicked');
            this.enabled = false;
          }.bind(this));
          this.node.on(Node.EventType.MOUSE_LEAVE, function (event) {
            console.log('the mouse is no longer on the bush');
            this.enabled = false;
          }.bind(this));
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        return Mouse;
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
//# sourceMappingURL=mouse.js.map