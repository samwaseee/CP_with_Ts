function removeElement(nums: number[], val: number): number {
    let count: number = 0;

    for (let index = 0; index < nums.length;) {
        if(nums[index] === val)
        {
            nums.splice(index,1);
        }
        else{
            index++;
            count++;
        }
        
    }
    
    return count;
};


console.log(removeElement([3,2,2,3],2))