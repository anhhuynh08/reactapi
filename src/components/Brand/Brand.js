import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
class Brand extends Component {
    state = {
        brand: [],
        loading: true,
    }
    async componentDidMount() {
        const res = await axios.get('http://localhost:8000/api/brand');
        // console.log(res);
        if (res.data.status === 200) {
            this.setState({
                brand: res.data.brand,
                loading: false,
            })
        }
    }
    deleteBrand = async (e, id) => {
        const thisClickedFunda = e.currentTarget;
        thisClickedFunda.innerText ="Deleting";
        const res = await axios.delete(`http://localhost:8000/api/delete-brand/${id}`);
        if(res.data.status === 200){
            thisClickedFunda.closest("tr").remove();
            console.log(res.data.message);
            swal({
                title: "Deleted !",
                text: res.data.message,
                icon: "success",
                button: "OK!",
              });
        }
        else
        {
            console.log('lỗi deleteBrand');
        }

    }
    render() {
        var brand_HTMLTABLE = "";
        if (this.state.loading) {
            brand_HTMLTABLE = <tr><td colSpan="5"><h2>Loading....</h2></td></tr>
        }
        else {
            brand_HTMLTABLE =
                this.state.brand.map((item) => {
                    return (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name_brand}</td>
                            <td>{item.desc_brand}</td>
                            <td>
                                <Link to={`edit-brand/${item.id}`} className="btn btn-warning btn-sm">Edit</Link>
                                
                            </td>
                            <td>
                                <button type='button' onClick={(e) => this.deleteBrand(e, item.id)} className="btn btn-danger btn-sm">Delete</button>
                                {/* <button className='btn btn-danger btn-sm' type='button' onClick= {(e)=>this.deleteBrand(e , item.id)}>Delete</button> */}
                            </td>
                        </tr>
                    );
                });
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="">Brand data
                            <Link to={'/'} className="btn btn-danger btn-sm float-end m-1 ">Home</Link>
                            <Link to={`add-brand/`} className="btn btn-success btn-sm float-end m-1">Add brand</Link>
                            </h4>
                        </div>
                        <div className="card-body">
                            <table className="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Brand name</th>
                                        <th>Description</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {brand_HTMLTABLE}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Brand;