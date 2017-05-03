package main

import (
	"fmt"
	"sort"
)

func main() {
	// slices are resizable
	var colors = []string{"Red", "Green", "Blue"}
	fmt.Println(colors)

	colors = append(colors, "Purple")
	fmt.Println(colors)

	colors = colors[1:]
	fmt.Println(colors)

	colors = colors[:len(colors)-1]
	fmt.Println(colors)

	numbers := make([]int, 5, 5)
	numbers[0] = 1
	numbers[1] = 112
	numbers[2] = 12
	numbers[3] = 14
	numbers[4] = 121
	fmt.Println(numbers)

	numbers = append(numbers, 235)
	fmt.Println(numbers)
	// Capacity for slices doubles
	fmt.Println(cap(numbers))

	sort.Ints(numbers)
	fmt.Println(numbers)
}
