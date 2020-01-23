/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package testeestagio;

/**
 *
 * @author augusto.coelho
 */
public class TesteEstagio {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        //Integer[] A = {9, 3, 9, 3, 9, 7, 9};
        //Integer[] B = {9, 3, 9, 3, 9, 7, 9};
        Solution s = new Solution();

//        System.out.println(s.solution1(A));
  //      System.out.println(s.solution2(B));
        System.out.println(s.solution3(10, 4));
        
    }

    static class Solution {

        public Integer solution1(Integer[] lista1) {
            Integer[] lista = lista1;

            for (int i = 0; i < lista.length; i++) {
                boolean par = false;
                for (int j = i + 1; j < lista.length; j++) {
                    if (lista[i] == lista[j] && lista[i] != null && lista[j] != null) {

                        par = true;
                        lista[i] = null;
                        lista[j] = null;
                    }
                }
                if (par == false && lista[i] != null) {
                    return lista[i];
                }
            }
            return null;
        }

        public int solution2(Integer[] lista) {
            Integer[] listaSolo = new Integer[lista.length];

            int cont = 0;
            for (int i = 0; i < lista.length; i++) {
                boolean igual = false;
                for (int j = 0; j < listaSolo.length; j++) {
                    if (lista[i] == listaSolo[j]) {

                        igual = true;
                    }
                }
                if (igual == false) {
                    listaSolo[cont] = lista[i];
                    cont++;
                }
            }
            cont = 0;
            //System.out.println(listaSolo);

            for (int i = 0; i < listaSolo.length; i++) {
                if (listaSolo[i] != null) {
                    cont++;
                }
            }
            return cont;

        }
        public int solution3(int n, int m){
            //0+4%10
            //4+4%10
            //8+4%10
            //2+4%10
            //6+4%10
            
            Integer pedaco =0;
            Integer[] visitados = new Integer[n];
            visitados[0]=pedaco;
            
            boolean loop = true;
            int cont = 1;
            while(loop){
               pedaco = (pedaco + m)%n; 

               
               
               boolean contem = false;
               for(int i =0; i<visitados.length;i++){
                   if(pedaco == visitados[i]){
                       contem = true;
                   }
               }
               
               if(contem == true){
                   loop = false;
                   
               }
               else{
                   visitados[cont] = pedaco;
               }
               cont++;
               
               
            }
            cont = 0;
            for(int i = 0; i<visitados.length;i++){
                if(visitados[i] != null){
                    cont++;
                }
            }
            return cont;
        }
    }
}
