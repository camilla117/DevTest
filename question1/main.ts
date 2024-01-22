export function isValidWalk(walk: string[]) {
  let north = 0;
  let south = 0;
  let east = 0;
  let west = 0;
  let resp = false;

  if (walk.length == 10) {
    walk.forEach(element => {
        if (element == 'n') north++;
        else if (element == 's') south++;
        else if (element == 'w') west++;
        else if (element == 'e') east++;
    });
    if (north == south && west == east) resp = true
  }
  return resp
}

