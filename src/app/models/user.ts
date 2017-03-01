import { Schedule } from './schedule';

export class User {
    constructor(
        public id: number,
        public email: string,
        public name: string,
        public roleName: string,
        public created_at: string,
        public updated_at: string,
        public schedules?: Schedule
    ) {}
}
