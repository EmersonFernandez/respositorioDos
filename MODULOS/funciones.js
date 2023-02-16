
let disponibleRam=function(freemem){
    let bitsGb= 1e-9*freemem;
    return bitsGb;
}

let totalrRam=totalmem=>{
    let bitsGb= 1e-9*totalmem;
    return bitsGb ;
}


const conversion={
    disponibleRam,
    totalrRam
}
module.exports=conversion;
