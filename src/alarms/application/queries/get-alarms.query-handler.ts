import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Alarm } from '../../domain/alarm';
import { GetAlarmsQuery } from './get-alarms.query';
import { AlarmRepository } from '../ports/alarm.repository';
import { Logger } from '@nestjs/common';

@QueryHandler(GetAlarmsQuery)
export class GetAlarmsQueryHandler
  implements IQueryHandler<GetAlarmsQuery, Alarm[]>
{
  constructor(private readonly alarmRepository: AlarmRepository) {}
  private readonly logger = new Logger(GetAlarmsQuery.name);

  async execute(query: GetAlarmsQuery): Promise<Alarm[]> {
    this.logger.debug(
        `Processing "GetAlarmsQuery": ${JSON.stringify(query)}`,
      );
    return this.alarmRepository.findAll();
  }
}