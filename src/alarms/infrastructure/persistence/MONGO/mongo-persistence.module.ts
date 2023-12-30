import { Module } from '@nestjs/common';
import { AlarmRepository } from '../../../application/ports/alarm.repository';
import { MongoAlarmRepository } from './repositories/alarm.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Alarm, AlarmSchema } from './entities/alarm.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Alarm.name,
        schema: AlarmSchema,
      },
    ]),
  ],
  providers: [
    {
      provide: AlarmRepository,
      useClass: MongoAlarmRepository, // 💡 This is where we bind the port to an adapter
    },
  ],
  exports: [AlarmRepository],
})
export class MongoAlarmPersistenceModule {
  constructor() {
    console.log('Hello Mongo');
  }
}
