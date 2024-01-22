export function findOutlier(integers: number[]): number {
  let evens: number[] = [];
  let odds: number[] = [];
  let retValue;

  integers.forEach(element => {
    if (element % 2 === 0) evens.push(element);
    else odds.push(element)

    let evensLen = evens.length;
    let oddsLen = odds.length;
    
    if (evensLen > oddsLen) retValue = odds[0];
    else retValue = evens[0];
  });
  return retValue;
}