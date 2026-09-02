package tasks;

import java.util.HashMap;

public class StudentHashMap {
    public static void main(String[] args) {

        HashMap<Integer, String> student = new HashMap<>();

        HashMap<Integer, String> Student = new HashMap<>();

        student.put(101, "KALPANA");
        student.put(102, "KEERITHI");
        student.put(103, "DIVYA");

        for (Integer id : student.keySet()) {
            System.out.println(id + " : " + student.get(id));
        }
        // Read
        System.out.println("students: " + student);

        // Get employee using ID
        System.out.println("student 101: " + student.get(101));

        // Update 
        student.put(102, " NILA");
        System.out.println("After Update: " + student);

        // Delete 
        student.remove(101);
        System.out.println("After Delete: " + student);
    }
}







