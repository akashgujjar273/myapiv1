const fs=require("fs")
// const workout=require("./../data/fullBody.json")
const workout=JSON.parse(fs.readFileSync(`${__dirname}/../data/fullBody.json`))
// console.log(workout)

exports.getAll= (req, res) => {
    
    res.status(200).json({
      status: 'success',
    //   requestedAt: req.requestTime,
    //   results: tours.length,
      data: {
        workout
      }
    });
  };
exports.getOneDay=(req,res)=>{
    const day=req.params.day*1
    const result=workout.find(el=>el.day===day)
    if(req.params.day*1>workout.length){
        res.status(404).json({
            status:"fail",
            message:"invalid day"
        })
    }
    res.status(200).json({
        status:"successful",
        data:{
            result
        }
    })
}