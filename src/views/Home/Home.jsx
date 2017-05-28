import React from 'react';
import Layout from '../../components/Layout';
import { Form, FormGroup, FormControl, ControlLabel, Checkbox, Col, DropdownButton, MenuItem, Label, Table, Button, ButtonToolbar } from 'react-bootstrap';

class HomePage extends React.Component {

  render() {
    return (
      <Layout location="location">
				<div>
					<div className="clearfix"> <h4><i className="fa fa-edit"></i>Form</h4> </div>

					<div className="row">
						<div className="col-sm-6">
							<section className="panel">
								<div className="panel-body">

									<Form horizontal>
										<FormGroup controlId="formHorizontalEmail" className="bg-control">
											<Col className={ControlLabel} sm={2}>
												Email
											</Col>
											<Col sm={10}>
												<FormControl className="bg-focus" type="email" placeholder="Email" />
											</Col>
										</FormGroup>

										<FormGroup controlId="formHorizontalPassword">
											<Col className={ControlLabel} sm={2}>
												Password
											</Col>
											<Col sm={10}>
												<FormControl type="password" placeholder="Password" />
											</Col>
										</FormGroup>

										<FormGroup>
											<Col smOffset={2} sm={10}>
												<Checkbox>Remember me</Checkbox>
											</Col>
										</FormGroup>

										<FormGroup>
											<Col smOffset={2} sm={10}>
												<Button className="btn-white" type="submit">
													Sign in
												</Button>
											</Col>
										</FormGroup>

										<ButtonToolbar>
											<Button className="btn-white">Cancel</Button>
											<Button className="margin-left" bsStyle="primary">Save</Button>
										</ButtonToolbar>

									</Form>

								</div>
							</section>
						</div>
					</div>

					<div className="row">
						<div className="col-lg-12">
							<section className="panel no-margin-bottom">
								<header className="panel-heading"> Static Table </header>
								<div className="panel-body">

									<div className="row text-small">

										<div className="col-sm-4 m-b-mini">
											<DropdownButton bsSize="small" bsStyle="default" title="Action" id="dropDownId">
												<MenuItem eventKey="1">Any Action</MenuItem>
												<MenuItem eventKey="2">Another action</MenuItem>
												<MenuItem eventKey="3" active>Active Item</MenuItem>
												<MenuItem divider />
												<MenuItem eventKey="4">Separated link</MenuItem>
											</DropdownButton>
										</div>

										<div className="col-sm-4 m-b-mini">
											<div className="input-group">
												<input type="text" className="input-sm form-control" placeholder="Search 1"/>
												<span className="input-group-btn">
												<Button className="btn-white" bsSize="small">Go!</Button>
											</span>
											</div>
										</div>

										<div className="col-sm-4">
											<div className="input-group">
												<input type="text" className="input-sm form-control" placeholder="Search 2"/>
												<span className="input-group-btn">
												<Button className="btn-white" bsSize="small">Go!</Button>
											</span>
											</div>
										</div>

									</div>

								</div>
							</section>

							<Table striped bordered condensed hover>
								<thead>
								<tr>
									<th>#</th>
									<th>First Name</th>
									<th>Last Name</th>
									<th>Username</th>
									<th></th>
								</tr>
								</thead>
								<tbody>
								<tr>
									<td>1</td>
									<td>Mark</td>
									<td>Otto</td>
									<td>@mdo</td>
									<td>
										<Label bsStyle="success">Success</Label>
									</td>
								</tr>
								<tr>
									<td>2</td>
									<td>Jacob</td>
									<td>Thornton</td>
									<td>@fat</td>
									<td>
										<Label bsStyle="danger">Danger</Label>
									</td>
								</tr>
								<tr>
									<td>3</td>
									<td colSpan="2">Larry the Bird</td>
									<td>@twitter</td>
									<td>
										<Label bsStyle="danger">Danger</Label>
									</td>
								</tr>
								</tbody>
							</Table>
						</div>
					</div>

				</div>
      </Layout>
    );
  }

}

export default HomePage
