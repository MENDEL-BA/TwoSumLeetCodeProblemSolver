/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    var sum = 0;
    var tabIndexOfSum =[];
    
    if(nums.length === 0 ) {
        console.log("le tableau est vide");
    }
    
    for(var i=0; i < nums.length; i++) {
        
        sum += nums[i];
        tabIndexOfSum.push(i);
        if(sum === target ) {
            
            console.log("Im in ", sum, target, tabIndexOfSum)
        }
    }
}; 



var twoSumRef = function(nums, target) {
  numsIndexes = {};

  for (let i = 0; i < nums.length; i += 1) {
    let currentDifference = target - nums[i];

    if (numsIndexes[currentDifference] !== undefined && numsIndexes[currentDifference] !== i) {
      return [i, numsIndexes[currentDifference]];
    } else {
      numsIndexes[nums[i]] = i;
    }
  }
};
twoSumRef([2,7,11,15],9);