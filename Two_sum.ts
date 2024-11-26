function twoSum(nums: number[], target: number): number[] {
    
    const map: {[key: number]: number} = {};

    for (let index = 0; index < nums.length; index++) {
        const complement = target - nums[index];

        if(map[complement] !== undefined)
        {
            return [map[complement], index];
        }

        map[nums[index]] = index;
        
    }

    throw new Error("No two sum solution");
};