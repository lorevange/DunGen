export default class Level {
    constructor(){
        this.rooms = [];
    }

    addRoom(room) {
        this.rooms.push(room);
    }
}