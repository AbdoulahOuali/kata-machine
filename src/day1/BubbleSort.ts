// This is a TypeScript implementation of the Bubble Sort algorithm.
// Bubble Sort is a simple sorting algorithm that repeatedly steps through the list,
// compares adjacent elements, and swaps them if they are in the wrong order.

// The function `bubble_sort` takes an array of numbers and sorts it in ascending order.
export default function bubble_sort(arr: number[]): void {
    // Loop through the array to perform multiple passes.
    for (let i: number = 0; i < arr.length; ++i) {
        // The inner loop compares adjacent elements and swaps them if necessary.
        for (let j: number = 0; j < arr.length - 1 - i; ++j) {
            // Check if the current element is greater than the next element.
            if (arr[j] > arr[j + 1]) {
                // If so, swap the elements using the `swap` function.
                swap(j, i);
            }
        }
    }

    // This nested function `swap` is used to swap two elements in the array.
    function swap(j: number, i: number) {
        const temp: number = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
    }
}
