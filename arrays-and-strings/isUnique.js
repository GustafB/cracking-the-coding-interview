// #### SORTING ####
const isUnique = (string) => {
  const orderedString = string.split('').sort((a, b) => a.localeCompare(b));
  for (let i = 0; i < orderedString.length - 1; i++) {
    const char = orderedString[i];
    const next = orderedString[i + 1];
    if (char === next) return false;
  }
  return true;
}

// #### MAP ####

const isUnique = (string) => {
  const chars = {};
  for (let i = 0; i < string.length; i++) {
    if (chars[string[i]]) return false;
    chars[string[i]] = true;
  }
  return true;
}
