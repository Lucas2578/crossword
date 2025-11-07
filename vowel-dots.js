const vowelDots = (str) => {
  const vowels = /[aeiou]/gi;     // matches all vowels (case-insensitive)
  return str.replace(vowels, '$&.'); // $& = the matched vowel itself
};