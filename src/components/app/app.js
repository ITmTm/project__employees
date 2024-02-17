import {Component} from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import './app.scss'
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{name: 'Anthony S.', salary: 1800, increase: false, like: true, id: 1},
				{name: 'Timur M.', salary: 2000, increase: true, like: false, id: 2},
				{name: 'Vildan F.', salary: 2200, increase: false, like: false, id: 3}
			]
		}
		this.maxId = 4;
	}

	deleteItem = (id) => {
		this.setState(({data}) => {

			return {
				data: data.filter(item => item.id !== id)
			}
		})
	}

	addItem = (name, salary) => {
		const newItem = {
			name,
			salary,
			increase: false,
			like: false,
			id: this.maxId++
		}
		this.setState(({data}) => {
			const newArr = [...data, newItem];
			return {
				data: newArr
			}
		})
	}

	onToggleIncrease = (id) => {
		this.setState(({data}) => ({
			data: data.map(item => {
				if (item.id === id) {
					return {...item, increase: !item.increase};
				}
				return item;
			})
		}))
	}

	onToggleLike = (id) => {
		this.setState(({data}) => ({
			data: data.map(item => {
				if (item.id === id) {
					return {...item, like: !item.like};
				}
				return item;
			})
		}))
	}

	render() {
		const employees = this.state.data.length;
		const increased = this.state.data.filter(item => item.increase).length;
		return (
			<div className='app'>
				<AppInfo employees={employees} increased={increased}/>

				<div className="search-panel">
					<SearchPanel />
					<AppFilter />
				</div>

				<EmployeesList
					data={this.state.data}
					onDelete={this.deleteItem}
					onToggleIncrease={this.onToggleIncrease}
					onToggleLike={this.onToggleLike}
				/>
				<EmployeesAddForm
					onAdd={this.addItem}
				/>
			</div>
		);
	}
}

export default App;