const LinkedList = require('./LinkedList.js');

//#### BUFFER ####
const palindromeList = (head) => {
  let string = '';
  let node = head;
  while (node) {
    string += node.value;
    node = node.next;
  }
  return isPalindrome(string);
}

const isPalindrome = (string) => {
  return string.split('').reverse().join('') === string;
}