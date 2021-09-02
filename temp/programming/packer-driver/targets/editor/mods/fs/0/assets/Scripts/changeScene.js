System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, director, systemEvent, SystemEvent, KeyCode, _dec, _class, _crd, ccclass, property, ChangeScene;

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

      ({
        ccclass,
        property
      } = _decorator);
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

      _export("ChangeScene", ChangeScene = (_dec = ccclass('ChangeScene'), _dec(_class = class ChangeScene extends Component {
        // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;
        changeSc(event) {
          switch (event.keyCode) {
            case KeyCode.KEY_A:
              director.loadScene('ExampleScene');
              break;
          }
        }

        start() {// [3]
        }

        onLoad() {
          director.preloadScene('ExampleScene', function () {
            console.log('ExampleScene loaded in background');
          });
          systemEvent.on(SystemEvent.EventType.KEY_DOWN, this.changeSc, this);
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
//# sourceMappingURL=changeScene.js.map