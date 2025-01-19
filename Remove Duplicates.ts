function majorityElement(nums: number[]): number {
  let map = new Map<number, number>
  let max: number = 0;
  let maxIndex: number = nums[0];
  
  for (let index = 0; index < nums.length; index++) {
    if(map.has(nums[index])){
        const appear = map.get(nums[index])!;
        map.set(nums[index], appear + 1);
        if(appear>max){
            maxIndex = nums[index];
            max = appear;
        }
    }
    else{
        map.set(nums[index],1);
    }
  }

  return maxIndex;

};


console.log(majorityElement([1]));