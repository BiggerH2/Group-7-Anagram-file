function checkAnagrams(str1, str2){
//Remove non-word characters and convert to lowercase
const cleanString1 = string1.replace(/\W/g, '').toLowerCase();
const cleanString2 = string2.replace(/\W/g, '').toLowerCase();

//Sort the characters in the strings
const sortedString1 = cleanString1.split('').sort().join('');
const sortedString2 = cleanString2.split('').sort().join('');

//Compare the sorted strings
return sortedString1 === sortedString2;
}

//Define the strings
const string1 = 'listen';
const string2 = 'silent';

//Test the function
if(checkAnagrams(string1, string2)){  
    console.log('{string1} and {string2} are anagrams');
}
else{
    console.log('{string1} and {string2} are not anagrams');
}
   
