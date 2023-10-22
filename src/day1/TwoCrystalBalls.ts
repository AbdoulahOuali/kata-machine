export default function two_crystal_balls(breaks: boolean[]): number {
    // Calculate the jump amount, which is the square root of the number of floors.
    const jumpAmount = Math.sqrt(breaks.length);

    // Initialize i to the first jump amount.
    let i = jumpAmount;

    // Drop the first crystal ball at intervals of jumpAmount.
    // If it breaks, exit the loop, indicating the highest breaking floor.
    for (; i < breaks.length; i += jumpAmount) {
        if (breaks[i]) {
            break;
        }
    }

    // Backtrack to the previous floor where the first ball didn't break.
    i -= jumpAmount;

    // Drop the second crystal ball incrementally from the previous floor.
    // This loop helps pinpoint the exact floor where the ball breaks.
    for (let j = 0; j < jumpAmount && i < breaks.length; ++j, ++i) {
        if (breaks[i]) {
            // If the second ball breaks, return the index (highest breaking floor).
            return i;
        }
    }

    // If the loop completes without finding a breaking floor, return -1.
    return -1;
}
