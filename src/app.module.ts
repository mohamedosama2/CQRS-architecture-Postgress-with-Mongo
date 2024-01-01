import { Module } from '@nestjs/common';
import { AlarmsModule } from './alarms/application/alarms.module';
import { AlarmsInfrastructureModule } from './alarms/infrastructure/alarms-infrastructure.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApplicationBootstrapOptions } from './common/interfaces/application-bootstrap-options.interface';
import { CoreModule } from './core/core.module';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  imports: [CoreModule, CqrsModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  static register(options: ApplicationBootstrapOptions) {
    // 👈 new method
    return {
      module: AppModule,
      imports: [
        CoreModule.forRoot(options),
        // to make the module use the one of i need
        AlarmsModule.withInfrastucture(
          // returns the repostary of my driver
          AlarmsInfrastructureModule.use(options.driver),
        ),
        ///// if i need to use another module with another diver
        /*    AlarmsModule.withInfrastucture(
          // returns the repostary of my driver
          AlarmsInfrastructureModule.use(options.driver),

        ), */
      ],
    };
  }
}
