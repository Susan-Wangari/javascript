//Complete the getAverage function which takes in an array of test scores and returns the average score.

function getAverage(scores) {
  let sum = 0;

  for (const score of scores) {
    sum += score;
  }

  return sum / scores.length;
}

/* Complete the getGrade function that takes a number score as a parameter.
Your function should return a string representing a letter grade based on the score.*/

function getGrade(score) {
  if (score === 100) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

/*Complete the function hasPassingGrade that takes a student score as a parameter. 
Your function should return true if the student has a passing grade and false if they do not. */

function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

/*Complete the studentMsg function with totalScores and studentScore for parameters.
The function should return a string representing a message to the student */

function studentMsg(totalScores, studentScore) {
  let courseResult = "You passed the course."
  if(!hasPassingGrade(studentScore)) {
    courseResult = "You failed the course."
  }
  return "Class average: " + getAverage(totalScores) + ". Your grade: " + getGrade(studentScore) + ". " + courseResult
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
