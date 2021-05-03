import { useState ,useEffect} from "react"
import secureAxios from "./secureAxios"
import {Link} from 'react-router-dom'
import {Line} from 'react-chartjs-2'



function Analytics(props){

    const [start_date,setStart_date]=useState('')
    const [end_date,setEnd_date]=useState('')
    const [chartData, setChartData]  = useState({});
    

    const send=()=>{
        let day = [];
        let count = [];

        secureAxios.post('analytics/' ,{start_date,end_date})
        .then(res => {
            console.log(res);
            for(const dataObj of res.data){
                day.push(dataObj.day);
                count.push(parseInt(dataObj.count ));

            }
            console.log(day,'day')
            setChartData({
                labels: day,
                datasets: [{
                        label: 'Number of Forms filled per day',
                        data: count,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                        ],
                        borderWidth: 1
                    }]
            });
        })
        .catch(err =>{
            console.log(err);
        })
        
    }
 
    return(
        <div>
            <h1>Analytics</h1>
            <div> <Link to={"/Home"}>Home</Link></div>
            <div><Link to={"/contactUs"}>Contact Us</Link></div>
            <div> <Link to={"/analytics"}>Analytics</Link></div>
            <br/>
            <br/>
            <br/>
            <input type="date" id="start_date" value={start_date}
            placeholder="enterdate" onChange={ e=>setStart_date(e.target.value)}/>
            <br/>
            <input type="date" id="end_date" value={end_date}
            placeholder="enterdate" onChange={ e=>setEnd_date(e.target.value)}/>
            <br/>
            <button onClick={send}>Send</button>

            <div class="chart">
            <Line data={chartData} />
            </div>



        </div>
    )
}

export default Analytics