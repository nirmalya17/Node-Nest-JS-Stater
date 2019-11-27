import { Injectable } from '@nestjs/common';
import { get } from 'config';
import { Configuration } from './configuration.enum';

@Injectable()
export class ConfigurationService {
    private environmentHosting: string = 'development';

    get(name: string): string {
        return process.env[name] || name;
    }

    get isDevelopment(): boolean {
        return this.environmentHosting === 'development';
    }
}
