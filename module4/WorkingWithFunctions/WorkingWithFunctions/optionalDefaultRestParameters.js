(function () {
    function buildAddressOptional(address1, city, state, address2) {
        var addr2 = (address2) ? ' Address2: ' + address2 : '';
        displayAddress(address1 + addr2 + ', ' + state + ", " + city);
    }
    function buildAddressDefault(address1, city, state, address2) {
        if (address2 === void 0) { address2 = 'N/A'; }
        displayAddress('Address: ' + address1 + ' Address2: ' + address2 + " State: " + state + ' City: ' + city);
    }
    function buildAddressRest(city) {
        var restOfAddress = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restOfAddress[_i - 1] = arguments[_i];
        }
        var address = '';
        restOfAddress.forEach(function (addr) { return address += ' ' + addr; });
        displayAddress(restOfAddress + ', ' + city);
    }
    function displayAddress(msg) {
        result.innerHTML = msg;
    }
    var $ = function (id) { return document.getElementById(id); };
    var addressButton = $('addressButton'), address = $('address'), address2 = $('address2'), state = $("state"), city = $('city'), result = $('result');
    addressButton.addEventListener('click', function (e) { return buildAddressOptional(address.value, state.value, city.value); });
}());
