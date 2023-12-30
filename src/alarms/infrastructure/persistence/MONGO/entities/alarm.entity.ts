import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type AlarmDocument = Alarm & mongoose.Document;

@Schema({ timestamps: true })
export class Alarm {
  id?: string;

  @Prop()
  name: string;
  
  @Prop()
  severity: string;
}
const AlarmSchema = SchemaFactory.createForClass(Alarm);
export { AlarmSchema };
