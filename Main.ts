import { Car } from './Car.ts';
import { TeslaFactory } from './TeslaFactory.ts';
import { BMWFactory } from './BMWFactory.ts';

function name(title: string): void {
    console.log("  " + title);
}

function main(): void {
    name("TESLA ZAVODI");
    const teslaCar = new Car(new TeslaFactory());
    teslaCar.assemble();

    name("BMW ZAVODI");
    const bmwCar = new Car(new BMWFactory());
    bmwCar.assemble();

    name("Muvaffaqiyatli yakunlandi");
}

main();
