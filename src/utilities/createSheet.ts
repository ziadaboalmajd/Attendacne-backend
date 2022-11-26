import xlsx from "json-as-xlsx";

function createSheet(respond : any, finalArduinoD : any,  today : string, actTerm : string, actLevel : string, cousreCode: string, courseName: string) {
    const data = [
        {
            sheet: courseName + " " + actTerm + " " + actLevel,
            columns: [
                { label: "رقم", value: "number" },
                { label: "الأسم", value: "user" },
                { label: "المستوي", value: "level" },
                { label: "التخصص", value: "department" },
                { label: "الشعبة", value: "specialization" },
                { label: "وقت الحضور", value: "time" },
            ],
            content: finalArduinoD,
        }
    ];

    const settings = {
        fileName: (courseName + " " + today), // Name of the resulting spreadsheet
        extraLength: 3, // A bigger number means that columns will be wider
        writeMode: 'writeFile', // The available parameters are 'WriteFile' and 'write'. This setting is optional. Useful in such cases https://docs.sheetjs.com/docs/solutions/output#example-remote-file
        writeOptions: {}, // Style options from https://github.com/SheetJS/sheetjs#writing-options
        RTL: true, // Display the columns from right-to-left (the default value is false)
    };

    xlsx(data, settings); // Will download the excel file
    respond.status(200).send("data send successfully");
};


export default { createSheet };








/*
const callback = function (sheet) {
    console.log("Download complete:", sheet);
};

  xlsx(data, settings, callback); // Will download the excel file
*/

/* generate Buffer 
const buf = XLSX.write(wb, { type:"buffer", bookType:"xlsx" });

/* prepare response headers 
res.statusCode = 200;
res.setHeader('Content-Disposition', 'attachment; filename="SheetJSNode.xlsx"');
res.setHeader('Content-Type', 'application/vnd.ms-excel');
res.end(buf);

 */