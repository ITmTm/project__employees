import {Component} from "react";

import './employees-add-form.scss'

class EmployeesAddForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			salary: ''
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

		// Проверка на наличие значений в полях
		if (!name.trim() || !salary.trim()) {
			return alert('Поля не должны быть пустыми');
		}

		// Проверка на минимальную длину имени и зарплаты
		if (name.length < 2) {
			return alert("Имя должно содержать не менее 2 букв")
		}

		if (isNaN(salary) || parseFloat(salary) <= 0) {
			return alert('З/П должна быть больше нуля')
		}

		this.props.onAdd(name, parseFloat(salary));
		this.setState({
			name: '',
			salary: ''
		})
	}


	render() {
		const {name, salary} = this.state;

		return (
			<div className="app-add-form">
				<h3>Добавьте нового сотрудника</h3>
				<form
					className="add-form d-flex"
					onSubmit={this.onSubmit}
				>
					<input type="text"
						   className="form-control new-post-label"
						   placeholder="Как его зовут?"
						   name="name"
						   value={name}
						   onChange={this.onValueChange}
					/>

					<input type="number"
						   className="form-control new-post-label"
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