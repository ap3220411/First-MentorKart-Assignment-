
function sps() {
    //taking inputs
       let user_input = parseInt(prompt("enter your choise(1 for rock ,2 for paper ,3for scissors)"))
       let comp_input = Math.floor(Math.random() * 3) + 1;

    //setting name in input
       if (comp_input == 1) {
           console.log("computer chooses rock ")

       }
       else if (comp_input == 2) {
           console.log("computer chooses paper " )

       }
       else if (comp_input == 3) {
           console.log("computer chooses scissors " )

       } else {
           console.log("computer chooses wrong turn ")

       }

       if (user_input == 1) {
           console.log("you choose rock ")
       }
       else if (user_input == 2) {
           console.log("you choose paper ")
       }
       else if (user_input == 3) {
           console.log("you choose scissors ")
       } else {
           console.log("wrong turn " )
       }

   //setting winning options

       if (user_input == comp_input) {
           console.log("its draw")
       } else if (user_input == 1 && comp_input == 3 || user_input == 2 && comp_input == 1 || user_input == 3 && comp_input == 2) {
           console.log("you win  ");
       } else {
           console.log("computer wins")

       }

   }sps()
