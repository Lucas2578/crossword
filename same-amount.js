function sameAmount(str, regex1, regex2) {
  // make sure we get *all* matches by adding the global flag
  const r1 = new RegExp(regex1.source, regex1.flags.includes('g') ? regex1.flags : regex1.flags + 'g');
  const r2 = new RegExp(regex2.source, regex2.flags.includes('g') ? regex2.flags : regex2.flags + 'g');

  const matches1 = str.match(r1) || [];
  const matches2 = str.match(r2) || [];

  return matches1.length === matches2.length;
}