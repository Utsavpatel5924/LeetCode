// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
var sortedFunc = function(nums) {
    let start = 0;
    let end = nums.length - 1;
    let index = end;
    let sort_Power_Array = [];

    while (index > -1) {
        if (Math.abs(nums[start]) > Math.abs(nums[end])) {
            sort_Power_Array[index--] = nums[start] * nums[start];
            start++;
        } else {
            sort_Power_Array[index--] = nums[end] * nums[end];
            end--;
        }
    }
    return sort_Power_Array;
};

const a=sortedFunc([-12,-4,-1,0,3,10]);

console.log(a);