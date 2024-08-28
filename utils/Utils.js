export const shuffle = (array) => {
    let currentIndex = array.length;

    while (currentIndex != 0) {

        // Pick a remaining element...
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
}

const seedMe = () => Math.floor(Math.random()*100);

export const generateRoutes = (levels) => {
    const depth = levels.length;
    for(let i = 0; i < depth; i++){
        levels[i].reaches = new Set([]);
        // if the last level is being evaluated (always only one room), then no route
        if(i + 1 == depth) {
            levels[i][0].left = false;
            levels[i][0].mid = false;
            levels[i][0].right = false;
            break;
        }
        // if the first level is being evaluated (always only one room),
        // you can always go left, mid and right
        else if(i == 0){
            // handled 1, 2 and 3 rooms in second level
            levels[i][0].left = levels[i+1].length > 1 ? true : false;
            levels[i][0].mid = levels[i+1].length % 2 == 1 ? true : false; // true if next level is odd
            levels[i][0].right = levels[i+1].length > 1 ? true : false;
            continue;
        }
        // otherwise, check how many rooms there are below and calculate random routes
        else {
            const rooms = levels[i].length;
            const nextLevelRooms = levels[i+1].length;
            const roomsDiff = nextLevelRooms - rooms;
            const delta = Math.abs(roomsDiff % 2) == 1 ? 1 : 2;
            //console.log('rooms, nextLevelRooms, roomsDiff, delta', rooms, nextLevelRooms, roomsDiff, delta);
            let nextLevelRoomsReached = {}
            let allRoomsReachable = false;
            let maxIterationCounter = 0;
            while(!allRoomsReachable){
                if(++maxIterationCounter > 1000){
                    console.log('Max iterations reached!');
                    alert('pippo');
                    break;
                }
                for(let y = 0; y < nextLevelRooms; y++){
                    nextLevelRoomsReached[y] = false;
                }
                levels[i] = generateSingleLevel(levels[i], rooms, nextLevelRooms);
                for(let j = 0; j < rooms; j++){
                    //console.log('inside control loop index ', j);
                    if(levels[i][j].left){
                        const indexOfReachedRoom = j + (roomsDiff - delta)/2;
                        nextLevelRoomsReached[indexOfReachedRoom] = true;
                        //console.log('indexOfReachedRoom ', indexOfReachedRoom);
                    }
                    if(levels[i][j].right){
                        const indexOfReachedRoom = j + (roomsDiff + delta)/2;
                        nextLevelRoomsReached[indexOfReachedRoom] = true;
                        //console.log('indexOfReachedRoom ', indexOfReachedRoom);
                    }
                }
                for(let j = 0; j < nextLevelRooms; j++){
                    if(nextLevelRoomsReached[j]){
                        allRoomsReachable = true;
                    } else {
                        allRoomsReachable = false;
                        break;
                    }
                }
                console.log('nextLevelRoomsReached ', nextLevelRoomsReached);
            }
        }
    }
    return levels;
}

const generateSingleLevel = (level, rooms, nextLevelRooms) => {
    level = refreshRoutes(level);
    for(let j = 0; j < rooms; j++){
        // generate routes first (at least one route per room),
        // + forced fix on extreme rooms
        if(rooms > nextLevelRooms) {
            // mid is always false -- THERE'S ONLY ONE CASE IN WHICH IS THE ONLY ONE TRUE
            // PTHUMERU FORM 2 3rd LEVEL
            if(rooms - nextLevelRooms > 1){
                if(rooms - nextLevelRooms > 2){
                    return [{title: 'Not a valid chalice template'}];
                }
                // max diff is 2 top to bottom
                if(rooms == 3){
                    level[0].left = false;
                    level[0].mid = false;
                    level[0].right = true;
                    level[1].left = false;
                    level[1].mid = true;
                    level[1].right = false;
                    level[2].left = true;
                    level[2].mid = false;
                    level[2].right = false;
                }
            } else {
                // forced fix on extreme rooms
                // MID ALWAYS FALSE IN THIS CASE
                level[j].mid = false;
                // EXTREME LEFT first (ominous russian anthem plays...)
                if(j == 0){
                    // cannot go left, then go right
                    level[j].left = false;
                    level[j].right = true;
                } else if(j == rooms-1){
                    // cannot go right, then go left
                    level[j].left = true;
                    level[j].right = false;
                } else {
                    // all the possibilities
                    let atLeastOneRoute = false;
                    while(!atLeastOneRoute){
                        if(!level[j].left && !level[j].right){
                            level[j].left = (seedMe() % 3) == 0;
                            level[j].right = (seedMe() % 3) == 0;
                        } else {
                            atLeastOneRoute = true;
                        }
                    }
                }
            }
        } else {// this is the case (rooms < nextLevelRooms), can go anywhere
            // all the possibilities
            let atLeastOneRoute = false;
            while(!atLeastOneRoute){
                if(!level[j].left && !level[j].right){
                    level[j].left = (seedMe() % 3) == 0;
                    level[j].right = (seedMe() % 3) == 0;
                } else {
                    atLeastOneRoute = true;
                }
            }
            // MUST somehow get to the farthest rooms
            level[0].left = true;
            level[rooms-1].right = true;
        }
    }
    return level;
}

const refreshRoutes = (level) => {
    for(let i = 0; i < level.length; i++){
        level[i].left = false;
        level[i].mid = false;
        level[i].right = false;
    }
    return level;
}