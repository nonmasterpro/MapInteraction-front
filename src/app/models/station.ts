export class Station {
constructor(
        public id: number,
        public name: string,
        public x: number,
        public y: number,
        public created_at: string,
        public updated_at: string,
        public bus_routes?: any
    ) {}
}
