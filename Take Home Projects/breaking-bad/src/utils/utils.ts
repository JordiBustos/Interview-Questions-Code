import elements from "../config/elements";

export function validateName(name: string) {
  const regex = /^[a-zA-Z]+$/;
  return regex.test(name);
}

export function breakify(name: string) {
  let result: string[] = [];
  for (let i = 0; i < name.length; i++) {
    const oneChar = name[i].toUpperCase();
    const twoChar = `${oneChar}${name[i + 1]}`;

    if (elements.includes(twoChar)) {
      result = [name.slice(0, i), twoChar, name.slice(i + 2, name.length)];
      break;
    }
    if (elements.includes(oneChar)) {
      result = [name.slice(0, i), oneChar, name.slice(i + 1, name.length)];
      break;
    }
  }
  return result;
}
