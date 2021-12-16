
function sortStringsByVowels(strings){

  let results = strings.sort(function(a, b){
    return longestVowel(b) - longestVowel(a)
  });
  
  return results;
  }
  
  function longestVowel(str) {
    let longest = 0
    let current = 0
    const vowels = ['a', 'e', 'i', 'o', 'u']
    
    for(let i = 0; i < str.length; i++) {
      
      if (vowels.includes(str[i].toLowerCase())) {
        current++;    
      }  else {
        longest = current > longest ? current : longest
        current = 0
      }
    }
    longest = current > longest ? current : longest
    return longest
  }