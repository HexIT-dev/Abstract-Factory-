import type { Engine } from './Engine.ts';
import type { Seat } from './Seat.ts';

export interface CarFactory {
    createEngine(): Engine;
    createSeat(): Seat;
}
