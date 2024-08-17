// @ts-nocheck
export function createScoreBoard() {
    return {"The Best Ever" : 1000000}
  }
  export function addPlayer(scoreBoard, player, score) {
    scoreBoard[player] = score;
    return scoreBoard;
  }
  export function removePlayer(scoreBoard, player) {
    delete scoreBoard[player];
    return scoreBoard;
  }
  export function updateScore(scoreBoard, player, points) {
    scoreBoard[player] += points;
    return scoreBoard;
  }
  export function applyMondayBonus(scoreBoard) {
    for(let x in scoreBoard){
      scoreBoard[x] += 100;
    }
    return scoreBoard;
  }
  /**
   * Normalizes a score with the provided normalization function.
   *
   * @param {Params} params the parameters for performing the normalization
   * @returns {number} normalized score
   */
  export function normalizeScore(params) {
    return params.normalizeFunction(params.score);
  }