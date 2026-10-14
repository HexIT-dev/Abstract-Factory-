import type { CarFactory } from './CarFactory.ts';
import type { Engine } from './Engine.ts';
import type { Seat } from './Seat.ts';
import { BMWEngine } from './BMWEngine.ts';
import { BMWSeat } from './BMWSeat.ts';

export class BMWFactory implements CarFactory {
    public createEngine(): Engine {
        return new BMWEngine();
    }

    public createSeat(): Seat {
        return new BMWSeat();
    }
}
