import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import './app.scss'
function App() {

	const data = [
		{name: 'Anthony S.', salary: 1800, increase: false, id: 1},
		{name: 'Timur M.', salary: 2000, increase: true, id: 2},
		{name: 'Vildan F.', salary: 2200, increase: false, id: 3}
	]

	return (
		<div className='app'>
			<AppInfo />

			<div className="search-panel">
				<SearchPanel />
				<AppFilter />
			</div>

			<EmployeesList data={data} />
			<EmployeesAddForm />
		</div>
	);
}

export default App;