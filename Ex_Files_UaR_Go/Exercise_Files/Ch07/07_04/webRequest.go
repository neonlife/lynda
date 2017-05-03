package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
)

func main() {

	url := "http://services.explorecalifornia.org/json/tours.php"

	response, err := http.Get(url)
	if err != nil {
		panic(err)
	}

	fmt.Printf("Response type: %T\n", response)

	defer response.Body.Close()

	bytes, err := ioutil.ReadAll(response.Body)
	if err != nil {
		panic(err)
	}

	content := string(bytes)
	fmt.Println(content)
}
