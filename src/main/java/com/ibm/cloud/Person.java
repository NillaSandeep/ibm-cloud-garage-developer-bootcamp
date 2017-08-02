package com.ibm.cloud;

import java.text.SimpleDateFormat;
import java.util.Date;

public class Person {
  private final PersonParser personParser = new PersonParser(this);

  private String firstName;
	private String lastName;

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  public void setLastName(String lastName) {
    this.lastName = lastName;
  }

  public void setGender(Gender gender) {
    this.gender = gender;
  }

  public void setDateOfBirth(Date dateOfBirth) {
    this.dateOfBirth = dateOfBirth;
  }

  public void setColor(String color) {
    this.color = color;
  }

  private Gender gender;
	private Date dateOfBirth;
	private String color;

	/**
	 * Constructs a Person object by parsing a string that contains attributes for the Person.
	 *
	 * @param line 			input text string
	 * @param lineElements	ordering of the elements within the text string
	 * @param delimiter		defines the delimiter pattern that separates individual tokens
	 * 						in the input text string - refer {@link java.util.Scanner} for
	 * 						definition of the delimiter pattern
	 * @throws PersonParseException if a parsing is encountered in the input text string
	 */
	public Person(String line, String[] lineElements, String delimiter) throws PersonParseException {
    personParser.parsePersonData(line, lineElements, delimiter);
  }

  public String getFirstName() {
		return firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public Gender getGender() {
		return gender;
	}

	public Date getDateOfBirth() {
		return dateOfBirth;
	}

	public String getColor() {
		return color;
	}

	@Override
	public String toString() {
    SimpleDateFormat format = new SimpleDateFormat("M/d/yyyy");

        StringBuilder sb = new StringBuilder();
        sb.append(getLastName());
        sb.append(" ");
        sb.append(getFirstName());
        sb.append(" ");
        sb.append(getGender());
        sb.append(" ");
        sb.append(format.format(getDateOfBirth()));
        sb.append(" ");
        sb.append(getColor());

        return sb.toString();
  }
}
