package tasks;

@FunctionalInterface
interface Calculator {
    int calculate(int a, int b);
}

public class LambdaProgram {

    public static void main(String[] args) {

        // addition
        Calculator add=(a,b)->a+b;

        // subtraction
        Calculator subtract=(a,b) -> a-b;

        //  multiplication
        Calculator multiply=(a,b)->a*b;

        System.out.println("Addition: " + add.calculate(10, 5));
        System.out.println("Subtraction: " + subtract.calculate(10, 5));
        System.out.println("Multiplication: " + multiply.calculate(10, 5));
    }
}

