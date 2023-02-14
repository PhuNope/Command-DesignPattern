import { _decorator, Component, Node } from 'cc';
import { Invoker } from './Invoker';
import { SimpleCommand } from './SimpleCommand';
import { Receiver } from './Receiver';
import { ComplexCommand } from './ComplexCommand';

const { ccclass, property } = _decorator;

@ccclass('main')
export class main extends Component {
    start() {
        const invoker = new Invoker();
        invoker.setOnStart(new SimpleCommand('Say Hi!'));
        const receiver = new Receiver();
        invoker.setOnFinish(new ComplexCommand(receiver, 'Send email', 'Save report'));

        invoker.doSomethingImportant();
    }

    update(deltaTime: number) {

    }
}


