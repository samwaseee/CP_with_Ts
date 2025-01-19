function maxProfit(prices: number[]): number {
    let buy = prices[0];
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < buy) {
            buy = prices[i];
        }
        else if (prices[i] - buy > profit) {
            profit = prices[i] - buy
        }
    }

    return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]))