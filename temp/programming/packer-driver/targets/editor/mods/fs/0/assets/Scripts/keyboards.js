System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, SystemEvent, systemEvent, KeyCode, _dec, _class, _crd, ccclass, property, Keyboards;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      SystemEvent = _cc.SystemEvent;
      systemEvent = _cc.systemEvent;
      KeyCode = _cc.KeyCode;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5278aX9FsNJB7s5gpOpdQGB", "keyboards", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = Keyboards
       * DateTime = Thu Sep 02 2021 14:13:26 GMT+0530 (India Standard Time)
       * Author = alokraj0024
       * FileBasename = keyboards.ts
       * FileBasenameNoExtension = keyboards
       * URL = db://assets/Scripts/keyboards.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       *
       */

      _export("Keyboards", Keyboards = (_dec = ccclass('Keyboards'), _dec(_class = class Keyboards extends Component {
        // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;
        checkKey(event) {
          switch (event.keyCode) {
            case KeyCode.KEY_A:
              console.log('A pressed');
              break;

            case KeyCode.KEY_B:
              console.log('B pressed');
              break;
          }
        }

        onLoad() {
          systemEvent.on(SystemEvent.EventType.KEY_DOWN, this.checkKey, this);
        }

        start() {// [3]
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
//# sourceMappingURL=keyboards.js.map