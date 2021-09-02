
import { _decorator, Component, Node, director, systemEvent, SystemEvent, KeyCode } from 'cc';
const { ccclass, property } = _decorator;

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
 
@ccclass('ChangeScene')
export class ChangeScene extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;


    changeSc(event)
    {
        switch(event.keyCode)
        {
            case KeyCode.KEY_A :
                director.loadScene('ExampleScene');
            break;
        }
    }
    start () {
        // [3]
    }
    onLoad()
    {
        director.preloadScene('ExampleScene',function(){
            console.log('ExampleScene loaded in background');
        });
        systemEvent.on(SystemEvent.EventType.KEY_DOWN, this.changeSc,this);
    }
    // update (deltaTime: number) {
    //     // [4]
    // }
}

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
