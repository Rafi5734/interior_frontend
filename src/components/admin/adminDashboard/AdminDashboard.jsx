import React from "react";
import { Card, CardBody } from "@nextui-org/card";
import { Link } from "react-router-dom";
import { Badge } from "@nextui-org/react";

export default function AdminDashboard() {
  return (
    <div className="bg-[#25373b] text-white">
      <div className="pt-36 z-30">
        <p className="text-center text-5xl mt-8 pb-10 font-bold inter">
          Welcome to Admin Dashboard
        </p>
        <div className="container mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
          <div>
            <Card className="bg-[#a89687] text-white inter">
              <CardBody>
                <Link to="/admin/create-project">
                  <p className="text-center text-2xl font-semibold inter">
                    Create a project
                  </p>
                </Link>
              </CardBody>
            </Card>
          </div>
          <div>
            <Card className="bg-[#a89687] text-white inter">
              <CardBody>
                <Link to="/admin/slider-controll">
                  <p className="text-center text-2xl font-semibold inter">
                    Change slider images
                  </p>
                </Link>
              </CardBody>
            </Card>
          </div>
          <div>
            <Card className="bg-[#a89687] text-white inter">
              <CardBody>
                <Link to="/admin/projects-slider-controll">
                  <p className="text-center text-2xl font-semibold inter">
                    Change projects slider image
                  </p>
                </Link>
              </CardBody>
            </Card>
          </div>
          <div>
            <Card className="bg-[#a89687] text-white inter">
              <CardBody>
                <Link to="/admin/services">
                  <p className="text-center text-2xl font-semibold inter">
                    Customize services
                  </p>
                </Link>
              </CardBody>
            </Card>
          </div>
          <div>
            <Card className="bg-[#a89687] text-white inter">
              <Badge color="danger" content="99+" shape="circle">
                <CardBody>
                  <Link to="/admin/all-message">
                    <p className="text-center text-2xl font-semibold inter">
                      See all messages
                    </p>
                  </Link>
                </CardBody>
              </Badge>
            </Card>
          </div>
          <div>
            <Card className="bg-[#a89687] text-white inter">
              <CardBody>
                <Link to="/admin/footer">
                  <p className="text-center text-2xl font-semibold inter">
                    Footer control
                  </p>
                </Link>
              </CardBody>
            </Card>
          </div>
          <div>
            <Card className="bg-[#a89687] text-white inter">
              <CardBody>
                <Link to="/admin/navbar">
                  <p className="text-center text-2xl font-semibold inter">
                    Navbar Logo Control
                  </p>
                </Link>
              </CardBody>
            </Card>
          </div>
          <div>
            <Card className="bg-[#a89687] text-white inter">
              <CardBody>
                <Link to="/admin/change-contact-info">
                  <p className="text-center text-2xl font-semibold inter">
                    Change Contact Info
                  </p>
                </Link>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
