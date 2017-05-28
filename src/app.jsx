import React from 'react';
import '../styles/index.scss';
import { DropdownButton, MenuItem, Label, Table, Button, ButtonToolbar } from 'react-bootstrap';

export default class App extends React.Component {


  render() {

    return (
      <div>
				<ButtonToolbar>
					<Button bsSize="small" bsStyle="danger">Cancel</Button>
					<Button bsSize="small" bsStyle="primary">Save</Button>
				</ButtonToolbar>

				<div className="col-lg-12 no-padding">
					<section className="panel no-margin-bottom">
						<header className="panel-heading"> Static Table </header>
						<div className="panel-body">

							<div className="row text-small">

								<div className="col-sm-4 m-b-mini">
									<DropdownButton bsSize="small" bsStyle="default" title="Action">
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

        <h1>It Works!</h1>
        <p>This React project just works including <span className="redBg">module</span> local styles.</p>
        <p>Enjoy!</p>
      </div>
    )
  }
}
