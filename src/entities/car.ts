import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export default class Car {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    gyarto: string;

    @Column()
    tipus: string;

    @Column()
    motor: string;

    @Column()
    hengerUr: number;

    @Column()
    maxTeljesitmeny: number;

    @Column()
    maxSebesseg: number;

    @Column( { default: 0 } )
    futottVerseny: number;

    @Column( { default: 0 } )
    gyozelem: number;  
}