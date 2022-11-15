import { ToastAndroid } from 'react-native';
import { Dirs, FileSystem } from 'react-native-file-access';

export namespace FileSystemHelper{
    export const writeFileInDownloads =async  (data:string,fileName:string,extension:string):Promise<boolean>=>
    {
        try{
            const currentDate = new Date();
            let currentDateString =  (currentDate.toLocaleDateString() +" "+ currentDate.toLocaleTimeString())+"."+currentDate.getMilliseconds()
            currentDateString = currentDateString.replace("/","-")
            currentDateString = currentDateString.replace("/","-")
            console.log("current date: ",currentDateString);
            const fileNameWithDate = `${fileName}_${currentDateString}.${extension}`
            console.log("file name: ",fileNameWithDate);
            
            const path =`${Dirs.DocumentDir}/test/${fileNameWithDate}`;
            console.log(`saving in path ${path}...`);
            await FileSystem.writeFile(path,data,"utf8");
            if (!await FileSystem.exists(path)){ 
              console.log("file no created on internal folder ...");
              throw new Error("file no created on internal folder ...")
            }else{
              console.log("file created on internal folder...");
            }// check to see if our filePath was created
            await FileSystem.cpExternal(path,fileNameWithDate,'downloads');// copies our file to the downloads folder/directory
            ToastAndroid.show('Se han descargado los datos correctamente', ToastAndroid.SHORT);
            return true;
          }catch(e)
          {
            console.log(e);
            ToastAndroid.show('Error escribiendo en el almacenamiento interno', ToastAndroid.SHORT);
            return false;
          }
    }

    export const writeFileInPrivateFolder =async  (data:string,fileName:string,folderPath:string):Promise<boolean>=>
    {
        try{
           
            const fileNameWithExtension =fileName;
            console.log("file name: ",fileNameWithExtension);
            const path =`${folderPath}${fileNameWithExtension}`;
            console.log(`saving in path ${path}...`);
            await FileSystem.writeFile(path,data,"utf8");
            if (!await FileSystem.exists(path)){ 
              console.log("file no created on internal folder ...");
              throw new Error("file no created on internal folder ...")
            }else{
              console.log("file created on internal folder...");
            }// check to see if our filePath was created
            //await FileSystem.cpExternal(path,"test",'downloads');// copies our file to the downloads folder/directory
            //ToastAndroid.show('Se han descargado los datos correctamente', ToastAndroid.SHORT);
            return true;
          }catch(e)
          {
            console.log(e);
            ToastAndroid.show('Error escribiendo en el almacenamiento interno', ToastAndroid.SHORT);
            return false;
          }
    }

    export const computeFolderName =  (name:string):string =>{
        const currentDate = new Date();
        let currentDateString =  (currentDate.toLocaleDateString() +" "+ currentDate.toLocaleTimeString())+"."+currentDate.getMilliseconds()
        currentDateString = currentDateString.replace("/","-")
        currentDateString = currentDateString.replace("/","-")
        console.log("current date: ",currentDateString);
        return name+"_"+currentDateString;
    }

    export const copyRoutineFolder =async  (path:string,folderName:string):Promise<boolean>=>
    {
        await FileSystem.cpExternal(path,folderName,'downloads');// copies our file to the downloads folder/directory
        return true;
        
    }

    export const createPrivateFolder = async (folderPath:string) =>{
        console.log("creating folder... ", folderPath);
        const folder = await FileSystem.mkdir(folderPath);
        console.log("creatd: ",folder);
        
    }
}