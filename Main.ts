import { Car } from './Car.ts';
import { TeslaFactory } from './TeslaFactory.ts';
import { BMWFactory } from './BMWFactory.ts';

function sep(title: string): void {
    console.log("  " + title);
}

function main(): void {
    sep("1. TESLA ZAVODI");
    const teslaCar = new Car(new TeslaFactory());
    teslaCar.assemble();

    sep("2. BMW ZAVODI");
    const bmwCar = new Car(new BMWFactory());
    bmwCar.assemble();

    sep("Muvaffaqiyatli yakunlandi!");
}

main();
