// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

const reverseString = (str) => {
    let reversedString = '';

    for (let i = str.length -1; i >= 0; i--) {
        reversedString += str.charAt(i);
    }

    return reversedString;
};

// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.

const sumOfPositiveNumbers = (arr) => {
    let sum = 0;

    for (i = 0; i < arr.length; i++) {
        if (arr[i] > 0){
            sum += arr[i];
        }
    }

    return sum;
};

// Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 

const findMostFrequentElement = (arr) => {
    if (arr.length === 0) {
      return undefined;
    }
  
    const frequencyMap = arr.reduce((map, element) => {
      map[element] = (map[element] || 0) + 1;
      return map;
    }, {});
  
    let maxFrequency = 0;
    let mostFrequentElement;
  
    for (const element in frequencyMap) {
      if (frequencyMap[element] > maxFrequency) {
        maxFrequency = frequencyMap[element];
        mostFrequentElement = element;
      }
    }
  
    return mostFrequentElement;
  };  

//   Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

const findTwoNumbers = (sortedArr, target) => {
    let left = 0;
    let right = sortedArr.length - 1;
  
    while (left < right) {
      const sum = sortedArr[left] + sortedArr[right];
  
      if (sum === target) {
        return [left, right];
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  
    return [];
  };

//   Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

const simpleCalculator = (input1, operator, input2) => {
    switch (operator) {
      case '+':
        return input1 + input2;
      case '-':
        return input1 - input2;
      case '*':
        return input1 * input2;
      case '/':
        return input1 / input2;
      default:
        return "Invalid operator";
    }
  };

//   Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

const generateRandomPassword = (length) => {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()-_=+[]{}|;:,.<>?';
  
    const allChars = uppercaseChars + lowercaseChars + numberChars + specialChars;
    let password = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars.charAt(randomIndex);
    }
  
    return password;
  };