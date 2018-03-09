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

const ll = new LinkedList();

ll.addToTail('c')
// ll.addToTail('b')
// ll.addToTail('b')
// ll.addToTail('c')

console.log(palindromeList(ll.head))