System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, director, systemEvent, SystemEvent, KeyCode, _dec, _class, _crd, ccclass, property, ChangeScene;

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      director = _cc.director;
      systemEvent = _cc.systemEvent;
      SystemEvent = _cc.SystemEvent;
      KeyCode = _cc.KeyCode;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d8b7amohn5MOKDdOz+3MsPP", "changeScene", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;
      /**
       * Predefined variables
       * Name = ChangeScene
       * DateTime = Thu Sep 02 2021 17:55:47 GMT+0530 (India Standard Time)
       * Author = alokraj0024
       * FileBasename = changeScene.ts
       * FileBasenameNoExtension = changeScene
       * URL = db://assets/Scripts/changeScene.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       *
       */

      _export("ChangeScene", ChangeScene = (_dec = ccclass('ChangeScene'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ChangeScene, _Component);

        function ChangeScene() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = ChangeScene.prototype;

        // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;
        _proto.changeSc = function changeSc(event) {
          switch (event.keyCode) {
            case KeyCode.KEY_A:
              director.loadScene('ExampleScene');
              break;
          }
        };

        _proto.start = function start() {// [3]
        };

        _proto.onLoad = function onLoad() {
          director.preloadScene('ExampleScene', function () {
            console.log('ExampleScene loaded in background');
          });
          systemEvent.on(SystemEvent.EventType.KEY_DOWN, this.changeSc, this);
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        return ChangeScene;
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
//# sourceMappingURL=changeScene.js.map