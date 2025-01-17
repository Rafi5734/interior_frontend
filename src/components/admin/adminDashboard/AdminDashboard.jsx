import React from "react";
import { Card, CardBody } from "@nextui-org/card";
import { Link } from "react-router-dom";

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
                <Link to="/admin/create-project">
                  <p className="text-center text-2xl font-semibold inter">
                    Create a project
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
