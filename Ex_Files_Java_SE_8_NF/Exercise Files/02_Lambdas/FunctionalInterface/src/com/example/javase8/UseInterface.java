package com.example.javase8;

import com.example.javase8.interfaces.InterfaceWithArgs;
import com.example.javase8.interfaces.SimpleInterface;

/**
 * Created on 4/24/17.
 */
public class UseInterface {

    public static void main(String[] args) {
        SimpleInterface obj1 = () -> System.out.println("Say...");
        obj1.doSomething();

        InterfaceWithArgs obj2 = (a, b) -> {
          int result = a * b;
          System.out.println("The result is " + result);
        };
        obj2.calculate(10,5);
    }
}
