/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    var sum = 0;
    var tabIndexOfSum = [];
    
    if(nums.length === 0 ) {
        console.log("le tableau est vide");
    }
    
    for(var i=0; i < nums.length; i++) {
        
        sum += nums[i];
        tabIndexOfSum.push(nums[i]);
        if(sum === target ) {
            
            console.log("Im in ", sum, target, tabIndexOfSum)
        }
    }
}; 

twoSum([2,7,11,15],9);
