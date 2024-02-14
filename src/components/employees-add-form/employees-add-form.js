import {Component} from "react";

import './employees-add-form.scss'

class EmployeesAddForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			salary: 0
		}
	}
	render() {
		return (
			<div className="app-add-form">
				<h3>Добавьте нового сотрудника</h3>
				<form
					className="add-form d-flex">
					<input type="text"
						   className="form-control new-post-label"
						   placeholder="Как его зовут?"/>

					<input type="number"
						   className="form-control new-post-label"
						   placeholder="З/П в $?"/>

					<button type="submit"
							className="btn btn-outline-light">Добавить
					</button>
				</form>
			</div>
		);
	}
}

export default EmployeesAddForm;