import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { accountTabs } from "../data/OthersPageData/OthersPageData";
import { useLocation, useNavigate } from "react-router-dom";
import AccountProfileTab from "./AccountProfileTab";
import AccountDetailsTab from "./AccountDetailsTab";
import AccountMyPropertyTab from "./AccountMyPropertyTab";
import AccountAddPropertyTab from "./AccountAddPropertyTab";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import Logo from "../common/Logo";

const AccountSection = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No token found");
        }

        const response = await axios.get(
          `${import.meta.env.VITE_REACT_APP_API_BASE_URL}/api/auth/profile`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.data.role === "admin") {
          setIsAdmin(true);
        } else {
          navigate("/login");
        }
      } catch (error) {
        toast.error("Access denied. Admins only.");
        navigate("/login");
      }
    };

    checkAdmin();
  }, [navigate]);

  const notify = () =>
    toast.success("You have been logged out", {
      theme: "colored",
    });

  const handleLogout = () => {
    localStorage.removeItem("token");
    notify();
    setTimeout(() => {
      navigate("/login");
    }, 1500);
  };

  if (!isAdmin) {
    return (
      <div className="loading-logo-container">
        <Logo />
        <style>
          {`
              .loading-logo-container {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
              }
            `}
        </style>
      </div>
    );
  }

  return (
    <>
      <ToastContainer />
      <section className="account padding-y-120">
        <div className="container container-two">
          <Tabs>
            <div className="row gy-4">
              <div className="col-xl-3 col-lg-4">
                <div className="account-sidebar search-sidebar">
                  <TabList className="nav side-tab flex-column nav-pills me-3 ">
                    {accountTabs.map((accountTab, accountTabIndex) => {
                      return (
                        <Tab className={"nav-link"} key={accountTabIndex}>
                          <span className="icon">{accountTab.icon}</span>
                          {accountTab.text}
                        </Tab>
                      );
                    })}
                    <button
                      type="button"
                      className="nav-link"
                      onClick={handleLogout}
                    >
                      <span className="icon">
                        {" "}
                        <i className="fas fa-sign-out-alt"></i>
                      </span>
                      Logout
                    </button>
                  </TabList>
                </div>
              </div>

              <div className="col-xl-9 col-lg-8">
                <TabPanel>
                  <AccountProfileTab />
                </TabPanel>

                <TabPanel>
                  <AccountDetailsTab />
                </TabPanel>
                <TabPanel>
                  <AccountMyPropertyTab />
                </TabPanel>
                <TabPanel>
                  <AccountAddPropertyTab />
                </TabPanel>
              </div>
            </div>
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default AccountSection;
