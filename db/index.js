var mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/cards", { useNewUrlParser: true });

mongoose.connection.once("open", function(){
    console.log("数据库连接成功🐻")
})

var Schema = mongoose.Schema;

var cardSchema = new Schema({
    iconIndex:Number,
    playerName:String,
    textarea:String
})

let CardModel = mongoose.model("cards", cardSchema);

exports.CardModel = CardModel;