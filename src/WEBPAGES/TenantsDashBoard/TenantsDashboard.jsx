import React, { useContext, useEffect, useState } from "react";
import "./TenantsDashBoard.css";
import Userprofile from "../../COMPONENTS/UserProfilebread/Userprofile";
import { productContext } from "../../ReactHooksComponent/UsecontextHook";
import Herosection from "../../COMPONENTS/HerosectionComponent/Herosection";
import heroImg from "../../assets/HomeHerosection.webp";
import { Link } from "react-router-dom";
import BreadCrumb from "../../COMPONENTS/BreadcrumbsComponents/BreadCrumb";

const TenantsDashboard = () => {
  const {
    activeuser,
    tenantsavedProperty,
    listedproperty,
    properties,
    tenantsApplication,
    Applicationtabfunction,
    applicationtabinfo,
    Autologinfunc
  } = useContext(productContext);

  const [activeTab, setActiveTab] = useState("properties");
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      text: "Your application for Ocean View Apartment was approved!",
      date: "2 hours ago",
      read: false,
    },
    {
      id: 2,
      text: "Reminder: Rent payment due in 3 days",
      date: "1 day ago",
      read: true,
    },
  ]);
  console.log(activeuser)

    
  return (
    <>
      <Herosection
        heroContainer="OtherheroContainer"
        BigHeaderline="otherBigHeaderline"
        heroImg={heroImg}
        headline="Tenants Dashboard"
        searcharea="removeSearchbar"
      />
      <BreadCrumb/>
      <div className="dashboardcontainer tenant-dashboard">
        {/* Dashboard Header */}
        <header className="dashboardheader">
          <div className="container">
            <div className="headercontent">
              <h1>Welcome back, {activeuser.FName} {activeuser.LName}</h1>
              <div className="headeractions">
                <button className="btnnotification">
                  <i class="fa-solid fa-bell"></i>
                  {notifications.filter((n) => !n.read).length > 0 && (
                    <span className="notificationbadge">
                      {notifications.filter((n) => !n.read).length}
                    </span>
                  )}
                </button>
                <Userprofile />
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
                <nav className="sidebarnav">
                  <ul>
                    <li className={activeTab === "properties" ? "active" : ""}>
                      <button onClick={() => setActiveTab("properties")}>
                        <i className="icon-home"></i> Properties
                      </button>
                    </li>
                    <li
                      className={activeTab === "applications" ? "active" : ""}
                    >
                      <button onClick={() => setActiveTab("applications")}>
                        <i className="icon-document"></i> Applications
                      </button>
                    </li>
                    <li className={activeTab === "payments" ? "active" : ""}>
                      <button onClick={() => setActiveTab("payments")}>
                        <i className="icon-credit-card"></i> Payments
                      </button>
                    </li>
                    <li className={activeTab === "messages" ? "active" : ""}>
                      <button onClick={() => setActiveTab("messages")}>
                        <i className="icon-message"></i> Messages
                      </button>
                    </li>
                    <li className={activeTab === "settings" ? "active" : ""}>
                      <button onClick={() => setActiveTab("settings")}>
                        <i className="icon-settings"></i> Settings
                      </button>
                    </li>
                  </ul>
                </nav>

                {/* Help Section */}
                <div className="sidebarhelp">
                  <h3>Need Help?</h3>
                  <p>
                    Contact our support team for assistance with your account or
                    properties.
                  </p>
                  <button className="btn-help">Contact Support</button>
                </div>
              </aside>

              {/* Main Content Area */}
              <div className="dashboardcontent">
                {/* Dashboard Overview Cards */}
                {activeTab === "properties" && (
                  <>
                    <section className="dashboardsection">
                      <h2>Saved Properties</h2>
                      <div className="property-grid">
                        {properties.map((property) => {
                          if (tenantsavedProperty[property.id]) {
                            return (
                              <div className="propertycard" key={property.id}>
                                <div className="propertyimage">
                                  <img src={property.image} alt="" />
                                  <button className="btn-favorite active">
                                    <i className="fa-solid fa-heart"></i>
                                  </button>
                                </div>
                                <div className="tenantPropertyinfo">
                                  <div className="propertydetails">
                                    <h3>{property.title}</h3>
                                    <div className="propertymeta">
                                      <span>{property.bedroom} beds</span>
                                    </div>
                                    <div className="propertyprice">
                                      {property.price}
                                    </div>
                                    <div className="propertyactions">
                                      <Link
                                        to={`/Details/${property.id}`}
                                        className="CardLink"
                                      >
                                        <button className="btnsecondary">
                                          View Details
                                        </button>
                                      </Link>
                                      <button
                                        className="btnprimary"
                                        onClick={() =>
                                          Applicationtabfunction(property.id)
                                        }
                                      >
                                        Apply Now
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          }
                        })}
                      </div>
                    </section>

                    <section className="dashboardsection">
                      <h2>Recommended For You</h2>
                      <div className="propertygrid">
                        {/* Similar property cards would be rendered here */}
                        <div className="emptystate">
                          <p>
                            Complete your profile to get personalized
                            recommendations
                          </p>
                          <button className="btnoutline">Update Profile</button>
                        </div>
                      </div>
                    </section>
                  </>
                )}

                {activeTab === "applications" && (
                  <section className="dashboardsection">
                    <h2>Your Applications</h2>
                    <div className="applicationstable">
                      <table>
                        <thead>
                          <tr>
                            <th>Property</th>
                            <th>Date Applied</th>
                            <th>Status</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {applicationtabinfo.map((props) => (
                            <tr key={props.id}>
                              <td>{props.title}</td>
                              <td>{props.Date}</td>
                              <td>
                                <span>{props.status}</span>
                              </td>
                              <td>
                                 <Link to={`/Details/${props.id}`} className="CardLink"><button className="btnlink">View Details</button></Link>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </section>
                )}

                {activeTab === "payments" && (
                  <section className="dashboardsection">
                    <h2>Payment History</h2>
                    <div className="paymentoverview">
                      <div className="paymentcard">
                        <h3>Next Payment Due</h3>
                        <div className="paymentdue">
                          <span className="amount">$1,200</span>
                          <span className="date">Due June 1, 2023</span>
                        </div>
                        <button className="btnprimary">Pay Now</button>
                      </div>
                      <div className="paymentcard">
                        <h3>Payment History</h3>
                        <div className="paymentlist">
                          {/* Payment history items would be rendered here */}
                          <div className="paymentitem">
                            <span>May 1, 2023</span>
                            <span>$1,200</span>
                            <span className="statusbadge paid">Paid</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                )}

                {activeTab === "messages" && (
                  <section className="dashboardsection">
                    <h2>Messages</h2>
                    <div className="messagescontainer">
                      <div className="messagelist">
                        {/* Message previews would be rendered here */}
                        <div className="messagepreview unread">
                          <div className="sender">Property Manager</div>
                          <div className="subject">Lease Agreement Details</div>
                          <div className="preview">
                            Please review the attached lease agreement...
                          </div>
                          <div className="time">2 hours ago</div>
                        </div>
                      </div>
                      <div className="messagedetail">
                        <div className="emptystate">
                          <p>Select a message to view</p>
                        </div>
                      </div>
                    </div>
                  </section>
                )}

                {activeTab === "settings" && (
                  <section className="dashboardsection">
                    <h2>Account Settings</h2>
                    <div className="settingstabs">
                      <div className="settingsnav">
                        <button className="active">Profile</button>
                        <button>Notifications</button>
                        <button>Security</button>
                        <button>Preferences</button>
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
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`notificationitem ${
                        notification.read ? "" : "unread"
                      }`}
                    >
                      <p>{notification.text}</p>
                      <span className="notificationtime">
                        {notification.date}
                      </span>
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default TenantsDashboard;
