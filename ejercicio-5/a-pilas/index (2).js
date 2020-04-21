import java.util.Scanner;
import java.util.Stack;
 
public class PruebaPila {
 
public static void main(String[] args) {
Stack pila = new Stack();
Scanner leer = new Scanner(System.in);
System.out.println(«Ingrese cantidad de la pila …»);
int n=leer.nextInt();
int i1 = 0;
for(int i=0; i<n;i++){
 
System.out.println("Ingrese numero…");
i1=leer.nextInt();
pila.push(Integer.toString(i1));
 
}
System.out.println(i1);
 
System.out.println("Desapilar");
 
while(!pila.empty())
System.out.println(pila.pop());
}
 
}
