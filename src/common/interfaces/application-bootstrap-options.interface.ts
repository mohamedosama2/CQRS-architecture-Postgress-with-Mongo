import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { InMemoryAlarmPersistenceModule } from 'src/alarms/infrastructure/persistence/in-momory/in-memory-persistence.module';
import { OrmAlarmPersistenceModule } from 'src/alarms/infrastructure/persistence/orm/orm-persistence.module';

export interface ApplicationBootstrapOptions {
  driver: 'orm' | 'in-memory';
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
    MongooseModule.forRoot(
      'mongodb+srv://mo:18sHaAoRuTOiIAG0@cluster0.mkzmq.mongodb.net/advanced-arch',
    ),
  ],

  'in-memory': [],
};
export const persistenceModule = {
  orm: OrmAlarmPersistenceModule,
  'in-memory': InMemoryAlarmPersistenceModule,
};
