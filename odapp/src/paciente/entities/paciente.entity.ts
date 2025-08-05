import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";

export class Paciente {
    @Prop({ default: () => new Types.ObjectId() })
    _id: string;

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    age: number;

    @Prop({ required: true })
    email: string;

    @Prop()
    phone: string;

    @Prop()
    address: string;

    @Prop()
    createdAt: Date;

    @Prop()
    updatedAt: Date;

    constructor(init: Partial<Paciente>) {
        Object.assign(this, init);
    }
}

export const PacienteSchema = SchemaFactory.createForClass(Paciente);
