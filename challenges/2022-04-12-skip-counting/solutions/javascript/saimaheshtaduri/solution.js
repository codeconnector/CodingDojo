const skipCounting = (playerCount, tileCount) => {

    let last_tile_index = 0;
    let last_tile = 0;
    
    let result = [ 0 ];
    let scores = new Array(playerCount).fill(0);
    
    for(let r = 1; r < tileCount; r++){
        const new_index = (last_tile_index + 2) % r;
        if(new_index == 0){
            result.push(++last_tile);
            last_tile_index = result.length - 1;
        }else{
            result.splice(new_index,0,++last_tile);
            last_tile_index = new_index;
        }
    
    }
    
    result.forEach((val, ind) => {
        const player = val%playerCount;
        scores[player] += (val * ind); 
    })
    
     return Math.max(...scores);
     
}