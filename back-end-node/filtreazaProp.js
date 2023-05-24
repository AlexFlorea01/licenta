const express = require('express');
const proprietatiModel = require('./modele/modelProprietate');

router.post('/',async (req,res)=>{
   
    let fullfiled_filters = {};
    for(let c in req.body.body)
    {
        //dara pret max, pret min
        if(req.body.body[c] != '' && c !='pret_pana_la' && c != 'pret_de_la' )
        {
            fullfiled_filters[c] = req.body.body[c];
        }
    }

    console.log("filtre:", req.body.body);
    console.log("filtre pline:", fullfiled_filters)

    let filtrate_fara_pret = await proprietatiModel.find({...fullfiled_filters},(err,data)=>{
        if(err)
        {
            res.status(500).json({err: 'search err'})
        }
        else
        {
            return data;
        }
    })
    console.log("ciicici",filtrate_fara_pret)

    let arr_final = []
    let pret_min = Number(req.body.body.pret_de_la);
    let pret_max = Number(req.body.body.pret_pana_la);

    filtrate_fara_pret.forEach((el)=>{
        
        if(el.pret > pret_max && el.pret < pret_max )
        {
            //exact price
            arr_final.push(el)
        }
        else if(pret_max == '' && pret_min == '')
        {
            //not completed fields
            arr_final.push(el);
        }
        else if(pret_max == '' && el.pret > pret_min)
        {
            //only pret_min completed
            arr_final.push(el);
        }
        else if(pret_min == ''  && el.pret < pret_max)
        {
            arr_final.push(el);
        }
    })
    console.log("final", arr_final);
    res.json({rasp: arr_final})
    }
)
module.exports = router;
