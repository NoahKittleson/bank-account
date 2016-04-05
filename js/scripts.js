function BankAccount (name, amount) {
  this.name = name;
  this.amount = amount;
}

BankAccount.prototype.deposit = function(dAmount) {
  this.amount += dAmount;
}
BankAccount.prototype.withdrawl = function(wAmount) {
  this.amount -= wAmount
}

// var newAccount

$(document).ready(function(){
  $("form#makeAccount").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("#name").val();
    var inputtedAmount = parseInt($("#initialDeposit").val());
    newAccount = new BankAccount(inputtedName, inputtedAmount);

    $("#output").append("<h1>" +  newAccount.amount + "</h1>");


  });
  $("form#depositWithdraw").submit(function(event) {
    event.preventDefault();

    var depositOrWithdrawl = $("input:radio[name=transaction]:checked").val()
    var transactionAmount = parseInt($("#amount").val());

    if (depositOrWithdrawl === "withdrawl") {
      newAccount.withdrawl(transactionAmount);
    } else if (depositOrWithdrawl === "deposit") {
      newAccount.deposit(transactionAmount);
    } else {
      alert("Please enter an amount and whether you would like to make a deposit or withdrawl.")
    }
    $("#output").empty();
    $("input#amount").val("");
    $("#output").append("<h1>" +  newAccount.amount + "</h1>");


  });

});
