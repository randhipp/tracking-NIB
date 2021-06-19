process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
var axios = require('axios');
var qs = require('qs');

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  console.log(req.body);

var data = qs.stringify({
  'data[TANGGAL_NIB]': req.body.date,
  'data[NIB]': req.body.nib 
});

console.log(data);

var config = {
  method: 'post',
  url: 'https://oss.go.id/portal/home/trackingNIB',
  headers: { 
    'Content-Type': 'application/x-www-form-urlencoded', 
  },
  data : data
};

axios(config)
.then(function (response: any) {
  console.log(JSON.stringify(response.data));
  res.status(200).json(response.data)
})
.catch(function (error: any) {
  console.log(error);
  res.status(400).json(error)
});


  
}
