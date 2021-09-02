System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, SystemEvent, director, _dec, _class, _crd, ccclass, property, ButtonChangeScene;

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      SystemEvent = _cc.SystemEvent;
      director = _cc.director;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0b45bodxv5K+pf9ghsv23fb", "buttonChangeScene", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;
      /**
       * Predefined variables
       * Name = ButtonChangeScene
       * DateTime = Thu Sep 02 2021 18:19:51 GMT+0530 (India Standard Time)
       * Author = alokraj0024
       * FileBasename = buttonChangeScene.ts
       * FileBasenameNoExtension = buttonChangeScene
       * URL = db://assets/Scripts/buttonChangeScene.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       *
       */

      _export("ButtonChangeScene", ButtonChangeScene = (_dec = ccclass('ButtonChangeScene'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ButtonChangeScene, _Component);

        function ButtonChangeScene() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = ButtonChangeScene.prototype;

        // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;
        _proto.start = function start() {// [3]
        };

        _proto.onLoad = function onLoad() {
          this.node.on(SystemEvent.EventType.MOUSE_DOWN, function (event) {
            director.loadScene('ExampleScene');
          });
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        return ButtonChangeScene;
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
//# sourceMappingURL=buttonChangeScene.js.map