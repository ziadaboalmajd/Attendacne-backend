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
        extraLength: 3, // A bigger number means that columns will be wider
        writeOptions: {
            type: "buffer",
            bookType: "xlsx",
        },
        RTL: true, // Display the columns from right-to-left (the default value is false)
    };


    const buffer = xlsx(data, settings);
    respond.writeHead(200, {
        "Content-Type": "application/octet-stream",
        "Content-disposition": `attachment; filename=${(courseName + " " + today)}.xlsx`,
    });
    respond.end(buffer);
};

export default { createSheet };
