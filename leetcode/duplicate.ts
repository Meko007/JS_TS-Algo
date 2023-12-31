/*
Given an integer array nums, return true if any value appears at least twice in the array, 
and return false if every element is distinct.
*/
const containsDuplicate = (nums: number[]) => {
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] === nums[j]) return true;
        }
    }
    return false;
};

//Test cases
// console.log(containsDuplicate([1, 2, 3, 1]));
// console.log(containsDuplicate([1, 2, 3, 4]));
// console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));