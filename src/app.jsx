import React from 'react';
import '../assets/styles/index.scss';
import { Form, FormGroup, FormControl, ControlLabel, Checkbox, Col, DropdownButton, MenuItem, Label, Table, Button, ButtonToolbar } from 'react-bootstrap';

export default class App extends React.Component {


  render() {

    return (
      <div>

				<header id="header" className="navbar">
					<ul className="nav navbar-nav navbar-avatar pull-right">
						<li className="dropdown">
							<a href="#" className="dropdown-toggle" data-toggle="dropdown">
								<span className="hidden-xs-only">Mika Sokeil</span>
								<span className="thumb-small avatar inline">
									<img src="images/avatar.jpg" alt="Mika Sokeil" className="img-circle"/>
								</span>
								<b className="caret hidden-xs-only"></b>
							</a>
							<ul className="dropdown-menu pull-right">
								<li><a href="#">Settings</a></li>
								<li><a href="#">Profile</a></li>
								<li><a href="#"><span className="badge bg-danger pull-right">3</span>Notifications</a></li>
								<li className="divider"></li>
								<li><a href="docs.html">Help</a></li>
								<li><a href="signin.html">Logout</a></li>
							</ul>
						</li>
					</ul>
					<a className="navbar-brand" href="#">first</a> <button type="button" className="btn btn-link pull-left nav-toggle visible-xs" data-toggle="class:slide-nav slide-nav-left" data-target="body"> <i className="fa fa-bars fa-lg text-default"></i> </button>
					<ul className="nav navbar-nav hidden-xs">
						<li>
							<div className="m-t m-b-small" id="panel-notifications">
								<a href="#" className="dropdown-toggle" data-toggle="dropdown">
									<i className="fa fa-comment-o fa-fw fa-lg text-default"></i>
									<b className="badge badge-notes bg-danger count-n" style={{display: 'block'}}>5</b>
								</a>
								<section className="dropdown-menu m-l-small m-t-mini">
									<section className="panel panel-large arrow arrow-top">
										<header className="panel-heading bg-white"><span className="h5"><strong>You have <span className="count-n" style={{display: 'inline'}}>5</span> notifications</strong></span></header>
										<div className="list-group">
											<a href="timeline.html" className="media list-group-item" style={{display: 'block'}}>
												<span className="pull-left thumb-small">
													<i className="fa fa-clock-o fa-2x text-default"></i>
												</span>
												<span className="media-body block m-b-none">Added the timeline, view it here.<br/>
													<small className="text-muted">1 minute ago</small>
												</span>
											</a>
											<a href="calendar.html" className="media list-group-item" style={{display: 'block'}}>
												<span className="pull-left thumb-small">
													<i className="fa fa-calendar fa-2x text-default"></i>
												</span>
												<span className="media-body block m-b-none">Added the calendar, Get it.<br/>
													<small className="text-muted">10 July 13</small>
												</span>
											</a>
											<a href="mail.html" className="media list-group-item" style={{display: 'block'}}>
												<span className="pull-left thumb-small">
													<i className="fa fa-envelope-o fa-2x text-default"></i>
												</span>
												<span className="media-body block m-b-none">Added the mail app, Check it out.<br/>
													<small className="text-muted">2 July 13</small></span> </a>
											<a href="#" className="media list-group-item">
												<span className="pull-left thumb-small">
													<img src="images/avatar.jpg" alt="John said"/> className="img-circle"></span> <span className="media-body block m-b-none"> Moved to Bootstrap 3.0<br/> <small className="text-muted">23 June 13</small> </span> </a> <a href="#" className="media list-group-item"> <span className="media-body block m-b-none"> first v.1 (Bootstrap 2.3 based) released<br/> <small className="text-muted">19 June 13</small> </span> </a> </div>
										<footer className="panel-footer text-small"> <a href="#" className="pull-right"><i className="fa fa-cog"></i></a> <a href="#">See all the notifications</a> </footer>
									</section>
								</section>
							</div>
						</li>
						<li>
							<div className="m-t-small"><a className="btn btn-sm btn-info" data-toggle="modal" href="#modal"><i className="fa fa-fw fa-plus"></i> POST</a></div>
						</li>
					</ul>
				</header>

				<div className="clearfix"> <h4><i className="fa fa-edit"></i>Form</h4> </div>

				<div className="row">
					<div className="col-sm-6">
						<section className="panel">
							<div className="panel-body">

								<Form horizontal>
									<FormGroup controlId="formHorizontalEmail" className="bg-control">
										<Col componentclassName={ControlLabel} sm={2}>
											Email
										</Col>
										<Col sm={10}>
											<FormControl className="bg-focus" type="email" placeholder="Email" />
										</Col>
									</FormGroup>

									<FormGroup controlId="formHorizontalPassword">
										<Col componentclassName={ControlLabel} sm={2}>
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
				</div>

				<h1>It Works!</h1>
        <p>This React project just works including <span className="redBg">module</span> local styles.</p>
        <p>Enjoy!</p>

				<footer id="footer">
					<div className="text-center padder clearfix">
						<p>
							<small>© Finance 2017</small>
							<br/><br/>
							<a href="#" className="btn btn-xs btn-circle btn-twitter">
								<i className="fa fa-twitter"></i>
							</a>
							<a href="#" className="btn btn-xs btn-circle btn-facebook">
								<i className="fa fa-facebook"></i>
							</a>
							<a href="#" className="btn btn-xs btn-circle btn-gplus">
								<i className="fa fa-google-plus"></i>
							</a>
						</p>
					</div>
				</footer>

      </div>
    )
  }
}
