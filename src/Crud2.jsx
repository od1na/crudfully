import React, { Component } from "react";
import Users from "./data";
import './Crud.css'

class Crud2 extends Component {
    state = {
        data: Users,
        selected: '',
    }
    render() {
        let onEdit = (selected) => {
            this.setState({ selected })
        }
        let onCancel = () => {
            this.setState({ selected: null })
        }
        let OnSave = () => {
            let onsave = this.state.data.map((value) => value.id === this.state.selected.id ? this.state.selected : value)
            this.setState({ data: onsave })
            onCancel()
        }
        const onSearch = ({ target: { value } }) => {
            let res = this.state.data.filter((val) => val.name.includes(value))
            this.setState({ data: res })
        }
        const onAdd = () => {
            this.setState({
                data: [
                    ...this.state.data,
                    {
                        id: this.state.data.length + 1,
                        name: this.state.Search
                    },
                ],
        
            })
        }
        let deleteUser = (id) => {
            let Users = this.state.data.filter((value, index) => value.id !== id)
            this.setState({ data: Users });
        }
        return (
            <div className="page">
                <div className="searchadd">
                    
                <input onChange={onSearch} type="text" placeholder="Search..." className="search"/>
                    <button
                       className="add" onClick={onSearch}>Search</button><br />

                    <input className="search" onChange={(e) => this.setState({ Search: e.target.value })} type="text" placeholder="Add to do..." />
                    <button className="add" onClick={onAdd}>Add</button>

                    </div>
                <div className="alldiv">
                    <div border='1'>
                        <div className="row rowtitle">
                            <div className="fixed2 ">ID</div>
                            <div>Name</div>
                            <div>Age</div>
                            <div>Adress</div>
                            <div>Status</div>
                            <div>Nicname</div>
                            <div>Year</div>
                            <div>Job</div>
                            <div className="fixed1">Edit</div>
                        </div>
                        <div className="data">
                            {
                                this.state.data.map((value) => (
                                    <div key={value.id}>
                                        {
                                            this.state.selected?.id === value.id ?
                                                <div className="row data-users">
                                                    <input onChange={(e) => this.setState({ selected: { ...this.state.selected, id: e.target.value } })} defaultValue={this.state.selected.id} type="text" disabled />
                                                    <input onChange={(e) => this.setState({ selected: { ...this.state.selected, name: e.target.value } })} defaultValue={this.state.selected.name} type="text" />
                                                    <input onChange={(e) => this.setState({ selected: { ...this.state.selected, age: e.target.value } })} defaultValue={this.state.selected.age} type="number" />
                                                    <input onChange={(e) => this.setState({ selected: { ...this.state.selected, Address: e.target.value } })} defaultValue={this.state.selected.Address} type="text" />
                                                    <input onChange={(e) => this.setState({ selected: { ...this.state.selected, status: e.target.value } })} defaultValue={this.state.selected.status} type="text" />
                                                    <input onChange={(e) => this.setState({ selected: { ...this.state.selected, nick: e.target.value } })} defaultValue={this.state.selected.nick} type="text" />
                                                    <input onChange={(e) => this.setState({ selected: { ...this.state.selected, year: e.target.value } })} defaultValue={this.state.selected.year} type="text" />
                                                    <input onChange={(e) => this.setState({ selected: { ...this.state.selected, job: e.target.value } })} defaultValue={this.state.selected.job} type="text" />
                                                    <div className="fixed1btns">
                                                        <div className="btnedit">
                                                            <button className="btns-edit btns-edit1" onClick={(e) => OnSave()}>save</button>
                                                            <button className="btns-edit btns-edit2" onClick={onCancel}>cancel</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                :
                                                <div className="row data-users">
                                                    <div className="fixed2 idlari">{value.id}</div>
                                                    <div>{value.name}</div>
                                                    <div>{value.age}</div>
                                                    <div>{value.Address}</div>
                                                    <div>{value.status}</div>
                                                    <div>{value.nick}</div>
                                                    <div>{value.universit}</div>
                                                    <div>{value.job}</div>
                                                    <div className="btns fixed1">
                                                        <div className="fixed3">
                                                        <button onClick={() => deleteUser(value.id)}>DElete</button>
                                                            <button onClick={(e) => onEdit(value)}>edit</button>
                                                        </div>
                                                    </div>
                                                </div>
                                        }
                                    </div>
                                ))
                            }
                        </div>
                        <tfoot>

                        </tfoot>
                    </div>
                </div>
            </div>
        )
    }
}
export default Crud2;