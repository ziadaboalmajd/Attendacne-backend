import xlsx, { ISettings } from "json-as-xlsx";

function createSheet(respond: any, finalArduinoD: any, DrName: any, today: string, actTerm: string, actLevel: string, cousreCode: string, courseName: string) {
    const data = [
        {
            sheet: courseName + " " + actTerm + " " + actLevel,
            columns: [
                { label: "رقم", value: "number" },
                { label: "الأسم", value: "user" },
                { label: "المستوي", value: "level" },
                { label: "التخصص", value: "department" },
                { label: "الشعبة", value: "specialization" },
            ],
            content: finalArduinoD,
        }
    ];

    const settings: ISettings = {
        //fileName: (courseName + " " + today), // Name of the resulting spreadsheet
        extraLength: 3, // A bigger number means that columns will be wider
        writeOptions: {
            type: "buffer",
            bookType: "xlsx"
        }, // Style options from https://github.com/SheetJS/sheetjs#writing-options
        RTL: true, // Display the columns from right-to-left (the default value is false)
        //writeMode: 'writeFile', // The available parameters are 'WriteFile' and 'write'. This setting is optional. Useful in such cases https://docs.sheetjs.com/docs/solutions/output#example-remote-file
        //file: ""
    };

    // xlsx(data, settings); // Will download the excel file

    const buffer = xlsx(data, settings);
    respond.writeHead(200, {
        "Content-Type": "application/octet-stream",
        "Content-disposition": `attachment; filename=${(courseName + " " + today)}.xlxs`,
    });
    respond.end(buffer);
};

export default { createSheet };
