package TASKS;

class Student {
    int id;
    String name;
    String course;

    public static void main(String[] args) {

        Student s = new Student();

        s.id = 101;
        s.name = "Kalpana Devi";
        s.course = "B.Sc Computer Science";

        System.out.println("Student Details");
        System.out.println("ID     : " + s.id);
        System.out.println("Name   : " + s.name);
        System.out.println("Course : " + s.course);
    }
}


