export default function AgendaPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-eaa-blue mb-8">EAA 690 Board of Directors Meeting</h1>
      
      <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-eaa-blue mb-6">Agenda</h2>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <p className="text-lg font-semibold text-gray-800 mb-6">
            <strong>EAA 690 Board of Directors Meeting, December 11th, 2025; 7:00PM</strong>
          </p>
          
          <ol className="list-decimal list-inside space-y-4 text-gray-700">
            <li>Call to order.</li>
            <li>Approve minutes from prior meeting.</li>
            <li>
              Committee reports
              <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                <li>Finance</li>
                <li>BOT - searching for Chairperson</li>
                <li>Food Service</li>
                <li>Membership</li>
                <li>Publicity</li>
                <li>Scholarship</li>
                <li>Summer Camp</li>
                <li>Young Eagles/Eagles</li>
                <li>Youth Program</li>
              </ul>
            </li>
            
            <li>
              Unfinished Business
              <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                <li>Results of chapter member vote on engine acquisition for RV-9 proposal.</li>
                <li>Youth credits earned/expired tabled until December BOD meeting.</li>
                <li>Status of new chapter e-mail platform.</li>
                <li>2026-2029 BOT members Ralph Kirkland, ?, ?.</li>
                <li>Status of mini-split AC unit install for simulator room.</li>
              </ul>
            </li>
            
            <li>
              New Business
              <p className="ml-6 mt-2 mb-2 font-semibold">A. Transition Plan for:</p>
              <ol className="list-decimal list-inside ml-12 space-y-1">
                <li>NavCom</li>
                <li>Airport Visits</li>
                <li>PB Presentations</li>
                <li>Airport Authority Liaison</li>
                <li>
                  Water Agreements
                  <ol className="list-decimal list-inside ml-6 mt-1 space-y-1">
                    <li>New tenant, hangar 5, Cirrus Management.</li>
                    <li>Civil Air Patrol water meters.</li>
                  </ol>
                </li>
                <li>Eagle Flight Requests</li>
                <li>Squarespace dues payments</li>
              </ol>
            </li>
            
            <li>Member Submitted Item</li>
            <li>Adjourn</li>
          </ol>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-sm text-gray-600 italic">
            All transactions are secured through Stripe, which is certified to the highest compliance standards.
          </p>
        </div>
      </div>
    </div>
  )
}

