package com.ibm.cloud;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Scanner;

public class PersonParser {

  public final static String FIRST_NAME = "firstName";
  public final static String LAST_NAME = "lastName";
  public final static String GENDER = "gender";
  public final static String DATE_OF_BIRTH = "dateOfBirth";
  public final static String COLOR = "color";
  public final static String IGNORE = "ignore";
  private final Person person;

  public PersonParser(Person person) { this.person = person; }

  void parsePersonData(String line, String[] lineElements, String delimiter) throws PersonParseException {
    try(Scanner scanner = new Scanner(line)) {
      scanner.useDelimiter(delimiter);

      for (int i=0; scanner.hasNext(); i++){
        String token = scanner.next();

        switch(lineElements[i]) {

          case FIRST_NAME:
            person.setFirstName(token);
            break;

          case LAST_NAME:
            person.setLastName(token);
            break;

          case GENDER:
            parseGender(token);
            break;

          case DATE_OF_BIRTH:
            parseDOB(token);
            break;

          case COLOR:
            person.setColor(token);
            break;

          default:
            break;
        }
      }
    }
  }

  private void parseDOB(String token) throws PersonParseException {
    SimpleDateFormat format = null;

    if(token.contains("/")) {
      format = new SimpleDateFormat("MM/dd/yyyy");
    }
    else if(token.contains("-")) {
      format = new SimpleDateFormat("MM-dd-yyyy");
    }
    else {
      throw new PersonParseException("Invalid date encountered");
    }

    try {
      person.setDateOfBirth(format.parse(token));
    }
    catch(ParseException e) {
      throw new PersonParseException("Invalid date encountered");
    }
  }

  private void parseGender(String token) throws PersonParseException {
    if(token.startsWith("M")) {
      person.setGender(Gender.MALE);
    }
    else if(token.startsWith("F")) {
      person.setGender(Gender.FEMALE);
    }
    else {
      throw new PersonParseException("Invalid gender encountered");
    }
  }

}
