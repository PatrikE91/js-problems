function distance (min, speed){
 const dpm = 1 / 60
 let time = dpm * min
 const result = Math.round(time * speed)
 return console.log(result) 
}
distance(20, 100)