import { jsonToCSV } from 'react-native-csv'

export namespace CSVHelper {

    export const converImuDataInCsv = async (input:any) =>
    {
        const results = jsonToCSV(input);
        //console.log(results);
        return results;
        
    }

}