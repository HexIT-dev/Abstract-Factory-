import type { Seat } from './Seat.ts';

export class BMWSeat implements Seat {
    public describe(): string {
        return "BMW mato o'rindiq — sport va qulay";
    }
}
