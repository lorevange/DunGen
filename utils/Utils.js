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
            for(let j = 0; j < rooms; j++){
                // generate routes first (at least one route per room),
                // + forced fix on extreme rooms
                if(rooms == nextLevelRooms){
                    // forced fix on extreme rooms
                    // EXTREME LEFT first (ominous russian anthem plays...)
                    if(j == 0){
                        // set always FALSE to the left
                        levels[i][j].left = false;
                        let atLeastOneRoute = false;
                        // cycle until you generate at least one route
                        while(!atLeastOneRoute){
                            if(!levels[i][j].mid && !levels[i][j].right){
                                levels[i][j].mid = (seedMe() % 3) == 0;
                                levels[i][j].right = (seedMe() % 3) == 0;
                            } else {
                                atLeastOneRoute = true;
                            }
                        }
                    } else if(j == rooms-1){
                        // set always FALSE to the right
                        levels[i][j].right = false;
                        let atLeastOneRoute = false;
                        // cycle until you generate at least one route
                        while(!atLeastOneRoute){
                            if(!levels[i][j].left && !levels[i][j].mid){
                                levels[i][j].left = (seedMe() % 3) == 0;
                                levels[i][j].mid = (seedMe() % 3) == 0;
                            } else {
                                atLeastOneRoute = true;
                            }
                        }
                    } else {
                        // all the possibilities
                        let atLeastOneRoute = false;
                        while(!atLeastOneRoute){
                            if(!levels[i][j].left && !levels[i][j].mid && !levels[i][j].right){
                                levels[i][j].left = (seedMe() % 3) == 0;
                                levels[i][j].mid = (seedMe() % 3) == 0;
                                levels[i][j].right = (seedMe() % 3) == 0;
                            } else {
                                atLeastOneRoute = true;
                            }
                        }
                    }
                } else if(rooms > nextLevelRooms) {
                    // mid is always false -- THERE'S ONLY ONE CASE IN WHICH IS THE ONLY ONE TRUE
                    // PTHUMERU FORM 2 3rd LEVEL
                    if(rooms - nextLevelRooms > 1){
                        if(rooms - nextLevelRooms > 2){
                            return [{title: 'Not a valid chalice template'}];
                        }
                        // max diff is 2 top to bottom
                        if(rooms == 3){
                            levels[i][0].left = false;
                            levels[i][0].mid = false;
                            levels[i][0].right = true;
                            levels[i][1].left = false;
                            levels[i][1].mid = true;
                            levels[i][1].right = false;
                            levels[i][2].left = true;
                            levels[i][2].mid = false;
                            levels[i][2].right = false;
                        }
                    }
                    // forced fix on extreme rooms
                    // MID ALWAYS FALSE IN THIS CASE
                    levels[i][j].mid = false;
                    // EXTREME LEFT first (ominous russian anthem plays...)
                    if(j == 0){
                        // cannot go left, then go right
                        levels[i][j].left = false;
                        levels[i][j].right = true;
                    } else if(j == rooms-1){
                        // cannot go right, then go left
                        levels[i][j].left = true;
                        levels[i][j].right = false;
                    } else {
                        // all the possibilities
                        let atLeastOneRoute = false;
                        while(!atLeastOneRoute){
                            if(!levels[i][j].left && !levels[i][j].right){
                                levels[i][j].left = (seedMe() % 3) == 0;
                                levels[i][j].right = (seedMe() % 3) == 0;
                            } else {
                                atLeastOneRoute = true;
                            }
                        }
                    }
                } else {// this is the case (rooms < nextLevelRooms), can go anywhere
                    // all the possibilities
                    let atLeastOneRoute = false;
                    while(!atLeastOneRoute){
                        if(!levels[i][j].left && !levels[i][j].right){
                            levels[i][j].left = (seedMe() % 3) == 0;
                            levels[i][j].right = (seedMe() % 3) == 0;
                        } else {
                            atLeastOneRoute = true;
                        }
                    }
                    // MUST somehow get to the farthest rooms
                    levels[i][0].left = true;
                    levels[i][rooms-1].right = true;
                }
            }
        }
    }
    return levels;
}