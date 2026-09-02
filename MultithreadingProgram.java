package tasks;

class NumberThread extends Thread {

    @Override
    public void run() {

        for (int i = 1; i <= 10; i++) {
            System.out.println("Number Thread: " + i);

            try {
                Thread.sleep(500);
            } catch (InterruptedException e) {
                System.out.println("Number thread interrupted");
            }
        }
    }
}

class LetterThread extends Thread {

    @Override
    public void run() {

        for (char ch = 'A'; ch <= 'J'; ch++) {
            System.out.println("Letter Thread: " + ch);

            try {
                Thread.sleep(500);
            } catch (InterruptedException e) {
                System.out.println("Letter thread interrupted");
            }
        }
    }
}

public class MultithreadingProgram {

    public static void main(String[] args) {

        NumberThread numberThread = new NumberThread();
        LetterThread letterThread = new LetterThread();

        // Start both threads
        numberThread.start();
        letterThread.start();

        System.out.println("Main thread started");
    }
}
