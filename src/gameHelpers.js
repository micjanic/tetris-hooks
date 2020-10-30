export const STAGE_WIDTH = 12
export const STAGE_HEIGHT = 20

export const createStage = () =>
    Array.from(Array(STAGE_HEIGHT), () =>
        new Array(STAGE_WIDTH).fill([0, 'clear'])
    )

export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
    for (let y = 0; y < player.tetromino.length; y++) {
        for (let x = 0; x < player.tetromino[y].length; x++) {
            // 1 check that we're on an actual tetromino cell
            if (player.tetromino[y][x] !== 0) {
                debugger
                if (
                    //2 check that our move is inside the game area's height (y)
                    //we shouldn't go though the bottom of the play area
                    // prettier-ignore
                    !stage[y + (player.pos.y + moveY)] ||
                    //3 check that our move is inside the game areas width (x)
                    !stage[y + (player.pos.y + moveY)][x + (player.pos.x + moveX)] ||
                    //4 check that cell isn't set to clear
                    stage[y + (player.pos.y + moveY)][x + (player.pos.x + moveX)][1] !== 'clear'
                ) {
                    return true
                }
            }
        }
    }
}
