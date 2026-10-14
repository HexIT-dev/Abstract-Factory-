import type { CarFactory } from './CarFactory.ts';
import type { Engine } from './Engine.ts';
import type { Seat } from './Seat.ts';
import { TeslaEngine } from './TeslaEngine.ts';
import { TeslaSeat } from './TeslaSeat.ts';

export class TeslaFactory implements CarFactory {
    public createEngine(): Engine {
        return new TeslaEngine();
    }

    public createSeat(): Seat {
        return new TeslaSeat();
    }
}
