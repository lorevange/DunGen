export default class Room {
    constructor(fetchedRoom, levelNumber, index){
        this.title = fetchedRoom.title;
        this.effect = fetchedRoom.effect;
        this.levelNumber = levelNumber;
        this.index = index;
        this.accessible = levelNumber == 0 ? true : false;
        this.selectable = levelNumber == 0 ? true : false;
        this.selected = false;
        this.current = false;
        this.left = false;
        this.mid = false;
        this.right = false;
    }
}