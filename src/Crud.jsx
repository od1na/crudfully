import React, { Component } from "react";

class Crud extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {
                    id: 1,
                    name: 'Odina'
                    
                },
                {
                    id: 2,
                    name: 'Komila'
                },
                {
                    id: 3,
                    name: 'Nigina'
                },
                
            ],
            selected:""
        }
    };
    render() {
        let OnUpdate = (selected) => {
            this.setState({ selected })
        }
        let OnUpdateCancel = () => {
            this.setState({ selected: null })
        }
        let onChangeValue = (value) => {
            this.setState((state) => { return { selected: { ...state.selected, name: value } } })
        }
        let OnUpdateSave = () => {
            let save = this.state.data.map(value => value.id == this.state.selected.id ? value = this.state.selected : value)
            this.setState({ data: save, selected: null })
            console.log(this.state.selected.name);
        }
        let deleteUser = (id) => {
            let Users = this.state.data.filter((value, index) => value.id !== id)
            this.setState({ data: Users });

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
            let onEdit = () => {
                this.setState({selected})
            }
            let onCancel = () => {
                this.setState({selected:null})
            }
            let OnSave = () => {
                let onsave = this.state.data.map((value) => value.id === this.state.selected)
                this.setState({ data: onsave })
                onCancel()
            }


            return (
                <div>
                    <input onChange={onSearch} type="text" placeholder="Search..." />
                    <button onClick={onSearch}>Search</button><br />
                    <input onChange={(e) => this.setState({ Search: e.target.value })} type="text" placeholder="Add to do..." />
                    <button onClick={onAdd}>Add</button>
                
                    {this.state.selected?.id === value.id}?
                    <div>
                        <input onChange={(e) => this.setState({ selected: { ...this.state.selected, id: e.target.value } })} type="text" />
                        <input onChange={(e)=> this.setState({selected:{...this.state.selected,name:e.target.value}})} type="text" />
                        <div>
                            <button onClick={(e) => OnSave()}>Save</button>
                            <button onClick={(e) => onCancel()}>Cancel</button>
               </div>
                    </div>
                    :
                    <div>
                        <div>{value.id}</div>
                        <div>{value.name}</div>
                        <div>
                            <button onClick={(e)=> onEdit(value) }></button>
                        </div>
                </div>
                
                
                    {this.state.data.map((value, index) => value.name.toLowerCase().includes(this.state.searchingText.toLowerCase()) && (
                        <div key={value.id} className="user">
                            <div className="userid">
                                {index + 1}
                            </div>
                            <div className="username">
                                {this.state.selected?.id == value.id ?
                                    <input type="text" onChange={(e) => onChangeValue(e.target.value)} value={this.state.selected.name} />
                                    : value.name
                                }
                            </div>
                            <div className="user-controls">
                                {this.state.selected?.id == value.id ?
                                    <>
                                        <button onClick={OnUpdateSave}>Save</button>
                                        <button onClick={OnUpdateCancel}>Cancel</button>
                                    </>
                                    :
                                    <>
                                        <button onClick={() => deleteUser(value.id)}>Delete</button>
                                        <button onClick={() => OnUpdate(value)}>Edit</button>
                                    </>
                                }
                            </div>
                        </div>))
                        
                    }
                    
                 
        
                </div>
            
            )
        }
    }
}

export default Crud