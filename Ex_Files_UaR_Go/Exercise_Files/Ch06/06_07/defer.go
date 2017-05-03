package main

import (
	"fmt"
)

func main() {
	defer fmt.Println("Statement 1")
	defer fmt.Println("Statement 2")
	myFunc()
	defer fmt.Println("Statement 3")
	defer fmt.Println("Statement 4")
	fmt.Println("Statement 0")

	x := 1000
	defer fmt.Println("Value of x:", x)
	x++
	fmt.Println("Value of x after incrementing:", x)
}

func myFunc() {
	defer fmt.Println("Deferred in the function")
	fmt.Println("Not deferred in the function")
}
