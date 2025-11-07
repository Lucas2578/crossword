const vowels = /[aeiou]/gi; 
const vowelDots = (str) => {    // matches all vowels (case-insensitive)
  return str.replace(vowels, '$&.'); // $& = the matched vowel itself
};