
import { Connection, Repository } from 'typeorm';
import { Inputs } from './inputs.entity';

export const inputsProviders = [
  {
    provide: 'INPUTS_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Inputs),
    inject: ['DATABASE_CONNECTION'],
  },
];
