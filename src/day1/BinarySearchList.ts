y a sorted array (haystack).

// The function takes two parameters:
// - haystack: an array of numbers that should be sorted in ascending order.
// - needle: the number we want to find within the haystack.

export default function bs_list(haystack: number[], needle: number): boolean {
    // Initialize two pointers, lo and hi, to define the search range within the haystack.
    let lo: number = 0;             // lo points to the first element in the array.
    let hi: number = haystack.length; // hi points to one past the last element in the array.

    // Start a do-while loop to repeatedly search within the current range.
    do {
        // Calculate the middle index of the current range.
        const m: number = Math.floor(lo + (hi - lo) / 2);

        // Retrieve the value at the middle index.
        const v: number = haystack[m];

        // Check if the middle value (v) is equal to the needle.
        if (v === needle) {
            // If it is, return true, indicating that the needle was found in the haystack.
            return true;
        } else if (v > needle) {
            // If the middle value (v) is greater than the needle,
            // adjust the hi pointer to search in the left half of the current range.
            hi = m;
        } else {
            // If the middle value (v) is less than the needle,
            // adjust the lo pointer to search in the right half of the current range.
            lo = m + 1;
        }
    } while (lo < hi); // Continue the loop until the search range is not empty.

    // If the loop exits without finding the needle, return false,
    // indicating that the needle is not present in the haystack.
    return false;
}
