import { Doughnut} from 'react-chartjs-2'

function BarChart() {
    return ( 
        <>
            <h2>Bar BarChart</h2>
            {/* <Bar 
                data={{
                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                    datasets: [1,2,3,4,5,6,7]
                }}
                height={400}
                width={600}
                // options=
            /> */}
            <Doughnut />
        </>
     );
}

export default BarChart;