

$( document ).ready(function() {
	console.log("ready!");
	var selector = $('.currency-selector');
	console.log(selector);
  var currencyCodes = {
  "AED":{"label":"United Arab Emirates dirham"},
  "AFN":{"label":"Afghan afghani"},
  "ALL":{"label":"Albanian lek"},
  "AMD":{"label":"Armenian dram"},
  "AOA":{"label":"Angolan kwanza"},
  "ARS":{"label":"Argentine peso"},
  "AUD":{"label":"Australian dollar"},
  "AWG":{"label":"Aruban florin"},
  "AZN":{"label":"Azerbaijani manat"},
  "BAM":{"label":"Bosnia and Herzegovina convertible mark"},
  "BBD":{"label":"Barbadian dollar"},
  "BDT":{"label":"Bangladeshi taka"},
  "BGN":{"label":"Bulgarian lev"},
  "BHD":{"label":"Bahraini dinar"},
  "BIF":{"label":"Burundian franc"},
  "BMD":{"label":"Bermudian dollar"},
  "BND":{"label":"Brunei dollar"},
  "BOB":{"label":"Bolivian boliviano"},
  "BRL":{"label":"Brazilian real"},
  "BSD":{"label":"Bahamian dollar"},
  "BTN":{"label":"Bhutanese ngultrum"},
  "BWP":{"label":"Botswana pula"},
  "BYR":{"label":"Belarusian ruble"},
  "BZD":{"label":"Belize dollar"},
  "CAD":{"label":"Canadian dollar"},
  "CDF":{"label":"Congolese franc"},
  "CHF":{"label":"Swiss franc"},
  "CLP":{"label":"Chilean peso"},
  "CNY":{"label":"Chinese yuan"},
  "COP":{"label":"Colombian peso"},
  "CRC":{"label":"Costa Rican colón"},
  "CUP":{"label":"Cuban convertible peso"},
  "CVE":{"label":"Cape Verdean escudo"},
  "CZK":{"label":"Czech koruna"},
  "DJF":{"label":"Djiboutian franc"},
  "DKK":{"label":"Danish krone"},
  "DOP":{"label":"Dominican peso"},
  "DZD":{"label":"Algerian dinar"},
  "EGP":{"label":"Egyptian pound"},
  "ERN":{"label":"Eritrean nakfa"},
  "ETB":{"label":"Ethiopian birr"},
  "EUR":{"label":"Euro"},
  "FJD":{"label":"Fijian dollar"},
  "FKP":{"label":"Falkland Islands pound"},
  "GBP":{"label":"British pound"},
  "GEL":{"label":"Georgian lari"},
  "GHS":{"label":"Ghana cedi"},
  "GMD":{"label":"Gambian dalasi"},
  "GNF":{"label":"Guinean franc"},
  "GTQ":{"label":"Guatemalan quetzal"},
  "GYD":{"label":"Guyanese dollar"},
  "HKD":{"label":"Hong Kong dollar"},
  "HNL":{"label":"Honduran lempira"},
  "HRK":{"label":"Croatian kuna"},
  "HTG":{"label":"Haitian gourde"},
  "HUF":{"label":"Hungarian forint"},
  "IDR":{"label":"Indonesian rupiah"},
  "ILS":{"label":"Israeli new shekel"},
  "IMP":{"label":"Manx pound"},
  "INR":{"label":"Indian rupee"},
  "IQD":{"label":"Iraqi dinar"},
  "IRR":{"label":"Iranian rial"},
  "ISK":{"label":"Icelandic króna"},
  "JEP":{"label":"Jersey pound"},
  "JMD":{"label":"Jamaican dollar"},
  "JOD":{"label":"Jordanian dinar"},
  "JPY":{"label":"Japanese yen"},
  "KES":{"label":"Kenyan shilling"},
  "KGS":{"label":"Kyrgyzstani som"},
  "KHR":{"label":"Cambodian riel"},
  "KMF":{"label":"Comorian franc"},
  "KPW":{"label":"North Korean won"},
  "KRW":{"label":"South Korean won"},
  "KWD":{"label":"Kuwaiti dinar"},
  "KYD":{"label":"Cayman Islands dollar"},
  "KZT":{"label":"Kazakhstani tenge"},
  "LAK":{"label":"Lao kip"},
  "LBP":{"label":"Lebanese pound"},
  "LKR":{"label":"Sri Lankan rupee"},
  "LRD":{"label":"Liberian dollar"},
  "LSL":{"label":"Lesotho loti"},
  "LTL":{"label":"Lithuanian litas"},
  "LVL":{"label":"Latvian lats"},
  "LYD":{"label":"Libyan dinar"},
  "MAD":{"label":"Moroccan dirham"},
  "MDL":{"label":"Moldovan leu"},
  "MGA":{"label":"Malagasy ariary"},
  "MKD":{"label":"Macedonian denar"},
  "MMK":{"label":"Burmese kyat"},
  "MNT":{"label":"Mongolian tögrög"},
  "MOP":{"label":"Macanese pataca"},
  "MRO":{"label":"Mauritanian ouguiya"},
  "MUR":{"label":"Mauritian rupee"},
  "MVR":{"label":"Maldivian rufiyaa"},
  "MWK":{"label":"Malawian kwacha"},
  "MXN":{"label":"Mexican peso"},
  "MYR":{"label":"Malaysian ringgit"},
  "MZN":{"label":"Mozambican metical"},
  "NAD":{"label":"Namibian dollar"},
  "NGN":{"label":"Nigerian naira"},
  "NIO":{"label":"Nicaraguan córdoba"},
  "NOK":{"label":"Norwegian krone"},
  "NPR":{"label":"Nepalese rupee"},
  "NZD":{"label":"New Zealand dollar"},
  "OMR":{"label":"Omani rial"},
  "PAB":{"label":"Panamanian balboa"},
  "PEN":{"label":"Peruvian nuevo sol"},
  "PGK":{"label":"Papua New Guinean kina"},
  "PHP":{"label":"Philippine peso"},
  "PKR":{"label":"Pakistani rupee"},
  "PLN":{"label":"Polish złoty"},
  "PRB":{"label":"Transnistrian ruble"},
  "PYG":{"label":"Paraguayan guaraní"},
  "QAR":{"label":"Qatari riyal"},
  "RON":{"label":"Romanian leu"},
  "RSD":{"label":"Serbian dinar"},
  "RUB":{"label":"Russian ruble"},
  "RWF":{"label":"Rwandan franc"},
  "SAR":{"label":"Saudi riyal"},
  "SBD":{"label":"Solomon Islands dollar"},
  "SCR":{"label":"Seychellois rupee"},
  "SDG":{"label":"Singapore dollar"},
  "SEK":{"label":"Swedish krona"},
  "SGD":{"label":"Singapore dollar"},
  "SHP":{"label":"Saint Helena pound"},
  "SLL":{"label":"Sierra Leonean leone"},
  "SOS":{"label":"Somali shilling"},
  "SRD":{"label":"Surinamese dollar"},
  "SSP":{"label":"South Sudanese pound"},
  "STD":{"label":"São Tomé and Príncipe dobra"},
  "SVC":{"label":"Salvadoran colón"},
  "SYP":{"label":"Syrian pound"},
  "SZL":{"label":"Swazi lilangeni"},
  "THB":{"label":"Thai baht"},
  "TJS":{"label":"Tajikistani somoni"},
  "TMT":{"label":"Turkmenistan manat"},
  "TND":{"label":"Tunisian dinar"},
  "TOP":{"label":"Tongan paʻanga"},
  "TRY":{"label":"Turkish lira"},
  "TTD":{"label":"Trinidad and Tobago dollar"},
  "TWD":{"label":"New Taiwan dollar"},
  "TZS":{"label":"Tanzanian shilling"},
  "UAH":{"label":"Ukrainian hryvnia"},
  "UGX":{"label":"Ugandan shilling"},
  "USD":{"label":"United States dollar"},
  "UYU":{"label":"Uruguayan peso"},
  "UZS":{"label":"Uzbekistani som"},
  "VEF":{"label":"Venezuelan bolívar"},
  "VND":{"label":"Vietnamese đồng"},
  "VUV":{"label":"Vanuatu vatu"},
  "WST":{"label":"Samoan tālā"},
  "XAF":{"label":"Central African CFA franc"},
  "XCD":{"label":"East Caribbean dollar"},
  "XOF":{"label":"West African CFA franc"},
  "XPF":{"label":"CFP franc"},
  "YER":{"label":"Yemeni rial"},
  "ZAR":{"label":"South African rand"},
  "ZMW":{"label":"Zambian kwacha"},
  "ZWL":{"label":"Zimbabwean dollar"}
};
  console.log(currencyCodes);
	for (currency in currencyCodes){
		selector.append("<option>" + currency + "</option>");
	}

});

// $("#forex-form").submit(function (event) {
//   alert("submitting");

//   console.log(event);
//   event.preventDefault();
// });

$(function (){
  $('#convert').bind('click', function() {

    console.log('sanity checked');
    $("#results").hide();
    $("tbody tr").remove();

    $.getJSON('/convert', {
      amount: $('#amount').val(),
      currency: $('#currency option:selected').val()}, function(data) {
        console.log(data);
        $("#results").show();
        var outputTable = $("#results tbody")[0];
        var count = 0;
        for (var key in data) {
          var newRow = outputTable.insertRow(count);

          newRow.insertCell(0).innerText = ++count;
          newRow.insertCell(1).innerText = data[key]["name"] // TODO compute the amounts
          newRow.insertCell(2).innerText = data[key]["amount"].toFixed(2);
          newRow.insertCell(3).innerText = data[key]["countries"].toString();
        }
      });
    return false;
    });
});
// });