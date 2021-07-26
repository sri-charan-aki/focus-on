const express = require('express');
const router = express.Router();
const pageModels = require('./../models/schemas');

router.post('/:page/:key1/arr/:key2/:key3', async(req, res)=>{
  try{
    const page = await pageModels[req.params.page].findOne()
    page[req.params.key1][req.params.key2][req.query.index1][req.params.key3].push(req.body)
    page.save()
    .then(()=>{
      return res.status(201).json(page)
    })
    .catch(err=>{
      console.log(err)
      return res.sendStatus(500)
    })
  }catch(err){
    console.log(err)
    return res.sendStatus(400)
  }
});

router.delete('/:page/:key1/arr/:key2/:key3', async(req, res)=>{
  try{
    const page = await pageModels[req.params.page].findOne()
    page[req.params.key1][req.params.key2][req.query.index1][req.params.key3].splice(req.query.index2, 1)
    page.save()
    .then(()=>{
      return res.status(200).json(page)
    })
    .catch(err=>{
      console.log(err)
      return res.sendStatus(500)
    })
  }catch(err){
    console.log(err)
    return res.sendStatus(400)
  }
});

router.patch('/:page/:key1/arr/:key2/:key3', async(req, res)=>{
  try{
    const page = await pageModels[req.params.page].findOne()
    page[req.params.key1][req.params.key2][req.query.index1][req.params.key3][req.query.index2] = req.body
    page.save()
    .then(()=>{
      return res.status(201).json(page)
    })
    .catch(err=>{
      console.log(err)
      return res.sendStatus(500)
    })
  }catch(err){
    console.log(err)
    return res.sendStatus(400)
  }
});

module.exports = router;
