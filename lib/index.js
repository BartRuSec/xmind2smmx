var jszip=require("jszip");

var fs=require("fs");
var convert=require("xml-js");
var jsonata=require("jsonata")
var jsonataTransform=require("./transform.jsonata");

const readXmind=function(xmindFile, process) {
    fs.readFile(xmindFile,function(err,data){
        if (err) throw err;
        jszip.loadAsync(data).then(function(zip){
        zip.file("content.json").async("string").then(function(content){
                var json=JSON.parse(content);
                process(json);
            });
        });
    });
}

exports.logXmindJSON=function(xmindFile) {
    readXmind(xmindFile,function(json){
        console.log(JSON.stringify(json,null," "));
    });
}

exports.logSmmxJSON=function(smmxFile) {
   fs.readFile(smmxFile,function(err,data){
        if (err) throw err;
        jszip.loadAsync(data).then(function(zip){
            zip.file("document/mindmap.xml").async("string").then(function(content){
                console.log(convert.xml2json(content,{compact:true,spaces:4}));
            });
        });
    });
}


exports.convert=function(xmindFile,smmxFile) {

    if (smmxFile===undefined) 
        smmxFile=xmindFile.replace(/\.xmind$/,".smmx");

    readXmind(xmindFile,function(json){
       
                (async () => {
                    var mapping=jsonata(jsonataTransform);
                    const result = await mapping.evaluate(json); 
              
                    var xml=convert.json2xml(result,{compact:true,spaces:4});
                    var smmxZip=new jszip();
                    smmxZip.file("document/mindmap.xml",xml);
                    smmxZip.generateNodeStream({type:"nodebuffer",streamFiles:true})
                    .pipe(fs.createWriteStream(smmxFile))
                    .on("finish",function(){   
                        console.log("done");
                        })
                    .on("error",function(e){
                        console.log(e);
                    }) 
                })()     
    
        });       


}
 



