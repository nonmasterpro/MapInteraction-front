import { Place } from './place';
export class Route {
	constructor(
        public id: number,
        public name: string,
        public created_at: string,
        public updated_at: string,
        public place?: Place,
        public bus_station?: any

    ) {}
}
