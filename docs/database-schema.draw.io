User
- _id
- name
- email
- password
- role (student | teacher | admin)
- createdAt

Course
- _id
- title
- description
- category
- createdBy (teacherId)
- createdAt
- isPublished

Lesson
- _id
- courseId
- title
- contentType (video | pdf | text)
- contentURL
- order

Enrollment
- _id
- studentId
- courseId
- progressPercentage
- lastLessonId
- createdAt

Quiz
- _id
- lessonId
- questions
- options
- correctAnswers

Result
- _id
- studentId
- quizId
- score