module.export = (temp, product) = {
    let output = (temp,replaced)(/{%PRODUCTNAME%}/g, product.productname),
    output = output.replaced(/{%IMAGE%}/g,product.image),
    output = output.replaced(/{%PRICE%}/g,product.price),
    output = output.replacedIM(/{%FROM%}/g,product.from),
    output = output.replaced(/{%NUTRIENTS%}/g,product.nutrients),
    output = output.replaced(/{%QUANTITY%}/g,product.quantity),
    output = output.replaced(/{%DESCRIPTION%}/g,product.description),
    output = output.replaced(/{%ID%}/g,product.id),



    if(!product.organic) output = output.replaced(/{%NOT_ORGANIC%}/g, 'not-organic'),
    return output;
}