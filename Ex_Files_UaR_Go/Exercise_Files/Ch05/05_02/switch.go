package main

import (
	"fmt"
	"math/rand"
	"time"
)

func main() {

	rand.Seed(time.Now().Unix())
	// fmt.Println("Day", dow)

	result := ""

	switch dow := rand.Intn(6) + 1; dow {
	case 1:
		result = "It's Sunday!"
	case 7:
		result = "It's Saturday!"
	default:
		result = "It's weekday!"
	}

	fmt.Println(result)

	// Extended if/else statement
	x := -42
	switch {
	case x < 0:
		result = "Less than 0"
		// fallthrough
	case x > 0:
		result = "Greater than 0"
	default:
		result = "Equal to 0"
	}
	fmt.Println(result)

}
