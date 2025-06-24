import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
import { FaWalking } from "react-icons/fa";
import { Line } from "react-chartjs-2";
export default function Chart() {
  const data = {
    labels: ["2020", "2021", "2022", "2023"],
    datasets: [
      {
        label: "Health Data",
        data: [72, 80, 70, 90],
        borderColor: "#ec4899",
        backgroundColor: "rgba(236, 72, 153, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Health Average",
        font: {
          size: 16,
        },
      },
    },
  };
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Health Chart */}
        <div className="bg-white rounded-md p-2 shadow-md">
          <Line data={data} options={options} />
        </div>

        {/* Step Counter */}
        <div className="bg-white rounded-2xl p-4 shadow-md flex flex-col items-center justify-center text-center">
          <FaWalking className="text-pink-400 text-3xl mb-2" />
          <p className="text-sm text-gray-500">Walked</p>
          <h2 className="text-2xl font-bold">5416 steps</h2>
          <p className="text-sm text-gray-500">Goal: 8000 steps</p>
          <p className="text-pink-500 font-semibold mt-2">2524 left</p>
        </div>
      </div>
    </>
  );
}
