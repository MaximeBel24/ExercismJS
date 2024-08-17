/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let count = 0
  
  for (let index = 0; index < birdsPerDay.length; index++) {
      count += birdsPerDay[index] 
  }
  return count
}
/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  
    let indiceDebut = (week - 1) * 7;
    let indiceFin = indiceDebut + 7;
    
    let sousTableau = birdsPerDay.slice(indiceDebut, indiceFin);
    
    let totalOiseaux = sousTableau.reduce((accumulateur, valeurCourante) => accumulateur + valeurCourante, 0);
    
    return totalOiseaux;
}
/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  for (let index = 0; index < birdsPerDay.length; index+=2) {
    birdsPerDay[index] ++
  }
  return birdsPerDay
}