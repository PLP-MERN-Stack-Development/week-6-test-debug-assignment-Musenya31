function validateBug({ title, description }) {
  if (!title || !description) return false;
  if (title.length < 3) return false;
  return true;
}
module.exports = validateBug; 