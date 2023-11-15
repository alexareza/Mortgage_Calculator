function calculate() {
    var principleAmount = document.getElementById("PrincipleAmt").value;
    var yrIntRate = document.getElementById("YIRate").value;
    var loanTerm = document.getElementById("LoanTerm").value;
    var r = yrIntRate/ 12;

    if (isNaN(principleAmount) || isNaN(yrIntRate) || isNaN(loanTerm)) {
        document.getElementById("monthPay").innerHTML = "Monthly Payments: " 
        document.getElementById("sumPayments").innerHTML = "Sum of all payments: "
        document.getElementById("totInterest").innerHTML = "Total Interest Paid: "
        window.alert("You entered a non numeric or negative number!")
        
    } else if (principleAmount < 0 || yrIntRate < 0 || loanTerm <0 ) {
        document.getElementById("monthPay").innerHTML = "Monthly Payments: " 
        document.getElementById("sumPayments").innerHTML = "Sum of all payments: "
        document.getElementById("totInterest").innerHTML = "Total Interest Paid: "
        window.alert("Error: You entered a non numeric or negative number. Try again!")
    } else {
        if (principleAmount == 0) {
            monthlyPayment = 0
            sumAllPayments = 0
            totInt = 0
        }
        else if (yrIntRate == 0) {
            monthlyPayment = principleAmount / loanTerm
            sumAllPayments = principleAmount
            totInt = 0
        } 
        else {
            monthlyPayment = principleAmount* r / (1- (1/ (1+r)**loanTerm));
            sumAllPayments = monthlyPayment * loanTerm;
            totInt = sumAllPayments - principleAmount;
        }
        document.getElementById("monthPay").innerHTML = "Monthly Payments: $" + Math.round(monthlyPayment * 100) / 100
        document.getElementById("sumPayments").innerHTML = "Sum of all payments: $" + Math.round(sumAllPayments * 100) / 100
        document.getElementById("totInterest").innerHTML = "Total Interest Paid: $" +  Math.round(totInt * 100) / 100
    }
}   
