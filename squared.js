// 977. Squares of a Sorted Array

// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.


nums1 = [-4,-1,0,3,10] 

nums2 = [-7,-3,2,3,11]

var sortedSquares = function(nums) {
    
    let squared = []

    for(let i = 0; i < nums.length; i++){
        let square = nums[i] * nums[i]

        squared.push(square)
    }

    squared.sort((a, b) => a - b);

    return squared
};

console.log(sortedSquares(nums1))
console.log(sortedSquares(nums2))