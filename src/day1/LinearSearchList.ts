export default function linear_search(haystack: number[], needle: number): boolean {
    // linear search for needle in haystack 
    for (let i: number = 0; i < haystack.length; i++) {
        // for each item in haystack, check if it is a needle
        if (haystack[i] === needle) {
            // return true only when there is a needle
            return true;
        }
    }
    // searched all items in the haystack, no needle found, so O(n) worst case
    return false;
}