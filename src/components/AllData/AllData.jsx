import React from 'react'
//import AllDataRows from '../AllDataRows/AllDataRows';
import AllDataList from '../AllDataList/AllDataList';
//styling
import './AllData.css'

const AllData = () => {
    // const columns = [
    //     { field: 'id', headerName: 'ID', width: 130 },
    //     { field: 'chart', headerName: 'Chart', width: 130 },
    //     { field: 'details', headerName: 'Description', width: 130 },
    //     { field: 'link', headerName: 'Link', width: 130 }
    // ]
    const rows = [
        { chart: 'Marijuana usage', details: 'Pie charts showing percantage of responders who used marijuana, by lifetime and last month', link_path: '/marijuana_details'},
        { chart: 'Nicotine usage', details: 'Pie charts showing percantage of reponders who used nicotine, by lifetime and last month', link_path: '/nicotine_details'},
        { chart: 'Alcohol usage', details: 'Pie charts showing percantage of reponders who used alcohol, by lifetime and last month', link_path: '/alcohol_details'},
        { chart: 'Cocaine usage', details: 'Pie charts showing percantage of reponders who used cocaine, by lifetime and last month', link_path: '/cocaine_details'},
        { chart: 'Heroin usage', details: 'Pie charts showing percantage of reponders who used heroin, by lifetime and last month', link_path: '/heroin_details'},
        { chart: 'Other opioids usage', details: 'Pie charts showing percantage of reponders who used other opioids, by lifetime and last month', link_path: '/opioids_details'},
        { chart: 'Nicotine usage', details: 'Pie charts showing percantage of reponders who used nicotine, by lifetime and last month', link_path: '/benzodiazepines_details'},
        { chart: 'Nicotine usage', details: 'Pie charts showing percantage of reponders who used nicotine, by lifetime and last month', link_path: '/hallucinogen_details'},
        { chart: 'Nicotine usage', details: 'Pie charts showing percantage of reponders who used nicotine, by lifetime and last month', link_path: '/inhalants_details'},
        { chart: 'Nicotine usage', details: 'Pie charts showing percantage of reponders who used nicotine, by lifetime and last month', link_path: '/OTC_details'},
        { chart: 'Nicotine usage', details: 'Pie charts showing percantage of reponders who used nicotine, by lifetime and last month', link_path: '/other_substances_details'},
        { chart: 'Nicotine usage', details: 'Pie charts showing percantage of reponders who used nicotine, by lifetime and last month', link_path: '/all_drugs_details'}

    ]

    // const rows = [ 1, 2 ]
    // const listItems = rows.map( ( number )=>
    //     <AllDataRows key={number} number={number} />
    // )



    return (
        <>
            <h2>All data</h2> 
            <table className="allDataTable">
                <thead>
                    <tr>
                        <th>Chart</th>
                        <th>Description</th>
                        <th>Link</th>
                    </tr>
                </thead>
                <AllDataList rows={rows} />
            </table>
        </>
    )
}

export default AllData
