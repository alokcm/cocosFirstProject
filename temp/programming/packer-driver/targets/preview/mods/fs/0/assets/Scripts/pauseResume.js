System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, systemEvent, _dec, _class, _crd, ccclass, property, PauseResume;

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      systemEvent = _cc.systemEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c9184QgyHVEkrCYAiaccWuf", "pauseResume", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;
      /**
       * Predefined variables
       * Name = PauseResume
       * DateTime = Thu Sep 02 2021 18:28:20 GMT+0530 (India Standard Time)
       * Author = alokraj0024
       * FileBasename = pauseResume.ts
       * FileBasenameNoExtension = pauseResume
       * URL = db://assets/Scripts/pauseResume.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       *
       */

      _export("PauseResume", PauseResume = (_dec = ccclass('PauseResume'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PauseResume, _Component);

        function PauseResume() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = PauseResume.prototype;

        // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;
        _proto.start = function start() {// [3]
        };

        _proto.onLoad = function onLoad() {
          systemEvent.on(SystemEvent.EventType.KEY);
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        return PauseResume;
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
//# sourceMappingURL=pauseResume.js.map