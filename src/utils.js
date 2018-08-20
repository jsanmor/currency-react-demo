module.exports = {
  currencyFormatted: (amount, currency) => {
    var formated = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
      minimumFractionDigits: 2
    });
    return formated.format(amount);
  },
  currencies: {
    EUR: {
      symbol: "€",
      img:
        "https://www.currencyfair.com/cf-content/themes/cfwp-2018/img/currencies/bubble/eur.png?x30389&x30389",
      code: "EUR"
    },
    GBP: {
      symbol: "£",
      img:
        "https://www.currencyfair.com/cf-content/themes/cfwp-2018/img/currencies/bubble/gbp.png?x30389&x30389",
      code: "GBP"
    }
  }
};
