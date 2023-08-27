/* # LeetCode 26

Remove Duplicates
Remove duplicates and return the array

Input: nums = [1,2,4,5,7,7], 
Output: [1,2,4,5,7]
Explanation: 7 is duplicate
*/



/**
 * @param {number[]} nums
 * @return {number}
 */
 console.log(((nums) => {

    const set = new Set();


    for(let i = 0; i < nums.length; i++){
        set.add(nums[i]);
    }

    nums = Array.from(set);

    console.log('nums--->', nums);

    return nums.length;
    
})([0,0,1,1,1,2,2,3,3,4]));