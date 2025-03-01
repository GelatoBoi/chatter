export class Order {
    constructor(sFrom) {
      this.OrderState = {
        WELCOMING: () => {
          let aReturn = [];
          this.stateCur = this.OrderState.RESERVING;
          aReturn.push("Welcome to Areeb's Biryani Bar");
          aReturn.push("Would you like to reserve or takeout?");
          return aReturn;
        },


        RESERVING: (sInput) => {
          let aReturn = [];
          this.stateCur = this.OrderState.CHOOSING;

          //Reserve
          if (sInput.toLowerCase().startsWith('r')) {
            aReturn.push(`Your reservation table is reserved under the phone number ${this.sFrom}`);
            let d = new Date();
            d.setMinutes(d.getMinutes() + 120);
            aReturn.push(`Please come to your table at 67 Darling St, Brantford., Acton before ${d.toTimeString()}`);

          } if (sInput.toLowerCase().startsWith('t')) {
            aReturn.push(`Press enter to proceed to Menu...`);

          } else {
            aReturn.push("Thanks for trying our reservation system");
            aReturn.push("Maybe next time");
          }
      
          return aReturn;
        },


        CHOOSING: (sInput) => {
          let aReturn = [];
          this.stateCur = this.OrderState.PEPSI;
          aReturn.push("Would you like Chicken Biryani, Beef Biryani, or Fish Biryani?");
          
          if (sInput.toLowerCase().startsWith('c')) {
            aReturn.push(`Press enter to proceed to add ons...`);

          } if (sInput.toLowerCase().startsWith('b')) {
            aReturn.push(`Press enter to proceed to add ons...`);

          } if (sInput.toLowerCase().startsWith('f')) {
            aReturn.push(`Press enter to proceed to add ons...`);

          } else {
            aReturn.push("Error: Wrong input. Try ordering again...");
          }

          return aReturn;
        },


        PEPSI: (sInput) => {
          let aReturn = [];
          this.isDone = true;
          aReturn.push("Would you like a Pepsi with that?");
          
          if (sInput.toLowerCase().startsWith('y')) {
            aReturn.push(`Thank you for ordering.`);
            let d = new Date();
            d.setMinutes(d.getMinutes() + 120);
            aReturn.push(`Please come pick up your order at 67 Darling St, Brantford., Acton before ${d.toTimeString()}`);

          } if (sInput.toLowerCase().startsWith('n')) {
            aReturn.push(`Thank you for ordering.`);
            let d = new Date();
            d.setMinutes(d.getMinutes() + 120);
            aReturn.push(`Please come pick up your order at 67 Darling St, Brantford., Acton before ${d.toTimeString()}`);

          } else {
            aReturn.push("Error: Wrong input. Try ordering again...");
          }

          return aReturn;
        }


      };
  
      this.stateCur = this.OrderState.WELCOMING;
      this.isDone = false;
      this.sFrom = sFrom;
    }
    handleInput(sInput) {
      return this.stateCur(sInput);
    }
    isDone() {
      return this.isDone;
    }
  }