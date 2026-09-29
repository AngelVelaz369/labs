function Mail(subj, msg) {
    this.subject = subj
    this.message = msg
  }
  
  // Type your code below this line!
  
  const subjectInput = process.argv[3];
  const messageInput = process.argv[4];

  const newMail = new Mail(subjectInput, messageInput);

  // Type your code above this line!
  
  console.log(newMail.subject + ": " + newMail.message)