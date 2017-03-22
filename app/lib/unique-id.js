module.exports = function(){
  // Convert random num to base36 (1-9 and A-Z)
  // Infinitesimal but non-zero chance of generating a duplicate, use with caution
  return Math.floor(Math.random() * 65535);
}