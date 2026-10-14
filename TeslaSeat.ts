import type { Seat } from './Seat.ts';

export class TeslaSeat implements Seat {
    public describe(): string {
        return "Tesla charm o'rindiq — hashamatli va yumshoq";
    }
}
