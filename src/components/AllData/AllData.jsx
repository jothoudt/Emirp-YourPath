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

    //the data
    const rows = [
        { chart: 'All drugs usage rates', details: 'A bar chart showing usage rates by drug type', link_path: '/all_drugs_details'},
        { chart: 'Marijuana usage', details: 'Pie charts showing percantage of responders who used marijuana, by lifetime and last month', link_path: '/marijuana_details'},
        { chart: 'Nicotine usage', details: 'Pie charts showing percantage of reponders who used nicotine, by lifetime and last month', link_path: '/nicotine_details'},
        { chart: 'Alcohol usage', details: 'Pie charts showing percantage of reponders who used alcohol, by lifetime and last month', link_path: '/alcohol_details'},
        { chart: 'Cocaine usage', details: 'Pie charts showing percantage of reponders who used cocaine, by lifetime and last month', link_path: '/cocaine_details'},
        { chart: 'Meth usage', details: 'Pie charts showing percantage of reponders who used methamphetamines, by lifetime and last month', link_path: '/meth_details'},
        { chart: 'Heroin usage', details: 'Pie charts showing percantage of reponders who used heroin, by lifetime and last month', link_path: '/heroin_details'},
        { chart: 'Other opioids usage', details: 'Pie charts showing percantage of reponders who used other opioids, by lifetime and last month', link_path: '/opioids_details'},
        { chart: 'Benzodiazepines usage', details: 'Pie charts showing percantage of reponders who used benzodiazepines, by lifetime and last month', link_path: '/benzodiazepines_details'},
        { chart: 'Hallucinogen usage', details: 'Pie charts showing percantage of reponders who used hallucinogen, by lifetime and last month', link_path: '/hallucinogen_details'},
        { chart: 'Inhalant usage', details: 'Pie charts showing percantage of reponders who used inhalants, by lifetime and last month', link_path: '/inhalants_details'},
        { chart: 'Over-the-counter drug usage', details: 'Pie charts showing percantage of reponders who used over-the-counter drugs, by lifetime and last month', link_path: '/OTC_details'},
        { chart: 'Other substances usage', details: 'Pie charts showing percantage of reponders who used other substances, by lifetime and last month', link_path: '/other_substances_details'},
        { chart: 'Pregnancy rate', details: 'Rate of responders who are pregnant, not pregnant or unsure', link_path: '/pregnant'},
        { chart: 'Sexual orientation', details: 'Rate of responders who are straight, gay, bisexual or asexual', link_path: '/sexual_orientation'},
        { chart: 'Gender', details: 'A bar chart showing the gender of responders', link_path: '/gender'},
        { chart: 'Justice involved', details: 'A bar chart illustrating criminal justice experiences of responders', link_path: '/justice_involved'},
        { chart: 'Mental Health', details: 'A bar chart showing suspected or diagnosed mental health issues of responders', link_path: '/mental_health'},
        { chart: 'Race', details: 'A bar chart showing the race/ethnicity of responders', link_path: '/race'},
        { chart: 'Past services', details: 'A bar chart showing support services used previously by responders', link_path: '/past_services'},
        { chart: 'Fetal alcohol syndrom', details: 'Rate of responders diagnosed with fetal alcohol syndrom', link_path: '/fas'},

    ]

    // const rows = [ 1, 2 ]
    // const listItems = rows.map( ( number )=>
    //     <AllDataRows key={number} number={number} />
    // )



    return (
        <>
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
