class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
   //Create a input box to enter the number



    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)

    this.question = createElement("h3")

    this.option1 = createElement("h4")
    this.option2 = createElement("h4")
    this.option3 = createElement("h4")
    this.option4 = createElement("h4")


    this.message = createElement("h2")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();




  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.

    this.question.html(" Who is not Harry's best friends? ")
    this.question.position(350, 50);

    this.option1.html("a. Ron weasly")
    this.option2.html("b. Hermione Granger")
    this.option3.html("c. Draco Malfoy")
    this.option4.html("d. None of these")

    this.option1.position(350, 100);
    this.option2.position(350, 130);
    this.option3.position(350, 160);
    this.option4.position(350, 190);

    this.input1.position(150, 230);
    this.button.position(290, 300);

    this.input2.position(350, 250)



   

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
      this.message.html("Thank you for your answer. Please await evalution");
      this.message.position(350,300);

    })


  }
}
