import type { Engine } from './Engine.ts';

export class BMWEngine implements Engine {
    public start(): string {
        return "BMW dvigatel ishga tushdi";
    }
}
