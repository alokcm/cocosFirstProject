
import { _decorator, Component, Node, systemEvent, SystemEvent, director } from 'cc';
const { ccclass, property } = _decorator;

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
 
@ccclass('ButtonChangeScene')
export class ButtonChangeScene extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    start () {
        // [3]
    }
    onLoad()
    {
        this.node.on(SystemEvent.EventType.MOUSE_DOWN,function(event){
            director.loadScene('ExampleScene')
        });
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
