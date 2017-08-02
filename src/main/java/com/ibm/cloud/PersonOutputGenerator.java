package com.ibm.cloud;

import java.util.List;

public class PersonOutputGenerator {

	public static void generateOutput1(List<Person> personList) {
    SortPeronListUtil.sortPersonByGenderAndLastNameAsc(personList);
    System.out.println("Output 1:\n");
    printPersonList(personList);
  }


  public static void generateOutput2(List<Person> personList) {
    SortPeronListUtil.sortByDOBAndLastNameAsc(personList);
		System.out.println("\nOutput 2:\n");
    printPersonList(personList);
  }



  public static void generateOutput3(List<Person> personList) {
    SortPeronListUtil.sortPersonByLastNameDec(personList);
    System.out.println("\nOutput 3:\n");
    printPersonList(personList);
  }

  private static void printPersonList(List<Person> personList) {
//    for (Person person : personList)
//      System.out.println(person);
    personList.forEach((person)->System.out.println(person))  ;
  }
}
