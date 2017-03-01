import { Place } from './place';
import { User } from './user';

export class Schedule {
	constructor(
        public id: number,
        public day: number,
        public courseName: string,
        public start: string,
        public end: string,
        public user_id: number,
        public place_id: number,
        public created_at: string,
        public updated_at: string,
        public place?: Place,
        public user?: User

    ) {}
}
