import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import { IsEmail, Min, IsDateString, IsInt, IsOptional, Contains, Matches, IsNotEmpty } from "class-validator";


@Entity()
export default class Car {
    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column()
    gyarto: string;

    @IsNotEmpty()
    @Column()
    tipus: string;

    @IsNotEmpty()
    @Column()
    motor: string;

    @IsNotEmpty()
    @IsInt()
    @Min(0,{message: 'A hengerűrtartalomnak nagyobbnak kell lennie nullánál'})
    @Column()
    hengerUr: number;

    @IsNotEmpty()
    @IsInt()
    @Min(0,{message: 'A maximum teljesítménynek nagyobbnak kell lennie nullánál'})
    @Column()
    maxTeljesitmeny: number;

    @IsNotEmpty()
    @IsInt()
    @Min(0,{message: 'A maximum sebességnek nagyobbnak kell lennie nullánál'})
    @Column()
    maxSebesseg: number;

    @IsOptional()
    @IsInt()
    @Min(0,{message: 'A futott versenyek számának nagyobbnak kell lennie nullánál'})
    @Column()
    futottVerseny: number;

    @IsOptional()
    @IsInt()
    @Min(0,{message: 'A győzelmek számának nagyobbnak kell lennie nullánál'})
    @Column()
    gyozelem: number;  
}