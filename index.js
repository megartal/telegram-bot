var TelegramBot = require('node-telegram-bot-api');
var fs = require('fs');
var dbClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/botdb";

var telegram = new TelegramBot("422059892:AAGaBmXTVGqCaksOB-9LkpXwDZ4Nj20OflU" , { polling: true });


dbClient.connect(url , function(err, db){
    if(err) throw err;

    telegram.onText(/\/start/, (msg) => {
        telegram.sendMessage(msg.chat.id, 
            "سلام، به فست دوز خوش آمدید، برای مشاهده نمونه کار هر یک از خیاط ها، گالری عکس را انتخاب کنید.",
        {
            "reply_markup" : {
                "keyboard" : [["تماس یا ما"], ["گالری عکس"]]
            }
        });
        var obj = { label: "user", firstName : msg.from.first_name, last_name: msg.from.last_name};
        db.collection("bot").insertOne(obj, function(err, res){
            if (err) throw err;
            console.log("1 document inserted.");
        });
    });

    telegram.onText(/گالری عکس/, (msg) => {
            telegram.sendMessage(msg.chat.id, "دسته بندی", {
                "reply_markup" : {
                    "keyboard" : [ ["مانتو", "لباس مجلسی"] , 
                    ["شلوار زنانه", "پیراهن زنانه"] 
                    , ["لباس عروس", "لباس سنتی"]  ] 
                }
        });
    });

    telegram.onText(/مانتو/, (msg) => {
        fs.readdir("C:\Users\Alex\Desktop\images\majlesi", (err, files) => {
            telegram.sendPhoto(msg.chat.id, "http://cdn.akairan.com/akairan/user/3/20159291929127a.jpg");
            telegram.sendPhoto(msg.chat.id, "http://files.namnak.com/users/zn/aup/201611/153_pics/%D9%85%D8%A7%D9%86%D8%AA%D9%88-%D9%88-%D9%BE%D8%A7%D9%84%D8%AA%D9%88-%D9%BE%D8%A7%DB%8C%DB%8C%D8%B2%D9%87.jpg");
            telegram.sendPhoto(msg.chat.id, "http://rouzegar.com/wp-content/uploads/2017/03/model-manto-spring-1396-rouzegar15.jpg");
            telegram.sendMessage(msg.chat.id, "مشاهده تصاویر بیشتر", {
                "reply_markup" : {
                    "keyboard" : [["مشاهده تصاویر بیشتر"], ["بازگشت"]]
                }
            });
        });
    });

    telegram.onText(/شلوار زنانه/, (msg) => {
        fs.readdir("C:\Users\Alex\Desktop\images\majlesi", (err, files) => {
            telegram.sendPhoto(msg.chat.id, "http://shikpars.com/wp-content/uploads/2016/01/Trousers8.jpg");
            telegram.sendPhoto(msg.chat.id, "http://www.parsnaz.com/upload/1/0.697082001307167661_parsnaz_ir.jpg");
            telegram.sendPhoto(msg.chat.id, "http://www.amazing.ir/wp-content/uploads/2016/01/model-new-amazing-ir-24.jpg");            
            telegram.sendMessage(msg.chat.id, "مشاهده تصاویر بیشتر", {
                "reply_markup" : {
                    "keyboard" : [["مشاهده تصاویر بیشتر"], ["بازگشت"]]
                }
            });
        });
    });

    telegram.onText(/پیراهن زنانه/, (msg) => {
        fs.readdir("C:\Users\Alex\Desktop\images\majlesi", (err, files) => {
            telegram.sendPhoto(msg.chat.id, "http://cdn.akairan.com/akairan/user/3/20152261833350a.jpg");
            telegram.sendPhoto(msg.chat.id, "http://www.abartazeha.com/wp-content/uploads/2014/11/shirts-model4.jpg");            
            telegram.sendMessage(msg.chat.id, "مشاهده تصاویر بیشتر", {
                "reply_markup" : {
                    "keyboard" : [["مشاهده تصاویر بیشتر"], ["بازگشت"]]
                }
            });
        });
    });


    telegram.onText(/لباس عروس/, (msg) => {
        fs.readdir("C:\Users\Alex\Desktop\images\majlesi", (err, files) => {
            telegram.sendPhoto(msg.chat.id, "https://www.aroos.co/wp-content/uploads/2016/11/%D9%84%D8%A8%D8%A7%D8%B3-%D8%B9%D8%B1%D9%88%D8%B3-%D9%82%D8%AF-%D8%A8%D9%84%D9%86%D8%AF.jpg?x16232");
            telegram.sendPhoto(msg.chat.id, "http://www.amazing.ir/wp-content/uploads/2015/12/drb-amazing-ir-7.jpg");            
            telegram.sendMessage(msg.chat.id, "مشاهده تصاویر بیشتر", {
                "reply_markup" : {
                    "keyboard" : [["مشاهده تصاویر بیشتر"], ["بازگشت"]]
                }
            });
        });
    });


    telegram.onText(/لباس سنتی/, (msg) => {
        fs.readdir("C:\Users\Alex\Desktop\images\majlesi", (err, files) => {
            telegram.sendPhoto(msg.chat.id, "http://files.namnak.com/users/zn/aup/9504/814_pics/%D9%84%D8%A8%D8%A7%D8%B3-%D8%B3%D9%86%D8%AA%DB%8C-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86%DB%8C.jpg");
            telegram.sendMessage(msg.chat.id, "مشاهده تصاویر بیشتر", {
                "reply_markup" : {
                    "keyboard" : [["مشاهده تصاویر بیشتر"], ["بازگشت"]]
                }
            });
        });
    });


    telegram.onText(/لباس مجلسی/, (msg) => {
        fs.readdir("C:\Users\Alex\Desktop\images\majlesi", (err, files) => {
            telegram.sendPhoto(msg.chat.id, "http://files.namnak.com/users/hk/aup/201706/616_pics/%D9%84%D8%A8%D8%A7%D8%B3-%D9%85%D8%AC%D9%84%D8%B3%DB%8C-2017.jpg");
            telegram.sendPhoto(msg.chat.id, "http://rouzegar.com/wp-content/uploads/2014/10/l-m-k-9o-5-2.jpg");
            telegram.sendPhoto(msg.chat.id, "http://mepatogh.ir/wp-content/uploads/2016/10/1477255985-model-dresses.jpg");
            telegram.sendMessage(msg.chat.id, "مشاهده تصاویر بیشتر", {
                "reply_markup" : {
                    "keyboard" : [["مشاهده تصاویر بیشتر"], ["بازگشت"]]
                }
            });
        });
    });

    telegram.onText(/بازگشت/, (msg) => {
        telegram.sendMessage(msg.chat.id, "دسته بندی", {
            "reply_markup" : {
                "keyboard" : [ ["مانتو", "لباس مجلسی"] , 
                ["شلوار زنانه", "پیراهن زنانه"] 
                , ["لباس عروس", "لباس سنتی"]  ] 
            }
      });
    });
  

        telegram.onText(/مشاهده تصاویر بیشتر/, (msg) => {
            telegram.sendMessage(msg.chat.id, "فعلا تصاویر بیشتری موجود نیست", {
                "reply_markup" : {
                    "keyboard" : [ ["مانتو", "لباس مجلسی"] , 
                    ["شلوار زنانه", "پیراهن زنانه"] 
                    , ["لباس عروس", "لباس سنتی"]  ] 
                }
        });
    });

});

