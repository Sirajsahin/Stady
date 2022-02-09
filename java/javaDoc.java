//JAVA//

1.
  public class MyClass{
    public static void main(String args[]){
        int x=10;
        int y=25;
        if(x>y){
            System.out.println("x is greater than y  ");
        }
        else{
            System.out.println("y is greater than x");
        }
        
        int z=x+y;
        System.out.println("Sum of x+y = "+ z);
    }
}

2. taking input
  int nextInt()
  	It is used to scan the next token of the input as an integer.
float nextFloat()
	It is used to scan the next token of the input as a float.
double nextDouble()
	It is used to scan the next token of the input as a double.
byte nextByte()
	It is used to scan the next token of the input as a byte.
String nextLine()
	Advances this scanner past the current line.
boolean nextBoolean()
	It is used to scan the next token of the input into a boolean value.
long nextLong()
	It is used to scan the next token of the input as a long.
short nextShort()
	It is used to scan the next token of the input as a Short.
BigInteger nextBigInteger()
	It is used to scan the next token of the input as a BigInteger.
BigDecimal nextBigDecimal()
	It is used to scan the next token of the input as a BigDecimal.

3.
import java.util.Scanner; 
public class MyClass{
    public static void main(String args[]){
        
        Scanner val = new Scanner(System.in);
        System.out.print("Enter first number : ");
        int x= val.nextInt();
        System.out.print("Enter secound number : ");
        int y=val.nextInt();
        
        if(x>y){
            System.out.println(" is greater than   "+y);
        }
        else{
            System.out.println("y is greater than "+x);
        }
        
    }
}

4.

import java.util.Scanner; 
public class MyClass{
    public static void main(String args[]){
        
        Scanner sc= new Scanner(System.in);
        System.out.print("Enter your Name : ");
        String name = sc.nextLine();
        System.out.print("Enter your age : ");
        int age = sc.nextInt();
        System.out.print("Enter rollNumber : ");
        int rollNumber=sc.nextInt();
        System.out.println("Your Name Is "+name+" Your Age is "+age+" Your RollNumber is "+rollNumber);
        
        
    }
}

5.
import java.util.Scanner; 
public class MyClass{
    public static void main(String args[]){
        
       System.out.print("Enter a number between 1 to 7 to identify the day \n");
       Scanner sc=new Scanner(System.in);
       int day=sc.nextInt();

       switch(day){
         
         case 1:
         System.out.println("Today is Mondal");
         break;
         case 2:
         System.out.println("Today is Tuesday");
         break;
         case 3:
         System.out.println("Today is Wednesday");
         break;
         case 4:
         System.out.println("Today is Thursday");
         break;
         case 5:
         System.out.println("Today is Friday");
         break;
         case 6:
         System.out.println("Today is Saturday");
         break;
         case 7:
         System.out.println("Today is Sunday");
         break;
         default:
         System.out.println("You Enterd a Wrong Number");
      
       }
        
        
    }
}
6.
import java.util.Scanner;
public class MyClass{
    public static void main(String[] args) {
        System.out.print("Enter a number to print 0 to that number \n");
        Scanner sc=new Scanner(System.in);
        int num =sc.nextInt();
         int i=0;
         while(i<num){
            System.out.println("The number is"+i);
            i++;
         }
    }
}

7.
import java.util.Scanner;
public class MyClass{
    public static void main(String[] args) {
        System.out.print("Enter a number to print 0 to that number \n");
        Scanner sc=new Scanner(System.in);
        int num =sc.nextInt();
         int i=0;
         do{
            System.out.println("The number is"+i);
            i++;
         }
         while(i<num);
         
    }
}

8.
import java.util.Scanner;
public class MyClass{
    public static void main(String[] args) {
        System.out.print("Enter a number to print 0 to that number \n");
        Scanner sc=new Scanner(System.in);
        int num =sc.nextInt();
         for (int i=0;i<=num;i++ ) {
             System.out.println("numbers are "+i);
         }
    }
}

9.
import java.util.Scanner;
public class MyClass{
    public static void main(String[] args){
        String[] cars={"BMW","VOLVO","FORD"};//create an object name cars;
        int size = cars.length;// length is 3
        for (int i=0;i<size;i++) {
            System.out.println("array value of index "+i+" is "+cars[i]);
        }
        
    }
}

10.
import java.util.Scanner;
public class MyClass{
    public static void main(String[] args){
        String[] cars={"BMW","VOLVO","FORD"};//create an object name cars;
        for (String i :cars ) {//forEach loop is more stable for an array 
            System.out.println("cars element is "+i);
        }
        
    }
}
11.
import java.util.Scanner;
public class MyClass{
    public static void main(String[] args){
        System.out.print("Print number 1 to 100 only even");
        for (int i=0;i<=100 ;i++ ) {
            if (i%2==1) {
                continue;//when enter in this if condition it ignore and execute remaning iteration 
            }
            System.out.println("The Even Number is "+i);
        }
    }
}
12.
import java.util.Scanner;
public class MyClass{
    public static void main(String[] args){
        System.out.print("Print number 1 to 100 only even");
        for (int i=0;i<=10 ;i++ ) {
            if (i==6) {
                break;//when i is 6 then code will break remaing code
            }
            System.out.println("The Even Number is "+i);
        }
    }
}
13.
import java.util.Scanner;
public class MyClass{
    public static void main(String[] args){
       int[] num = {1,2,3,4,5,6};//one-dimensional array
       for (int i=0;i<num.length ; i++) {
           System.out.println("The num array element are "+num[i]);
       }
    }
}
14.
import java.util.Scanner;
public class MyClass{
    public static void main(String[] args){
       int[][] num = {{1,2,3,4},{5,6,7}} ;//Two-dimensional array
       for (int i=0;i<num.length ; i++) {
        for (int j=0;j<num[i].length ;j++ ) {

           System.out.println("The num array element are "+num[i][j]);
        }
       }
    }
}
15.

public class MyClass {
    static void myMethod() {// it is a function
        System.out.println("I am a method(function).");
    }
     public static void main(String[] args) {
      myMethod();
      
    }
}

16.

public class MyClass {
    static void myMethod(String fname) { //method with parameters
        System.out.println("My First Name is "+fname);
    }
     public static void main(String[] args) {
      myMethod("Siraj");
      myMethod("Sahin");
      myMethod("Rahul");
    }
}

17.

public class MyClass {
    static void myMethod(String fname,int age) {//more than one parameter
        System.out.println("My First Name is "+fname+" and my age is "+age);
    }
     public static void main(String[] args) {
      myMethod("Siraj",24);
      myMethod("Sahin",23);
      myMethod("Rahul",26);
    }
}
18.

public class MyClass {
    static int myMethod(int x,int y) {// when we return something void is replace with returnable data type
        return x*y;
    }
     public static void main(String[] args) {
      int num =myMethod(20,55);
      System.out.print(num);
      
    }
}

19.
import java.util.Scanner;
public class MyClass {
    static void myMethod(int age) {
        if(age<18){
            System.out.print("You are a kid");
        }
        else
            System.out.print("You are an adult");
    }
     public static void main(String[] args) {
      System.out.print("Enter your age \n");
      Scanner sc =new Scanner(System.in);
      int age=sc.nextInt();
      myMethod(age);
      
    }
}

20.Method overloading// method overloading is the mathod name can be same but data type must be diffrent;
import java.util.Scanner;
public class MyClass {
    static void myMethod(int age) {
        if(age<18){
            System.out.print(" You are a kid");
        }
        else
            System.out.print(" You are an adult");
    }
    static void myMethod(String Name) {
      System.out.print("Your Name is "+Name);
    }
     public static void main(String[] args) {
      System.out.print("Enter your age \n");
      Scanner sc =new Scanner(System.in);
      int age=sc.nextInt();
      System.out.print("Enter your age \n");
      Scanner st =new Scanner(System.in);
      String name =st.nextLine() ;
      myMethod(name);
      myMethod(age);

    }
}

21.Recursion..
import java.util.Scanner;
public class MyClass {
    public static void main(String[] args) {
    
      System.out.println("Enter a number to for recursion");
      Scanner sc=new Scanner(System.in);
      int num= sc.nextInt();
      int result = sum(num);
    
      System.out.println(result);
    
    }
    public static int sum(int n){
        if(n>0){
            int k =n+sum(n-1);
            System.out.println(k);
            return k;
        }
        else
            return 0;
    }
}

22.reverse a number
import java.util.Scanner;
public class MyClass {
    public static void main(String[] args) {
    
      System.out.println("Enter a number to for revers");
      Scanner sc=new Scanner(System.in);
      int num= sc.nextInt();
      int revers=0;
      while(num !=0) {
        int rem=num%10;
        revers=revers*10+rem;
        num = num/10;
      }
     System.out.println("the number is"+num +" reverse form is "+revers);
    
    }
  }

23.//class and object

import java.util.Scanner;
public class MyClass {
    int x=5;
   public static void main(String[] args) {
    
      MyClass myObj=new MyClass();//create object
      System.out.print(myObj.x)    ;
    } 
  }


// create two file class one file and object anather file
import java.util.Scanner;
public class MyClass {
    int x=5;
    
  }
//https://www.javatpoint.com/how-to-reverse-a-number-in-java

class second{
public static void main(String[] args) {
    
      MyClass myObj=new MyClass();
      System.out.print(myObj.x)    ;
    }
}

24.In the previous chapter, we used the term "variable" for x in the example (as shown below).
 It is actually an attribute of the class. Or you could say that class attributes are variables within a class:

Change the value of x to 25:

public class Main {
  int x = 10;//attributes

  public static void main(String[] args) {
    Main myObj = new Main();
    myObj.x = 25; // x is now 25
    System.out.println(myObj.x);
  }
}

25.
If you don't want the ability to override existing values, declare the attribute as final:

Example
public class Main {
  final int x = 10;

  public static void main(String[] args) {
    Main myObj = new Main();
    myObj.x = 25; // will generate an error: cannot assign a value to a final variable
    System.out.println(myObj.x);
  }
}

26.
If you create multiple objects of one class, you can change the attribute values in one object, without affecting the attribute values in the other:

Example
Change the value of x to 25 in myObj2, and leave x in myObj1 unchanged:

public class Main {
  int x = 5;

  public static void main(String[] args) {
    Main myObj1 = new Main();  // Object 1
    Main myObj2 = new Main();  // Object 2
    myObj2.x = 25;
    System.out.println(myObj1.x);  // Outputs 5
    System.out.println(myObj2.x);  // Outputs 25
  }
}
27.Static vs. Non-Static
You will often see Java programs that have either static or public attributes and methods.
In the example above, we created a static method, which means that it can be accessed without creating an object of the class, unlike public, which can only be accessed by objects:

public class MyClass{
       
       static void myMethod(){
        System.out.print("Static call a method without creating an object ");
       }

       public void myMethodP(){
        System.out.print("\n Public methods must be called by creating objects");
       }


       public static void main(String[] args){
        myMethod();//call a method
        MyClass obj1 = new MyClass();
        obj1.myMethodP();
       }
}

28.
import java.util.Scanner;
public class MyClass{
    public void fuell(){
        System.out.print("Feull is not full \n");
    }

    public void speed(int carSpeed){
        System.out.print("The car speed is "+carSpeed);
    }

    public static void main(String[] args){
        
     MyClass Car = new MyClass();//create a car object

        Car.fuell();//call the fuel method
        Car.speed(200);//call the speed method

    }
}
29.constructor
import java.util.Scanner;
public class MyClass{
     int modelyear;
     String modelname;
      // Create a class constructor for the Main class
      public MyClass(int year,String name ){
        modelyear=year;
        modelname=name;
      }

    public static void main(String[] args){
        
     MyClass Car = new MyClass(2525,"Ford");//Create an object of class Main (This will call the constructor)
    System.out.print(Car.modelyear+" "+Car.modelname);
        
    }
}

30.inheritance and polymorphism
//Polymorphism means "many forms", and it occurs when we have many classes that are related to each other by inheritance.


 

 class Animal{
    public void animalSound() {
        System.out.print("The animal make a sound\n");
    }
 }

 class Pig extends Animal{
    public void animalSound(){
        System.out.print("The pig says: wee wee\n");
    }
 }
 class Dog extends Animal{
    public void animalSound(){
        System.out.print("The dog says: bow wow");
    }
 }

class MyClass{
    public static void main(String[] args) {
        Animal myAnimal = new Animal();
        Animal myPig =new Pig();
        Animal myDog = new Dog();
        myAnimal.animalSound();
        myPig.animalSound();
        myDog.animalSound();
    }
}

31.inner class
In Java, it is also possible to nest classes (a class within a class). The purpose of nested classes is to group classes that belong together, which makes your code more readable and maintainable.
To access the inner class, create an object of the outer class, and then create an object of the inner class:


class Animal{
    int x=9;

    class innerClass{
        int age =25;
    }
 }

class MyClass{
    public static void main(String[] args) {
        Animal myAnimal = new Animal();
        Animal.innerClass myAge = myAnimal.new  innerClass();

        System.out.println(myAge.age + myAnimal.x);
    }
}
32.string to integer
import java.util.Scanner;
  public class MyClass{
        public static void main(String[] args) {
            
            String str ="200";
            int x =Integer.parseInt(str);
            System.out.println(str +"is converted into integer "+x);
        }
    }

 33.integer to string
 import java.util.Scanner;
  public class MyClass{
        public static void main(String[] args) {
            
            int x =200;
            String str =Integer.toString(x);
            System.out.println(x +"is converted into String "+str);
        }
    } 

  34.
      