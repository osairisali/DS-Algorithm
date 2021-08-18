// Info: You only have 3 hours to finish the questions (10.00 AM - 13.00 PM)

// Please answer in English

// Questions:

// What’s your preference: Component(s) with state or Redux?
// It depends on what's needed. Component state is good for simple
// What’s your preference: Class components or Function components?
// Have you ever worked with websockets in a React app?
// What industries do you have experience in?

// Contractors loop: How would you optimise the below?
let contractors = [];
if (this.state.filter != "" && this.state.contractors.length > 0) {
  //filter out contractors
  let searchOptions = {
    keys: ["firstName", "lastName", "businessName"],
  };

  // we can dynamically importing Fuse class only when it is needed in this block.
  // we could optimize responsiveness of the web app while also reducing memory use.
  (async () => {
    try {
      await import("Fuse");
    } catch (error) {
      console.log("error importing Fuse package: ", error);
    }
  })();
  const fuse = new Fuse(this.state.contractors, searchOptions);

  let filteredContractors = fuse.search(this.state.filter);

  //   filteredContractors.forEach((item, i) => {
  //     let contractor = item.item;

  //     contractors.push(
  //       <ContractorTableRow
  //         key={"contractor-" + contractor._id + "-" + i}
  //         contractor={contractor}
  //         triggerViewContractor={this.triggerViewContractor}
  //       />
  //     );

  // we use map method as we already know that filteredContractors is an array.
  // using forEach to update contractors array is anti pattern based on Mozilla documentation.
  // map method returning new array and we can directly update constructors array by using it.
  // item argument can be easily renamed using object destructuring directly from map callback.
  contractors = filteredContractors.map(({ item: contractor }, i) => {
    <ContractorTableRow
      key={"contractor-" + contractor._id + "-" + i}
      contractor={contractor}
      triggerViewContractor={this.triggerViewContractor}
    />;
  });
} else {
  //   this.state.contractors.forEach((contractor, i) => {
  //     contractors.push(
  //       <ContractorTableRow
  //         key={"contractor-" + contractor._id + "-" + i}
  //         contractor={contractor}
  //         triggerViewContractor={this.triggerViewContractor}
  //       />
  //     );
  //   });

  contractors = this.state.contractors.map((contractor, i) => {
    <ContractorTableRow
      key={"contractor-" + contractor._id + "-" + i}
      contractor={contractor}
      triggerViewContractor={this.triggerViewContractor}
    />;
  });
}

// React state update functions: How would you optimise the below?
refreshState = () => {
  if (this.state.bookingID) {
    axios
      .get(`${this.props.API}booking/${this.state.bookingID}`)
      .then((res) => {
        const booking = res.data;
        // if (this._isMounted) {
        //   this.setState({ booking: booking });
        //   this.setState({
        //     formTitle:
        //       // first condition
        //       this.state.booking ? `${this.state.booking.name}` : "New Booking",
        //   });
        // }

        if (this._isMounted) {
          // it is recommended to use callback to update state, because it works asynchronously
          // using callback guarantee that state update only happen once for each rendering
          this.setState((state, props) => {
            return {
              booking,
              formTitle: state.booking.name || "New Booking",
            };
          });
        }
      })
      .catch((err) => console.log(err));
  } else {
    this.setState((state, props) => {
      return {
        formTitle: "New Booking",
      };
    });
  }
};

// Logic Simple : Complete the function below
// any input string data should be capitalize the first letter each word
// and the word will be separated by only one space

function solutions(str) {
  let newString = "";

  for (let i = 0, newWord = true; i < str.length; i++) {
    if (newWord) {
      newSrting = str[i];
    } else {
      newString = str[i];
    }
    newWord = str[i] === "" ? true : false;
  }
  return newString;
}

// my proposed solution
const solutions2 = (str) => {
  let newStr = [];
  const splittedStr = str.toLowerCase().split(" ");
  console.log(splittedStr);

  for (let word of splittedStr) {
    if (word !== "") {
      const firstChar = word[0].toUpperCase();
      const restChar = word.slice(1, word.length);
      word = firstChar.concat(restChar);
      newStr.push(word);
      console.log(newStr);
    }
  }

  return newStr.join(" ");
};

console.log(solutions2("the world   in    your      hands"));

// example:
// input string : "the world   in    your      hands"
// output expection: "The World In Your Hands"
// Note: if you wanna build your own function, feel free to make it
