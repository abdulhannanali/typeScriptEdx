(function () {
    function displayResult(msg) {
        result.innerHTML = msg;
    }
    var compound = function (amt, rate, years) {
        var months = years * 12;
        var yrRate = (rate / 12) / 100;
        return amt * Math.pow(1 + yrRate, months);
    };
    var $ = function (id) { return document.getElementById(id); };
    var totalButton = $('totalButton'), amount = $('amount'), rate = $('rate'), years = $('years'), result = $('result');
    totalButton.addEventListener('click', function (e) {
        var amountValue = parseFloat(amount.value), rateValue = parseFloat(rate.value), yearsValue = parseFloat(years.value);
        displayResult('$' + compound(amountValue, rateValue, yearsValue).toFixed(2));
    });
}());
