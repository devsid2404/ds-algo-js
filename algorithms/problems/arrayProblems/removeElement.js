/* Leetcode => 27
    Given an integer array nums and an integer val, remove all occurrences of val in nums in-place.
    The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
*/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
  console.log(((nums, val) => {


    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === val) {
            nums.splice(i, 1);
            i--;
        };
    }



    console.log(nums);

    return nums.length;
    
}) ([0,1,2,2,3,0,4,2], 2));
// Expected output [0,1,4,0,3]