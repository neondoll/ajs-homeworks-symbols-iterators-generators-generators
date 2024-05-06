export default function canIterate(obj) {
  try {
    return obj[Symbol.iterator] !== undefined;
  } catch (error) {
    return false;
  }
}
