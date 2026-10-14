import type { CarFactory } from './CarFactory.ts';
import type { Engine } from './Engine.ts';
import type { Seat } from './Seat.ts';

export class Car {
    private engine: Engine;
    private seat: Seat;

    constructor(factory: CarFactory) {
        this.engine = factory.createEngine();
        this.seat   = factory.createSeat();
    }

    public assemble(): void {
        console.log("Dvigatel : " + this.engine.start());
        console.log("O'rindiq : " + this.seat.describe());
        console.log("Mashina tayyor!\n");
    }
}
