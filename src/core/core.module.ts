import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import {
  ApplicationBootstrapOptions,
  bootstrapConnections,
} from '../common/interfaces/application-bootstrap-options.interface';

@Module({})
export class CoreModule {
  static forRoot(options: ApplicationBootstrapOptions) {
    const imports = bootstrapConnections[options.driver];
    return {
      module: CoreModule,
      imports,
    };
  }
}
