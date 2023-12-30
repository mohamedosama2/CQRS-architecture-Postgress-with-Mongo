import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { InMemoryAlarmPersistenceModule } from 'src/alarms/infrastructure/persistence/in-momory/in-memory-persistence.module';
import { OrmAlarmPersistenceModule } from 'src/alarms/infrastructure/persistence/orm/orm-persistence.module';
import { MongoAlarmPersistenceModule } from 'src/alarms/infrastructure/persistence/MONGO/mongo-persistence.module';

export interface ApplicationBootstrapOptions {
  driver: 'orm' | 'in-memory' | 'mongo';
}

export const bootstrapConnections = {
  orm: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'silly.db.elephantsql.com',
      port: 5432,
      password: 'jidvJGjSIyf0-dZQ4qpYTO7xTnj1j3F9',
      username: 'yetehmyn',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  mongo: [
    MongooseModule.forRoot(
      'mongodb+srv://mo:18sHaAoRuTOiIAG0@cluster0.mkzmq.mongodb.net/advanced-arch',
    ),
  ],
  'in-memory': [],
};
export const persistenceModule = {
  orm: OrmAlarmPersistenceModule,
  mongo: MongoAlarmPersistenceModule,
  'in-memory': InMemoryAlarmPersistenceModule,
};
