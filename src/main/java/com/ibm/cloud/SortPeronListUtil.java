package com.ibm.cloud;

import java.util.Comparator;
import java.util.List;

public class SortPeronListUtil {
  static void sortPersonByGenderAndLastNameAsc(List<Person> personList) {
    personList.sort(new Comparator<Person>() {
      public int compare(Person p1, Person p2) {
        if(!p1.getGender().equals(p2.getGender())) {
          return p1.getGender().compareTo(p2.getGender());

        }
        return p1.getLastName().compareTo(p2.getLastName());
      }
    });
  }

  static void sortPersonByLastNameDec(List<Person> personList) {
    personList.sort(new Comparator<Person>() {
      public int compare(Person p1, Person p2) {
        return p2.getLastName().compareTo(p1.getLastName());
      }
    });
  }

  static void sortByDOBAndLastNameAsc(List<Person> personList) {
    personList.sort(new Comparator<Person>() {
      // sort by DateOfBirth in ascending order, then by LastName in ascending order
      public int compare(Person p1, Person p2) {
        if(p1.getDateOfBirth().compareTo(p2.getDateOfBirth()) != 0) {
          return p1.getDateOfBirth().compareTo(p2.getDateOfBirth());
        }

        return p1.getLastName().compareTo(p2.getLastName());
      }
    });
  }
}
