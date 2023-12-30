import { Module } from '@nestjs/common';
import { OrmAlarmPersistenceModule } from './persistence/orm/orm-persistence.module';
import { InMemoryAlarmPersistenceModule } from './persistence/in-momory/in-memory-persistence.module';
import { MongoAlarmPersistenceModule } from './persistence/MONGO/mongo-persistence.module';
import { persistenceModule as infrastructurePersistenceModule } from 'src/common/interfaces/application-bootstrap-options.interface';

@Module({})
export class AlarmsInfrastructureModule {
  static use(driver) {
    const persistenceModule = infrastructurePersistenceModule[driver];

    return {
      module: AlarmsInfrastructureModule,
      imports: [persistenceModule],
      exports: [persistenceModule],
    };
  }
}
