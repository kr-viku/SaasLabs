import React, { useState, useEffect } from "react";
import { Project } from "./types";
import { Table, TableTitle } from "./components/Table";
import { Pagination } from "./components/Pagination";
import { fetchProjects } from "./api-client";

const App: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProjects();
        setProjects(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
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
