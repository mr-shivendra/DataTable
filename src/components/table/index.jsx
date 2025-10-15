import {useState,useEffect} from 'react'
import axios from 'axios'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import './index.css'
import 'primereact/resources/themes/lara-light-indigo/theme.css';  // or your preferred theme
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
        
        


const Table = () => {
    const [tableData,setTableData]=useState([])
    const [selectedProducts,setSelectedProducts]=useState([])
    const [selectionNo,setSelectionNo]=useState('')
    const [limit, setLimit] = useState(1);

    async function fetchData(n){
        try {
           const res=await axios.get(`https://api.artic.edu/api/v1/artworks?page=${n}`)  
           setTableData(res.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
      fetchData(limit)
    },[limit])

    useEffect(() => {
    const customNumber = parseInt(selectionNo);
    if (!isNaN(customNumber) && customNumber > 0) {
      const selected = tableData.slice(0, customNumber);
      setSelectedProducts(selected);
    } else if(customNumber==0) {
      setSelectedProducts([]);
    }
  }, [selectionNo,tableData]);
  return (
    <div>
      <div className="headers">
        <h2>Data Table</h2>
        <input type="number" placeholder='Enter No. to select rows' onChange={(e)=>setSelectionNo(e.target.value)}/>
      </div>
    <DataTable value={tableData} selectionMode={ null} selection={selectedProducts} onSelectionChange={(e) => setSelectedProducts(e.value)} dataKey="id" tableStyle={{ minWidth: '50rem' }}>
    <Column selectionMode="multiple" headerStyle={{ width: '1rem' }} ></Column>
    <Column field="title" header="Title" ></Column>
    <Column field="place_of_origin" header="Place"></Column>
    <Column field="artist_display" header="Artist"></Column>
    <Column field="inscriptions" header="Inscriptions"></Column>
    <Column field="date_start" header="Date_start"></Column>
    <Column field="date_end" header="Date_end"></Column>
   </DataTable>
    <div className="paginator">
      {limit!==1 && <span onClick={()=>setLimit(prev=>prev-1)}>Prev</span>}
      {limit!==12 && <span onClick={()=>setLimit(prev=>prev+1)}>Next</span>}
    </div>
    </div>
  )
}

export default Table