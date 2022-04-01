import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn("uuid")
    uuid: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    isAdm: boolean;

    @Column({
        type: 'timestamptz',
        default: () => 'NOW()'
    })
    createdOn: String;

    @Column({
        type: 'timestamptz',
        default: () => 'NOW()'
    })
    updatedOn: String;

}
