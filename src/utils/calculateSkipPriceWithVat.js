const calculateSkipPriceWithVat = (price, vat) => {
    const vatDecimal = vat / 100;
    const vatAmount = vatDecimal * price
    const totalPrice = vatAmount + price
    return totalPrice
}

export default calculateSkipPriceWithVat