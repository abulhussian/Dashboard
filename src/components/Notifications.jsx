export default function Notifications() {
  return (
    <>
      <div className="bg-white rounded-2xl p-4 shadow-md">
        <h3 className="text-lg font-semibold mb-4">Notifications</h3>
        <div className="text-sm text-gray-600">
          <p>
            <strong>Amlodipine</strong> - 10mg
          </p>
          <p className="text-xs text-gray-400 mb-2">
            Mon, Wed, Fri, Sun - 2 times in a day after food
          </p>
          {/* <hr className="my-2" /> */}
          <p>
            <strong>Dr. Benjamin Fedrel</strong>
          </p>
          <p className="text-xs text-gray-400">
            Neurologist - Spinal cord and nerves
          </p>
          <p className="text-xs text-gray-400">
            Date: 26 Aug 2023, Time: 04:30 PM
          </p>
        </div>
      </div>
    </>
  );
}
