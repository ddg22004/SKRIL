// Redesigned Dashboard component with dynamic profile bubbles
import React from "react";
import { Link } from "react-router-dom";

const Dashboard = ({ projects }) => {
return (
    <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Add Project Card */}
        <Link to="/addproject">
            <div
            style={{
                width: 219,
                height: 131.4,
                background: "rgba(72.66, 69.51, 69.51, 0.40)",
                boxShadow: "0px 0px 7px 6px rgba(49.66, 52.28, 50.97, 0.25)",
                borderRadius: 7,
                position: "relative",
                transition: "box-shadow 0.3s ease-in-out",
            }}
            >
            <div
                style={{
                position: "absolute",
                top: "31.54px",
                left: "91px",
                fontSize: 40,
                fontFamily: "Playpen Sans",
                fontWeight: 700,
                color: "#B5B5B5",
                textShadow: "0px 0px 6px rgba(131, 130, 130, 0.30)",
                }}
            >
                +
            </div>
            </div>
        </Link>

        {/* Project Cards */}
        {projects.map((project, index) => (
            <Link to={`/project/${project.id}`} key={index}>
            <div
                style={{
                width: 220,
                height: 132,
                position: "relative",
                background: "rgba(72.66, 69.51, 69.51, 0.25)",
                borderRadius: 7,
                transition: "box-shadow 0.3s ease-in-out",
                }}
                onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0px 0px 7px 6px rgba(49.66, 52.28, 50.97, 0.25)";
                }}
                onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                }}
            >
              {/* Project name */}
                <div
                    style={{
                        position: "absolute",
                        top: 7,
                        left: "50%",
                        transform: "translateX(-50%)",
                        fontSize: 20,
                        fontWeight: 700,
                        color: "#DCDCDC",
                        fontFamily: "Poppins",
                    }}
                >
                {project.name || "Project Name"}
                </div>

              {/* Created Date */}
                <div
                style={{
                    position: "absolute",
                    top: 100,
                    left: 76,
                    fontSize: 10,
                    fontWeight: 500,
                    color: "#918F8F",
                    fontFamily: "Poppins",
                }}
                >
                Created: {new Date(project.created_at).toLocaleDateString()}
                </div>

              {/* Dynamic Contributor Bubbles */}
                {[...(project.content_writers || [])].slice(0, 3).map((writer, i) => (
                <div
                    key={`writer-${i}`}
                    style={{
                    position: "absolute",
                    top: 44 + i * 4,
                    left: 54 - i * 20,
                    width: 44 - i * 8,
                    height: 44 - i * 8,
                    borderRadius: "50%",
                    background: `url(${writer.avatar}) center/cover`,
                    boxShadow: "0px 0px 6px 1px #1A1A1A",
                    zIndex: 1 - i,
                    }}
                ></div>
                ))}

              {/* Creator bubble */}
                <div
                style={{
                    position: "absolute",
                    top: 40,
                    left: 84,
                    width: 52,
                    height: 52,
                    borderRadius: "50%",
                    background: `url(${project.creator_avatar}) center/cover`,
                    boxShadow: "0px 0px 10px 3px #585A59",
                    zIndex: 2,
                }}
                ></div>

                {[...(project.editors || [])].slice(0, 3).map((editor, i) => (
                <div
                    key={`editor-${i}`}
                    style={{
                    position: "absolute",
                    top: 44 + i * 4,
                    left: 121 + i * 20,
                    width: 44 - i * 8,
                    height: 44 - i * 8,
                    borderRadius: "50%",
                    background: `url(${editor.avatar}) center/cover`,
                    boxShadow: "0px 0px 6px 1px #1A1A1A",
                    zIndex: 1 - i,
                    }}
                ></div>
                ))}

              {/* Green dot if project is active */}
                {new Date(project.deadline) > new Date() && (
                <div
                    style={{
                    position: "absolute",
                    top: 6,
                    left: 206,
                    width: 7,
                    height: 7,
                    background: "#289E24",
                    boxShadow: "0px 0px 4px 2px rgba(18.41, 94.78, 12.95, 0.78)",
                    borderRadius: "50%",
                    animation: 'breathe 1.5s ease-in-out infinite',
                    }}
                ></div>
                )}
            </div>
            </Link>
        ))}
        </div>
    </div>
    );
};

export default Dashboard;