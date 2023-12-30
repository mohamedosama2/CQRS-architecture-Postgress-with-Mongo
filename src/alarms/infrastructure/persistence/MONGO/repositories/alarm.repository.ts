import { Injectable } from '@nestjs/common';

import { AlarmRepository } from '../../../../application/ports/alarm.repository';
import { Alarm } from '../../../../domain/alarm';
import { AlarmMapper } from '../mappers/alarm.mapper';
import {
  AlarmDocument,
  Alarm as AlarmModelMongo,
} from '../entities/alarm.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class MongoAlarmRepository implements AlarmRepository {
  constructor(
    @InjectModel(AlarmModelMongo.name) private alarmModel: Model<AlarmDocument>,
  ) {
    console.log("Hello Mogo Repo")
  }

  async findAll(): Promise<Alarm[]> {
    const entities = await this.alarmModel.find();
    return entities.map((item) => AlarmMapper.toDomain(item));
  }

  async save(alarm: Alarm): Promise<Alarm> {
    const persistenceModel = AlarmMapper.toPersistence(alarm);
    const newEntity = (await this.alarmModel.create(persistenceModel)).save();
    return (await newEntity).toObject();
  }
}
