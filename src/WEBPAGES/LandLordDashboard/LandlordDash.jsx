import React, { useContext, useState } from 'react'
import "./LandlordDashboard.css"
import Herosection from '../../COMPONENTS/HerosectionComponent/Herosection';
import BreadCrumb from '../../COMPONENTS/BreadcrumbsComponents/BreadCrumb';
import heroImg from "../../assets/HomeHerosection.webp";
import { productContext } from '../../ReactHooksComponent/UsecontextHook';
import Userprofile from '../../COMPONENTS/UserProfilebread/Userprofile';
import { Link, useNavigate } from 'react-router-dom';

const LandlordDash = () => {
  const{setUserdata,setactiveuser,activeuser,UserAuthenticationLogOut,userdata,listedproperty}=useContext(productContext)
     const [activeTab, setActiveTab] = useState('properties');
     const navigatebacktoLogin=useNavigate(null)

     function handleLogout(){
      UserAuthenticationLogOut()
      setactiveuser([])
      navigatebacktoLogin("/login")
     }

  const [notifications, setNotifications] = useState([
    { id: 1, text: 'New application for Downtown Loft', date: '1 hour ago', read: false },
    { id: 2, text: 'Rent payment received for Ocean View', date: '2 days ago', read: true }
  ]);

  const applications = [
    { id: 1, property: 'Downtown Loft', applicant: 'Sarah Johnson', date: 'May 18, 2023', status: 'Pending' },
    { id: 2, property: 'Ocean View', applicant: 'Michael Brown', date: 'May 15, 2023', status: 'Approved' }
  ];
  return (
    <>
          <Herosection
            heroContainer="OtherheroContainer"
            BigHeaderline="otherBigHeaderline"
            heroImg={heroImg}
            headline="Properties for Sale/Rent"
            searcharea="removeSearchbar"
          />
          <BreadCrumb/>
   <div className="dashboardcontainer landlorddashboard">
      {/* Dashboard Header */}
      <header className="dashboardheader">
        <div className="container">
          <div className="headercontent">
            <h1>Property Dashboard</h1>
            <div className="headeractions">
              <button className="btnnotification">
                <i class="fa-solid fa-bell"></i>
                {notifications.filter(n => !n.read).length > 0 && (
                  <span className="notification-badge">{notifications.filter(n => !n.read).length}</span>
                )}
              </button>
               <Link to={"/list-property"}>
               <button className="btnprimary">
                <i class="fa-solid fa-plus"></i> Add Property
              </button>
               </Link>
                <Userprofile
                />
            </div>
          </div>
        </div>
      </header>

      {/* Main Dashboard Content */}
      <main className="dashboardmain">
        <div className="container">
          <div className="dashboardlayout">
            {/* Sidebar Navigation */}
            <aside className="dashboardsidebar">
              <div className="performancesummary">
                <h3>Monthly Performance</h3>
                <div className="performancemetric">
                  <span className="metricvalue">{0}</span>
                  <span className="metriclabel">Total Income</span>
                </div>
                <div className="performancemetric">
                  <span className="metricvalue">{0}/{listedproperty.length}</span>
                  <span className="metriclabel">Occupied Units</span>
                </div>
                <div className="performancemetric">
                  <span className="metricvalue">3</span>
                  <span className="metriclabel">Pending Applications</span>
                </div>
              </div>

              <nav className="sidebarnav">
                <ul>
                  <li className={activeTab === 'properties' ? 'active' : ''}>
                    <button onClick={() => setActiveTab('properties')}>
                      <i className="iconhome"></i> Properties
                    </button>
                  </li>
                  <li className={activeTab === 'applications' ? 'active' : ''}>
                    <button onClick={() => setActiveTab('applications')}>
                      <i className="icondocument"></i> Applications
                    </button>
                  </li>
                  <li className={activeTab === 'tenants' ? 'active' : ''}>
                    <button onClick={() => setActiveTab('tenants')}>
                      <i className="iconusers"></i> Tenants
                    </button>
                  </li>
                  <li className={activeTab === 'payments' ? 'active' : ''}>
                    <button onClick={() => setActiveTab('payments')}>
                      <i className="iconcreditcard"></i> Payments
                    </button>
                  </li>
                  <li className={activeTab === 'maintenance' ? 'active' : ''}>
                    <button onClick={() => setActiveTab('maintenance')}>
                      <i className="icontool"></i> Maintenance
                    </button>
                  </li>
                  <li className={activeTab === 'reports' ? 'active' : ''}>
                    <button onClick={() => setActiveTab('reports')}>
                      <i className="iconchart"></i> Reports
                    </button>
                  </li>
                   <li className={activeTab === 'logout' ? 'active' : ''}>
                    <button onClick={handleLogout}>
                      <i className="iconchart"></i> Logout
                    </button>
                  </li>
                </ul>
              </nav>
            </aside>

            {/* Main Content Area */}
            <div className="dashboardcontent">
              {/* Quick Stats */}
              <div className="quickstats">
                <div className="statcard">
                  <div className="statvalue">{listedproperty.length}</div>
                  <div className="statlabel">Total Properties</div>
                </div>
                <div className="statcard">
                  <div className="statvalue">{0}</div>
                  <div className="statlabel">Monthly Income</div>
                </div>
                <div className="statcard">
                  <div className="statvalue">{0}</div>
                  <div className="statlabel">Vacant Units</div>
                </div>
                <div className="statcard">
                  <div className="statvalue">3</div>
                  <div className="statlabel">Maintenance Requests</div>
                </div>
              </div>

              {activeTab === 'properties' && (
                <section className="dashboardsection">
                  <div className="sectionheader">
                    <h2>Your Properties</h2>
                  </div>
                  <div className="propertylist">
                    {listedproperty.map(property => (
                      <div key={property.id} className="propertycard">
                        <div className="Landlordpropertyimage">
                          <img src={property.image} alt="" />
                        </div>
                        <div className="Landlordpropertyinfo">
                          <h3>{property.title}</h3>
                          <div className="propertystatus">
                            <span className="statusbadge">
                              property.status{}
                            </span>
                            <span className="propertyincome">property income : {0}</span>
                          </div>
                          <div className="propertyactions">
                            <Link to={`/Details/${property.id}`} className="CardLink"><button className="btnlink">View Details</button></Link>
                            <button className="btnsecondary">Edit</button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {activeTab === 'applications' && (
                <section className="dashboardsection">
                  <h2>Applications</h2>
                  <div className="applicationstabs">
                    <div className="tabsnav">
                      <button className="active">Pending (3)</button>
                      <button>Approved (2)</button>
                      <button>Rejected (1)</button>
                    </div>
                    <div className="applicationslist">
                      <table>
                        <thead>
                          <tr>
                            <th>Property</th>
                            <th>Applicant</th>
                            <th>Date Applied</th>
                            <th>Status</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {applications.map(app => (
                            <tr key={app.id}>
                              <td>{app.property}</td>
                              <td>{app.applicant}</td>
                              <td>{app.date}</td>
                              <td>
                                <span className={`statusbadge ${app.status.toLowerCase()}`}>
                                  {app.status}
                                </span>
                              </td>
                              <td>
                                <button className="btnlink">View</button>
                                {app.status === 'Pending' && (
                                  <>
                                    <button className="btnlink textsuccess">Approve</button>
                                    <button className="btnlink textdanger">Reject</button>
                                  </>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>
              )}

              {activeTab === 'tenants' && (
                <section className="dashboardsection">
                  <h2>Current Tenants</h2>
                  <div className="tenantslist">
                    {/* Tenant cards would be rendered here */}
                    <div className="tenantcard">
                      <div className="tenantavatar">
                        <img src="/tenantavatar.jpg" alt="Tenant" />
                      </div>
                      <div className="tenantinfo">
                        <h3>Sarah Johnson</h3>
                        <p>Downtown Loft</p>
                        <p>Lease ends: June 30, 2024</p>
                      </div>
                      <div className="tenantactions">
                        <button className="btnsecondary">Message</button>
                        <button className="btnlink">View Lease</button>
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {activeTab === 'payments' && (
                <section className="dashboardsection">
                  <h2>Rent Payments</h2>
                  <div className="paymentsoverview">
                    <div className="paymentschart">
                      {/* Chart would be rendered here */}
                      <div className="chartplaceholder"></div>
                    </div>
                    <div className="paymentslist">
                      <h3>Recent Payments</h3>
                      <table>
                        <thead>
                          <tr>
                            <th>Tenant</th>
                            <th>Property</th>
                            <th>Amount</th>
                            <th>Date</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Sarah Johnson</td>
                            <td>Downtown Loft</td>
                            <td>$1,200</td>
                            <td>May 1, 2023</td>
                            <td><span className="statusbadge paid">Paid</span></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>
              )}

              {activeTab === 'maintenance' && (
                <section className="dashboardsection">
                  <h2>Maintenance Requests</h2>
                  <div className="maintenancetabs">
                    <div className="tabsnav">
                      <button className="active">Open (3)</button>
                      <button>In Progress (2)</button>
                      <button>Completed (5)</button>
                    </div>
                    <div className="requestslist">
                      {/* Maintenance request cards would be rendered here */}
                      <div className="requestcard">
                        <div className="requestheader">
                          <h3>Kitchen sink leak</h3>
                          <span className="requestdate">May 18, 2023</span>
                        </div>
                        <div className="requestdetails">
                          <p><strong>Property:</strong> Downtown Loft</p>
                          <p><strong>Tenant:</strong> Sarah Johnson</p>
                          <p><strong>Priority:</strong> <span className="priorityhigh">High</span></p>
                        </div>
                        <div className="requestactions">
                          <button className="btnsecondary">Assign Vendor</button>
                          <button className="btnprimary">Mark In Progress</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {activeTab === 'reports' && (
                <section className="dashboardsection">
                  <h2>Reports & Analytics</h2>
                  <div className="reportsgrid">
                    <div className="reportcard">
                      <h3>Income Report</h3>
                      <div className="reportchart"></div>
                      <button className="btnlink">View Full Report</button>
                    </div>
                    <div className="reportcard">
                      <h3>Occupancy Rate</h3>
                      <div className="reportchart"></div>
                      <button className="btnlink">View Full Report</button>
                    </div>
                    <div className="reportcard">
                      <h3>Expense Breakdown</h3>
                      <div className="reportchart"></div>
                      <button className="btnlink">View Full Report</button>
                    </div>
                    <div className="reportcard">
                      <h3>Maintenance Costs</h3>
                      <div className="reportchart"></div>
                      <button className="btnlink">View Full Report</button>
                    </div>
                  </div>
                </section>
              )}
            </div>

            {/* Notifications Panel */}
            <aside className="dashboardnotifications">
              <div className="notificationsheader">
                <h3>Notifications</h3>
                <button className="btnlink">Mark all as read</button>
              </div>
              <div className="notificationslist">
                {notifications.map(notification => (
                  <div key={notification.id} className={`notificationitem ${notification.read ? '' : 'unread'}`}>
                    <p>{notification.text}</p>
                    <span className="notificationtime">{notification.date}</span>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
    </>
  )
}

export default LandlordDash
