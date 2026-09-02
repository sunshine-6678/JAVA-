package tasks;

import java.util.ArrayList;

public class ArrayListCRUD {
    public static void main(String[] args) {

        ArrayList<String> student = new ArrayList<>();

        //students names
        student.add("STUDENTS: ");
        student.add("KALPANA DEVI V");
        student.add("KEERITHIKA");
        student.add("SWETHA R");
        student.add("PRIYA");

      
        for (String student1 : student) {
            System.out.println(student1);
        }
        // students 
        System.out.println("    ");

        // Read 
        System.out.println("First student: " + student.get(1));

        // Update 
        student.set(1, "DIVYA M");
        System.out.println("After Update: " + student);

        // Delete 
        student.remove("PRIYA");
        System.out.println("After Delete: " + student);
    }
}








