# credit-card

Finish the TODOs in that file. Do not change any other files.

This code will provide a function that will create a credit card account given the owner's first name and last name. By using closure, the real balance and the names are not accessible directly. The only way to get the owner name is to use an accessor called `getAccountName()` that can access the `firstName` and `lastName` due to its scope

Furthermore, outsiders cannot accesss to the balance directly to increase or decrease it. The only way they can change the balance is to the provided modifiers `addCredits()` and `deduct()`. These modifiers can change the balance due to their scope that is within the account scope. If the account does not provide these application programming interfaces (APIs), nobody can change the internal state of that object.
