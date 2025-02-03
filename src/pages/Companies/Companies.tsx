import React, { useCallback, useEffect, useState } from "react";
import { DataGrid,   GridColDef } from '@mui/x-data-grid';
import { createClient } from "@supabase/supabase-js";

// const rows2: GridRowsProp = [
//   { id: 1, company_name: 'Hello', sic_codes: 'World', registered_in: 'England & Wales' },
//   { id: 2, company_name: 'DataGridPro', sic_codes: 'is Awesome', registered_in: 'England & Wales' },
//   { id: 3, company_name: 'MUI', sic_codes: 'is Amazing', registered_in: 'England & Wales' },
// ];

interface Row {
    sr: number;
    id: string;
    company_name: string;
    sic_codes: string;
    registered_in: string;
}



const columns: GridColDef[] = [
  { field: 'sr', headerName: 'Sr.', width: 100 },
  { field: 'company_name', headerName: 'Company Name', width: 150 },
  { field: 'sic_codes', headerName: 'SIC Codes', width: 150 },
  { field: 'registered_in', headerName: 'Registered In', width: 150 },
  { field: 'created_at', headerName: 'Created At', width: 150,  },
];


    const supabase = createClient("https://yatyzfexgpwmtcvtkiti.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlhdHl6ZmV4Z3B3bXRjdnRraXRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUyMjMwMTEsImV4cCI6MjA1MDc5OTAxMX0.43xEcnwZK_GkI3CrPe58FHndmgAzLA0vECwnoS_TGVE")

const Companies = () => {


    const [rows, setRows] = useState<Row[]>([])


    const getCompaniesData = useCallback(async() => {

        const { data, error } = await supabase.from("company_info").select();

        console.log(data)
        console.log(error)
        if (data) {
            const mappedData = data.map<Row>((el , index) => {
                return {    
                    sr: index + 1,
                    id: el.id,
                    company_name: el.company_name,
                    sic_codes: el.sic_codes.join(", "),
                    registered_in: el.registered_in
                }
            })

            setRows(mappedData)
        }


    }, []);




    useEffect(() => {

        getCompaniesData()


    }, [getCompaniesData])








  return  <div style={{   width: '100%' }}>
  <DataGrid rows={rows} columns={columns} />
</div>
};

export default Companies;
