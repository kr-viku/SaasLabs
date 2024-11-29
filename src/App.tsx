import React, { useState, useEffect } from "react";
import Table from "./components/Table";
import Pagination from "./components/Pagination";
import { Project } from "./types";
import { styled } from "styled-components";

const App: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 5;

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json"
    )
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

  // Pagination logic
  const indexOfLastProject = currentPage * itemsPerPage;
  const indexOfFirstProject = indexOfLastProject - itemsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const TableTitle = styled.h2`
    text-align: center;
    margin-bottom: 20px;
    font-size: 24px;
    color: #333;
  `;

  return (
    <div className="app-container">
      <TableTitle>Projects Funding Overview</TableTitle>
      <Table projects={currentProjects} />
      <Pagination
        currentPage={currentPage}
        totalItems={projects.length}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default App;
