import { Component } from "react";
import './search-panel.scss'
class SearchPanel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			term: ''
		}
	}
	render() {
		return (
			<input
				type="text"
				className='form-control search-input'
				placeholder='Найти сотрудника'
			/>
		)
	}
}

export default SearchPanel;