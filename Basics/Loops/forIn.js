//Forin() is used in object;
var symbols={
    yt:"youtube",
    ig:"instagram",
    tw:"twitter",
    lco:"learn code online.in"
}
for(const n in symbols){
    console.log(symbols[n]);
    console.log(` key is:${n} and the value is:${symbols[n]}`);
}