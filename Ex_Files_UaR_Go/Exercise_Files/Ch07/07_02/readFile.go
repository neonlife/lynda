package main

import (
	"fmt"
	"io/ioutil"
)

func main() {

	fileName := "./Ch07/07_02/hello.txt"

	content, err := ioutil.ReadFile(fileName)
	checkError(err)

	fmt.Println("Read from file:", content)
	fmt.Println("Read from file:", string(content))

}

func checkError(err error) {
	if err != nil {
		panic(err)
	}
}
