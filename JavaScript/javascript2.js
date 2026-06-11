//create a object having five property , and delete fourth one
//and also update the second and third property both

const shop={
    name:"PRANI SANSTHAAN",
    location:"LUCKNOW",
    ID:3111,
    open_time:"4 AM",
    close_time:" 5 AM"

}
console.log(shop)

delete shop.open_time
console.log(shop)


shop.location="KUSHINAGAR"
shop.ID="1131"
console.log(shop)