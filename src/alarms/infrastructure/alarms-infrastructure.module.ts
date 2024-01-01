import { Module } from '@nestjs/common';
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
