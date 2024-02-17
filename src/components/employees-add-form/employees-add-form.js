import {Component} from "react";

import './employees-add-form.scss'

class EmployeesAddForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			salary: '',
			nameValid: true,
			salaryValid: true
		}
	}

	onValueChange = (e) => {
		this.setState({
			[e.target.name] : e.target.value
		})
	}

	onSubmit = (e) => {
		e.preventDefault();

		const {name, salary} = this.state;

		if (!this.validateName(name) || !this.validateSalary(salary)) {
			return
		}

		this.props.onAdd(name, parseFloat(salary));
		this.setState({
			name: '',
			salary: '',
			nameValid: true,
			salaryValid: true
		})
	}

	validateName = (name) => {
		const nameValid = /^[A-Za-zА-Яа-яё]+$/u.test(name) && name.length >= 2;
		if (!nameValid) {
			alert('Имя должно содержать минимум 2 буквы и не должно содержать цифры');
			this.setState({nameValid})
		}
		return nameValid
	}

	validateSalary = (salary) => {
		const salaryValid = salary.length >= 2 && !isNaN(parseFloat(salary)) && parseFloat(salary) > 0;
		if (!salaryValid) {
			alert('З/П должна содержать минимум 2 цифры и быть больше нуля');
			this.setState({ salaryValid });
		}
		return salaryValid
	}


	render() {
		const {name, salary, nameValid, salaryValid} = this.state;

		return (
			<div className="app-add-form">
				<h3>Добавьте нового сотрудника</h3>
				<form
					className="add-form d-flex"
					onSubmit={this.onSubmit}
				>
					<input type="text"
						   className={`form-control new-post-label ${nameValid ? '' : 'invalid'}`}
						   placeholder="Как его зовут?"
						   name="name"
						   value={name}
						   onChange={this.onValueChange}
					/>

					<input type="number"
						   className={`form-control new-post-label ${salaryValid ? '' : 'invalid'}`}
						   placeholder="З/П в $?"
						   name="salary"
						   value={salary}
						   onChange={this.onValueChange}
					/>

					<button type="submit"
							className="btn btn-outline-light">Добавить
					</button>
				</form>
			</div>
		);
	}
}

export default EmployeesAddForm;