import type { Engine } from './Engine.ts';

export class TeslaEngine implements Engine {
    public start(): string {
        return "Tesla dvigatel ishga tushdi";
    }
}
