/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
    switch (name) {
      case 'Pure Strawberry Joy':
        return 0.5;
        break;
      case 'Energizer'  :
        return 1.5;
        break;
      case 'Green Garden'  :
        return 1.5;
        break;
      case 'Tropical Island' :
        return 3;
        break;
      case 'All or Nothing' :
        return 5;
        break;
      default :
        return 2.5;
    }
  }
  /**
   * Calculates the number of limes that need to be cut
   * to reach a certain supply.
   *
   * @param {number} wedgesNeeded
   * @param {string[]} limes
   * @returns {number} number of limes cut
   */
  export function limesToCut(wedgesNeeded, limes) {
    let limesCut = 0
    let wedgesMissing = wedgesNeeded 
    let index = 0
    
    while (wedgesMissing > 0 && index < limes.length) {
        switch(limes[index]) {
        case 'small' : 
          wedgesMissing -= 6;
          break;
        case 'medium' :
          wedgesMissing -= 8;
          break;
        case 'large' :
          wedgesMissing -= 10;
          break;
        default :
          break
        }
        index ++
        limesCut ++ 
    }
    return limesCut;
  }
  /**
   * Determines which juices still need to be prepared after the end of the shift.
   *
   * @param {number} timeLeft
   * @param {string[]} orders
   * @returns {string[]} remaining orders after the time is up
   */
  export function remainingOrders(timeLeft, orders) {
    
    do {
      timeLeft -= timeToMixJuice(orders[0]);
      orders.shift();
      
    } while (timeLeft > 0 && orders.length > 0)
    return orders;
  }
  