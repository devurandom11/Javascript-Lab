// Indicates whether the model has been loaded.
let isModelLoaded = false;

// A global variable that stores the model.
let net;

// Hide the app before the model is loaded.
$("#app").hide();

async function app() {
  console.log("Loading mobilenet..");

  // Load the model.
  mobilenet.load().then(function (model) {
    console.log("Successfully loaded model");

    isModelLoaded = true;

    // TODO 1: Select the div with the ID "status", add the text "Model is
    // ready" and add the class "ready" to it. There is already a CSS
    // class that makes the text green.
    $("#status").text("Model is ready").addClass("ready");

    // TODO 2: Show the app by using the correct ID called "app".
    // Hint: See line 8.
    $("#app").show();
    // TODO 3: store the newly loaded model into the global `net`.
    net = model;
  });
}

/// Predicts the image using the global variable `net` that should be
/// loaded above. If there are any predictions, they will be displayed in
/// the cards with the kinds of the dogs and their probability.
function predict() {
  if (!isModelLoaded || !net) {
    console.error("Modelnet is not loaded yet!");
    return;
  }

  // Select the image.
  const imgEl = document.getElementById("img");

  net.classify(imgEl).then(function (predictions) {
    console.log(predictions);
    // Select the div element with the ID of "result" to append the results.
    const resultElement = $("#result");
    // Clear previous results
    resultElement.empty();
    for (var i = 0; i < predictions.length; i++) {
      console.log(predictions[i]);
      const prediction = predictions[i];

      // TODO 4: Get the class name of the prediction.
      const className = prediction.className;

      // TODO 5: Get the probability of the prediction.
      const probability = prediction.probability;

      // TODO 6: Create a new element h5, change the text inside it, and add
      // a class called "card-title".
      const nameEl = document.createElement("h5");
      $(nameEl).addClass("test").text(className);

      // TODO 7: Create a new element p, change the text inside it, and add
      // a class called "card-title". See suggestion above.
      const probabilityEl = document.createElement("p");
      $(probabilityEl).text(probability).addClass("card-title");

      // TODO 8: Create a new element div and add class 'card' to it.
      const card = document.createElement("div");
      $(card).addClass("card");

      // TODO 9: Create a new element div and add class 'card-body' to it.
      // Then append the nameEl and probabilityEl above as its children.
      const cardBody = document.createElement("div");
      $(cardBody).addClass("card-body").append(nameEl).append(probabilityEl);

      // Append the cardBody element to the card element.
      card.append(cardBody);

      // TODO 10: append the card element to resultElement so it can be
      // displayed.
      resultElement.append(card);
    }
  });
}
app();
